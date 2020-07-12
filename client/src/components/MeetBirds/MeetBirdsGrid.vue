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
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/charma.jpg"},
            {
            id: 2,
            name: "Lawerence Nelson",
            bio: "Nelson is a quiet and thoughtful 13 year old boy in 6th grade. His favorite activity is to run with friends and play soccer. Nelson aspires to become a doctor and people in Haiti. Help us help Nelson achieve his dreams!.",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/lawerence.jpg",
            flipped: true,
            lawerence: true
            },
            {
            id: 3,
            name: "Volcey Family",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/VolceyFamily.jpg"
            },
             {
            id: 4,
            name: "Genise Volcey",
            bio: "Genise is a gentle 9 year old girl with a constant smile. After finishing school, she wants to help heal people as a nurse. Help us help Genise achieve her dreams!",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/Genise.jpg"
            },
             {
            id: 5,
            name: "Gonet Volcey",
            bio: "Gonet is an intelligent 12 year old boy with a strong desire to help others. In the future, Gonet plans to serve his community as a doctor. Help us help Gonet achieve his dreams!",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/Gonet.jpg",
            flipped: true
            },
            {
            id: 6,
            name: "Johnny Volcey",
            bio: "Johnny is a friendly and talkative 15 year old boy in 4th grade. He hopes to go on to become a doctor so he can work to save lives. Help us help Johnny achieve his dreams!",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/JohnnyVolcey.png"
            },
            {
            id: 7,
            name: "Markenson Jean",
            bio: "Markenson is a reserved but kind 17 year old boy in 8th grade. He is very industrious and plans to become a mechanic in the near future. Help us help Mackenson achieve his dreams!",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/Markenson.jpg",
            flipped: true
            },
            {
            id:8,
            name: "Alexandre Family",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/AlexandreFam-minusDarkenlove.jpg"
            },
            {
            id:9,
            name: "Christiana Alexandre",
            bio:"Christiana is an adorable and kind 6 year old girl in 1st grade. She loves to dance and sing. Her favorite snack is bananas. When asked what she wants to do when she’s older, she shrugged and said “have fun”. Help us help Christiana achieve her dreams!",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/Christiana.jpg"
            },
             {
            id:10,
            name: "Darkenlove Alexandre",
            bio: "Darkenlove is a fun and playful 7 year old girl in 2nd grade. She loves to run and dance. Her favorite meal is meat with rice and beans. Darkenlove is driven to become a professional dancer. Help us help Darkenlove achieve her dreams!",      
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/DarkenloveAlexandre.png",
            flipped: true
            },
             {
            id:11,
            name: "Wideline Alexandre",
            bio: "Wideline is a kind and intelligent 14 year old girl in 3rd grade. She loves to eat rice and has a large appetite. In the future, Wideline hopes to become a nurse and be a frontline healthcare provider in Haiti. Help us help Wideline achieve her dreams!",           
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/Wideline+Alexandre.png"
            },
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