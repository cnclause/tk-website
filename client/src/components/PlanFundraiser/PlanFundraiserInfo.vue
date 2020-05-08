<template>
    <div class="plan-fundraiser-info">
        <div class="fundraiser-info-container" :class="[$vuetify.breakpoint.mdAndUp ? 'fundraiser-info-container-large' : 'fundraiser-info-container-small']">
            <div class="program-img-container">
                <v-img clas="program-img" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/JoesDad-fundraiser.JPG" eager>
                </v-img>
            </div>
            <div class="fundraiser-info-description">
                <h1 class="fundraiser-info-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> What it takes to plan a fundraiser </h1>
                <p class="fundraiser-info-paragraph" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
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

.fundraiser-info-title.subtitle-2{
    font-size: 18pt !important;
    text-align: center;
    line-height: 2rem !important;
}

// .plan-fundraiser-info-heading.body-1{
//     font-size: 30pt !important;
//     padding-top: 0rem;
//     margin-top: 2rem;
// }




</style>