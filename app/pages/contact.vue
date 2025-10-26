<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
useHead({
  title: page.value?.title,
})
</script>

<template>
  <main id="main" class="about-page">
    
    <ContentRenderer v-if="page" :value="page" class="renderer-wrapper"/>
  
    <section v-else>
    <div class="empty-page flex flex-col items-center justify-center h-screen gap-8">
      <h1 class="page-title">Page Not Found</h1>
      <p class="text-xl">Oops! The content you're looking for doesn't exist.</p>
      <NuxtLink to="/" class="btn">Go back home</NuxtLink>
    </div>
  </section>
  <HomeMarquee />
  <BaseContactForm />
  </main>
</template>

<style lang="postcss" scoped>

</style>