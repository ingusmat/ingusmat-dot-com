import { c as createComponent } from './astro-component_BIOrlVuc.mjs';
import 'piccolore';
import { d as renderHead, r as renderComponent, a as renderTemplate } from './prerender_CuBhdvlA.mjs';
import { useSSRContext, defineComponent, ref, reactive, onMounted, onUnmounted, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper_pcqpp-6-.mjs';

const ingusHead = new Proxy({"src":"/_astro/ingus-corner-box-head.BLDvRMJH.png","width":809,"height":809,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/sessions/charming-compassionate-hopper/mnt/ingusmat-dot-com/src/assets/ingus-corner-box-head.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("/sessions/charming-compassionate-hopper/mnt/ingusmat-dot-com/src/assets/ingus-corner-box-head.png");
							return target[name];
						}
					});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DvdHead",
  setup(__props, { expose: __expose }) {
    __expose();
    const mainEl = ref(null);
    const imgEl = ref(null);
    const colors = ["#fcc901", "#4d4637", "#b4aa99", "#00d6aa", "#009c76"];
    const backgroundColor = ref(colors[0]);
    const pos = reactive({ x: 0, y: 0 });
    let vx = 3;
    let vy = 2;
    let speed = 1;
    let speedDir = 1;
    let rafId;
    function updateSpeed() {
      speed *= speedDir === 1 ? 1.05 : 1 / 1.05;
      if (speed >= 2) speedDir = -1;
      else if (speed <= 1.05) speedDir = 1;
      const others = colors.filter((c) => c !== backgroundColor.value);
      backgroundColor.value = others[Math.floor(Math.random() * others.length)];
    }
    function tick() {
      const container = mainEl.value;
      const img = imgEl.value;
      if (!container || !img) return;
      const cw = container.clientWidth;
      const ch = container.clientHeight;
      const iw = img.offsetWidth;
      const ih = img.offsetHeight;
      pos.x += vx * speed;
      pos.y += vy * speed;
      if (pos.x <= 0) {
        pos.x = 0;
        vx = Math.abs(vx);
        updateSpeed();
      } else if (pos.x + iw >= cw) {
        pos.x = cw - iw;
        vx = -Math.abs(vx);
        updateSpeed();
      }
      if (pos.y <= 0) {
        pos.y = 0;
        vy = Math.abs(vy);
        updateSpeed();
      } else if (pos.y + ih >= ch) {
        pos.y = ch - ih;
        vy = -Math.abs(vy);
        updateSpeed();
      }
      rafId = requestAnimationFrame(tick);
    }
    onMounted(() => {
      rafId = requestAnimationFrame(tick);
    });
    onUnmounted(() => {
      cancelAnimationFrame(rafId);
    });
    const __returned__ = { mainEl, imgEl, colors, backgroundColor, pos, get vx() {
      return vx;
    }, set vx(v) {
      vx = v;
    }, get vy() {
      return vy;
    }, set vy(v) {
      vy = v;
    }, get speed() {
      return speed;
    }, set speed(v) {
      speed = v;
    }, get speedDir() {
      return speedDir;
    }, set speedDir(v) {
      speedDir = v;
    }, get rafId() {
      return rafId;
    }, set rafId(v) {
      rafId = v;
    }, updateSpeed, tick, get ingusHead() {
      return ingusHead;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<main${ssrRenderAttrs(mergeProps({
    ref: "mainEl",
    style: { backgroundColor: $setup.backgroundColor }
  }, _attrs))} data-v-bea5fb3f><h1 data-v-bea5fb3f>ingusmat.com</h1><img class="ingus-dvd-head"${ssrRenderAttr("src", $setup.ingusHead)} style="${ssrRenderStyle({ transform: `translate(${$setup.pos.x}px, ${$setup.pos.y}px)` })}" alt="Cartoon Ingus" data-v-bea5fb3f></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/DvdHead.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DvdHead = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bea5fb3f"]]);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><title>ingusmat.com</title>${renderHead()}</head> <body data-astro-cid-j7pv25f6> ${renderComponent($$result, "DvdHead", DvdHead, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/sessions/charming-compassionate-hopper/mnt/ingusmat-dot-com/src/components/DvdHead.vue", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </body></html>`;
}, "/sessions/charming-compassionate-hopper/mnt/ingusmat-dot-com/src/pages/index.astro", void 0);

const $$file = "/sessions/charming-compassionate-hopper/mnt/ingusmat-dot-com/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
