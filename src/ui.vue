<script setup>
  const environment = await Agent.environment()

  function login() {
    Agent.login('google')
  }

  function logout() {
    Agent.logout()
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
      <v-container>
        <v-btn @click="logout">Log Out</v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
