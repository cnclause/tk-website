<template>
    <div class="get-involved-volunteer" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
        <v-card outlined class="get-involved-volunteer-card" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" flat>
            <div class="get-involved-volunteer-title-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" >
                <v-img class="get-involved-volunteer-icon-img" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/volunteerIcon.png" contain></v-img> 
                <h1 class="get-involved-volunteer-title" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> Volunteer</h1>
            </div>
            <div class="get-involved-volunteer-info">
                <p class="get-involved-volunteer-info-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <v-btn class="get-involved-volunteer-btn amber--text" text> Volunteer With Us </v-btn>
            </div>
        </v-card>
    </div>
</template>

<style>
    .get-involved-volunteer.large{
        width: 50%;
        display: flex;
        justify-content: flex-start;
        margin: 0pt;
        margin-top: 3rem;
        margin-left: 1rem;
    }

    .get-involved-volunteer.small{
        display: flex;
        justify-items: center;
        margin: 1rem;
        margin-top: 3rem;
        
    }

    .get-involved-volunteer-card.large{
        width: 60%;
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .get-involved-volunteer-card.small{
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .get-involved-volunteer-title-container{
        display: flex;
    }

    .get-involved-volunteer-title-container.small{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    .get-involved-volunteer-title.body-1{
        text-transform: uppercase;
        margin-right: 5rem;
        margin-top: 2.5rem;
        font-size: 25pt !important;
        letter-spacing: 0.5rem !important;
    }

     .get-involved-volunteer-title.body-2{
        text-transform: uppercase;
        margin-top: 2rem;
        margin-right: 1rem;
        font-size: 18pt !important;
        letter-spacing: 0.5rem !important;
    }

    .get-involved-volunteer-icon-img.large{
        width: 7rem;
        height: 7rem;
        margin: 1rem;
    }

    .get-involved-volunteer-icon-img.small{
        width: 3rem;
        height: 3rem;
        margin: 1rem;
    }

    .get-involved-volunteer-info{
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 90%;
    }

    .get-involved-volunteer-info-description{
        color: rgba(0, 0, 0, 0.6);
    }

    .get-involved-volunteer-btn{
        margin-bottom: 1rem;
        font-size: 14pt !important;
    }
</style>