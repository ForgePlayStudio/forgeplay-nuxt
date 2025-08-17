<script lang="ts" setup>
import emblaCarouselVue from 'embla-carousel-vue'
import type { GamesCollectionItem } from '@nuxt/content';
import { watchOnce } from '@vueuse/core';

  const {carousel, gameId} = defineProps<{carousel: GamesCollectionItem['carousel'], gameId: GamesCollectionItem['id'] }>();
  const selectedIndex = ref<number>(0);
  const [emblaMainRef, emblaMainApi] = emblaCarouselVue(carousel?.options);
  const [emblaThumbnailRef, emblaThumbnailApi] = emblaCarouselVue(carousel?.options);

  function onSelect() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value)
    return
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap())
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value || !emblaThumbnailApi.value)
    return
  emblaMainApi.value.scrollTo(index)
}

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi)
    return

  onSelect()
  emblaMainApi.on("select", onSelect)
  emblaMainApi.on("reInit", onSelect)
})
  


</script>

<template>
  <div v-if="carousel?.slides && carousel?.slides?.length > 0"  class="embla" :class="{'embla__vertical': carousel?.options?.axis === 'y'}">
    <div ref="emblaMainRef" class="embla__viewport">
      <div class="embla__container">
        <div v-for="(slide, index) in carousel?.slides" :key="`slide-${index}`" class="embla__slide">
          <NuxtImg
            :src="`/games/${gameId}${slide.url}`"
            class="embla__image"
            :alt="slide.alt"
          />
        </div>
      </div>
    </div>
    <div ref="emblaThumbnailRef" class="embla__thumbnails">
      <div class="embla__container">
        <div 
        v-for="(slide, index) in carousel?.slides" 
        :key="`thumb-${index}`" 
        class="embla__slide" 
        :class="{'is-selected': selectedIndex === index}"
        @click="onThumbClick(index)"
        
        >
          <NuxtImg
            :src="`/games/${gameId}${slide.url}`"
            class="embla__image"
            :alt="slide.alt"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style  scoped>
@reference 'assets/css/main.css';
.embla{
  --vertical-size: 95vh;
  @apply relative overflow-hidden flex flex-col gap-4  max-w-[800px];
  filter: drop-shadow(5px 5px 0.75rem rgba(0, 0, 0, 0.5));
 
  &.embla__vertical {
    @apply flex-row justify-center sm:py-16 py-6;
    @media (width < 1024px) {
    --vertical-size: 80vh;
  }
  @container (width < 50vh) {
    --vertical-size: 75vh;
  }
  }
  
}
.embla__viewport {
  @apply overflow-hidden;
}
.embla__container {
  @apply flex -ml-4;
  
}
.embla__vertical .embla__container {
  @apply flex-col ml-0 -mt-4;
  height: var(--vertical-size);
}
.embla__slide {
  @apply flex-shrink-0 w-full min-w-0 h-full pl-4 basis-full;
  &:is(.embla__vertical .embla__slide) {
    @apply pt-4 pl-0;
  }
}
.embla__thumbnails {
  @apply flex-shrink-0;
}
.embla__thumbnails .embla__slide {
  @apply opacity-30 min-w-0 transition-opacity duration-300;
  flex-basis: 25%;
  &:is(.embla__vertical .embla__slide) {
    flex-basis: auto;
    max-height: calc(var(--vertical-size) / 4);
  }
  
}
.embla__thumbnails .embla__slide.is-selected {
  @apply opacity-100 ;
  .embla__image {
    @apply border-2 border-orange;
  }
}

.embla__image {
  @apply rounded-lg object-contain h-full w-full;
  &:is(.embla__vertical .embla__image) {
    @apply h-full w-auto;
  }
}
</style>