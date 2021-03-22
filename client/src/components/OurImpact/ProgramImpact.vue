<template>
    <div class="program-impact">
        <div class="program-impact-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
            <div class="program-impact-info" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <h1 class="program-impact-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Health and Wellness </h1>
                <p class="program-impact-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> From Roots to Wings encourages individuals that are part of the organization to take ownership of their own health through a variety of educational and interactive programs. </p>
                <v-btn class="learn-about-programs-btn white--text" depressed color="pink" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" to="/programs"> Learn About Our Programs </v-btn>
            </div>
            <div class="program-impact-img-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <v-img clas="program-impact-img" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/our_impact/EsdrasLeadingDaysForGirlsGathering.jpg" eager>
                </v-img>
            </div>
        </div>
        <v-divider class="impact-divider"></v-divider>
        <div class="program-impact-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
            <div class="program-impact-img-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <v-img clas="program-impact-img" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/our_impact/davidson_markenley_tutor.jpg" eager>
                </v-img>
            </div>
            <div class="program-impact-info" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <h1 class="program-impact-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Education </h1>
                <p class="program-impact-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> Education is a human right. From Roots to Wings provides merit-based scholarships to children who seldom have resources and financial means to obtain an education.</p>
                 <v-btn class="learn-about-programs-btn white--text" depressed color="cyan" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" to="/programs"> Learn About Our Programs </v-btn>
            </div>
        </div>
        <v-divider class="impact-divider"></v-divider>
        <div class="program-impact-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
            <div class="program-impact-info" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <h1 class="program-impact-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Economics </h1>
                <p class="program-impact-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> From Roots to Wings offers small business loans to individuals with a prospective business. </p>
                <v-btn class="learn-about-programs-btn white--text" depressed color="green" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" to="/programs"> Learn About Our Programs </v-btn>
            </div>
            <div class="program-impact-img-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <v-img clas="program-impact-img" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/TKandUSboardMeetinginHaiti.jpg" eager>
                </v-img>
            </div>
        </div>
    </div>
</template>

<style>

.program-impact{
    margin-top: 2rem;
    display: flex;
    flex-flow: column;
    align-items: center;
}

.program-impact-container.large{
    display: flex;
    width: 80%;
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.program-impact-container.small{
    display: flex;
    flex-flow: column;
    width: 90%;
    margin-top: 3rem;
    margin-bottom: 3rem;
    align-items: center;
}

.program-impact-info.large{
    width: 50%;
    align-content: center;
    margin: 2rem;
}

.program-impact-info.small{
    width: 90%;
    display: flex;
    flex-flow: column;
    align-content: center;
    margin: 1rem;
}

.program-impact-img-container.large{
    width: 50%;
}

.program-impact-img-container.small{
    width: 90%;
}

.program-impact-description{
    margin-top: 2rem;
}

.impact-divider{
    background-color: rgba(0, 0, 0, 0.12);
    margin: 1rem;
    width: 80%;
}

.program-impact-title.subtitle-2{
    font-size: 18pt !important;
    text-align: center;
    line-height: 2rem !important;
}

.learn-about-programs-btn.large{
    margin-top: 3rem;
}

.learn-about-programs-btn.small{
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
}



</style>