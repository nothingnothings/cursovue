<template>



    <button @click="buttonMethod" :type="type" :class="mode === 'flat' ? 'button flat' : 'button'">{{ buttonText }}</button>

</template>



<script>



export default {

    props: ['buttonText', 'buttonMethod', 'mode', 'type'],


    data() {

    }
}

</script>







<style scoped>
button {
    padding: 0.75rem 1.5rem;
    font-family: inherit;
    background-color: #3a0061;
    border: #3a0061;
    color: white;
    cursor: pointer;

}



button:hover,
button:active {
    background-color: #270041;
    border-color: #270041;
}

.flat {
    background-color: transparent;
    color: #3a0061;
    border: none;
}

.flat:hover,
.flat:active {
    background-color: #edd2ff;
}

.button[disabled] {
    background-color: grey;
    cursor: default;
    pointer-events: none;
}
</style>