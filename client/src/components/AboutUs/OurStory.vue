<template>
    <div class="our-story-container" :class="[$vuetify.breakpoint.mdAndUp ? 'our-story-large' : 'our-story-small']">
        <h1 class="subtitle-1 our-story-title"> Our Story </h1>
        <p class="our-story-text" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br> 
        <br>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
    </div>
</template>

<style lang="scss">

    .our-story-container.our-story-large{
        width: 60%;
    }

    .our-story-container.our-story-small{
        width: 90%;
    }

    .our-story-title{
        margin-bottom: 2rem;
        margin-top: 3rem;
        text-align: center;
    }

    .our-story-text.body-2{
        font-size: 13pt !important;
        font-weight: 300;
    }
</style>