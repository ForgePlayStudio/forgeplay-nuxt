<script lang="ts" setup>
const props = defineProps<{
  value: number;
  unit?: string;
  label?: string;
}>();

const statUnit =  props.unit || "+";
</script>

<template>
  <p class="stats-item text-center">
    <span class="text-9xl font-display font-bold gradient-text-outline text-background">
      <BaseNumberTicker
        :value="value"
        direction="up"
        :duration="1000"
      
        :decimal-places="0"
      
        
        />{{ statUnit }}
    </span>
    <span v-if="label" class="text-lg block">{{ label }}</span>
  </p>
</template>
