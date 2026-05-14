<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const props = defineProps<{
    value: number
}>()

const maxLevel    = 5;
const emptyStars  = maxLevel - props.value;
const filledStars = props.value > maxLevel ? maxLevel : props.value;
</script>

<template>
    <icon :icon="'mdi:star'" v-for="i in filledStars" :key="i" />
    <icon :icon="'mdi:star-outline'" v-for="i in emptyStars" :key="i" />
</template>