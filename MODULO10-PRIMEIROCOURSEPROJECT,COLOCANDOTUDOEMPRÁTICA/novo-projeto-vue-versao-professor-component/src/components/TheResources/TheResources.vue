<template>
    <base-card>
        <!-- <base-button @click="setSelectedTab('learning-resources')" :disabled="this.selectedTab === 'learning-resources'">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :disabled="this.selectedTab === 'add-resource'">Add Resource</base-button> -->
        <base-button @click="setSelectedTab('learning-resources')"
            :disabled="learningResourcesMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :disabled="addResourcesButtonMode">Add
            Resource</base-button>
    </base-card>
    <!-- <LearningResources v-if="selectedTab === 'resource-list'"></LearningResources>
    <AddResource v-if="selectedTab === 'add-resource'"></AddResource> -->
    <component :is="selectedTab"></component>
</template>





<script>

import LearningResources from '../learning-resources/LearningResources.vue';
import AddResource from '../AddResource/AddResource.vue';


export default {



    components: {
        AddResource,
        LearningResources
    },
    data() {
        return {
            selectedTab: 'learning-resources'
        }
    },


    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        }
    },

    computed: {
        learningResourcesMode() {
            return this.selectedTab === 'learning-resources';
        },

        addResourcesButtonMode() {
            return this.selectedTab === 'add-resource';
        }
    }
}

</script>





<style>

</style>
