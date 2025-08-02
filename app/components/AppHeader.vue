<script lang="ts" setup>

</script>

<template>
  <header class="app-header">
    <h1><AppLogo /></h1>
    <nav>
      <ul>
        <li><NuxtLink to="/games">Games</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        <li><NuxtLink to="/join-the-test">Join the Test</NuxtLink></li>
      </ul>
    </nav>
    <nav class="social-links">
      <ul>
        <li><NuxtLink href="https://discord.gg/your-discord-link" target="_blank" rel="noopener noreferrer"><SvgSocial icon-id="discord" /></NuxtLink></li>
        <li><NuxtLink href="https://www.instagram.com/forgeplaystudio/" target="_blank" rel="noopener noreferrer"><SvgSocial icon-id="instagram" /></NuxtLink></li>
        <li><NuxtLink href="https://forgeplay.itch.io/" target="_blank" rel="noopener noreferrer"><SvgSocial icon-id="itch" /></NuxtLink></li>
      </ul>
    </nav>
    
  </header>
</template>

<style lang="postcss" scoped>

</style>