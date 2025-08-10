<script lang="ts" setup>
import HomeMarquee from '~/components/Home/HomeMarquee.vue';




</script>

<template>
  <main id="main">
    <HomeHero />
    <section>
      <BaseCopyBlock
        kicker="About ForgePlay Studio"
        title="A team of video game enthusiasts..."
        cta-label="about us"
        cta-url="/about"
        class="highlight">
        <p class="sm:text-lg mb-6">
          ...unsatisfied with the usual entertainment.
          <br>Our team has a clear mission: create games that stimulate critical thinking, creativity, and deliver important messages to inspire players.
          <br>We do not make simple pastimes. We develop games that bear a specific purpose, a tool for the common good.
        </p>
      
      </BaseCopyBlock>
      <AboutStats />
      <HomeCardGrid />
      
    </section>
    <HomeMarquee />
    <HomeGamesWrapper />
  </main>
  
</template>

<style lang="postcss" scoped>

</style>