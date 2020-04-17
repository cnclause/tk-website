<template>
    <div class="projects-container">
        <h1 class="corona-heading projects-heading" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']"> Addressing COVID-19 </h1>
        <div class="each-project-container" :class="[$vuetify.breakpoint.mdAndUp ? 'each-project-container-large' : 'each-project-container-small']">
            <div class="project-info">
                <h1 class="each-project-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Kits </h1>
                <p class="project-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div class="project-img-container">
                <v-img class="project-img" src="https://lh3.googleusercontent.com/owYTeBAnsLfoJGfb7WXS5P4Gr2l37HRzQpFSfvOZFOvE_hyueN91P9UGHtb81blqoMsPasxs2D40P5mNRCawyl-ARiaIBYP9TMIK2mwZ_fdQMXXUpjVL95MSmd4l5mD6sIOF3xwuNmuAYE_KJyE728UkbBv_dQXDoPLKDNPSgP_acCY2w3EwMwgnUIjMMl0feSE2CgFfRlJlw7u3msfPVmh3zOn2YczkmtDvS8cE-QcP45QMb2WgKykee416bTG1hZhZlGzN0q71L0SHHYnGmGv08JfP2qlmaTWjMHg8Sv2gAT3F4xvHlxrK3jBBvmkLwNDFiH0zHBsLnllcE7I1QUNtfvPFnyV_MJdxqQCsLCoedmkDT5I9OuRIOcZOBpX1gPVCQpxy-_dj7TfDZ38gMPnQmtEW1L9433sts3VOJ1ZXsswVl47fKiickk5yW_qgUE_Kv4FqfiBVsmAzkkOFXH7A9XfZwgY7cxDopU2speaQau7Qj-RFaMZFTFTovF2JA-XvLtZNU-EPPt5cy9b-e5vB80dm3nZKwprpV6IfQhXgHvSJtEOktvubXzPEKhIhzqh46UAizc6DNdQT2aPHoGSE7FE7EvwYzjXjRrItcfQKJqGJZYi4OffbV7IZbtr7FlgEnhEd5nWO1IKLWS_FGjXPu6ddXKyKZazf5Xb-fME5g1bWv9OVz8b6iy89UAligWwB3eAMXulFrX9gc85L7Ek-Q9Vrx8qCHEihciEsTVbK_wxBmVavWbE=w1080-h810-no">
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

.corona-heading{
    color: #D50000;
}

.projects-heading.display-4{
    padding-top: 3rem;
    font-size: 60pt !important;
}

</style>