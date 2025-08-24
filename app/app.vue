<script setup lang="ts">
const route = useRoute();
</script>
<template>
  <div class="dark">
    <NuxtRouteAnnouncer />
    <AppHeader />
    <AppBreadcrumbs v-if="route.path !== '/'" />
    <NuxtPage />
    <AppFooter />
    <SvgNoiseFilter />
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
