<template>
    <base-card>
        <!-- <base-button @click="setSelectedTab('learning-resources')" :disabled="this.selectedTab === 'learning-resources'">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :disabled="this.selectedTab === 'add-resource'">Add Resource</base-button> -->
        <base-button @click="setSelectedTab('learning-resources')" :disabled="learningResourcesMode">Stored
            Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :disabled="addResourcesButtonMode">Add
            Resource</base-button>
    </base-card>
    <!-- <LearningResources v-if="selectedTab === 'resource-list'"></LearningResources>
    <AddResource v-if="selectedTab === 'add-resource'"></AddResource> -->

    <KeepAlive>
        <component :is="selectedTab"></component>
    </KeepAlive>
</template>





<script>

import LearningResources from '../learning-resources/LearningResources.vue';
import AddResource from '../AddResource/AddResource.vue';


export default {


    provide() {


        return {
            storedResources: this.storedResources,
            addResource: this.addResource,
            removeResource: this.removeResource
        }
    },

    components: {
        AddResource,
        LearningResources
    },
    data() {
        return {
            selectedTab: 'learning-resources',

            storedResources: [

                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official VueJS documentation.',
                    link: 'https://vuejs.org'
                },

                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn to Google...',
                    link: 'https://google.com'
                }

            ]

        }
    },


    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },

        addResource(title, description, link) {
            this.storedResources.push(
                {
                    title: title,
                    description: description,
                    link: link,
                    id: Math.random().toString()
                }
            )
            this.selectedTab = 'learning-resources'
        },
        removeResource(id) {

            // this.storedResources = this.storedResources.filter( ///ISSO NÃO FUNCIONA.
            //     (resource) => {
            //         return resource.id !== id
            //     }
            // );

            const itemIndex = this.storedResources.findIndex(
                res => res.id
            )

            this.storedResources.splice(itemIndex, 1);
            console.log("ENTERED", id, this.storedResources);
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
