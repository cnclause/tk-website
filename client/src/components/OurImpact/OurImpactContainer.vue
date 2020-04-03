<template>
    <div class="our-impact-stat-container">
        <div class="stat-title headline">
                Out of 1,239 Families Surveys
        </div>
        <div class="stat-card-container" :class="[$vuetify.breakpoint.mdAndUp ? 'progress-container-large' : 'progress-container-small']">
            <v-card
            class="mx-auto stat-card-outter"
            max-width="344"
            flat
            >
            <v-card-text class="stat-card-inner">
                <v-progress-circular
                    :class="[$vuetify.breakpoint.mdAndUp ? 'large-circle' : 'small-circle']"
                    class="stat-progress"
                    :rotate="360"
                    :value="incomeValue"
                    color="blue darken-3"
                >
                    {{incomeValue}}%
                </v-progress-circular>
                <div class="card-text" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']">
                96% of Families Make Less Than<br>
                $80.00 a Month
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn
                :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"
                class="btn-text-progress"
                text
                color="blue accent-4"
                >
                Learn About Our Programs
                </v-btn>
            </v-card-actions>
            </v-card>
            <v-card
            class="mx-auto stat-card-outter"
            max-width="344"
            flat
            >
            <v-card-text class="stat-card-inner">
                <v-progress-circular
                    :class="[$vuetify.breakpoint.mdAndUp ? 'large-circle' : 'small-circle']"
                    class="stat-progress"
                    :rotate="360"
                    :value="schoolValue"
                    color="blue darken-3"
                >
                    {{schoolValue}}%
                </v-progress-circular>
                <div class="card-text" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']">
                55% of Children Are Not<br>
                in School
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn
                text
                color="blue accent-4"
                :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"
                class="btn-text-progress"
                >
                Learn About Our Programs
                </v-btn>
            </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
    data () {
    return {
      schoolInterval: {},
      schoolValue: 0,
      incomeInterval: {},
      incomeValue: 0

    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  mounted () {
    this.schoolInterval = setInterval(() => {
      if (this.schoolValue === 55) {
        return (this.schoolValue = 0)
      }
      this.schoolValue += 5
    }, 600)
    this.incomeInterval = setInterval(() => {
      if (this.incomeValue === 96) {
        return (this.incomeValue = 0)
      }
      this.incomeValue += 12
    }, 600)
  }
}
</script>

<style lang="scss">
    .our-impact-stat-container{
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .stat-title{
        text-align: center;
        padding: 3rem;
    }

    .progress-container-large.stat-card-container{
        display: flex;
        width: 65%;
    }

    .progress-container-small.stat-card-container{
        display: flex;
        width: 100%;
    }

    .stat-card-outter{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
    }

    .stat-card-inner{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .large-circle.v-progress-circular{
        width: 15rem !important;
        height: 15rem !important;
        margin-bottom: 2rem;
        font-size: 20pt;
    }

    .small-circle.v-progress-circular{
        width: 5rem !important;
        height: 5rem !important;
        margin-bottom: 0.5rem;
    }

    .card-text.body-1{
        color: rgba(0, 0, 0, 0.75);
        font-size: 15pt !important;
    }

    .btn-text-progress.body-2{
        font-size: 8pt !important;
    }

    .btn-text-progress.body-1{
        font-size: 16pt !important;
    }

</style>