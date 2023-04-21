import { defineType, defineArrayMember } from "sanity";

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default defineType({
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
          { title: "Code", value: "code" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
              // {
              //   // TODO: Add component to open links in new tab: https://www.sanity.io/guides/portable-text-internal-and-external-links#b14f77c2e796
              //   title: "Open in new tab",
              //   name: "blank",
              //   type: "boolean",
              //   description: "Read https://css-tricks.com/use-target_blank/",
              // },
            ],
          },
          // {
          //   // TODO: Add icon for internal link, and render links: https://www.sanity.io/guides/portable-text-internal-and-external-links#b14f77c2e796
          //   name: "internalLink",
          //   type: "object",
          //   title: "Internal link",
          //   fields: [
          //     {
          //       name: "reference",
          //       type: "reference",
          //       title: "Reference",
          //       to: [{ type: "post" }],
          //     },
          //   ],
          // },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
    }),
    // TODO: Add code block: https://www.sanity.io/docs/portable-text-editor-configuration
    // defineArrayMember({
    //   type: "code",
    // }),
    // TODO: Add YouTube! https://www.sanity.io/guides/portable-text-how-to-add-a-custom-youtube-embed-block
  ],
});
