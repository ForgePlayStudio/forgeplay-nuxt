<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
const pageClass = computed(() => {
  return page.value ? `page-${route.params.slug}` : 'page-not-found'
})
</script>

<template>
  <main id="main" class="content-page" :class="[pageClass]">
    <article v-if="page">
      <h1 class="page-title w-min">{{ page.title }}</h1>
      <ContentRenderer :value="page" class="prose-forgeplay" :class="page.class"/>
    </article>
    <section v-else>
    <div class="empty-page flex flex-col items-center justify-center h-screen gap-8">
      <h1 class="page-title">Page Not Found</h1>
      <p class="text-xl">Oops! The content you're looking for doesn't exist.</p>
      <NuxtLink to="/" class="btn">Go back home</NuxtLink>
    </div>
  </section>
  </main>
</template>
<style scoped>
.page-privacy-policy {
  .prose-forgeplay {
    counter-reset: chapter-counter;
    & > :deep(h2)::before {
     
      counter-increment: chapter-counter;
      content: counter(chapter-counter) ". ";

    }
  }

}
</style>