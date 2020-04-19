<template>
    <div class="programs-container">
        <h1 class=" wellness-heading programs-heading" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']"> Health and Wellness </h1>
        <div class="each-program-container" :class="[$vuetify.breakpoint.mdAndUp ? 'each-program-container-large' : 'each-program-container-small']">
            <div class="program-info">
                <h1 class="each-program-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Yoga </h1>
                <p class="program-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div class="program-img-container">
                <v-img clas="program-img" src="https://lh3.googleusercontent.com/aaO9EoglwY4n9buJ3r8IznVdiwxsC_xJBkb9Eh2ForFkOVdFOCinyGmIk4ngoZ1ID559bvMcLuuFW7vxtM0XYZLnmN-lGbXzw8vNJNbT92BSrpRidyBnP9HWauJSQr4uygxNR9Wz4z3ADJECPvlEC3BE1VmILEN-Qs-O0_g6XpqKhHne2ARRNowzsRLD58d8YDq0JdEo50G54Qs4wZ_XfEpEM49ya_oRAC3RtzT-2EC1PdWXOF6ZTViayjj2K8HRzhI6Rk1SDXsJW-NrgcSO9XUjHY2ODUNo6XaBGb2CvDSgyzNUKE67_rm9PShHcNZGjPNJlcgp2D2xNdxvg5RQnQMpy2yidDkb5azo6FuxyAzF9LOzC3GGNanAMpH9uB0-QQoOEp5DAvL6_SdqzZfy4_3mvWQwRX9siv3S9n6_CccxAFAMYEIF-FdZnNDIVBHKj69Tlqd1AlW969BER-BmQLefpX7mYZ6xPk-j0i0sM6Tn45hbIL2HhxNwHvapc9QAB4j8Kvp-5zuBQejFquuVTIbWGhV6JJE-N5805_XzSdSNtn9vnzbKGWilVdwzd3sGa7is7wGIZ0VwySTzmMh6Kp6ru8Cir5jo2kf7be7IAtbeHD9HviGZJp-VPKvvfFxp7yWebCfd67tS2aR_VCfe4J98DDrFkNqwBLyelxpw82d5ZyKdeblZnX_u-rvv_4J2TjHfcTcKHqqiK77rOj9EQRYXT2TnrAYS2Umd3sqmZappPETI5P_SGPs=w426-h284-no" eager>
                </v-img>
            </div>
        </div>
        <div class="each-program-container" :class="[$vuetify.breakpoint.mdAndUp ? 'each-program-container-large' : 'each-program-container-small']">
            <div class="program-img-container">
                <v-img clas="program-img" src="https://lh3.googleusercontent.com/W4j7i5F9W3GKfbdRbSpxbEvkZCtErjn43bh265Xv7nVvCc68K4fER9f006A23vcYSEg8lNVxFIKgaZP3EHDXVm3_d-yeIce8io_GgAQFPmGvQ4mq8UvLWLzUrgrqX1W7LstgY93GxEb-H46j7yYx3tz6sSltBYtuB8pJUdeHiZNRShTzajS8MDc0SPKXnEYo1FPKnjT-2dRnfyI9unSwGIOrwag5yDAuXuEUK0LHP3UPvodli-haHLkPnKNnWPId9cZk0FWyhizB8R_j14uIklwrQrHp5CPid5CZi4YRip3L_088G-3H3lopRQG1NKAA-3eqMXN8VrqRGI7GGLIM5zdphSr4WAfz56afH1Vs1FBMKtiRUzdAMAZB24ksBE5s5OjVpsB7HziWlncR72yroBWEbHr3em7o7SiSSYWs7pWaQ2-U-DaUmmnNei9phA5Zg4cuC5tPtC3ftYOI1yFXWuirezR5VUNO8AOAqUkh9YvpFbT7FmupQ2IMHwVF_XQTc3DF42H7qt3D5n3SV8QN2yK2yKD6sFdMGLFuPgh3SAbQpJVMrMcL-igmc-gogh4tCuFgAP9Sju0_zt4O9BdPZX_I_MHwu4uZ3D57hH8MUFc4oKf9gzfxun4wwmbElnBP8KEjb78pkd1DHrIzZa4sDL4DxtVowDY-hZThr1CEidjiIfN3dVV3XvAW34VYbnqiayUaoKLN0bh9ffEXGbHtwMndClgKvMg-IeR3f5WyAzdbzAN5-FwxnfA=w1894-h1262-no" eager>
                </v-img>
            </div>
            <div class="program-info">
                <h1 class="each-program-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Women's Health and Sex Eduation </h1>
                <p class="program-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </div>
        <v-divider class="program-divider"></v-divider>
    </div>
</template>

<style>

.programs-container{
    margin-top: 2rem;
    display: flex;
    flex-flow: column;
    align-items: center;
}

.each-program-container-large.each-program-container{
    display: flex;
    width: 80%;
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.each-program-container-small.each-program-container{
    display: flex;
    flex-flow: column;
    width: 90%;
    margin-top: 3rem;
    margin-bottom: 3rem;
    align-items: center;
}

.program-info{
    width: 50%;
    align-content: center;
    margin: 2rem;
}

.program-img-container{
    width: 50%;
}

.program-description{
    margin-top: 2rem;
    color: rgba(0, 0, 0, 0.6);
}

.program-divider{
    background-color: rgba(0, 0, 0, 0.12);
    margin: 1rem;
    width: 80%;
}

.each-program-title.subtitle-2{
    font-size: 18pt !important;
    text-align: center;
    line-height: 2rem !important;
}

.each-program-title.subtitle-1{
    line-height: 3rem !important;
}

.wellness-heading{
    color: #E91E63;
}

</style>