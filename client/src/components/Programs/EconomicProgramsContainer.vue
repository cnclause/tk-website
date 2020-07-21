<template>
    <div class="program-proj-container">
        <h1 class=" economic-heading programs-heading" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Economic Programs </h1>
        <div class="each-prog-proj-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
            <div class="prog-proj-info econ-info" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <h1 class="each-proj-prog-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Microloans </h1>
                <p class="proj-prog-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> Although Haiti is a free market economy, most Haitians find it difficult to earn a sustainable income. Many factors including but not limited to political instability, corruption, and lack of infrastructure, often results in violence and damage. With inadequate or expensive resources, productivity and economic success for Haitians is significantly hindered. To directly address this issue, From Roots to Wings is instituting a microloans program, offered to the families we work with. Most of them have existing small businesses, while others are prospecting funds to startup. This microloans program will provide the capital means, with little to no interest, to assist Haitians in building their businesses. Every candidate must pass a rigorous review of their financial capabilities, prior to being approved. Upon approval, the funds will be granted to the families based on agreed terms and conditions. This program is intended to promote self-sufficiency and economic growth in Haiti. <v-btn text max-width=80 color="yellow darken-4" to="/donate">Click here </v-btn> to support our microloan program! </p>
            </div>
            <div class="proj-prog-img-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <v-img clas="program-img" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/DSC_1430.JPG" eager>
                </v-img>
            </div>
        </div>
    </div>
</template>

<style>

.programs-heading{
    padding: 0rem;
}

.economic-heading{
    color: #4CAF50;
}

.prog-proj-info.econ-info.large{
    margin-right: 3rem !important;
}


</style>