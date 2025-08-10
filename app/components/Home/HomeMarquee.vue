<script lang="ts" setup>

</script>

<template>
  <BaseMarquee class="mb-8" :repeat="2">
    <h2 class="marquee-text font-display font-bold text-stroke-balanced text-stroke-foreground uppercase text-transparent">
      :\>_ we forge your fun
    </h2>
  </BaseMarquee>
</template>

<style lang="postcss" scoped>
.marquee-text {
  font-size: clamp(2.5rem, 10vw + 1rem, 12rem);
}
</style>