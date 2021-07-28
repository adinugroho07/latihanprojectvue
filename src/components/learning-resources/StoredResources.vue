<template>
  <ul>
    <learning-resource
      v-for="item in resources"
      :key="item.id"
      :objresource="item"
    ></learning-resource>
  </ul>
</template>
<script>
import LearningResource from './LearningResource.vue';

export default {
  components: {
    LearningResource,
  },
  inject: ['resources'],
  data() {
    return {};
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>