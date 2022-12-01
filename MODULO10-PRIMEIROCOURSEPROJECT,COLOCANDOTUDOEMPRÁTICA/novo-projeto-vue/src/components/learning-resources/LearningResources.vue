<template>
    <ul>
        <ResourceItem v-for="resource in storedResources"
         :key="resource.id" 
         :title="resource.title"
         :description="resource.description"></ResourceItem>
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
  
<style>

</style>
  