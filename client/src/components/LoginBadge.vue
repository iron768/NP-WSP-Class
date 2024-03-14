<script setup lang="ts">
import { getSession } from "@/viewmodel/session";

const session = getSession();

</script>

<template>
  <div class="button" v-if="session.user">

  </div>
  <div class="buttons" v-else>
      <a class="button is-primary">
        <strong>Sign up</strong>
      </a>
      <a class="button is-light"> Log in </a>
  </div>
</template>

<style scoped></style>
