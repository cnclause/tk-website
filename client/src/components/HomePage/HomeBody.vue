<template>
    <div class='home-body'>
        <div class="stat-title headline">
            Out of 1,239 Families Surveys
        </div>
        <div class="stat-card-container">
            <v-card
            class="mx-auto"
            max-width="344"
            >
            <v-card-text class="stat-card">
                <div class="card-text body-1">
                Families Making Less Than<br>
                $80.00 a Month
                </div>
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
            class="mx-auto stat-card"
            max-width="344"
            >
            <v-card-text class="stat-card">
                <div class="card-text body-1">
                Children Not<br>
                in School
                </div>
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
    components: {
    },
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
    }, 500)
    this.incomeInterval = setInterval(() => {
      if (this.incomeValue === 96) {
        return (this.incomeValue = 0)
      }
      this.incomeValue += 12
    }, 500)
  },
}
</script>

<style>
.home-body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card-text{
    text-align: center;
    line-height: 2rem;
    color: #000000;
}
.stat-title{
    text-align: center;
    padding: 3rem;
}
.stat-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
}

.stat-card-container{
    display: flex;
    width: 60%;
}


</style>