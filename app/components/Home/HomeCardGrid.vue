<script lang="ts" setup>
import { NuxtImg } from '#components';

  const items = [
    {
      icon: 'design.svg',
      title: 'Design',
      description: 'Lorem ipsum dolor sit amet consectetur. Volutpat nullam enim in neque id nam. ',
    },
    {
      icon: 'development.svg',
      title: 'Development',
      description: 'Lorem ipsum dolor sit amet consectetur. Volutpat nullam enim in neque id nam. ',
    },
    {
      icon: 'baloon.svg',
      title: 'Storytelling',
      description: 'Lorem ipsum dolor sit amet consectetur. Volutpat nullam enim in neque id nam. ',
    },]

</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 md:max-lg:gap-4 gap-6">
    <div v-for="(item, index) in items" :key="index" class="card glass">
      
      <div class="flex flex-col gap-4">
        <NuxtImg :src="`/images/icons/${item.icon}`" alt="" class="w-20 h-20" />
        <h3 class="text-lg font-semibold text-yellow">{{ item.title }}</h3>
        <p >{{ item.description }}</p>
      </div>
      <SvgNoiseBg class="p-0 rounded-[inherit] opacity-10" />
    </div>
    
  </div>
</template>
