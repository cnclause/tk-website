<template>
  <v-timeline class='hometimeline' :class="[$vuetify.breakpoint.mdAndUp ? 'large-timeline' : 'small-timeline']">
      <v-timeline-item
        v-for="(project, i) in projects"
        :key="i"
        :color="project.color"
        medium
        fill-dot
      >
        <v-card flat>
          <v-card-title class="timeline-title" :class="[$vuetify.breakpoint.mdAndUp ? `headline font-weight-light ${project.color}--text` : `body-2 font-weight-light ${project.color}--text`]">{{project.project}}</v-card-title>
          <v-card-text :class="[$vuetify.breakpoint.mdAndUp ? 'large-timeline-text' : 'small-timeline-text']">
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
</template>

<script>
export default {
    data(){
        return{
            projects: [
                {
                    project: 'Community',
                    color: 'cyan'
                },
                {
                    project: 'Education',
                    color: 'green'
                },
                {
                    project: 'Mentorship',
                    color: 'pink'
                },
                {
                    project: 'Health & Wellness',
                    color: 'amber'
                },
                {
                    project: 'Respect (values?)',
                    color: 'orange'
                }
            ]
        }
    }
}
</script>

<style lang="scss">

.large-timeline{
    margin-top: 5rem;
    width: 65%;
}
.small-timeline{
    margin-top: 5rem;
    width: 100%;
    padding: 0pt;
}

.small-timeline-text{
    font-size: 10pt;
}

.large-timeline-text{
    font-size: 15pt;
}

.timeline-title.body-2{
    margin-bottom: 0pt !important;
    text-align: center;
    padding-right: 0pt;
}


</style>