import { Client } from "@notionhq/client";

export const notion = new Client({ auth: process?.env?.NOTION_API_KEY });

export const retrieveNotionDatabase = async (databaseId: string) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Tags",
      multi_select: {
        contains: "obat",
      },
    },
  });

  return response;
};
