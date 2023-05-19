import { Project } from "@/types/Project";
import { Blog } from "@/types/Blog";
import { createClient, groq } from "next-sanity";

const clientConfig = {
   projectId: 'y7b9sqm4',
   dataset: 'production',
   apiVersion: '2023-05-17',
};


export async function getProjects(): Promise<Project[]> {
   return createClient(clientConfig).fetch(
      groq`*[_type=="project"]{
         _id,
         _createdAt,
         name,
         "slug": slug.current,
         "image": image.asset->url,
         content
      }`
   )
};

export async function getBlogs(): Promise<Blog[]> {
   return createClient(clientConfig).fetch(
      groq`*[_type=="blog"]{
         _id,
         _createdAt,
         name,
         "slug": slug.current,
         "image": image.asset->url,
         content
      }`
   )
};

export async function getBlog(slug: string): Promise<Blog> {
   return createClient(clientConfig).fetch(
      groq`*[_type=="blog" && slug.current == $slug][0]{
         _id,
         _createdAt,
         name,
         "slug": slug.current,
         "image": image.asset->url,
         content
      }`,
      { slug }
   )
};