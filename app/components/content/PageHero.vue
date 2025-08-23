<script lang="ts" setup>

const props = defineProps<{
  title: string;
  bgImage?: string;
}>();
const bgUrl = computed(() => `url(${props.bgImage})`);
</script>
<template>
  <section class="page-hero" :class="{'bg-(image:--bgUrl)': bgUrl}">
    <div class="page-hero__inner">
        <div>
            <h1 class="page-title w-min">{{ title }}</h1>
        </div>
        <div class="lg:basis-1/2 prose-forgeplay text-lg">
            <slot />
        </div>
    </div>
  </section>
</template>
<style scoped>
@reference 'assets/css/main.css';
.page-hero {
    --bgUrl: v-bind(bgUrl);
    @apply py-20 px-6 md:px-12 lg:px-20 bg-cover bg-center bg-no-repeat;
  .page-hero__inner {
    @apply flex flex-col justify-center  md:flex-row md:justify-between items-start;
  }
}
</style>