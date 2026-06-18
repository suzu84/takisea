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

export type RelatedArticle = {
  id: string;
  title: string;
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  };
  mv?: {
    url: string;
    width: number;
    height: number;
  };
};

export type Block = {
  fieldId?: string;
  richText?: string;
  relatedArticle?: RelatedArticle;
};

export type Column = {
  id: string;
  title: string;
  content?: string;
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  };
  mv?: {
    url: string;
    width: number;
    height: number;
  };
  description?: string;
  readTxt?: string;
  category1?: Category[];
  blocks?: Block[];
  add?: Block[];
  publishedAt?: string;
  updatedAt: string;
};

export type ColumnList = {
  contents: Column[];
  totalCount: number;
  offset: number;
  limit: number;
};

export async function getCategories(): Promise<Category[]> {
  if (!client) return [];
  try {
    const data = await client.getList<Category>({
      endpoint: "category",
      queries: { limit: 100 },
    });
    return data.contents;
  } catch {
    return [];
  }
}
