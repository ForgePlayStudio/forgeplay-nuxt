<script lang="ts" setup>

</script>

<template>
  <header class="app-header">
    
    <div class="app-header__wrapper">
      <nav>
      
      <h1 class="app-header__logo">
        <NuxtLink to="/">
          <AppLogo />
        </NuxtLink>
      </h1>

        <div class="menus">
          <ul class="main-menu">
            <li><NuxtLink to="/games">Games</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            <li><NuxtLink class="btn responsive" to="/join-the-test">Join the Test</NuxtLink></li>
          </ul>
          
          <ul>
            <li>
              <NuxtLink href="https://discord.gg/your-discord-link" target="_blank" rel="noopener noreferrer">
                <SvgSocial icon-id="discord" />
                <span class="sr-only">Discord</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink href="https://www.instagram.com/forgeplaystudio/" target="_blank" rel="noopener noreferrer">
                <SvgSocial icon-id="instagram" />
                <span class="sr-only">Instagram</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink href="https://forgeplay.itch.io/" target="_blank" rel="noopener noreferrer">
                <SvgSocial icon-id="itch" />
                <span class="sr-only">itch.io</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="app-header__bg"/>
    
  </header>
</template>
<style scoped>

@reference 'assets/css/main.css';

.app-header {
  --clip-size: 14px;
  --logo-width: 270px;
  @media (width < 640px) {
    --clip-size: 10px;
    --logo-width: 222px;
  }
  --line-offset: 0px;
  --clip-border: calc(var(--clip-size) + var(--line-offset));
  --logo-size: calc(var(--logo-width) - var(--line-offset));
  --logo-size-offset: calc(var(--logo-size) + var(--clip-size));

  @apply text-foreground wrapper-grid relative isolate -mb-3.5 z-10;
  &::before {
      @apply absolute inset-x-0 bg-yellow top-0 h-[60px] sm:h-[75px] lg:h-[90px] bg-gradient-to-r from-yellow from-50% to-50% to-orange -z-20;

      content: '';
      
    }
    &::after {
      @apply absolute inset-x-0 top-0 h-[56px] sm:h-[71px] lg:h-[86px] bg-background -z-10 border-t border-background;

      content: '';
      
    }
  .app-header__bg {
    @apply bg-yellow h-4.5 pb-1 bg-gradient-to-r from-yellow to-orange relative -mx-3.5;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - var(--clip-size)), var(--logo-size-offset) calc(100% - var(--clip-size)), var(--logo-size) 100%, var(--clip-border) 100%, var(--line-offset) calc(100% - var(--clip-size)),  0 calc(100% - var(--clip-size)));
    

    &::before {
      --line-offset: 2px;
      --clip-border: calc(var(--clip-size) + var(--line-offset));
      --logo-size: calc(var(--logo-width) - var(--line-offset));
      --logo-size-offset: calc(var(--logo-size) + var(--clip-size));
      @apply absolute inset-0 bottom-1 bg-background;
      clip-path: polygon(0 0, 100% 0, 100% calc(100% - var(--clip-size)), var(--logo-size-offset) calc(100% - var(--clip-size)), var(--logo-size) 100%, var(--clip-border) 100%, var(--line-offset) calc(100% - var(--clip-size)),  0 calc(100% - var(--clip-size)));
      content: '';
      
      
    }
  }
  
  nav{  
    @apply flex items-center justify-between w-full py-3 sm:py-4.5  relative ;

    
  }
  .app-header__logo {
    @apply w-52 sm:w-3xs;
  }
  .menus {
    @apply flex items-center gap-8;
    
  }
  ul{
    @apply flex items-center gap-4;
    &.main-menu {
      @apply text-sm sm:text-lg font-display uppercase gap-6 sm:gap-10;
     
    }
  }
  .main-menu {
    @media (max-width: 1024px) {
        @apply fixed bottom-0 left-0 right-0 bg-background z-20 justify-center p-2 py-4;
        &::before {
      @apply absolute inset-x-0 bg-yellow h-1 bg-gradient-to-r from-yellow  to-orange -top-1;

      content: '';
      
    }
      }
  }
}
</style>