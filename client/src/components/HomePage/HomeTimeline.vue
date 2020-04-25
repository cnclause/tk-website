<template>
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
</template>

<script>
export default {
    data(){
        return{
            values: [
                {
                    value: 'Empowerment',
                    color: 'cyan',
                    info: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'

                },
                {
                    value: 'Sustainability',
                    color: 'green',
                    info: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
                },
                {
                    value: 'Integrity',
                    color: 'pink',
                    info: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
                },
                {
                    value: 'Collaboration',
                    color: 'amber',
                    info: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
                },
                {
                    value: 'Innovation',
                    color: 'orange',
                    info: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
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

.timeline-title.headline{
    font-size: 30pt !important;
}

.small-timeline-text{
    font-size: 10pt;
}

.large-timeline-text{
    font-size: 15pt;
    font-weight: 300 !important;
}

.timeline-title.body-2{
    margin-bottom: 0pt !important;
    text-align: center;
    padding-right: 0pt;
}


</style>