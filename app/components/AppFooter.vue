<script lang="ts" setup>

</script>

<template>
  <footer class="main-footer">
    <nav class="footer-nav">
      <ul class="footer-nav__social full-width">
        <li>
          <NuxtLink href="https://discord.gg/your-discord-link" target="_blank" rel="noopener noreferrer">
            <SvgSocial icon-id="discord" />
            <span>Discord</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink href="https://www.instagram.com/forgeplaystudio/" target="_blank" rel="noopener noreferrer">
            <SvgSocial icon-id="instagram" />
            <span>Instagram</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink href="https://forgeplay.itch.io/" target="_blank" rel="noopener noreferrer">
            <SvgSocial icon-id="itch" />
            <span>itch.io</span>
          </NuxtLink>
        </li>
      </ul>
      <ul class="footer-nav__links">
        <li><NuxtLink to="/games">Games</NuxtLink></li>
        <li><NuxtLink to="/about">About Us</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        <li><NuxtLink to="/join-the-test">Join the Test</NuxtLink></li>
      </ul>
      <NuxtLink class="footer-logo wrapper-grid" to="/">
        <AppLogo />
      </NuxtLink>
      <div class="footer-bottom">
        <p>
          <span>&copy; {{ new Date().getFullYear() }} ForgePlay Studio</span>
          <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
          
        </p>
        <p>Made with ❤️ by <NuxtLink to="https://readthefmanual.it/" external>Laura Paveglio </NuxtLink>(design) & <NuxtLink to="https://strongale.it" external>StrongAle</NuxtLink> (development)</p>
      </div>
    </nav>
    
  </footer>
</template>

<style scoped>
@reference 'assets/css/main.css';
.footer-nav{
  @apply wrapper-grid;
  ul{
    @apply flex items-center justify-center gap-8 xl:gap-10;
    &.footer-nav__social {
      @apply xl:gap-28 bg-yellow text-transparent text-stroke-background text-stroke-[2px] text-[2.5rem] font-bold py-10;
      
        a {
          @apply flex items-center gap-2 hover:text-background transition-colors duration-200;
          svg {
            @apply w-10 h-10 text-background;
          }
        }
      
    }
    &.footer-nav__links {
      @apply text-lg mt-16 mb-10;
      li {
       
        a {
          @apply hover:text-orange transition-colors duration-200;
        }
      }
    }
    
  }
  .footer-bottom{
    @apply flex justify-between items-center py-12;
    
      a {
        @apply hover:text-orange transition-colors duration-200 underline;
      }
      span {
        @apply inline-block pr-4 mr-4 border-r border-foreground;
      }
    
  }
  .footer-logo {
    @apply pb-20 border-b-2 border-foreground text-foreground;
  }
}

</style>