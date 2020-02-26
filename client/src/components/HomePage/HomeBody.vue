<template>
    <div class='home-body-cards'>
        <v-card
        class="mx-auto"
        max-width="344"
        >
        <v-card-text class="stat-card">
            <div>Word of the Day</div>
            <p class="display-1 text--primary">
            be•nev•o•lent
            </p>
            <p>adjective</p>
            <div class="text--primary">
            well meaning and kindly.<br>
            "a benevolent smile"
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
        class="mx-auto stat-card"
        max-width="344"
        >
        <v-card-text class="stat-card">
            <div class="card-text">
            Children Not<br>
            in School
            </div>
             <v-progress-circular
                class="stat-progress"
                :rotate="360"
                :size="100"
                :width="15"
                :value="schoolValue"
                color="teal"
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
</template>

<script>
export default {
    data () {
    return {
      schoolInterval: {},
      schoolValue: 0,
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
  },
}
</script>

<style>
.home-body-cards {
    display: flex;
}

.card-text{
    font-size: 18pt;
    text-align: center;
    line-height: 2rem;
}

.stat-card{
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* .stat-progess{

} */
</style>