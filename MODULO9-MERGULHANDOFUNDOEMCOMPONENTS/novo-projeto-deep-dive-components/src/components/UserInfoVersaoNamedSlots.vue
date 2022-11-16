<template>
        <base-card> <!-- VERSÃO COM MÚLTIPLOS SLOTS NO 'HOC'... -->

        <template v-slot:header-slot> <!-- DEVEMOS WRAPPAR COM 'TEMPLATE' cada parte que queremos inserir em cada slot no HOC...-->
        <header> <!-- DEVEMOS TAMBÉM ADICIONAR A DIRECTIVE DE 'v-slot' AO TEMPLATE TAG que wrappa nosso conteúdo, para COMUNICAR AO VUE 'esse é o SLOT em que quero INSERIR ESSE CONTEÚDO QUE ESSE TEMPLATE WRAPPOU....'-->
            <h3> {{ fullName }}</h3>
            <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
        </header>
    </template>
    <template v-slot:content-slot >
        <p>{{ infoText }}</p>
    </template>
    </base-card>

</template>



<script>


export default {
    props: ['fullName', 'infoText', 'role'],
    data() {
        return {

        }
    }
}
</script>





<style>
section {
    margin: 2rem auto;
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
}

section div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
