<script setup>
  import { reactive } from 'vue'
  import TagManager from './tag-manager.vue'

  const { id } = defineProps({ id: String })
  const study = reactive(await Agent.state(id))

  const STUDY_BUCKET_TAG = 'f0120320-a30d-11f0-82b1-eb4c2023eb1c'
  const STUDY_CONTEXT = [ id ]
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
  <TagManager
    :tag="STUDY_BUCKET_TAG"
    :context="STUDY_CONTEXT"
    input-label="Add New Bucket Tag"
  />

</template>