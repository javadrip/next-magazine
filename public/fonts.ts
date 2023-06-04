// Fonts with more than one word is separated by an underscore
import { Livvic, Assistant } from "@next/font/google";

export const livvic = Livvic({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
  variable: "--font-livvic",
});

export const assistant = Assistant({
  subsets: ["latin"],
  variable: "--font-assistant",
});

// Once the fonts are exported here, head to app/(site)/layout.tsx, import the fonts and add to className in HTML tag.
