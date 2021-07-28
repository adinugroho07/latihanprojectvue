<template>
  <div>
    <the-header title="Resource Application"></the-header>
    <the-resource></the-resource>
  </div>
</template>

<script>
import TheResource from './components/learning-resources/TheResources.vue';
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheResource,
    TheHeader,
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>