<template>
    <div class="plan-fundraiser-info">
        <div class="program-proj-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
            <div class="proj-prog-img-container">
                <v-img clas="program-img" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/JoesDad-fundraiser.JPG" eager>
                </v-img>
            </div>
            <div class="fundraiser-info-description">
                <h1 class="each-proj-prog-title fundraiser-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> What it takes to plan a fundraiser </h1>
                <p class="fundraiser-info-paragraph" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> Fom Roots to Wings funds programs and activities through donations and fundraisers. FRW is in the process of setting up teams in cities across the US to organize and execute various fundraisers. Fundraising teams consist of a team leader, PR person and volunteers. Click here if you would like to join one of these teams or start your own in your city! </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.plan-fundraiser-info{
    margin-top: 2rem;
    display: flex;
    flex-flow: column;
    align-items: center;
}

.fundraiser-info-container-large.fundraiser-info-container{
    display: flex;
    width: 80%;
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.fundraiser-info-container-small.fundraiser-info-container{
    display: flex;
    flex-flow: column;
    width: 90%;
    margin-top: 3rem;
    margin-bottom: 3rem;
    align-items: center;
}

.fundraiser-info-description{
    width: 50%;
    align-content: center;
    margin: 2rem;
}

.program-img-container{
    width: 50%;
}

.fundraiser-info-paragraph{
    margin-top: 2rem;
    color: rgba(0, 0, 0, 0.6);
}

.program-divider{
    background-color: rgba(0, 0, 0, 0.12);
    margin: 1rem;
    width: 80%;
}

.each-proj-prog-title.fundraiser-title.subtitle-2{
    font-size: 18pt !important;
    text-align: center;
    line-height: 2rem !important;
}

.each-proj-prog-title.fundraiser-title.subtitle-1{
    text-align: center !important;
}

// .plan-fundraiser-info-heading.body-1{
//     font-size: 30pt !important;
//     padding-top: 0rem;
//     margin-top: 2rem;
// }




</style>