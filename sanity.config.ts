import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
   projectId: 'y7b9sqm4',
   dataset: 'production',
   title: 'Michael Gary Tattoos',
   apiVersion: '2023-05-17',
   basePath: '/admin',
   plugins: [deskTool()]
})

export default config;