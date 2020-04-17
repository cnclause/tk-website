<template>
    <div class="projects-container">
        <h1 class="community-center-heading projects-heading" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']"> Community Center </h1>
        <div class="each-project-container" :class="[$vuetify.breakpoint.mdAndUp ? 'each-project-container-large' : 'each-project-container-small']">
            <div class="project-img-container">
                <v-img clas="project-img" src="https://lh3.googleusercontent.com/l56QeqQVeZw5daVJGmJeCEAqTuSv7hErjEe-jlbFAh4y-B1i1ZMG-xCuTvCOtlEIpzGKbjK1iItwTP9ut3Sbg-WCKo1Y1CDB8JwJgo44tvBhIX3mYxJz7kXMvHBuegEKBgmOGgJLyI4l6vy86ZxR2fAXPzSCB6EfmsjjLWO_7lnSEfhnwzxkbT8TmBguEZmzUbzy4M3x_bokcS_zgD2BrykTBIG5ymu-x-3DxeF3I444lometHExIdSqvZjRgeiSR-E_C3sDen8rY_p0Q6PntD7fh8FfD7a4bhQQ-hBCJ0p2USm_vse88NwqrKCP96il5NCu2n-cCtwAW7ST-1EYQmBCzT2xoUhzvYG3tYaojTs1Vue-zohM4f9i_9XzjMvf2fswDFlo_S5YXpXehTFDswIk095BTBSEcSG5-Ry0xV3qjwImB-l7kEbPPZZngKYdtuYXmvC4XxcXRoYlZUD_PW5WhW6wA-cMli4gvac-fJVQ-SVSsXbK7Oh0nzb94JO-rmykBPKPv234dsUztD3g3YoogjfU5anHTcowmYBakH99Lj9BQ97K1d0waal1718uEAm9XU4CukhsHW-evaoYPKHCWnwvnxaI-egBKT5NJrDORH3e3pUtSnyU_EEvv4SX9xgCpygiVGQWeiwBbORd71y2fAcqJcmOCtI6EYwiot2UrVBtN70zvP0T5vkgbJ8SKbMnpzJumxzKJm1mAsGox7e3Q5jqSaLh5nffnNsf2sZU5hg9QzbP_y0=w1888-h1260-no">
                </v-img>
            </div>
            <div class="project-info">
                <h1 class="each-project-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Community Center </h1>
                <p class="project-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </div>
    </div>
</template>

<style>

.projects-container{
    margin-top: 2rem;
    display: flex;
    flex-flow: column;
    align-items: center;
}

.each-project-container-large.each-project-container{
    display: flex;
    width: 80%;
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.each-project-container-small.each-project-container{
    display: flex;
    flex-flow: column;
    width: 90%;
    margin-top: 3rem;
    margin-bottom: 3rem;
    align-items: center;
}

.project-info{
    width: 50%;
    align-content: center;
    margin: 2rem;
}

.project-img-container{
    width: 50%;
}

.project-description{
    margin-top: 2rem;
    color: rgba(0, 0, 0, 0.6);
}

.project-divider{
    background-color: rgba(0, 0, 0, 0.12);
    margin: 1rem;
    width: 80%;
}

.each-project-title.subtitle-2{
    font-size: 18pt !important;
    text-align: center;
    line-height: 2rem !important;
}

.each-project-title.subtitle-1{
    line-height: 3rem !important;
}

.community-center-heading{
    color: #2196F3;
}

.projects-heading.display-4{
    padding-top: 3rem;
    font-size: 60pt !important;
}

</style>