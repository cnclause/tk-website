<template>
    <div class="program-proj-container">
        <h1 class="corona-heading projects-heading" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Addressing COVID-19 </h1>
        <div class="each-prog-proj-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
            <div class="prog-proj-info" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <h1 class="each-project-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Kits </h1>
                <p class="proj-prog-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> The novel coronavirus disease, COVID-19, is rapidly spreading across Haiti. In efforts to provide COVID-19 relief, education, and healthcare, FRW is providing hygiene kits. These assembled kits contain hand sanitizer, masks, gloves, and an information guide from the CDC, providing the latest information on the COVID pandemic. Once these kits are distributed successfully, we will continue to send additional ones.  </p>
            </div>
            <div class="proj-prog-img-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <v-img class="project-img" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/Projects-CovidKits.jpg">
                </v-img>
            </div>
        </div>
        <v-divider class="project-divider"></v-divider>
    </div>
</template>

<style>

.corona-heading{
    color: #D50000;
}


</style>