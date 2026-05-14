<script lang="ts" setup>
import SkillsList from '@/assets/components/layout/ui/SkillsList.vue';
import MainLayout from '@/assets/layouts/MainLayout.vue';
import CVService from '@/services/CVService';
import type { Skill } from '@/types/skills';
import { onMounted, ref } from 'vue';

const softSkills = ref<Skill[]>([]);
const hardSkills = ref<Skill[]>([]);

onMounted(async () => {
  try {
    softSkills.value = await CVService.getSoftSkills();
    hardSkills.value = await CVService.getHardSkills();
  } catch (error) {
    console.error("Error al cargar habilidades blandas:", error);
  }
});
</script>


<template>
  <main-layout>
    <section>
      <skills-list title="Habilidades Blandas" :skills="softSkills" />
    </section>
    <section>
      <skills-list title="Habilidades Técnicas" :skills="hardSkills" />
    </section>
  </main-layout>
</template>

<style scoped></style>
