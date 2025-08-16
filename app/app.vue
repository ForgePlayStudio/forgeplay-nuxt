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
    
  </div>
</template>
