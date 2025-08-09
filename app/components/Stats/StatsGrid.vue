<script lang="ts" setup>
defineProps<{
  items: {
    value: number;
    unit?: string;
    label?: string;
  }[];
}>();
</script>

<template>
  <div class="stats-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <StatsItem
      v-for="(item, index) in items"
      :key="`stat-${index}`"
      :value="item.value"
      :label="item.label"
      :unit="item.unit"
    />
    
  </div>
</template>

<style lang="postcss" scoped>

</style>