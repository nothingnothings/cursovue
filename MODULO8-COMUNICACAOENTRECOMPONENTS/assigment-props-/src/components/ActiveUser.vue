
<template>
    <div class="active-user">
        <h2>{{ name }}</h2>
        <h3>{{ age }}</h3>
    </div>




</template>




<script>
export default {



    // props: ['name', 'age']

    props: {
        name: {
            type: String,
            required: true
        },

        age: {
            type: Number,
            required: true
        }
    }
}

</script>


<style>
.active-user {
    margin: 2rem auto;
    max-width: 40rem;
    border-radius: 12px;
    border: 1px solid #ccc;
}
</style>


