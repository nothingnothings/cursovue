<template>
    <base-dialog v-if="inputIsInvalid" :title="'Invalid Input'" @closeDialog="confirmError">
        <template #default> <!--TARGETTAMOS ESSE SLOT DEFAULT... -->
            <p>Unfortunately, at least one input value is invalid.</p>
            <p>Please check all inputs and make sure you enter at least a few characters into each input field.</p>
        </template>
        <template #menuSlot>
            <base-button @click="confirmError">Okay</base-button>
        </template>
    </base-dialog>
    <base-card>
        <!-- VERSÃO COM V-MODEL -->
        <!-- <form>
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
        </form> -->

        <!-- VERSÃO COM REF... -->
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <!-- <input type="text" ref="userText" required name="title"> -->
                <input type="text" ref="userText" name="title">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <!-- <textarea ref="userDescription" required name="description" rows="4"></textarea> -->
                <textarea ref="userDescription" name="description" rows="4"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <!-- <input type="url" ref="userLink" name="link"> -->
                <input type="url" ref="userLink" name="link">
            </div>
            <div>
                <base-button :type="'submit'" :mode="'normal'"
                    :disabled="userText === '' || userDescription === '' || userLink === ''">Add
                    Resource</base-button>
            </div>
        </form>
    </base-card>

</template>

<!-- @click="addResource({ title: userText, description: userDescription, link: userLink })" -->


<script>

export default {
    inject: [
        'addResource'
    ],
    data() {
        return {

            // userText: '',
            // userDescription: '',
            // userLink: ''
            inputIsInvalid: false
        }
    },


    methods: {
        submitData() {
            const enteredTitle = this.$refs.userText.value;
            const enteredDesc = this.$refs.userDescription.value;
            const enteredUrl = this.$refs.userLink.value;

            if (enteredTitle.trim() === '' ||
                enteredDesc.trim() === '' ||
                enteredUrl.trim() === ''
            ) {
                console.log("ENTERED");
                this.inputIsInvalid = true;
                return;
            }


            this.addResource(enteredTitle, enteredDesc, enteredUrl);
        },

        confirmError() {
            this.inputIsInvalid = false;
        },
        // addResource(formData) {
        //     this.storedResources.push(
        //         {
        //             ...formData,
        //             id: Math.random().toString()
        //         }
        //     )
        //     this.selectedTab = 'learning-resources'
        // },


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