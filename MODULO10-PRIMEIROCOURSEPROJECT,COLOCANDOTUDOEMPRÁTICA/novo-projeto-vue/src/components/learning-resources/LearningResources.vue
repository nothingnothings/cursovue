<template>
    <ul>
        <ResourceItem v-for="resource in storedResources" :key="resource.id"></ResourceItem>
    </ul>
</template>
  
<script>

import ResourceItem from './ResourceItem/ResourceItem.vue'

export default {


    components: { ResourceItem },

    data() {
        return {
        }
    }
}
</script>
  
<style>

</style>
  