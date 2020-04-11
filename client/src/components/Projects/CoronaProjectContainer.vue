<template>
    <div class="projects-container">
        <h1 class="corona-heading projects-heading" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']"> Addressing COVID-19 </h1>
        <div class="each-project-container" :class="[$vuetify.breakpoint.mdAndUp ? 'each-project-container-large' : 'each-project-container-small']">
            <div class="project-info">
                <h1 class="each-project-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Kits </h1>
                <p class="project-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div class="project-img-container">
                <v-img clas="project-img" src="https://lh3.googleusercontent.com/aaO9EoglwY4n9buJ3r8IznVdiwxsC_xJBkb9Eh2ForFkOVdFOCinyGmIk4ngoZ1ID559bvMcLuuFW7vxtM0XYZLnmN-lGbXzw8vNJNbT92BSrpRidyBnP9HWauJSQr4uygxNR9Wz4z3ADJECPvlEC3BE1VmILEN-Qs-O0_g6XpqKhHne2ARRNowzsRLD58d8YDq0JdEo50G54Qs4wZ_XfEpEM49ya_oRAC3RtzT-2EC1PdWXOF6ZTViayjj2K8HRzhI6Rk1SDXsJW-NrgcSO9XUjHY2ODUNo6XaBGb2CvDSgyzNUKE67_rm9PShHcNZGjPNJlcgp2D2xNdxvg5RQnQMpy2yidDkb5azo6FuxyAzF9LOzC3GGNanAMpH9uB0-QQoOEp5DAvL6_SdqzZfy4_3mvWQwRX9siv3S9n6_CccxAFAMYEIF-FdZnNDIVBHKj69Tlqd1AlW969BER-BmQLefpX7mYZ6xPk-j0i0sM6Tn45hbIL2HhxNwHvapc9QAB4j8Kvp-5zuBQejFquuVTIbWGhV6JJE-N5805_XzSdSNtn9vnzbKGWilVdwzd3sGa7is7wGIZ0VwySTzmMh6Kp6ru8Cir5jo2kf7be7IAtbeHD9HviGZJp-VPKvvfFxp7yWebCfd67tS2aR_VCfe4J98DDrFkNqwBLyelxpw82d5ZyKdeblZnX_u-rvv_4J2TjHfcTcKHqqiK77rOj9EQRYXT2TnrAYS2Umd3sqmZappPETI5P_SGPs=w426-h284-no">
                </v-img>
            </div>
        </div>
        <v-divider class="project-divider"></v-divider>
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

.corona-heading{
    color: #D50000;
}

.projects-heading.display-4{
    padding-top: 3rem;
    font-size: 60pt !important;
}

</style>