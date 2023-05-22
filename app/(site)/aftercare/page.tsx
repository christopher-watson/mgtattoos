import { getPage } from "@/sanity/sanity-utils";

export default async function Aftercare() {
   const page = await getPage('aftercare');
   console.log('aftercare', page);
   return (
      <div>
         <h1>{page.name}</h1>
      </div>
   )
}