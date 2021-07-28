<template>
  <div>
    <base-dialog v-if="isValid" title="Invalid Input">
      <template #default>
        <p>Unfortunatley , at least one input value is invalid</p>
        <p>
          Please check all inputs and make sure at least a few characters into
          each input field
        </p>
      </template>
      <template #actions>
        <base-button @click="setOffDialog">Okay</base-button>
      </template>
    </base-dialog>
    <base-card>
      <form @submit.prevent="fromAddResource">
        <div class="form-control">
          <label for="title">Title</label>
          <input type="text" name="title" id="title" ref="title" />
        </div>
        <div class="form-control">
          <label for="description">Description</label>
          <textarea
            name="description"
            rows="3"
            id="description"
            ref="description"
          ></textarea>
        </div>
        <div class="form-control">
          <label for="link">Link</label>
          <input type="url" name="link" id="link" ref="link" />
        </div>
        <div>
          <base-button type="submit">Add Resource</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>
<script>
export default {
  /* 
  ini adalah pemanggilan method yang di provide oleh parent component dengan cara di inject.   
  */
  inject: ['addResource'],
  data() {
    return {
      isValid: false,
    };
  },
  methods: {
    fromAddResource() {
      if (
        this.$refs.title.value.trim() === '' ||
        this.$refs.description.value.trim() === '' ||
        this.$refs.link.value.trim() === ''
      ) {
        this.isValid = true;
        return;
      }
      // ini adalah contoh penggunaan dari pemanggilan method yang ada pada parent lewat inject, karena method addResource
      // hanya ada di parent component
      this.addResource(
        this.$refs.title.value,
        this.$refs.description.value,
        this.$refs.link.value
      );
    },
    setOffDialog() {
      this.isValid = false;
    },
  },
};
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>