<template>
    <ul>
        <ResourceItem v-for="res in storedResources" 
        :key="res.id" :title="res.title" 
        :description="res.description"
        :id="res.id"
            :link="res.link"></ResourceItem>
    </ul>
</template>
  
<script>

import ResourceItem from './ResourceItem/ResourceItem.vue'

export default {

    props: ["storedResources"],
    components: { ResourceItem },

    data() {
        return {


        }
    }
}
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
  