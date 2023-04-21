import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  title: "Authors",
  type: "document",
  fields: [
    defineField({
      name: "username",
      title: "Username",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "username",
        maxLength: 96,
      },
    }),
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "username",
      media: "avatar",
    },
  },
});
