<script lang="ts" setup>
import { ChevronRightIcon } from 'lucide-vue-next';

const items = useBreadcrumbItems();
</script>

<template>
  <nav aria-label="Breadcrumbs" class="app-breadcrumbs">
  <ul>
    <li v-for="(item, key) in items" :key="key" class="app-breadcrumbs__item">
      <NuxtLink v-bind="item">{{ item.label }}</NuxtLink>
      <ChevronRightIcon v-if="!item.current" class="app-breadcrumbs__separator"/>
      
    </li>
    
  </ul>
  </nav>
</template>

<style scoped>
@reference 'assets/css/main.css';
.app-breadcrumbs {
  @apply wrapper-grid mt-10 -mb-16 relative z-10 text-sm;
  ul {
  @apply flex items-center text-sm text-foreground;
  li{
    @apply flex items-center;
    & > a {
      @apply text-orange hover:text-yellow transition-colors duration-200 underline;
      &.router-link-active {
        @apply text-foreground no-underline;
      }
    }
    
  }
  .app-breadcrumbs__separator {
    @apply text-foreground mx-2 inline-block size-4;
  }
}}
</style>