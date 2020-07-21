<template>
    <div class="program-proj-container">
        <h1 class=" education-heading programs-heading" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Educational Programs </h1>
        <div class="each-prog-proj-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
            <div class="prog-proj-info scholarship-info" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <h1 class="each-proj-prog-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Scholarships </h1>
                <p class="proj-prog-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> FRW provides academic scholarships to children who are part of the organization, based on merit. On average, providing primary education costs approximately $100 USD per child. These scholarships cover tuition fees, uniforms, school supplies, books and exams. <v-btn class="click-btn" text x-large color="yellow darken-4" max-width=90 :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" to="/donate">Click here </v-btn> to support our scholarship program! </p>
            </div>
            <div class="proj-prog-img-containerr">
                <v-img clas="program-img" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/tilepe-charma.jpg" eager>
                </v-img>
            </div>
        </div>
        <div class="each-prog-proj-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
            <div class="proj-prog-img-container">
                <v-img clas="program-img" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/ShowdymentoringMckenely.jpg" eager>
                </v-img>
            </div>
            <div class="prog-proj-info mentorship-description" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <h1 class="each-proj-prog-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Mentorship </h1>
                <p class="proj-prog-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> Each child enrolled in FRW is offered the mentorship program, guided by a team of Haitian mentors who have completed high school and moved on to professional careers. FRW mentors meet with their designated child and family to discuss grades, future plans, diet, exercise and mental health. The purpose of this program is to guide these children to break the cycle of poverty. Although mentors are volunteers, FRW hopes to compensate them for their efforts invested in developing each child. <v-btn class="click-btn" text max-width=90 color="yellow darken-4" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" to="/donate">Click here </v-btn> to support our mentorship program! </p>
            </div>
        </div>
        <v-divider class="proj-prog-divider"></v-divider>
    </div>
</template>

<style>

.each-proj-prog-title.subtitle-2{
    margin-top: 1rem;
}

.education-heading{
    color: #00BCD4;
    text-align: center;
    margin-top: 3rem;
}

.prog-proj-info.mentorship-description.large{
    margin-left: 3rem !important;
}

.prog-proj-info.scholarship-info.large{
    margin-right: 3rem !important;
}

.click-btn{
    padding: 0px !important;
    padding-right: 0.5rem !important;
}

</style>