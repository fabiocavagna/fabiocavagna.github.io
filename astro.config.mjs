// @ts-check
import { defineConfig } from 'astro/config';

// For a GitHub user page (https://fabio-cavagna.github.io) the site lives at the
// domain root, so `base` stays "/". If you later move this to a project repo,
// set `base` to "/<repo-name>".
export default defineConfig({
  site: 'https://fabio-cavagna.github.io',
  base: '/',
});
