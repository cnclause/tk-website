<template>
    <div class="meet-bird-grid">
        <div class='meet-bird-container' :key="bird.id" v-for="bird in birds">
            <Bird v-if="bird.flipped || !$vuetify.breakpoint.mdAndUp && bird.bio" v-bind:bird="bird"/>
            <Family v-if="!bird.bio" v-bind:bird="bird"/>
            <FlippedBird v-if="!bird.flipped && bird.bio && $vuetify.breakpoint.mdAndUp" v-bind:bird="bird"/>
        </div>
    </div>
</template>

<script>
    import Bird from './Bird'
    import FlippedBird from './FlippedBird'
    import Family from './Family'
    export default {
        name: "meetBirdsGrid",
        components: {
            Bird,
            FlippedBird,
            Family
        },
        data() {
    return {
      birds:
          [
            {
            id: 1,
            name: "Charma Fleurelus",
            bio: "Charma is an energetic and charming 9 year old girl in 3rd grade. She loves to play tag with friends. One day, she hopes to catch people professionally as a police officer. Help us help Shama achieve her dreams.",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/meet_the_kids/charma_img.jpg"},
            {
            id: 2,
            name: "Lawrence Nelson",
            bio: "Lawerence is a quiet and thoughtful 13 year old boy in 6th grade. His favorite activity is to run with friends and play soccer. Lawerence aspires to become a doctor of the people of Haiti. Help us help Lawerence achieve his dreams!.",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/meet_the_kids/lawrence_img.jpg",
            flipped: true,
            },
            {
            id: 3,
            name: "Markenley Julien",
            bio: "Markenley is a quiet and thoughtful 7 year old boy in 3rd grade. His favorite activity is to run with friends and play soccer. Markenley aspires to become a doctor of the people of Haiti. Help us help Markenley achieve his dreams!.",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/meet_the_kids/markenley_img.jpg",
            },
            {
            id: 4,
            name: "Volcey Family",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/meet_the_kids/volcey_fam.jpg"
            },
             {
            id: 5,
            name: "Dieunise Volcey",
            bio: "Genise is a gentle 9 year old girl with a constant smile. After finishing school, she wants to help heal people as a nurse. Help us help Genise achieve her dreams!",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/meet_the_kids/dieunise_img.jpg"
            },
             {
            id: 6,
            name: "Jonet Volcey",
            bio: "Jonet is an intelligent 12 year old boy with a strong desire to help others. In the future, Gonet plans to serve his community as a doctor. Help us help Gonet achieve his dreams!",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/Gonet.jpg",
            flipped: true
            },
            {
            id: 7,
            name: "Johnny Volcey",
            bio: "Johnny is a friendly and talkative 15 year old boy in 4th grade. He hopes to go on to become a doctor so he can work to save lives. Help us help Johnny achieve his dreams!",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/meet_the_kids/johnny_img.jpg"
            },
            {
            id: 8,
            name: "Mackenson Jean",
            bio: "Mackenson is a reserved but kind 17 year old boy in 8th grade. He is very industrious and plans to become a mechanic in the near future. Help us help Mackenson achieve his dreams!",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/meet_the_kids/mackenson_img.jpg",
            flipped: true
            },
            //  {
            // id:8,
            // name: "Wideline Alexandre",
            // bio: "Wideline is a kind and intelligent 14 year old girl in 3rd grade. She loves to eat rice and has a large appetite. In the future, Wideline hopes to become a nurse and be a frontline healthcare provider in Haiti. Help us help Wideline achieve her dreams!",           
            // thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/Wideline+Alexandre.png"
            // },
          ]
      }
  },
}
</script>

<style lang="scss">
   .meet-bird-container{
       padding: 0%;
       display: flex;
   }

   .meet-bird-grid{
       width: 100%;
       display: flex;
       flex-flow: column;
       align-content: center;
   }
</style>