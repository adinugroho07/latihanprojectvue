<template>
  <li>
    <base-card>
      <header>
        <h3>{{ objresource.title }}</h3>
        <base-button
          type="button"
          mode="button"
          @click="deleteResource(objresource.id)"
          >Delete</base-button
        >
      </header>
      <p>{{ objresource.description }}</p>
      <nav>
        <a :href="objresource.link" target="_blank">View Resource</a>
      </nav>
    </base-card>
  </li>
</template>
<script>
export default {
  props: {
    objresource: {
      type: Object,
      required: true,
    },
  },
  inject: ['deleteResource'],
};
</script>
<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>