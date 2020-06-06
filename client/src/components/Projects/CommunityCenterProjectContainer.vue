<template>
    <div class="projects-container">
        <h1 class="community-center-heading projects-heading" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']"> Community Center </h1>
        <div class="each-project-container" :class="[$vuetify.breakpoint.mdAndUp ? 'each-project-container-large' : 'each-project-container-small']">
            <div class="project-img-container">
                <v-img clas="project-img" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/ShowdyatPossibleCommunitybuilding.jpg">
                </v-img>
            </div>
            <div class="project-info">
                <h1 class="each-project-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Community Center </h1>
                <p class="project-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> In the future, FRW hopes to provide a community center for the local community. This building will serve many purposes including a home for children without families, a playground/learning center, and a dormitory for staff. It will also be utilized by the local community during normal hours, to obtain necessary learning resources. Through this framework, we will ensure that the children are taken care of and families who are struggling and would otherwise give up their children to orphanages and other institutions, have the resources to improve and succeed. The estimated cost for this establishment is approximately $60,000 USD, which FRW is expecting to build in the next 5 years. </p>
            </div>
        </div>
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

.community-center-heading{
    color: #2196F3;
}

.projects-heading.display-4{
    padding-top: 3rem;
    font-size: 60pt !important;
}

</style>