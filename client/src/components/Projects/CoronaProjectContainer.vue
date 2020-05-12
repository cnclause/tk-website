<template>
    <div class="projects-container">
        <h1 class="corona-heading projects-heading" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']"> Addressing COVID-19 </h1>
        <div class="each-project-container" :class="[$vuetify.breakpoint.mdAndUp ? 'each-project-container-large' : 'each-project-container-small']">
            <div class="project-info">
                <h1 class="each-project-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Kits </h1>
                <p class="project-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div class="project-img-container">
                <v-img class="project-img" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/Projects-CovidKits.jpg">
                </v-img>
            </div>
        </div>
        <v-divider class="project-divider"></v-divider>
    </div>
</template>

<style>

.projects-container{
    margin-top: 2rem;
    display: flex;
    flex-flow: column;
    align-items: center;
}

.each-project-container-large.each-project-container{
    display: flex;
    width: 80%;
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.each-project-container-small.each-project-container{
    display: flex;
    flex-flow: column;
    width: 90%;
    margin-top: 3rem;
    margin-bottom: 3rem;
    align-items: center;
}

.project-info{
    width: 50%;
    align-content: center;
    margin: 2rem;
}

.project-img-container{
    width: 33%;
}

.project-description{
    margin-top: 2rem;
    color: rgba(0, 0, 0, 0.6);
}

.project-divider{
    background-color: rgba(0, 0, 0, 0.12);
    margin: 1rem;
    width: 80%;
}

.each-project-title.subtitle-2{
    font-size: 18pt !important;
    text-align: center;
    line-height: 2rem !important;
}

.each-project-title.subtitle-1{
    line-height: 3rem !important;
}

.corona-heading{
    color: #D50000;
}

.projects-heading.display-4{
    padding-top: 3rem;
    font-size: 60pt !important;
}

</style>