<script lang="ts" setup>
import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'
  const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true, inViewThreshold: 0.5}, [Autoplay()]);

  const slidesInView = ref<number[]>([]);
  onMounted(() => {
    if (emblaApi.value) {
      console.log(emblaApi.value.slideNodes()) // Access API
      emblaApi.value.on('slidesInView', () => {
        slidesInView.value = emblaApi?.value?.slidesInView() || [];
        console.log('Slides in view:', slidesInView.value, emblaApi?.value?.slidesInView());

      });
    }
  })
  const slides = computed(() => {
    return emblaApi.value ? emblaApi.value.slideNodes() : [];
  });
  
const { data } = await useAsyncData('hero_games', () => {
  return queryCollection('games').limit(3)
    .select('title', 'path', 'game_id', 'hero_image', 'hero_bg', 'icon', 'name', 'genre', 'release_date')
    .all();
});

</script>

<template>
  <div v-if="data" ref="emblaRef" class="embla">
    <div class="embla__container">
      <div v-for="game in data" :key="`hero-${game.game_id}`" class="embla__slide">
        <GamesHero :game="game" />
      </div>
    </div>
    <div class="embla__controls wrapper-grid">
      
      <div class="embla__buttons">
        <button 
          v-for="(slide, index) in slides" 
          :key="`dot-${index}`" 
          class="embla__dot" 
          :class="{'in-view': slidesInView.includes(index)}" 
          :aria-label="`Go to slide ${index + 1}`" 
          @click="emblaApi?.scrollTo(index)"
          />
      </div>
    </div>
  </div>
</template>

<style  scoped>
.embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }
  .embla__controls {
    position: absolute;
    bottom: 6rem;
    left: 0;
    z-index: 10;
  }
  .embla__buttons {
    
    display: flex;
    gap: 0.5rem;
  }
  .embla__dot {
    
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 100vw;
      background-color: var(--color-foreground);
      transition: all 0.3s ease;
      cursor: pointer;
      display: block;
    &.in-view {
      background-color: var(--color-yellow);
      width: 2.25rem;
    }
  }
</style>