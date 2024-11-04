<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-html="content"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
  },
};
</script>