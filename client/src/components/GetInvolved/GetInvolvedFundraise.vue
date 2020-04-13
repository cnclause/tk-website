<template>
    <div class="get-involved-fundraise">
        <v-card outlined class="get-involved-fundraise-card" flat>
            <h1 class="get-involved-fundraise-title" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> Fundraise</h1>
        </v-card>
    </div>
</template>

<style>
    .get-involved-fundraise{
        width: 80%;
        display: flex;
        justify-content: center;
    }

    .get-involved-fundraise-card{
        width: 40%;
    }

    .get-involved-fundraise-title{
        text-transform: uppercase;
    }
</style>