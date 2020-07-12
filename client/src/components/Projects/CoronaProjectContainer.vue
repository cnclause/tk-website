<template>
    <div class="projects-container">
        <h1 class="corona-heading projects-heading" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Addressing COVID-19 </h1>
        <div class="each-project-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
            <div class="project-info" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <h1 class="each-project-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Kits </h1>
                <p class="project-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div class="project-img-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
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