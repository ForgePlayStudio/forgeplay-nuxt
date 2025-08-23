<script setup lang="ts">
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
    <HomeGamesWrapper />
    <HomeMarquee />
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