<template>
    <div class="get-involved-join" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
        <v-card outlined class="get-involved-join-card" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" flat>
            <div class="get-involved-join-title-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" >
                <v-img class="get-involved-join-icon-img" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/JoinUsIcon.png" contain></v-img> 
                <h1 class="get-involved-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Join Our Team</h1>
            </div>
            <div class="get-involved-join-info">
                <p class="get-involved-join-info-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> Become a part of From Roots to Wings by volunteering, applying for an open position or using your skills to help us execute a project. </p>
                <v-btn class="get-involved-join-btn pink--text" to="/join-us" text> Join Our Team </v-btn>
            </div>
        </v-card>
    </div>
</template>

<style>
    .get-involved-join.large{
        width: 50%;
        display: flex;
        justify-content: flex-start;
        margin: 0pt;
        margin-top: 3rem;
        margin-right: 1rem;
    }

    .get-involved-join.small{
        display: flex;
        justify-items: center;
        margin: 1rem;
        margin-top: 3rem;
        
    }

    .get-involved-join-card.large{
        width: 60%;
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .get-involved-join-card.small{
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .get-involved-join-title-container{
        display: flex;
    }

    .get-involved-join-title-container.small{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    .get-involved-join-icon-img.large{
        width: 7rem;
        height: 7rem;
        margin: 1rem;
    }

    .get-involved-join-icon-img.small{
        width: 3rem;
        height: 3rem;
        margin: 1rem;
    }

    .get-involved-join-info{
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 90%;
    }

    .get-involved-join-info-description{
        color: rgba(0, 0, 0, 0.6);
    }

    .get-involved-join-btn{
        margin-bottom: 1rem;
        font-size: 14pt !important;
    }

    
</style>