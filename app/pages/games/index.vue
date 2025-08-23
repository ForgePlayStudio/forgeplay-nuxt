<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
useHead({
  title: page.value?.title + ' - ForgePlay Studio',
})
</script>

<template>
  <main id="main" class="games-page">
    
    <ContentRenderer v-if="page" :value="page" class="renderer-wrapper"/>
  
    <section v-else>
    <div class="empty-page flex flex-col items-center justify-center h-screen gap-8">
      <h1 class="page-title">Page Not Found</h1>
      <p class="text-xl">Oops! The content you're looking for doesn't exist.</p>
      <NuxtLink to="/" class="btn">Go back home</NuxtLink>
    </div>
  </section>
  <GamesGrid />
  <BaseCtaSection
      kicker="Beta testing"
      title="Help us make our games better"
      cta-label="Join the test"
      cta-url="/join-the-test"
      bg-image="/images/footer-bg.jpg">
      <p class="sm:text-lg mb-10">
        Want to try our games? 
        <br>Choose the games you like the most and and help us make our games better.
        <br>By becoming our tester you will be able to access exclusive content.
      </p>
    </BaseCtaSection>
  </main>
</template>

<style lang="postcss" scoped>

</style>