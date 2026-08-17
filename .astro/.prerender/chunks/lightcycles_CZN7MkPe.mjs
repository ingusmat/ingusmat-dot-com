import { c as createComponent } from './astro-component_BIOrlVuc.mjs';
import 'piccolore';
import { d as renderHead, r as renderComponent, a as renderTemplate } from './prerender_CuBhdvlA.mjs';
import { useSSRContext, defineComponent, reactive, onMounted, onUnmounted, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper_pcqpp-6-.mjs';

const TILE_SIZE = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LightCycles",
  setup(__props, { expose: __expose }) {
    __expose();
    const keyboard = reactive({
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false,
      Space: false
    });
    const gameState = reactive({
      cycles: [],
      visitedCoordinates: {},
      screenWidth: null,
      screenHeight: null
    });
    const handleKeyboardInput = (key) => {
      if (key in keyboard) {
        keyboard[key] = true;
        if (key === " ") ; else if (key === "ArrowUp") {
          setPlayerCycleDirection("up");
        } else if (key === "ArrowDown") {
          setPlayerCycleDirection("down");
        } else if (key === "ArrowLeft") {
          setPlayerCycleDirection("left");
        } else if (key === "ArrowRight") {
          setPlayerCycleDirection(key);
        }
      }
    };
    function setPlayerCycleDirection(direction) {
      const key = directionKeyMap[direction];
      if (keyboard[key]) {
        gameState.cycles.forEach((cycle) => {
          if (cycle.color === "red") {
            cycle.direction = direction;
          }
        });
      }
    }
    const playerCycle = gameState.cycles[0];
    const gameloop = (t) => {
      updateGameState(gameState);
      requestAnimationFrame(gameloop);
    };
    const directionKeyMap = {
      up: "ArrowUp",
      down: "ArrowDown",
      left: "ArrowLeft",
      right: "ArrowRight"
    };
    function updateCycleDirection(cycle, direction) {
      const key = directionKeyMap[direction];
      if (keyboard[key]) {
        gameState.cycles.forEach((cycle2) => {
          if (cycle2.color === "red") {
            cycle2.direction = direction;
          }
        });
      }
    }
    function updateGameState(gamestate) {
      if (gamestate) {
        const newState = { ...gamestate };
        newState.cycles.forEach((cycle) => {
          switch (cycle.direction) {
            case "right":
              newState.cycle.x += TILE_SIZE;
              break;
            case "left":
              cycle.x -= TILE_SIZE;
              break;
            case "up":
              cycle.y -= TILE_SIZE;
              break;
            case "down":
              cycle.y += TILE_SIZE;
              break;
          }
          if (!newState.visitedCoordinates[cycle.x]) {
            newState.visitedCoordinates[cycle.x] = {};
          }
          newState.visitedCoordinates[cycle.x][cycle.y] = cycle.color;
        });
      }
    }
    onMounted(() => {
      const innerWidth = window.innerWidth;
      const innerHeight = window.innerHeight;
      gameState.screenWidth = innerWidth;
      gameState.screenHeight = innerHeight;
      gameState.cycles.push(
        { x: innerWidth / 2, y: 100, direction: "right", color: "red" },
        { x: innerWidth / 2, y: innerHeight - 100, direction: "left", color: "blue" }
      );
      document.addEventListener("keydown", (event) => {
        handleKeyboardInput(event.key);
      });
      requestAnimationFrame(gameloop);
    });
    onUnmounted(() => {
      console.log("Cleaning up LightCycles animation");
    });
    const __returned__ = { TILE_SIZE, keyboard, gameState, handleKeyboardInput, setPlayerCycleDirection, playerCycle, gameloop, directionKeyMap, updateCycleDirection, updateGameState };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: $setup.gameState.screenWidth,
    height: $setup.gameState.screenHeight,
    style: { "position": "absolute", "left": "0", "top": "0" },
    "background-color": "black"
  }, _attrs))} data-v-05d67c5c><!--[-->`);
  ssrRenderList($setup.gameState.cycles, (cycle) => {
    _push(`<rect${ssrRenderAttr("x", cycle.x)}${ssrRenderAttr("y", cycle.y)} width="10" height="10"${ssrRenderAttr("fill", cycle.color)} data-v-05d67c5c></rect>`);
  });
  _push(`<!--]--></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/games/LightCycles.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LightCycles = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-05d67c5c"]]);

const $$Lightcycles = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-qdbwrejx> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>Light Cycles — ingusmat.com</title>${renderHead()}</head> <body data-astro-cid-qdbwrejx> ${renderComponent($$result, "LightCycles", LightCycles, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/sessions/charming-compassionate-hopper/mnt/ingusmat-dot-com/src/components/games/LightCycles.vue", "client:component-export": "default", "data-astro-cid-qdbwrejx": true })} </body></html>`;
}, "/sessions/charming-compassionate-hopper/mnt/ingusmat-dot-com/src/pages/playground/lightcycles.astro", void 0);

const $$file = "/sessions/charming-compassionate-hopper/mnt/ingusmat-dot-com/src/pages/playground/lightcycles.astro";
const $$url = "/playground/lightcycles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Lightcycles,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
