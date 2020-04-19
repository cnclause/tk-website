<template>
    <div class="projects">
        <div class="project-container">
            <h1 class ="project-title" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Our Projects</h1>
        </div>
        <CoronaProjectContainer />
        <CommunityCenterProjectContainer />
  </div>
</template>

<script>
import CoronaProjectContainer from './CoronaProjectContainer'
import CommunityCenterProjectContainer from './CommunityCenterProjectContainer'


export default {
    name: 'projects',
    components: {
        CoronaProjectContainer,
        CommunityCenterProjectContainer
    }
}
</script>

<style lang="scss">

    .project-container{
        margin: 2rem;
        z-index: 0;
        height: 35rem;
        background-image: url('https://lh3.googleusercontent.com/v-wdQdqLISnX6E7NhtnvE5GbAqaFzPxj6L_PMq4JhEIH_JKhhgY6aCQo1yNiNK16z563kR7Zs8kSABoZJ0O2KuKa2jE1RZ74WB846N9EZ4LSr9tTk-ZRa9NXHSUuD-6hQUyFVTZqbIqPxkNK3aCtC_Hi5JhxCTM1_vusuuFBhGIofNfWzyD9YHaQ6a574U0LEzPzU4rrSDzv3JE0sRaX2OyiOxnzn-du_qSlB6oj4RWNwSVvqTJN2kxGLeRVbWR-b434vn6YYJZ51ab87NyeJ2Fb3iewtLSRb3cLSH3gjzPMbEo4YU_BEh2f1wEALQ3BxS9xOtHD-5lHOir3zbNAsRYP8qh5k01cacZQhA_Sp79KEglw--z3b9q9MOJAcy8EjHgHWvAp8HtHDZhQ2Q3I6fsVjjDPc4mrKtqVHKy7TKBmB5NvBy3BptHoCAm2ZToqNitGb3JFcXXVJhhEAPO3PD-vUq5n_F9jTQSMRgcgYXa1TODaWgw-pUezGAdqvJzIHt3uZVbmPcXyM887mne0-Vn4ESMw8Eno_gnm7ZOzvCMAXts_mLGpeeIBd7_YMLhhUiwQphQajTiwM74aDh5aliKWfh8leyBQC71iUxoK6Z0WueMe844xINRTmqFO2yqBCngQd0v33-wccy8bcLsS0SzHR2UbeiXKOkHgpJXqCWRVAjLqbq8hOpi9z3DchAtVd4mtuRXzWJsHSmW9bGG9Amd7wax1e3Z4LiQzkoDiCOjRZNj8LHgAok0=w1894-h1262-no');
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover;
    }

    .project-title{
        color: white;
    }

    .project-title.display-4{
        margin-left: 5rem;
    }

    .project-title.display-2{
        font-size: 40pt;
    }

</style>