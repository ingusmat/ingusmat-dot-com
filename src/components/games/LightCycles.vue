<template>
  <svg
    :width="gameState.screenWidth"
    :height="gameState.screenHeight"
    style="position: absolute; left: 0; top: 0"
    background-color="black"
  >
    <rect
      v-for="cycle in gameState.cycles"
      :key="cycle.color"
      :x="cycle.x"
      :y="cycle.y"
      width="10"
      height="10"
      :fill="cycle.color"
    />
  </svg>
</template>

<style scoped>
.lightcycles {
  border: 2px solid #fff;
}
</style>

<script lang="ts" setup>
import { onMounted, onUnmounted, reactive } from 'vue'
type CycleColor = 'blue' | 'red' | 'green' | 'yellow'
type VisitedCoordinates = Record<number, Record<number, CycleColor>>

const TILE_SIZE = 10

const keyboard = reactive({
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
  Space: false,
})

type Direction = 'up' | 'down' | 'left' | 'right'

const gameState = reactive({
  cycles: [] as Cycle[],
  visitedCoordinates: {} as VisitedCoordinates,
  screenWidth: null as number | null,
  screenHeight: null as number | null,
})

const handleKeyboardInput = (key: string) => {
  if (key in keyboard) {
    keyboard[key] = true
    if (key === ' ') {
      // Handle spacebar input if needed
    } else if (key === 'ArrowUp') {
      setPlayerCycleDirection('up')
    } else if (key === 'ArrowDown') {
      setPlayerCycleDirection('down')
    } else if (key === 'ArrowLeft') {
      setPlayerCycleDirection('left')
    } else if (key === 'ArrowRight') {
      setPlayerCycleDirection(key as Direction)
    }
  }
}

function setPlayerCycleDirection(direction: Direction) {
  const key = directionKeyMap[direction]
  if (keyboard[key]) {
    // Update the direction of the player's cycle based on the key pressed
    gameState.cycles.forEach((cycle: Cycle) => {
      if (cycle.color === 'red') {
        cycle.direction = direction
      }
    })
  }
}

const playerCycle = gameState.cycles[0] // Assuming the first cycle is the player's cycle

const gameloop = (t) => {
  updateGameState(gameState)
  requestAnimationFrame(gameloop)
}

const directionKeyMap = {
  up: 'ArrowUp',
  down: 'ArrowDown',
  left: 'ArrowLeft',
  right: 'ArrowRight',
}

type Cycle = {
  x: number
  y: number
  direction: 'up' | 'down' | 'left' | 'right'
  color: CycleColor
}

function updateCycleDirection(cycle: Cycle, direction: 'up' | 'down' | 'left' | 'right') {
  const key = directionKeyMap[direction]
  if (keyboard[key]) {
    // Update the direction of the cycle based on the key pressed
    gameState.cycles.forEach((cycle: Cycle) => {
      if (cycle.color === 'red') {
        cycle.direction = direction
      }
    })
  }
}

function updateGameState(gamestate: typeof gameState) {
  // Update the position of the cycles based on their current direction
  if (gamestate) {
    const newState = { ...gamestate }
    newState.cycles.forEach((cycle) => {
      switch (cycle.direction) {
        case 'right':
          newState.cycle.x += TILE_SIZE
          break
        case 'left':
          cycle.x -= TILE_SIZE
          break
        case 'up':
          cycle.y -= TILE_SIZE
          break
        case 'down':
          cycle.y += TILE_SIZE
          break
      }

      // Mark the current position as visited by this cycle's color
      if (!newState.visitedCoordinates[cycle.x]) {
        newState.visitedCoordinates[cycle.x] = {}
      }
      newState.visitedCoordinates[cycle.x][cycle.y] = cycle.color
    })
  }
}

onMounted(() => {
  // Initialize the light cycles animation here
  const innerWidth = window.innerWidth
  const innerHeight = window.innerHeight

  gameState.screenWidth = innerWidth
  gameState.screenHeight = innerHeight

  gameState.cycles.push(
    { x: innerWidth / 2, y: 100, direction: 'right', color: 'red' },
    { x: innerWidth / 2, y: innerHeight - 100, direction: 'left', color: 'blue' },
  )

  // Listening for a "keydown" event
  document.addEventListener('keydown', (event) => {
    handleKeyboardInput(event.key)
  })

  requestAnimationFrame(gameloop)
})

onUnmounted(() => {
  // Clean up any intervals or event listeners here
  console.log('Cleaning up LightCycles animation')
})

// This is a placeholder for the light cycles animation. You can implement the logic to move the cycles around the screen and create trails behind them.
</script>
