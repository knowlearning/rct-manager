<script setup>
  import { reactive } from 'vue'
  const { id } = defineProps({ id: String })
  const study = reactive(await Agent.state(id))
</script>

<template>
  <v-text-field
    label="Study Name"
    v-model="study.name"
    variant="outlined"
  />
  <v-textarea
    label="Study Description"
    v-model="study.description"
    variant="outlined"
  />
</template>