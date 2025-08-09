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
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div v-for="(item, index) in items" :key="index" class="card">
      <NuxtImg :src="`/images/icons/${item.icon}`" alt="" class="w-12 h-12 mb-4" />
      <h3 class="text-lg font-semibold text-yellow">{{ item.title }}</h3>
      <p >{{ item.description }}</p>
    </div>
    
  </div>
</template>

<style lang="postcss" scoped>

</style>