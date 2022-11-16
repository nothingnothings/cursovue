<template>

    <!-- <section>
        <h2>Available Badges</h2>
        <ul>
            <li>
                <base-badge type="admin" caption="ADMIN"></base-badge>
            </li>
            <li>
                <base-badge type="author" caption="AUTHOR"></base-badge>
            </li>

        </ul>
    </section> -->



    <base-card>
        <template v-slot:header-slot> <!-- QUEREMOS QUE ISSO VÁ PARA DENTRO DO NAMED SLOT de 'header-slot', lá em 'BaseCardNamedSlots.vue'-->
        <h2>Available Badges</h2>
    </template>
    <template v-slot:default> <!-- COM ISSO, DEFINIMOS QUE O RESTO DESSE CONTEÚDO, wrappado por esse template, deverá ir para dentro do UNNAMED SLOT lá no interior de 'BaseCardNamedSlots'-->
        <ul>
            <li>
                <base-badge type="admin" caption="ADMIN"></base-badge>
            </li>
            <li>
                <base-badge type="author" caption="AUTHOR"></base-badge>
            </li>

        </ul>
    </template>
    </base-card>


</template>



<script>


export default {


    data() {
        return {

        }
    }
}
</script>





<style>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
}

li {
    margin-right: 1rem;
}
</style>
