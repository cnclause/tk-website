<template>
    <div class="programs-container">
        <h1 class=" economic-heading programs-heading" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']"> Economic Programs </h1>
        <div class="each-program-container" :class="[$vuetify.breakpoint.mdAndUp ? 'each-program-container-large' : 'each-program-container-small']">
            <div class="program-info">
                <h1 class="each-program-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Microloans </h1>
                <p class="program-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> Although Haiti is a free market economy, most Haitians find it difficult to make a sustainable income. Many factors including but not limited to political instability, corruption, and lack of infrastructure, often results in violence and damage. With inadequate or expensive resources, productivity and economic success for Haitians is significantly hindered. To directly address this issue, FRW is instituting a microloans program, offered to the families we work with. Most of them have existing small businesses, while others are prospecting funds to startup. This microloans program will provide the capital means, with little to no interest, to assist Haitians in building their businesses. Every candidate must pass a rigorous review of their financial capabilities, prior to being approved. Upon approval, the funds will be granted to the families based on agreed terms and conditions. This program is intended to promote self-sufficiency and economic growth in Haiti. Click here to support our microloan program! </p>
            </div>
            <div class="program-img-container">
                <v-img clas="program-img" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/DSC_1430.JPG" eager>
                </v-img>
            </div>
        </div>
    </div>
</template>

<style>

.programs-container{
    margin-top: 2rem;
    display: flex;
    flex-flow: column;
    align-items: center;
}

.each-program-container-large.each-program-container{
    display: flex;
    width: 80%;
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.each-program-container-small.each-program-container{
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

.programs-heading.display-4{
    font-size: 50pt !important;
    padding-top: 0rem;
}

.programs-heading{
    padding: 0rem;
}

.economic-heading{
    color: #4CAF50;
}

</style>