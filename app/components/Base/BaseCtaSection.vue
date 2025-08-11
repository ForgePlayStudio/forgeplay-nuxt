<script lang="ts" setup>
const props = defineProps<{
  kicker?: string;
  title?: string;
  ctaLabel: string;
  ctaUrl: string;
  bgImage?: string;
}>();
const sectionBg = computed(() => {
  return props.bgImage ? `url(${props.bgImage})` : '';
});
</script>

<template>
  <section class="cta-section">
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10  items-start">
      <div class="card card--secondary">
        <BaseCopyBlock
          :kicker="kicker"
          :title="title"
          :cta-label="ctaLabel"
          :cta-url="ctaUrl"
        
          >
        
            <slot/>
        
        
        </BaseCopyBlock>
      </div>
      
      
    </div>
    
  </section>
</template>

<style lang="postcss" scoped>
.cta-section {
  --section-bg: v-bind(sectionBg);
  background-image: var(--section-bg);
  background-size: cover;
  background-position: center;
  padding-block: 2.75rem;
}
</style>