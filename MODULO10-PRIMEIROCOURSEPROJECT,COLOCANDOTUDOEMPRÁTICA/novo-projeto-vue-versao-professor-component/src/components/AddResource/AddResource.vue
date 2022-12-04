<template>



    <base-card>
        <form>
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" v-model="userText" required name="title">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea v-model="userDescription" required name="description" rows="4"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input type="url" v-model="userLink" required name="link">
            </div>
            <div>
                <base-button :type="'button'" :mode="'normal'"
                    :disabled="userText === '' || userDescription === '' || userLink === ''"
                    @click="addResource({ title: userText, description: userDescription, link: userLink })">Add
                    Resource</base-button>
            </div>
        </form>
    </base-card>

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