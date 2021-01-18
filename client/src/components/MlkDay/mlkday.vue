<template>
    <div class="mlk">
        <h1 class="k-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> MLK Day Fundraiser! </h1>
        <div class="mlk-info-container">
            <p class="fundraiser-info-paragraph k-paragraph" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']">   
                Martin Luther King, Jr was a civil rights activist, who encouraged peaceful protests to end racial discrimination and inequality. Each year, MLK Day is celebrated to commemorate his legacy and it is celebrated on the third Monday of January.
                The goal of MLK Day of Service is to move us closer to Dr. King’s vision of equality by empowering individuals, strengthening communities by finding solutions to social issues, and bridging the barriers between our differences. 
                <br><br>

                From Roots to Wings is working towards Dr. King’s vision by developing sustainable, community-based avenues towards empowerment.  To honor MLK Day of Service, FRW is holding a donation drive for our mentorship program. The purpose of this program is to guide these children to break the cycle of poverty, with empowerment being an important ingredient of that success. Each child who is in our scholarship program meets with a mentor to discuss grades, future plans, diet, exercise and mental health. Help us build up funding for our mentorship program, to ensure students and families are supported on a personal level.<br><br>

               <strong>We want to honor his Day by advocating for educational and economical inequalities in Haiti. Help us support this cause by donating to our mentorship program. </strong>

            </p>
            <p class="fundraiser-info-paragraph k-paragraph-thanks" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> Thank you for helping us change lives and communities - empowering individuals forever </p>
        </div>
        <div class="cost-breakdown" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
            <div class="cost-resources-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <v-sheet class= "cost-breakdown-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" outlined=True color="deep-purple darken-1" rounded>
                    <v-card flat class="cost-list" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" width="100%">
                        <v-card-title class="cost-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> 
                            Cost breakdown of our mentorship program:
                        </v-card-title>
                        <v-list class="list-container" disabled>
                            <v-list-item-group
                                v-model="costList"
                                inactive
                            >
                                <v-list-item
                                    two-line
                                    v-for="(item, i) in items"
                                    :key="i"
                                    inactive
                                    class="list-item"
                                >   
                                    <v-list-item-content>
                                        <v-list-item-title class="item-text" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']">
                                            {{item.text}}
                                        </v-list-item-title>
                                        <v-list-item-subtitle class="item-text" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']">
                                            {{item.cost}}
                                        </v-list-item-subtitle>
                                        <v-list-item-subtitle class="item-text" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']">
                                            {{item.reason}}
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-card>
                </v-sheet>
                <v-sheet class= "cost-breakdown-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" outlined=True color="deep-purple darken-1" rounded>
                    <v-card flat class="cost-list" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" width="100%">
                        <v-card-title class="resource-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']">
                            MLK Day Resources: 
                        </v-card-title>
                        <v-list>
                            <v-list-item-group
                                v-model="LinkResources"
                            >
                                <v-list-item
                                    v-for="(resource, i) in resources"
                                    :key="i"
                                    link
                                    :href="resource.link"
                                    class="list-item"
                                    
                                >
                                        <v-list-item-title :href="resource.link" class="item-link" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']">
                                            {{resource.title}}
                                        </v-list-item-title>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-card>
                </v-sheet>
            </div>
            <div class="donorbox-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <iframe allowpaymentrequest="" frameborder="0" height="900px" name="donorbox" scrolling="no" seamless="seamless" src="https://donorbox.org/embed/mlk-day-70-2" style="max-width: 500px; min-width: 250px; max-height:none!important" width="100%"></iframe>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'mlkday',
data: () => ({
    costBreakdown: 1,
    items: [
        {
            text: 'Supplies',
            cost: '$500',
            reason: 'Provide blackboards, chalk, and academic supplies'
        },
        {
            text: 'Internet',
            cost: '$55/month',
            reason: 'Give interent access for our mentors to use as a resource'
        },
        {
            text: 'Meals',
            cost: '$100/month',
            reason: 'Provide meals to our mentors and mentees'
        },
        {
            text: 'Fund a Mentor',
            cost: '$120/month',
            reason: 'Help us ensure mentors are compensated fairly'
        },
    ],
    Resources: 1,
    resources: [
        {
            title: "The King Center",
            link: 'https://thekingcenter.org/',
        },
        {
            title: "M4BL",
            link: 'https://m4bl.org/ ',
        },
        {
            title: "Allied Media Projects",
            link: 'https://alliedmedia.org/post/donate-to-survived-and-punished',
        },
        {
            title: "Life Comes From It",
            link: 'https://www.lifecomesfromit.org/',
        },
        {
            title: "Black Food Justice",
            link: 'https://www.blackfoodjustice.org/aboutus ',
        },
    ]
}),
}
</script>

<style lang="scss">

.mlk{
    display: flex;
    flex-flow: column;
    align-items: center;
}

.k-title{
    text-align: center;
    padding-top: 4rem;
    text-transform: uppercase;
}

.mlk-info-container{
    width: 70%;

}

.k-paragraph{
    padding-top: 2rem;
    text-align: center;
    color: black !important;
}

.k-paragraph-thanks{
    padding-bottom: 2rem;
    text-align: center;
    color: black !important;
}

.cost-breakdown.large{
    width: 80%;
    display: flex;
    justify-content: right;
    padding-top: 4rem;

}

.cost-breakdown.small{
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-top: 2rem;

}

.cost-resources-container.large{
    width: 50%;
    padding-top: 2rem;
    display: flex;
    flex-flow: column;
    align-items: center;
}

.cost-resources-container.small{
    width: 80%;
    padding-bottom: 1.5rem;
}

.cost-breakdown-container.large{
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 1rem !important;
}

.cost-breakdown-container.small{
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 1rem !important;
}
.donorbox-container.large{
    width: 50%;
    padding-top: 2rem;
    display: flex;
    justify-content: center;
}

.resource-title.subtitle-1{
    margin-top: 2rem;
}

.resource-title.subtitle-2{
    margin-top: 3rem;
    font-weight: 800 !important;
    text-align: center;
}

.cost-title.subtitle-2{
    text-align: center;
}

.cost-title.subtitle-1{
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
} 

.cost-list.large{
    width: 100% !important;
    justify-self: center;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-bottom: 1rem;
    margin: 0.1rem;
}

.cost-list.small{
    width: 99%;
    justify-self: center;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-bottom: 1rem;
    margin: 0.1rem;
}

.list-container{
    width: 85% !important;
}
.list-item{
    text-align: center;
}

.item-text{
    text-align: center;
}

</style>