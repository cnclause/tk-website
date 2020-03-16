<template>
  <v-timeline class='hometimeline'>
      <v-timeline-item
        v-for="(project, i) in projects"
        :key="i"
        :color="project.color"
        medium
        fill-dot
      >
        <v-card flat>
          <v-card-title :class="`headline font-weight-light mb-4 ${project.color}--text`">{{project.project}}</v-card-title>
          <v-card-text>
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
                    project: 'Health and Wellness',
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

.hometimeline{
    margin-top: 5rem;
    width: 65%;
}

</style>