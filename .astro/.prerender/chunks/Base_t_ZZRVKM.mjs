import { c as createComponent } from './astro-component_BIOrlVuc.mjs';
import 'piccolore';
import { b as addAttribute, d as renderHead, c as renderSlot, a as renderTemplate } from './prerender_CuBhdvlA.mjs';
import 'clsx';

const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Base;
  const { title, description = "ingusmat.com — playground and blog" } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-5hce7sga> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="alternate" type="application/rss+xml" title="ingusmat.com" href="/rss.xml"><meta name="description"${addAttribute(description, "content")}><title>${title}</title>${renderHead()}</head> <body data-astro-cid-5hce7sga> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/sessions/charming-compassionate-hopper/mnt/ingusmat-dot-com/src/layouts/Base.astro", void 0);

export { $$Base as $ };
