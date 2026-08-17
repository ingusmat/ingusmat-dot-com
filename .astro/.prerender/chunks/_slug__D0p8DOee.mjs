import { c as createComponent } from './astro-component_BIOrlVuc.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, c as renderSlot } from './prerender_CuBhdvlA.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_CAJ8QCCv.mjs';
import { $ as $$Base } from './Base_t_ZZRVKM.mjs';

const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BlogPost;
  const { post } = Astro2.props;
  const { title, date, description } = post.data;
  const formatted = date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `${title} — ingusmat.com`, "description": description, "data-astro-cid-bvzihdzo": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-bvzihdzo> <nav data-astro-cid-bvzihdzo><a href="/blog" data-astro-cid-bvzihdzo>← all posts</a></nav> <article data-astro-cid-bvzihdzo> <header data-astro-cid-bvzihdzo> <h1 data-astro-cid-bvzihdzo>${title}</h1> <time${addAttribute(date.toISOString(), "datetime")} data-astro-cid-bvzihdzo>${formatted}</time> </header> ${renderSlot($$result2, $$slots["default"])} </article> </main> ` })}`;
}, "/sessions/charming-compassionate-hopper/mnt/ingusmat-dot-com/src/layouts/BlogPost.astro", void 0);

async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { "post": post }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/sessions/charming-compassionate-hopper/mnt/ingusmat-dot-com/src/pages/blog/[slug].astro", void 0);

const $$file = "/sessions/charming-compassionate-hopper/mnt/ingusmat-dot-com/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
