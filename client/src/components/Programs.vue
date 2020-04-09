<template>
    <div class="programs">
    <div class="program-container">
      <h1 class ="program-title" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Our Programs</h1>
    </div>
    <AboutUsContainer />
  </div>
</template>

<script>
export default {
    name: 'programs'
}
</script>

<style lang="scss">

    .program-container{
    margin: 2rem;
    z-index: 0;
    height: 35rem;
    background-image: url('https://lh3.googleusercontent.com/i03PcSCRGkNfyz6sejJ7FtwztxdX8B62CeK8KAhMWGDCCNva8jpDOsFa7Mf1ynqOI8zH8RzPs-etvem5lTZoXoP_5izB24iHuFqJHS7MdA7gWmpgsdUuDn5rfFA02NDyhOwQFqUFLyNPqUXttMm2lI__1nrcKZiPOn5xKAECoKFgAbPuH1x18picNMT7pn479NhbvGQT9jfj3_E9Ou8Lj8-IWXNyYX7NJt_jdk-Y3AdfWT-f0xJkj05xPPM9aYxpyoLwTSXN1Py9VunIEtzu1qTjQrzmS6a6ZJHiCXAtCgMUD-_Aku1hfzI4EiJbi3aTsmkPm4QPwY-TCIfqZ5TtW91rZ-mfZ1ywH99r3fbOu8wr4hOD69b_tKeTOLUkJyeGwnJSzTgBlrjb4qe-XrI2khJrQYO9jybMBF-4O9Az1gV3M-GDvb395-H3ae7a_9mEQcBLSSG7hGvw2gUbR4sbjj_kXwmeF1IPDOObsD1yRyOVo1c1aFYJImwiGLfwnFFDP5gQS6zJbmEhja2H1OppNUZJ1Ngdf71i2X16tbQPNt8WPU9U0h8KMA9_tE3ZidYmYUjIe_rs3E90KdXmFJjDC0ktRrCpWjmwTq72l0Mh1xdETiKY0XWJtK0MqmEaVcv3sMELJtuAytoq8VWvQJIOEHWJnb6cIjm60GoifGWAGwUpex231QNYmP3bpAHAWyYvM27vmpI86qug1nY7tRH-_noJYvi5MSKODiIe1oDP9_MVV7od-TAidk0=w1894-h1262-no');
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    }

    .program-title{
        color: white;
    }

    .program-title.display-4{
        margin-left: 5rem;
    }

    .program-title.display-2{
        font-size: 40pt;
    }

</style>