<script setup>
  import { reactive, ref } from 'vue'

  const props = defineProps({
    tag: String,
    context: Array,
    inputLabel: String
  })

  const tags = await Agent.state('tags')
  const taggedEntities = ref()
  const newEntityToTagId = ref()

  const TAG_DOMAIN = 'tags.knowlearning.systems'
  const RCT_PARTITION = 'f74e9cb3-2b53-4c85-9b0c-f1d61b032b3f'

  await refreshTaggedEntities()

  function setTag(tagId, entityId, value) {
    if (!tags[tagId]) tags[tagId] = {}
    tags[tagId][entityId] = {
      partition: RCT_PARTITION,
      value,
      context: props.context
    }
  }

  async function tagEntity() {
    setTag(props.tag, newEntityToTagId.value, true)
    newEntityToTagId.value = ''
    await Agent.response()
    refreshTaggedEntities()
  }

  async function untagEntity(entityId) {
    setTag(props.tag, entityId, null)
    await Agent.response()
    refreshTaggedEntities()
  }

  async function refreshTaggedEntities() {
    taggedEntities.value = await (
      Agent
        .query(
          'taggings-for-tag-in-context',
          [ RCT_PARTITION, props.tag, props.context ],
          TAG_DOMAIN
        )
    )
  }
</script>

<template>
  <v-text-field
    :label="inputLabel"
    v-model="newEntityToTagId"
    @keypress.enter="tagEntity"
    variant="outlined"
  />
  <div v-if="taggedEntities">
    <div
      v-for="taggedEntity in taggedEntities"
      @click="untagEntity(taggedEntity.target)"
    >
      {{ taggedEntity }}
    </div>
  </div>
</template>
