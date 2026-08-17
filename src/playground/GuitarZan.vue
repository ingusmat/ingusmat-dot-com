<script lang="ts" setup>
console.log('Guitar component loaded')
</script>

<template>
  <div class="guitar">
    <h1>Guitar</h1>
  </div>
</template>

<style scoped lang="scss">
.guitar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  h1 {
    font-size: 3rem;
    color: #333;
  }
}
</style>
