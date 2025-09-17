<script lang="ts" setup>
import type { TIconId } from '~/components/Svg/Social.vue';

const { data } = await useAsyncData('team', () => {
  return queryCollection('person').all();
});
const hideperson = false;
</script>

<template>
  <section>
    <div class="team-bg">
      <NuxtImg src="/team/team_background.png" alt="Team background" class="w-full h-auto" />
    </div>
    <div v-if="hideperson">
      <div v-for="person in data" :key="person.slug">
        <h3 class="text-2xl font-bold mb-2">{{ person.name }}</h3>
        <ul>
          <li v-for="link in person.social" :key="link.url">
            <a :href="link.url" target="_blank" rel="noopener noreferrer">
              {{ link.platform_name }}
              <SvgSocial :icon-id="(link.platform_id as TIconId)" />
            </a>
          </li>
        </ul>
        <NuxtImg :src="person.image || `/team/${person.slug}.png`" :alt="`Pixel art portrait of ${person.name}`" />
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>

</style>