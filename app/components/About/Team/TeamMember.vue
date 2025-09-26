<script lang="ts" setup>
import type { PersonCollectionItem } from '@nuxt/content';
import type { TIconId } from '~/components/Svg/Social.vue';


defineProps<{
  person: PersonCollectionItem
}>()

</script>

<template>
  <div class="team-member">
    <div class="content-col">
      <header class="member-header">
      <h3 class="title">{{ person.name }}</h3>
      <p class="role">{{ person.role }}</p>
      </header>
      <div class="info-group">
        <h4>Links</h4>
        <ul class="flex gap-2 social-links">
        <li v-for="link in person.social" :key="link.url">
          <a :href="link.url" target="_blank" rel="noopener noreferrer" class="flex items-center w-12 h-12 justify-center rounded-md border-yellow border hover:bg-yellow hover:text-background transition-colors">
            <span class="sr-only">{{ link.platform_name }}</span>
            <SvgSocial :icon-id="(link.platform_id as TIconId)" />
          </a>
        </li>
      </ul>
    </div>
    </div>
    <div class="image-col">
      <NuxtImg 
        :src="person.image || `/team/${person.slug}.png`" 
        :alt="person.name"
        class="w-full h-auto overflow-hidden"
      />
    </div>
    <div class="content-col">
      <div class="info-group">
        <h4>Skills</h4>
        <ul>
          <li v-for="skill in person.skills" :key="skill" class="">{{ skill }}</li>
        </ul>
      </div>
      <div class="info-group">
        <h4>Weapons</h4>
        <ul>
          <li v-for="weapon in person.weapons" :key="weapon" class="">{{ weapon }}</li>
        </ul>
      </div>
    </div>
    
  </div>
</template>
<style scoped>
@reference 'assets/css/main.css';
.team-member {
  @apply grid grid-cols-2 md:grid-cols-3 max-md:grid-flow-row-dense;

}
.content-col{
  @apply flex flex-col gap-6;
}
.image-col{
  @apply max-md:row-span-2;
  
}
.member-header{
  @apply mb-6 pl-16 relative pt-3;
  &::before{
    content: '';
    @apply w-16 h-16 bg-white block absolute left-0 rounded-md inset-y-0 my-auto z-10;
    filter: drop-shadow(2px 2px 5px --alpha(var(--color-brown-950) / 70%));
  }
  h3{
    @apply text-2xl pl-2 bg-white text-background font-bold uppercase rounded-r-md bg-gradient-to-br from-neutral-200 to-orange-100;
    filter: drop-shadow(5px 5px 10px --alpha(var(--color-brown-950) / 70%));
    box-shadow:
      inset 0 -4px 1px --alpha(var(--color-neutral-500) / 20%),
      inset 0 4px 1px --alpha(var(--color-white) / 80%);
  }
  p{
    @apply text-lg pl-2 z-10 relative mt-1;
  }
}
.info-group{
  @apply mb-4;
 
  h4{
    @apply text-lg  bg-orange-100 text-background font-bold uppercase rounded-r-md relative pl-12 bg-gradient-to-br from-neutral-200 to-orange-100;
    filter: drop-shadow(5px 5px 10px --alpha(var(--color-brown-950) / 70%));
    box-shadow:
      inset 0 -4px 1px --alpha(var(--color-neutral-500) / 20%),
      inset 0 4px 1px --alpha(var(--color-white) / 80%);
     &::before{
      content: '';
      @apply w-10 h-10 bg-white block absolute left-0 rounded-md inset-y-0 my-auto;
      filter: drop-shadow(2px 2px 5px --alpha(var(--color-brown-950) / 70%));
    }
  }
  ul{
    @apply ml-12 mt-4;
    &:not(.social-links){
      li{
        @apply px-2 py-1 rounded-md border-orange-100 border bg-[#2A2A3A]/50 mb-2;
      }
    }
  }
  
}

</style>