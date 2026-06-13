import { createClient } from "microcms-js-sdk";

function createClientSafe() {
  try {
    return createClient({
      serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
      apiKey: process.env.MICROCMS_API_KEY!,
    });
  } catch {
    return null;
  }
}

export const client = createClientSafe();

// microCMSコンテンツの型定義
export type Category = {
  id: string;
  name: string;
};

export type Column = {
  id: string;
  title: string;
  content: string;
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  };
  category?: Category[];
  publishedAt: string;
  updatedAt: string;
};

export type ColumnList = {
  contents: Column[];
  totalCount: number;
  offset: number;
  limit: number;
};
