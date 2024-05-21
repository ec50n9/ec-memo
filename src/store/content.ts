import dayjs from "dayjs";
import { defineStore } from "pinia";
import { uid } from "radash";

export type ContentTag = {
  id: string;
  name: string;
  icon: string;
  createdAt: number;
};

export type Content = {
  id: string;
  content: string;
  tags: ContentTag[];
  createdAt: number;
  editedAt: number;
};

const generateId = () => uid(20, "*");

const parseTagsFromContent = (content: string): ContentTag[] => {
  const tags = content.match(/#(\w+(?:\/\w+)*)/g);
  console.log("Tags found:", tags);

  return (
    tags?.map((tag) => ({
      id: generateId(),
      name: tag.slice(1),
      icon: "tag",
      createdAt: dayjs().valueOf(),
    })) ?? []
  );
};

export const useContentStore = defineStore("content", {
  state: () => ({
    contentArr: <Content[]>[],
  }),
  actions: {
    addContent(content: string) {
      console.log("Adding content:", content);
      const now = dayjs().valueOf();

      const newContent: Content = {
        id: generateId(),
        content,
        tags: parseTagsFromContent(content),
        createdAt: now,
        editedAt: now,
      };

      this.contentArr.push(newContent);
      console.log("Content added:", newContent);
      console.log("Content array:", this.contentArr);
    },
  },
});
