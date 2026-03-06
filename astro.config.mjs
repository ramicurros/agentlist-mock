import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
    site: 'https://ramicurros.github.io/agentlist-mockup/',
    integrations: [mdx(), sitemap(), react()],
    build: {
        inlineStylesheets: 'always', // Set to always inline stylesheets
    },
    base: '/agentlist-mockup/',
    devToolbar: {
        enabled: false
    }
});
