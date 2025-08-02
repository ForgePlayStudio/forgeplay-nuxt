<script lang="ts" setup>

</script>

<template>
  <span class="app-logo">
    <SvgLogo />
    <SvgForgePlay />
    <span class="sr-only">ForgePlay Studio</span>
  </span>
</template>

<style lang="postcss" scoped>
.app-logo {
  display: grid;
  grid-template-columns: 1fr 7fr;
  align-items: center;
  gap: 3%;
}
</style>