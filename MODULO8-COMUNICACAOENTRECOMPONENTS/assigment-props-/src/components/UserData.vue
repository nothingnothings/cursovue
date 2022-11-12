<template>

    <form @submit.prevent="sendData">
        <div>
            <label for="name" placerholder="Your Name">Name</label>
            <input type="text" v-model="name" placeholder="Your Age">
        </div>
        <div>
            <label for="age">Age</label>
            <input type="number" v-model="age">
        </div>
        <button type="submit">CHANGE DATA</button>
    </form>



</template>


<script>
export default {
    data() {
        return {
            name: '',
            age: ''
        }
    },

    methods: {
        sendData() {
            this.$emit('add-user-data', { name: this.name, age: +this.age })  ///+alguma coisa --> CONVERTE UMA STRING EM UM NUMBER...
        }
    }
}

</script>


<style>

</style>


