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

  <section class="compressed relative">
    <BaseGridBg  class="bottom-1/3"/>
    <AboutStats />
    <video class="about-video" controls poster="/forgeplay_video_cover.jpg">
              <source src="/Presentazione-Team.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
    
  </section>
  <section>
    <BaseCopyBlock
        kicker="Meet the team"
        title="Our team has a clear mission: "
        cta-label="Discover our games"
        cta-url="/games"
        class="highlight">
        <p class="sm:text-lg mb-6">
          Create games that stimulate critical thinking, creativity, and deliver important messages to inspire players.
          <br>We do not make simple pastimes. We want, instead, to develop games that bear a specific purpose, a tool for the common good.
          <br>Our experience and expertise in design, game development, and storytelling allow us to combine business with pleasure, creating immersive and innovative gaming experiences.
        </p>
      
      </BaseCopyBlock>
  </section>
    <AboutTeamWrapper />
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