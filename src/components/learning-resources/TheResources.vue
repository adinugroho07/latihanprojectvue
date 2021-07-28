<template>
  <base-card>
    <!-- 
  <base-button> -> adalah component yang di dalam nya adalah element <button> tapi kita tidak define fungsi untuk di berikan
  v-on/@, kita hanya membuat type pada button ini dinamis dengan v-bind pada attribute type di button. tapi jika kita ingin menambahkan
  fungsin onclick/@clik kita bisa difine kan pada component yang memanggil component base-button tersebut. 
  contoh nya adalah seperti di bawah ini. fungsi -> @click="setSelectedTab('stored-resource')" di define pada component yang memanggil component base-button
  oleh karena itu vue js akan membuat fungsi onclick/@clik itu ada pada component base-button, sehingga component base-button ini jadi dinamis.
  -->
    <base-button
      @click="setSelectedTab('stored-resource')"
      :mode="storedResButtonMode"
      >Stored Resource</base-button
    >
    <base-button
      style="margin-left: 5px"
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add Resource</base-button
    >
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </base-card>
</template>
<script>
import StoredResource from './StoredResources.vue';
import AddResource from './AddResource.vue';
import BaseButton from '../UI/BaseButton.vue';

export default {
  components: {
    StoredResource,
    AddResource,
    BaseButton,
  },
  data() {
    return {
      selectedTab: 'stored-resource',
      storedResource: [
        {
          id: 'official-guidevue',
          title: 'official-guide Vue Js',
          description: 'The Official guide for Vue.js Documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'official-guidegoogle',
          title: 'official-guide Google',
          description: 'Learn To Google First',
          link: 'https://google.com',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResource,
      /* 
      method di bawah ini akan di panggil pada child dengan cara di provide pada parent dan di inject pada child
      */
      addResource: this.addResource,
      deleteResource: this.deleteResource,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resource' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const tempObjt = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResource.unshift(tempObjt);
      this.selectedTab = 'stored-resource';
    },
    deleteResource(idRes) {
      const index = this.storedResource.findIndex((res) => res.id === idRes);
      this.storedResource.splice(index, 1);
    },
  },
};
</script>