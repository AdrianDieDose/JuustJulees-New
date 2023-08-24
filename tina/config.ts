import { defineSchema, defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "92222816-9a55-40cb-b4ca-c97a5e35f754", // Get this from tina.io
  token: "b1cfd84069ba2783a68c7992d84b27cf1963bd13", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
  collections: [
    {
      name: 'categories',
      label: 'Categories',
      path: 'content/categories',
      format: 'json',
      fields: [
        {
          type: 'string',
          label: 'Name',
          name: 'name',
          required: true,
        },
        {
          type: 'string',
          label: 'Emoji',
          name: 'emoji',
          required: false,
        },
        {
          type: 'image',
          label: 'Image',
          name: 'image',
          required: false,
        },
      ],
    },
    {
      name: 'authors',
      label: 'Authors',
      path: 'content/authors',
      format: 'json',
      fields: [
        {
          type: 'string',
          label: 'Name',
          name: 'name',
          required: true,
        },
        {
          type: 'string',
          label: 'URL',
          name: 'url',
          required: false,
        },
        {
          type: 'image',
          label: 'Picture',
          name: 'picture',
          required: false,
        },
      ],
    },
    {
      label: 'Blog Posts',
      name: 'posts',
      path: 'content/posts',
      format: 'mdx',
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
          required: true,
          description: 'The post title, under 70 chars',
          ui: {
            validate: (value) => {
              if (value?.length > 70) {
                return 'Title cannot be more than 70 characters long';
              }
            },
          },
        },
        {
          type: 'string',
          label: 'Description',
          name: 'description',
          required: true,
          description: 'The post description, under 160 chars',
          ui: {
            validate: (value) => {
              if (value?.length > 160) {
                return 'Description cannot be more than 160 characters long';
              }
            },
          },
        },
        {
          type: 'boolean',
          label: 'Published',
          name: 'live',
          description: 'Is the post published?',
          required: true,
        },
        {
          type: 'datetime',
          label: 'Date',
          name: 'date',
          required: true,
        },
        {
          type: 'reference',
          label: 'Category',
          name: 'category',
          collections: ['categories'],
          required: true,
        },
        {
          type: 'reference',
          label: 'Author',
          name: 'author',
          description: 'The author of the post',
          collections: ['authors'],
          required: true,
        },
        {
          label: 'Tags',
          name: 'tags',
          type: 'string',
          list: true,
        },
        {
          type: 'string',
          label: 'Canonical',
          name: 'canonical',
          required: false,
          description:
            'Use this if you are republishing content from' +
            ' another website',
        },
        {
          type: 'image',
          label: 'Image',
          name: 'image',
          required: true,
        },
        {
          type: 'rich-text',
          label: 'Blog Post Body',
          name: 'content',
          isBody: true,
          required: true,
          templates: [
            {
              name: 'PageSection',
              label: 'Page Section',
              fields: [
                {
                  type: 'string',
                  name: 'heading',
                  label: 'Heading',
                },
                {
                  type: 'string',
                  name: 'content',
                  label: 'Content',
                  ui: {
                    component: 'textarea',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  },
});
