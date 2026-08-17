<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import ingusHead from '@/assets/ingus-corner-box-head.png'

const mainEl = ref<HTMLElement | null>(null)
const imgEl = ref<HTMLImageElement | null>(null)

const colors = ['#fcc901', '#4d4637', '#b4aa99', '#00d6aa', '#009c76']
const backgroundColor = ref(colors[0])

const pos = reactive({ x: 0, y: 0 })
let vx = 3
let vy = 2
let speed = 1
let speedDir = 1
let rafId: number

function updateSpeed() {
  speed *= speedDir === 1 ? 1.05 : 1 / 1.05
  if (speed >= 2) speedDir = -1
  else if (speed <= 1.05) speedDir = 1
  const others = colors.filter((c) => c !== backgroundColor.value)
  backgroundColor.value = others[Math.floor(Math.random() * others.length)]
}

function tick() {
  const container = mainEl.value
  const img = imgEl.value
  if (!container || !img) return

  const cw = container.clientWidth
  const ch = container.clientHeight
  const iw = img.offsetWidth
  const ih = img.offsetHeight

  pos.x += vx * speed
  pos.y += vy * speed

  if (pos.x <= 0) {
    pos.x = 0
    vx = Math.abs(vx)
    updateSpeed()
  } else if (pos.x + iw >= cw) {
    pos.x = cw - iw
    vx = -Math.abs(vx)
    updateSpeed()
  }

  if (pos.y <= 0) {
    pos.y = 0
    vy = Math.abs(vy)
    updateSpeed()
  } else if (pos.y + ih >= ch) {
    pos.y = ch - ih
    vy = -Math.abs(vy)
    updateSpeed()
  }

  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  rafId = requestAnimationFrame(tick)
})
onUnmounted(() => {
  cancelAnimationFrame(rafId)
})
</script>

<template>
  <main ref="mainEl" :style="{ backgroundColor }">
    <h1>ingusmat.com</h1>
    <img
      ref="imgEl"
      class="ingus-dvd-head"
      :src="ingusHead"
      :style="{ transform: `translate(${pos.x}px, ${pos.y}px)` }"
      alt="Cartoon Ingus"
    />
  </main>
</template>

<style scoped>
@font-face {
  font-family: 'CaskaydiaCove';
  src: url('@/assets/CaskaydiaCoveNerdFontPropo-Bold.ttf') format('truetype');
  font-weight: bold;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
}

h1 {
  font-family: 'CaskaydiaCove', monospace;
  font-size: 8rem;
  color: #fff;
  opacity: 0.9;
}

.ingus-dvd-head {
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
}

.page {
  position: relative;
  width: 100%;
  height: 100vh;
}
.cartoon-ingus {
  height: 600px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.page {
  position: relative;
  width: 100%;
  height: 100vh;
}
.cartoon-ingus {
  height: 600px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.page {
  position: relative;
  width: 100%;
  height: 100vh;
}
.cartoon-ingus {
  height: 600px;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
