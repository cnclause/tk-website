<template>
    <div class="get-involved-fundraise" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
        <v-card outlined class="get-involved-fundraise-card" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" flat>
            <div class="get-involved-fundraise-title-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" >
                <v-img class="get-involved-fundraise-icon-img" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/stackcoinsicon.png" contain></v-img> 
                <h1 class="get-involved-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Fundraise</h1>
            </div>
            <div class="get-involved-fundraise-info">
                <p class="get-involved-fundraise-info-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> As a 501(c)(3) organization, FRW relies on grants, donations and fundraisers. You can help us by volunteering or hosting a fundraising event. </p>
                <v-btn class="get-involved-fundraise-btn green--text" text> Fundraise With Us </v-btn>
            </div>
        </v-card>
    </div>
</template>

<style>
    .get-involved-fundraise.large{
        width: 50%;
        display: flex;
        justify-content: flex-end;
        margin: 0pt;
        margin-top: 3rem;
        margin-right: 1rem;
    }

    .get-involved-fundraise.small{
        display: flex;
        justify-items: center;
        margin: 1rem;
        margin-top: 3rem;
        
    }

    .get-involved-fundraise-card.large{
        width: 60%;
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .get-involved-fundraise-card.small{
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .get-involved-fundraise-title-container{
        display: flex;
    }

    .get-involved-fundraise-title-container.small{
        display: flex;
        justify-content: space-evenly;
    }

    .get-involved-fundraise-icon-img.large{
        width: 7rem;
        height: 7rem;
        margin: 1rem;
    }

    .get-involved-fundraise-icon-img.small{
        width: 3rem;
        height: 3rem;
        margin: 1rem;
    }

    .get-involved-fundraise-info{
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 90%;
    }

    .get-involved-fundraise-info-description{
        color: rgba(0, 0, 0, 0.6);
    }

    .get-involved-fundraise-btn{
        margin-bottom: 1rem;
        font-size: 14pt !important;
    }

    
</style>