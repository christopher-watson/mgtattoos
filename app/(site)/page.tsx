import { getPages } from '@/sanity/sanity-utils';
import Image from 'next/image'

export default async function Home() {
   const pages = await getPages();
   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         mgtattoos
         {pages.map((page) => (
               <div key={page._id}>{page.name}</div>
            ))}
      </main>
   )
}
