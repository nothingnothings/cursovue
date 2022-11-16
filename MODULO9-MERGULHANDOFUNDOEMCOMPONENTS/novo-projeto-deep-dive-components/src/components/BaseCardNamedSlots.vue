
<template>
    <!-- ESTE É UM COMPONENT QUE SERÁ USADO COMO 'slot' (Terá slots), ou seja, COMO COMPONENT QUE ENVELOPA OUTROS COMPONENTS... É UM HOC/WRAPPER -->
    <div>
        <header> <!-- ESTE É UM EXEMPLO DA FEATURE 'NAMED SLOTS', que é usada quando você quer MÚLTIPLOS SLOTS em um 'hoc'....-->
        <slot name="header-slot"></slot>
    </header>
    <!-- O ATTRIBUTE DE 'name' é OBRIGATÓRIO NOS SEUS SLOTS, QUANDO VOCÊ TEM MAIS DE 1 SLOT...-->
        <slot name="content-slot"></slot>
    </div>
</template>


<script>
export default {

}
</script>


<style scoped>
div {
    margin: 2rem auto;
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
}
</style>