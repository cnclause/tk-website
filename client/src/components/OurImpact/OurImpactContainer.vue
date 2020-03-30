<template>
    <div class="our-impact-stat-container">
        <div class="stat-title headline">
                Out of 1,239 Families Surveys
        </div>
        <div class="stat-card-container">
            <v-card
            class="mx-auto stat-card-outter"
            max-width="344"
            flat
            >
            <v-card-text class="stat-card-inner">
                <v-progress-circular
                    class="stat-progress"
                    :rotate="360"
                    :size="100"
                    :width="15"
                    :value="incomeValue"
                    color="light-blue accent-3"
                >
                    {{incomeValue}}%
                </v-progress-circular>
                <div class="card-text body-1">
                96% of Families Make Less Than<br>
                $80.00 a Month
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn
                text
                color="deep-purple accent-4"
                >
                Learn More
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
                    class="stat-progress"
                    :rotate="360"
                    :size="100"
                    :width="15"
                    :value="schoolValue"
                    color="light-blue accent-3"
                >
                    {{schoolValue}}%
                </v-progress-circular>
                <div class="card-text body-1">
                55% of Children Are Not<br>
                in School
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn
                text
                color="deep-purple accent-4"
                >
                Learn More
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

    .stat-card-container{
        display: flex;
        width: 65%;
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

    .stat-progress{
        margin-bottom: 2rem;
    }

    .card-text.body-1{
        color: rgba(0, 0, 0, 0.6);
        font-size: 14pt !important;
    }

</style>