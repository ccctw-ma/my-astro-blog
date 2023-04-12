import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import addClasses from "rehype-add-classes";

// https://astro.build/config
export default defineConfig({
    // Enable React to support React JSX components.
    integrations: [react(), tailwind()],
    markdown: {
        rehypePlugins: [
            [
                addClasses,
                {
                    h1: "text-4xl font-bold mb-6",
                    h2: "text-2xl font-bold mb-6",
                    h3: "text-xl font-bold",
                    h4: "text-lg font-bold",
                    h5: "font-bold",
                    img: "border border-slate-300 dark:border-zinc-700 rounded-xl mb-6",
                    p: "mb-6",
                    a: "underline underline-offset-2 hover:text-orange-500 decoration-orange-500",
                    ul: "list-disc",
                },
            ],
        ],
    },
});
