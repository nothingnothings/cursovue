<template>

    <header>
        <h1>More on Vue Components</h1>
    </header>
</template>



<script>


export default {


    data() {
        return {

        }
    }
}
</script>





<style scoped> 
header {
    /* 'scoped' É O ATTRIBUTE QUE VOCê COLOCA NA TAG DE 'STYLE', SE VOCê DESEJA QUE ESSES STYLES DEFINIDOS AQUI __ SEJAM __ SCOPADOS APENAS A ESSE COMPONENT EM SI (ou seja, não serão repassados ao app inteiro)... NEM MESMO OS child, nem mesmo os SIBLING COMPONENTs, RECEBERÃO ESSE STYLE..  */
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #14005e;
}

header h1 {
    color: white;
    margin: 0;
}
</style>
