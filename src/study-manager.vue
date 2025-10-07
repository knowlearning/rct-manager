<script setup>
  import { reactive, ref } from 'vue'
  const { id } = defineProps({ id: String })
  const study = reactive(await Agent.state(id))

  const tags = await Agent.state('tags')
  const bucketTags = ref()
  const newBucketTagId = ref()

  const TAG_DOMAIN = 'tags.knowlearning.systems'
  const RCT_PARTITION = 'f74e9cb3-2b53-4c85-9b0c-f1d61b032b3f'
  const STUDY_BUCKET_TAG = 'f0120320-a30d-11f0-82b1-eb4c2023eb1c'
  const STUDY_CONTEXT = [ id ]

  function setTag(tagId, entityId, value) {
    if (!tags[tagId]) tags[tagId] = {}
    tags[tagId][entityId] = {
      partition: RCT_PARTITION,
      value,
      context: STUDY_CONTEXT
    }
  }

  async function addBucketTag() {
    setTag(STUDY_BUCKET_TAG, newBucketTagId.value, true)
    newBucketTagId.value = ''
    await Agent.response()
    refreshBucketTags()
  }

  async function removeBucketTag(tagId) {
    setTag(STUDY_BUCKET_TAG, tagId, null)
    await Agent.response()
    refreshBucketTags()
  }

  async function refreshBucketTags() {
    bucketTags.value = await Agent.query('taggings-for-tag-in-context', [RCT_PARTITION, STUDY_BUCKET_TAG, STUDY_CONTEXT], TAG_DOMAIN)
  }

  await refreshBucketTags()
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
  <v-text-field
    label="Add New Bucket Tag"
    v-model="newBucketTagId"
    @keypress.enter="addBucketTag"
  />
  <div v-if="bucketTags">
    <div
      v-for="bucketTag in bucketTags"
      @click="removeBucketTag(bucketTag.target)"
    >
      {{ bucketTag }}
    </div>
  </div>

</template>