<script setup>
  import { ref, reactive } from 'vue'
  import { vueScopeComponent } from '@knowlearning/agents/vue.js'
  import StudyManager from './study-manager.vue'

  const environment = await Agent.environment()
  function login() { Agent.login('google') }
  function logout() { Agent.logout() }

  const activeStudy = ref(null)
  const myStudies = reactive(await Agent.state('my-studies'))

  async function addStudy() {
    const id = Agent.uuid()
    const study = await Agent.state(id)
    study.name = 'New Study'
    study.description = 'Your description here...'
    myStudies[id] = {}
    activeStudy.value = id
  }

</script>

<template>
  <v-app>
    <v-main v-if="environment.auth.provider === 'anonymous'">
      <v-container>
        <v-btn @click="login">Login</v-btn>
      </v-container>
    </v-main>
    <v-main v-else>
      <v-toolbar color="primary">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              icon="fa-solid fa-gear"
            >
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(val, studyId) in myStudies"
              @click="activeStudy = studyId"
              :key="`select-study-${studyId}`"
            >
              <v-list-item-title>
                <vueScopeComponent :id="studyId" :path="['name']" />
              </v-list-item-title>
            </v-list-item>
            <v-divider class="mt-2"></v-divider>
            <v-list-item
              @click="addStudy"
            >
              <v-list-item-title>
                Create Study
              </v-list-item-title>
            </v-list-item>



          </v-list>
        </v-menu>
        <v-toolbar-title>
          RCT Randomization Manager
        </v-toolbar-title>
        <v-spacer />
        <v-btn
          @click="logout"
          append-icon="fa-solid fa-arrow-right-from-bracket"
        >
          Logout
        </v-btn>
      </v-toolbar>
      <v-container>
        <StudyManager
          v-if="activeStudy"
          :id="activeStudy"
          :key="activeStudy"
        />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
