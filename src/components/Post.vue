<template>
  <div>
    <h2>{{ title }}</h2>
    <div v-html="content"></div> <!-- Use v-html to render markdown -->
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Define props using the Composition API
const props = defineProps({
  title: String,
  content: String,
});
</script>