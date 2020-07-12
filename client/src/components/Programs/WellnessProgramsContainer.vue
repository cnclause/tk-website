<template>
    <div class="program-proj-container">
        <h1 class=" wellness-heading programs-heading" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Health and Wellness </h1>
        <div class="each-prog-proj-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
            <div class="prog-proj-info yoga-info" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <h1 class="each-proj-prog-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Yoga </h1>
                <p class="proj-prog-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> Every Saturday, Showdy, Co-Founder of FRW, hosts a free yoga class at the FRW office in Port-au-Prince. Approximately 30 children from the local community participate. At the conclusion of the session, a small lunch is provided along with other recreational activities such as coloring, reading, and sports. The goal of this program is to provide a platform to obtain necessary resources in managing stress, raise awareness of yoga and meditation, and escape their daily lives. <v-btn text max-width=90 color="yellow darken-4" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" to="/donate">Click here </v-btn> to support our yoga program! </p>
            </div>
            <div class="proj-prog-img-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <v-img clas="program-img" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/Yoga-Yellow-bow-pose.jpg" eager>
                </v-img>
            </div>
        </div>
        <div class="each-prog-proj-container womens-health" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
            <div class="proj-prog-img-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <v-img clas="program-img" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/DaysforGirlsProgram-womanleading.jpg" eager>
                </v-img>
            </div>
            <div class="prog-proj-info womens-heath-description" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <h1 class="each-proj-prog-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Women's Health and Sex Eduation </h1>
                <p class="proj-prog-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> Seminars are held annually to educate the public of Haiti on reproductive, menstrual, and sexual health. Approximately 30 women and 15 men of all ages typically attend. FRW provides food and refreshments at the end of each seminar. Some women are also given menstruation kits provided by our partner organization, Days for Girls. <v-btn text max-width=90 color="yellow darken-4" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" to="/donate">Click here </v-btn> to support our women’s health program!  </p>
            </div>
        </div>
        <v-divider class="proj-prog-divider"></v-divider>
    </div>
</template>

<style>

.projects-container{
    margin-top: 2rem;
    display: flex;
    flex-flow: column;
    align-items: center;
}

.each-projects-container-large.each-program-container{
    display: flex;
    width: 80%;
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.each-projects-container-small.each-program-container{
    display: flex;
    flex-flow: column;
    width: 90%;
    margin-top: 3rem;
    margin-bottom: 3rem;
    align-items: center;
}

.program-info{
    width: 50%;
    align-content: center;
    margin: 2rem;
}

.program-img-container{
    width: 33% !important;
}

.program-description{
    margin-top: 2rem;
    color: rgba(0, 0, 0, 0.6);
}

.program-divider{
    background-color: rgba(0, 0, 0, 0.12);
    margin: 1rem;
    width: 80%;
}

.each-program-title.subtitle-2{
    font-size: 18pt !important;
    text-align: center;
    line-height: 2rem !important;
}

.each-program-title.subtitle-1{
    line-height: 3rem !important;
}

.wellness-heading{
    color: #E91E63;
}

.prog-proj-info.womens-heath-description.large{
    margin-left: 3rem !important;
}

.each-prog-proj-container.womens-health{
    margin-left: 1rem !important;
}

.prog-proj-info.yoga-info.large{
    margin-right: 3rem !important;
}

</style>