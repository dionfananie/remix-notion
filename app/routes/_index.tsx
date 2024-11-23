import type { MetaFunction } from "@remix-run/node";
import About from "~/components/About";
import Navigation from "~/components/Navigation";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// export async function loader() {
//   const pages = await retrieveNotionDatabase(process.env.NOTION_DB || "");
//   return { pages };
// }

export default function Index() {
  // const { pages } = useLoaderData<typeof loader>();
  // console.log(pages);

  return (
    <div>
      <Navigation />
      <About />
    </div>
  );
}
