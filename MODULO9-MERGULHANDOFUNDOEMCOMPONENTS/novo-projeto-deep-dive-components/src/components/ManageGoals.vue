<template>
    <h2>
        Manage Goals
    </h2>
    <input type="text" ref="userInput">
    <button @click="setGoal">Set Goal</button>
    <error-alert v-if="inputIsInvalid">
        <h2>Input is Invalid!</h2>
        <p>Please enter at least a few characters...</p>
        <button @click="confirmError"></button>
    </error-alert>
</template>


<script>


export default {

    data() {
        return {
            inputIsInvalid: false
        }
    },
    methods: {
        setGoal() {

            const enteredValue = this.$refs.userInput.value;  ///OBTEMOS O VALUE DESSE REF... SE ESSE VALUE FOR EMPTY, QUEREMOS RETORNAR UM ERROR...

            if (enteredValue === '') {
                // alert('Input must not be empty.')
                this.inputIsInvalid = true;
            }

        },

        confirmError() {
            this.inputIsInvalid = false;
        }
    },

    components: [ErrorAlert
    ]
}

</script>