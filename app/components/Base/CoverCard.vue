<script lang="ts" setup>
import { ArrowRight } from 'lucide-vue-next'
interface ICoverCardProps {
  image?: string;
  title: string;
  url?: string;
  aspectRatio?: "landscape" | "portrait" | "square";
};
withDefaults(defineProps<ICoverCardProps>(), {
  aspectRatio: "landscape", image: undefined, url: undefined,
});

</script>

<template>
  <div class="cover-card" :class="{'aspect-video': aspectRatio === 'landscape', 'aspect-square': aspectRatio === 'square', 'aspect-[9/16]': aspectRatio === 'portrait'}">
    <NuxtLink v-if="url" :to="url" class="cover-card-content">
      <slot />
      <div class="cover-image_wrapper" :class="{'bg-neutral-700/70': !image}">
        <NuxtImg v-if="image" :src="image" alt="" class="cover-image" />
      </div>
      <h3 class="cover-title">{{ title }} <ArrowRight :size="32" :stroke-width="1" /> </h3>
    </NuxtLink>
    <div v-else class="cover-card-content">
      <slot />
      <div class="cover-image_wrapper">
        <NuxtImg v-if="image" :src="image" alt="" class="cover-image" />
      </div>
      
      <h3 class="cover-title">{{ title }}</h3>
    </div>
    
  </div>
</template>

<style scoped>
@reference 'assets/css/main.css';
.cover-card {
  @apply relative drop-shadow-xl drop-shadow-background/50 px-6;
  & .cover-image{
    @apply w-full h-full object-cover transition-transform duration-300 ease-in-out;
  }
  & .cover-image_wrapper {
    @apply w-full h-full overflow-hidden rounded-2xl absolute inset-0;
  }
  & .cover-card-content{
    @apply w-full h-full flex items-end;
    &:hover{
      .cover-image {
        @apply scale-105;
      }
    }
  }
  & .cover-title {
    @apply text-lg  text-background  bg-gradient-to-br from-neutral-200 to-neutral-300 px-4 py-2 rounded-lg translate-y-1/2 relative flex items-center justify-between w-full;
  }
}
</style>