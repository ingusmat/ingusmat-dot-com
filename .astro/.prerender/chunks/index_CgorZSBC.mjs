import { c as createComponent } from './astro-component_BIOrlVuc.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_CuBhdvlA.mjs';
import { $ as $$Base } from './Base_t_ZZRVKM.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      name: "Light Cycles",
      href: "/playground/lightcycles",
      description: "Tron-style light cycles game"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Playground — ingusmat.com", "data-astro-cid-r7vfvtcr": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-r7vfvtcr> <h1 data-astro-cid-r7vfvtcr>Playground</h1> <ul data-astro-cid-r7vfvtcr> ${projects.map((p) => renderTemplate`<li data-astro-cid-r7vfvtcr> <a${addAttribute(p.href, "href")} data-astro-cid-r7vfvtcr>${p.name}</a> <span data-astro-cid-r7vfvtcr>${p.description}</span> </li>`)} </ul> </main> ` })}`;
}, "/sessions/charming-compassionate-hopper/mnt/ingusmat-dot-com/src/pages/playground/index.astro", void 0);

const $$file = "/sessions/charming-compassionate-hopper/mnt/ingusmat-dot-com/src/pages/playground/index.astro";
const $$url = "/playground";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
