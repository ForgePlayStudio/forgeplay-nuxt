<script setup lang="ts">
const { data } = await useAsyncData('about_stats', () => {
  return queryCollection('stats').where('groups', 'LIKE', '%"about"%')
    .all();
});
</script>
<template>
    <div v-if="data" class="py-20">
        <StatsGrid :items="data" />
    </div>
</template>
