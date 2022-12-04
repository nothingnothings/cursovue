<template>




    <form>
        <div>
            <label for="title">Title</label>
            <input type="text" v-model="userText" required>
        </div>
        <div>
            <label for="description">Description</label>
            <input type="text" v-model="userDescription" required>
        </div>
        <div>
            <label for="link">Link</label>
            <input type="text" v-model="userLink" required>
        </div>
        <base-button :type="'button'" 
        :mode="'normal'" 
        :disabled="userText === '' || userDescription === '' || userLink === '' "
            @click="addResource({ title: userText, description: userDescription, link: userLink })">Add Resource</base-button>
    </form>

</template>




<script>

export default {



    inject: [
        'addResource'
    ],


    data() {
        return {

            userText: '',
            userDescription: '',
            userLink: ''
        }
    }
}

</script>




<style scoped>

</style>