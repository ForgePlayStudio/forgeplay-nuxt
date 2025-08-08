<script lang="ts" setup>

</script>

<template>
  <header class="app-header">
    
    <div class="app-header__wrapper">
      <nav>
      
      <h1 class="app-header__logo"><AppLogo /></h1>
      
        <div class="menus">
          <ul class="main-menu">
            <li><NuxtLink to="/games">Games</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            <li><NuxtLink class="btn" to="/join-the-test">Join the Test</NuxtLink></li>
          </ul>
          <ul>
            <li><NuxtLink href="https://discord.gg/your-discord-link" target="_blank" rel="noopener noreferrer"><SvgSocial icon-id="discord" /></NuxtLink></li>
            <li><NuxtLink href="https://www.instagram.com/forgeplaystudio/" target="_blank" rel="noopener noreferrer"><SvgSocial icon-id="instagram" /></NuxtLink></li>
            <li><NuxtLink href="https://forgeplay.itch.io/" target="_blank" rel="noopener noreferrer"><SvgSocial icon-id="itch" /></NuxtLink></li>
          </ul>
        </div>
      </nav>
    </div>
    
    
  </header>
</template>
<style scoped>

@reference 'assets/css/main.css';

.app-header {
  
  @apply text-foreground wrapper-grid relative isolate;
  &::before {
      @apply absolute inset-x-0 bg-yellow top-0 h-[90px] bg-gradient-to-r from-yellow from-50% to-50% to-orange -z-20;

      content: '';
      
    }
    &::after {
      @apply absolute inset-x-0 top-0 h-[86px] bg-background -z-10;

      content: '';
      
    }
  .app-header__wrapper {
    @apply bg-red -mx-3.5 pb-1 bg-gradient-to-r from-yellow to-orange;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 14px), 284px calc(100% - 14px), 270px 100%, 14px 100%, 0 calc(100% - 14px));

    
  }
  
  nav{  
    @apply flex items-center justify-between w-full pt-4.5 pb-8 px-3.5 relative bg-background;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 14px), 282px calc(100% - 14px), 268px 100%, 16px 100%, 2px calc(100% - 14px),  0 calc(100% - 14px));
    
  }
  .app-header__logo {
    @apply w-3xs;
  }
  .menus {
    @apply flex items-center gap-8;
    
  }
  ul{
    @apply flex items-center gap-4;
    &.main-menu {
      @apply text-lg font-display uppercase gap-10;
    }
  }
}
</style>