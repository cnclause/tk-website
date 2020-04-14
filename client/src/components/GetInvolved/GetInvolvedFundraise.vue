<template>
    <div class="get-involved-fundraise">
        <v-card outlined class="get-involved-fundraise-card" flat>
            <div class="get-involved-fundraise-title-container">
                <img class="get-involved-fundraise-icon-img" src="https://lh3.googleusercontent.com/zrvNux4QmUqQee5QKFTc4IBn3sTB64c6J8OdJqS49En3EFxw_ZeHi85iVeKXKhemaTBdcuYCR-AzA8nO0hj1-DLajtqcjw3t2X4zDS39OWrWTka9WjuqZhFrMes5Dw3egcnruAOzRprV6bPHcJ7XIFKy1NEAmXS1ycxQio2IIYtHsois6bL0EWVMaq8K8spXjWZQ0mxkF0xurd5u1XWbJ988oazfiauYAlkiikQrIXm8Eya0gbo2FYNL1zz3GVitZABU9ggyTaVlLpU3DmqFWUV1LCBnyVJ4hQbxRy7TaONOZL6JjMkkzHi0qHVBAaUgJunKR0HSs72jvgqFu8LsWmOKVEZW8F5U18n7t_cXQwKpNF7Mq7PuMVlxo9jhWF6QruZiULLQluEIF-jI1Ye7oIhdpRc_m48pP6nqtVRorUF5Q6_C7Ea9MZ4CcUc3xSoiK2PVAvZyvTP2l2r5o3EXda5Z-NMYLVJMSBym3Q618kv8Y6-gDhAVSge6bSjjvfaS6nGxEPxcxWMrC0S7PHGEqvig7dQ0BYRtFzJ0Nf2N4x5T2fvKK3BDkbfWphj_6HZOe5sBuOA54iZqNCFeC25MtIEI8mldycKWhbyQ16sSyjRZscyQ_s55dOLOeBIRPko8kxIn5cB6z0t0QP0yg_2mAza7EbmD7baZFBHEKa2JMA8r162FnzTLJ5CDBMukPGPBTpN1PY5Y1mJ3K5oohrkgg3A6pS4_YRUFG6RfpQbl3QAf496XB8iOAI4=s128-no"/> 
                <h1 class="get-involved-fundraise-title" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> Fundraise</h1>
            </div>
            <div class="get-involved-fundraise-info">
                <p class="get-involved-fundraise-info-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <v-btn> Fundraise </v-btn>
            </div>
        </v-card>
    </div>
</template>

<style>
    .get-involved-fundraise{
        width: 80%;
        display: flex;
        justify-content: center;
        margin-top: 3rem;
    }

    .get-involved-fundraise-card{
        width: 40%;
    }

    .get-involved-fundraise-title-container{
        display: flex;
        justify-content: space-between;
    }

    .get-involved-fundraise-title{
        text-transform: uppercase;
        margin-right: 5rem;
        margin-top: 2.5rem;
        font-size: 25pt !important;
        letter-spacing: 0.5rem !important;
    }

    .get-involved-fundraise-icon-img{
        width: 7rem;
        height: 7rem;
        margin: 1rem;
    }

    .get-involved-fundraise-info{
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 90%;
    }

    
</style>