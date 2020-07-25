<template>
    <div>
        <p :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']" class='value-title'>What We<strong> Value</strong></p>
        <v-timeline class='hometimeline' :class="[$vuetify.breakpoint.mdAndUp ? 'large-timeline' : 'small-timeline']">
        <v-timeline-item
            v-for="(value, i) in values"
            :key="i"
            :color="value.color"
            medium
            fill-dot
        >
            <v-card flat>
            <v-card-title class="timeline-title" :class="[$vuetify.breakpoint.mdAndUp ? `headline font-weight-light ${value.color}--text` : `body-2 font-weight-light ${value.color}--text`]">{{value.value}}</v-card-title>
            <v-card-text :class="[$vuetify.breakpoint.mdAndUp ? 'large-timeline-text' : 'small-timeline-text']">
                {{value.info}}
            </v-card-text>
            </v-card>
        </v-timeline-item>
        </v-timeline>
    </div>
</template>

<script>
export default {
    data(){
        return{
            values: [
                {
                    value: 'Empowerment',
                    color: 'cyan',
                    info: 'Ensuring each individual has the knowledge and skills to create their own opportunities'

                },
                {
                    value: 'Sustainability',
                    color: 'green',
                    info: 'Breaking the old cycle of poverty and creating a new cycle of opportunity'
                },
                {
                    value: 'Integrity',
                    color: 'pink',
                    info: 'Maintaining respect and honesty in all aspects of our commitment to service'
                },
                {
                    value: 'Collaboration',
                    color: 'amber',
                    info: 'Working together with community members to understand their needs and wants'
                },
                {
                    value: 'Innovation',
                    color: 'orange',
                    info: 'Staying on the frontier of knowledge and its applications in aid and development'
                }
            ]
        }
    }
}
</script>

<style lang="scss">

.value-title.subtitle-2{
    text-align: center;
    margin-top: 5rem;
    font-weight: 300;
    // line-height: 1.75rem !important;
}

.value-title.subtitle-1{
    text-align: center;
    text-transform: uppercase;
    margin-top: 5.5rem;
    text-align: center;
    letter-spacing: 0.75rem !important;
}

.large-timeline{
    margin-top: 1rem;
    width: 100%;
}
.small-timeline{
    margin-top: 1rem;
    width: 100%;
    padding: 0pt;
}

.timeline-title.headline{
    font-size: 30pt !important;
}

.small-timeline-text{
    font-size: 10pt;
}

.large-timeline-text{
    font-size: 15pt;
    font-weight: 300 !important;
    line-height: 2rem !important;
}

.timeline-title.body-2{
    margin-bottom: 0pt !important;
    text-align: center;
    padding-right: 0pt;
}


</style>