import { c as createComponent } from './astro-component_BIOrlVuc.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_CuBhdvlA.mjs';
import { g as getCollection } from './_astro_content_CAJ8QCCv.mjs';
import { $ as $$Base } from './Base_t_ZZRVKM.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Blog — ingusmat.com", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-5tznm7mj> <h1 data-astro-cid-5tznm7mj>Blog</h1> ${posts.length === 0 && renderTemplate`<p data-astro-cid-5tznm7mj>Nothing here yet.</p>`} <ul data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<li data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.id}`, "href")} data-astro-cid-5tznm7mj>${post.data.title}</a> <time${addAttribute(post.data.date.toISOString(), "datetime")} data-astro-cid-5tznm7mj> ${post.data.date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })} </time> <p data-astro-cid-5tznm7mj>${post.data.description}</p> </li>`)} </ul> </main> ` })}`;
}, "/sessions/charming-compassionate-hopper/mnt/ingusmat-dot-com/src/pages/blog/index.astro", void 0);

const $$file = "/sessions/charming-compassionate-hopper/mnt/ingusmat-dot-com/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
