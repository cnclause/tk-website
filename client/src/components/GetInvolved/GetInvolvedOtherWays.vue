<template>
    <div class="get-involved-other" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
        <v-card outlined class="get-involved-other-card" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" flat>
            <div class="get-involved-other-title-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" >
                <v-img class="get-involved-other-icon-img" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/amazonIcon.png" contain></v-img> 
                <h1 class="get-involved-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Other Ways to Give</h1>
            </div>
            <div class="get-involved-other-info">
                <p class="get-involved-other-info-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> Shop on <v-btn text color="yellow darken-4" x-large max-width=135 href="https://smile.amazon.com/ch/82-2250118">AmazonSmile</v-btn>, donate on your <v-btn color="yellow darken-4" x-large max-width=80
                 text href="https://socialgood.fb.com/charitable-giving/birthday-fundraiser/">birthday</v-btn>, or include From Roots to Wings on your wedding registry. The possibilities for making a difference are limited only by your creativity and passion. </p>
                <!-- <v-btn class="get-involved-other-btn"> other With Us </v-btn> -->
            </div>
        </v-card>
    </div>
</template>

<style>
    .get-involved-other.large{
        width: 50%;
        display: flex;
        justify-content: center;
        margin: 0pt;
        margin-top: 3rem;
        margin-left: 1rem;
    }

    .get-involved-other.small{
        display: flex;
        justify-items: center;
        margin: 1rem;
        margin-top: 3rem;
        
    }

    .get-involved-other-card.large{
        width: 60%;
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .get-involved-other-card.small{
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .get-involved-other-title-container{
        display: flex;
    }

    .get-involved-other-title-container.small{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    .get-involved-title.subtitle-1{
        line-height: 2.5rem !important;
    }

    .get-involved-other-icon-img.large{
        width: 7rem;
        height: 7rem;
        margin: 1rem;
    }

    .get-involved-other-icon-img.small{
        width: 3rem;
        height: 3rem;
        margin: 1rem;
    }

    .get-involved-other-info{
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 90%;
    }

    .get-involved-other-info-description{
        color: rgba(0, 0, 0, 0.6);
    }

    .get-involved-other-btn{
        margin-bottom: 1rem;
    }
</style>