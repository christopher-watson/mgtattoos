import { Project } from "@/types/Project";
import { Blog } from "@/types/Blog";
import { Page } from "@/types/Page";
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

export async function getPages(): Promise<Page[]> {
   return createClient(clientConfig).fetch(
      groq`*[_type=="page"]{
         _id,
         _createdAt,
         name,
         "slug": slug.current,
      }`
   )
};

export async function getPage(slug: string): Promise<Blog> {
   return createClient(clientConfig).fetch(
      groq`*[_type=="page" && slug.current == $slug][0]{
         _id,
         _createdAt,
         name,
         "slug": slug.current,
         content
      }`,
      { slug }
   )
};