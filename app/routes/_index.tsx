import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { retrieveNotionDatabase } from "~/utils/notion.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const pages = await retrieveNotionDatabase(process.env.NOTION_DB || "");
  return { pages };
}

export default function Index() {
  const { pages } = useLoaderData<typeof loader>();
  console.log(pages);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">REMIX ON RENDER</div>
    </div>
  );
}
