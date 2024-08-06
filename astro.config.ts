import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import addClasses from './addClasses';
import unoConfig from './uno.config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react(), UnoCSS(unoConfig)],
  markdown: {
    rehypePlugins: [[addClasses, {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      code: 'bg-indigoA-3 px-1.5 pt-0.5 rd c-indigoA-11 ',
      a: 'underline-blueA-11 ',
    }]]
  }

});
