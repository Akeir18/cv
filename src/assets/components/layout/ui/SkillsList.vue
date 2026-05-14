<script lang="ts" setup>
import type { Skill } from '@/types/skills';
import PunctuationComponent from '../base/PunctuationComponent.vue';


const props = defineProps<{
    title: string,
    skills: Skill[]
}>()

</script>

<template>
    <h2>{{ title }}</h2>
    <ul>
        <li v-for="skill in skills" :key="skill.name">
            <strong>{{ skill.name }}</strong> <punctuation-component :value="skill.level" />
        </li>
    </ul>
</template>

<style scoped lang="scss">
h2 {
    text-wrap: nowrap;
}
ul {
    list-style: none;
    padding-left: $spacing-xs;

    @include responsive('tablet') {
        padding-left: $spacing-md;
    }
    
    li {
        text-wrap: nowrap;
    }

}
</style>