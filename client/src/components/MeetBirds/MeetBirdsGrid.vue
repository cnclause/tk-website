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
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/CharmaDonatePic-outsideSchool.jpg"},
            {
            id: 2,
            name: "Lawerence Nelson",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/Lawerence.jpg",
            flipped: true,
            lawerence: true
            },
            {
            id: 3,
            name: "Volcey Family",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/VolceyFamily-inhouse.jpg"
            },
             {
            id: 4,
            name: "Genise Volcey",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/GeniseVolcey.jpg"
            },
             {
            id: 5,
            name: "Gonet Volcey",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/GonetVolcey.jpg",
            flipped: true
            },
            {
            id: 6,
            name: "Johnny Volcey",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/JohnnyVolcey.jpg"
            },
            {
            id: 7,
            name: "Markenson Jean",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/MarkensonJean.jpg",
            flipped: true
            },
            {
            id:8,
            name: "Alexandre Family",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/AlexandreFamily-minusDarkenlove.jpg"
            },
            {
            id:9,
            name: "Christiana Alexandre",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/ChristianaAlexandre.jpg"
            },
             {
            id:10,
            name: "Darkenlove Alexandre",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/DarkenloveAlexandre.jpg",
            flipped: true
            },
             {
            id:11,
            name: "Wideline Alexandre",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "https://rootstowingspictures.s3-us-west-1.amazonaws.com/Wideline+Alexandre.jpg"
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