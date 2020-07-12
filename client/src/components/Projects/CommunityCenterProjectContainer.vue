<template>
    <div class="program-proj-container">
        <h1 class="community-center-heading projects-heading" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Community Center </h1>
        <div class="each-prog-proj-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
            <div class="proj-progt-img-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <v-img clas="project-img" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/ShowdyatPossibleCommunitybuilding.jpg">
                </v-img>
            </div>
            <div class="prog-proj-info" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <h1 class="each-project-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Community Center </h1>
                <p class="proj-prog-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> In the future, From Roots to Wings hopes to provide a community center for the local community. This building
will serve many purposes including a home for children without families, a playground/learning
center, and a dormitory for staff. It will also be utilized by the local community during normal
hours, to obtain necessary learning resources. Through this framework, we will ensure that the
children are taken care of and families who are struggling and would otherwise give up their
children to orphanages and other institutions, have the resources to improve and succeed. The
estimated cost for this establishment is approximately $60,000 USD, which FRW is expecting to
build in the next 5 years.
</p>
            </div>
        </div>
    </div>
</template>

<style>

.community-center-heading{
    color: #2196F3;
}

</style>