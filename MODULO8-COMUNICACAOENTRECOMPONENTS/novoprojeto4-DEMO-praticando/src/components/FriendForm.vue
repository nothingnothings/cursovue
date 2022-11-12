<template>
    <!-- versão que usa 'button type button' e então executa o method... -->
    <!-- <form> -->
        <!-- <input type="text" v-model="name" placeholder="Your Name"> -->
        <!-- <input type="email" v-model="email" placeholder="Your Email">
        <input type="email" v-model="phoneAddress" placeholder="Your Phone Address"> -->
        <!-- <div>
            <label for="name">Name</label>
            <input type="text" ref="name" placeholder="Your Name">
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" ref="email" placeholder="Your Email">
        </div>
        <div>
            <label for="phone">Phone</label>
            <input type="tel" ref="phone" placeholder="Your Phone Address">
        </div>
        <button type="button" @click="addFriend">Add Friend</button>
    </form> -->


    <!-- versão que usa 'button type submit' e então PREVINE O DEFAULT e __SÓ ENTÃO__ executa o method... -->
    <form @submit.prevent="addFriend">
        <!-- <input type="text" v-model="name" placeholder="Your Name"> -->
        <!-- <input type="email" v-model="email" placeholder="Your Email">
        <input type="email" v-model="phoneAddress" placeholder="Your Phone Address"> -->
        <div>
            <label for="name">Name</label>
            <input type="text" ref="name" placeholder="Your Name">
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" ref="email" placeholder="Your Email">
        </div>
        <div>
            <label for="phone">Phone</label>
            <input type="tel" ref="phone" placeholder="Your Phone Address">
        </div>
        <button type="submit">Add Friend</button>
    </form>

</template>
  
<script>
export default {

    props: ['add-friend'],

    emits: {

    },


    data() {
        return {
            // name: '',
            // email: '',
            // phoneAddress: ''
        };
    },
    methods: {


        addFriend() {

            this.$emit('add-friend', { name: this.$refs.name.value, email: this.$refs.email.value, phone: this.$refs.phone.value })
        },

        removeFriend(id) {
            this.$emit('remove-friend', id)
        }
    }
};
</script>