<script lang="ts" setup>
import type { PersonCollectionItem } from '@nuxt/content';

const { data } = await useAsyncData('team', () => {
  return queryCollection('person').all();
});
const selectedPerson = ref(null as number | null);

</script>

<template>
  <section v-if="data">
    <div class="team-bg" :class="{'active': selectedPerson !== null}">
      <NuxtImg src="/team/team_background.png" alt="Team background" class="team-bg_bg w-full h-auto" />
      <div v-if="typeof selectedPerson !== 'number'" class="team-preview">
        <div 
        v-for="person in data" 
        :key="person.slug" >
          <NuxtImg 
          
          :src="person.image || `/team/${person.slug}.png`" 
          alt=""
          aria-hidden="true"
          class="flex-1 basis-auto"
          />
        </div>
        
      </div>
      <AboutTeamMember v-else :person="(data[selectedPerson] as PersonCollectionItem)" class="md:absolute  md:inset-10 xl:inset-20" />
    </div>
    <div class="team-menu">
      <h3 class="text-3xl lg:text-4xl font-bold my-4">Select a Character</h3>
      <ul class="grid gap-2 sm:gap-4 justify-center grid-cols-3 sm:grid-cols-6 ">
        <li 
        v-for="person, index in data" 
        :key="person.slug" 
        class="cursor-pointer aspect-square  hover:bg-orange-200 rounded-lg pt-2 overflow-hidden"
        :class="{'bg-orange': selectedPerson === index, 'bg-white': selectedPerson !== index}"
        @click="selectedPerson = index"
        >
          <NuxtImg 
          :src="person.image || `/team/${person.slug}.png`" 
          :alt="person.name"
          
          class="w-full h-auto max-w-36"
          />
          
        </li>
      </ul>
    </div>
   
    
  </section>
</template>

<style scoped>
@reference 'assets/css/main.css';
.team-bg {
 @apply md:aspect-video overflow-hidden rounded-2xl bg-[#383641] relative ;
 img{
  @apply w-full h-auto transition-all duration-500 ease-in-out;
 }
 &.active {
  @apply bg-[#383641]/50;
  .team-bg_bg{
    @apply opacity-50 blur-sm scale-150;
  }
  
 }
 @media (max-width: 767px) {
  @apply aspect-auto max-h-[50vw] h-full transition-all duration-1000 ease-in-out overflow-hidden;
  .team-bg_bg{
    @apply absolute inset-x-0 top-0 w-full h-auto;
  }
  &.active {
    @apply max-h-[100vh];
    
  }
 }
}
.team-preview {
  @apply relative md:absolute max-w-full max-md:p-4 md:inset-1/7 flex items-center justify-center gap-1 md:gap-4;
  
  
}
.team-menu {
  @apply w-max mx-auto md:-translate-y-3/5 max-w-full mb-10;
}
</style>