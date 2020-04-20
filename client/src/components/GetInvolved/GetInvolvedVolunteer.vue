<template>
    <div class="get-involved-volunteer" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
        <v-card outlined class="get-involved-volunteer-card" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" flat>
            <div class="get-involved-volunteer-title-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" >
                <img class="get-involved-volunteer-icon-img" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" src="https://lh3.googleusercontent.com/iXM0KaLp5NkuF1HzhD4TAosXEtETwjJhoUr3xniIXcswxUMi0qPd7JOIuYAPt4zbxg5oDcFzCBWl2deRfwmIebribENNonVnxz8Vqrge7WbIj4a5KZDJiW0B3i93gHCGYLm71iAdVWgBVslHTeEHUys_sQUyim7F37qEvBl1EG_v0oXrVNWkkIzS5HkA9E_TeXrJIaKTl6u91RdtpQsIpmVYhiO0iZhVNpY36lAFPxq57LsJgheGgrgsFGJlqI1IxrJSxW2VN-vmotysYQLbLJXkQ71GiotX3tk4pHyEanMAT1OtXoKHymeZJyRppZCa3zibtm4DkhzKrCjZK2UUF6Y7zKCxEK3KNAwx1a9NTFFzGL_eDG0sry3gMj4YjW4P8vFFc7sZ4kcr88Y9v0Ew6KkmamAvZTIM5BDjwD4QhszWjT9IejjeEp-nB6Gc01vaccMC0Rt2kUvT8AfOKk3FUIDFfiCnf2U0ALFi6x2m6rSEKNVAZuNCSwiNaGfxp8hQBibxFBWSnbzsawTHl2-e0WckTubBdlYLKNH_5OWJVPGb3K9BhAV4NuDXXpSQ89ekU60U0ua5973kYYgamQTErJwdyHJuhgAtfhq5yrlYLzc8_GZISoyayUfsthkLC-uLk121eWoTtDFX9hgxqOcDFIAB3NRt2D9rpTGIctYzttAAfPOMRmELV_v8Fb2PXPz5c0EsUamFg7GiuQfmWdCo-6QyG7E3tqEKLRblYyzmpg7N7vwiN_1RYgw=s128-no"/> 
                <h1 class="get-involved-volunteer-title" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> Volunteer</h1>
            </div>
            <div class="get-involved-volunteer-info">
                <p class="get-involved-volunteer-info-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <v-btn class="get-involved-volunteer-btn"> Volunteer With Us </v-btn>
            </div>
        </v-card>
    </div>
</template>

<style>
    .get-involved-volunteer.large{
        width: 50%;
        display: flex;
        justify-content: center;
        margin: 0pt;
        margin-top: 3rem;
    }

    .get-involved-volunteer.small{
        display: flex;
        justify-items: center;
        margin: 1rem;
        margin-top: 3rem;
        
    }

    .get-involved-volunteer-card.large{
        width: 60%;
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .get-involved-volunteer-card.small{
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .get-involved-volunteer-title-container{
        display: flex;
    }

    .get-involved-volunteer-title-container.small{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    .get-involved-volunteer-title.body-1{
        text-transform: uppercase;
        margin-right: 5rem;
        margin-top: 2.5rem;
        font-size: 25pt !important;
        letter-spacing: 0.5rem !important;
    }

     .get-involved-volunteer-title.body-2{
        text-transform: uppercase;
        margin-top: 2rem;
        margin-right: 1rem;
        font-size: 18pt !important;
        letter-spacing: 0.5rem !important;
    }

    .get-involved-volunteer-icon-img.large{
        width: 8rem;
        height: 8rem;
        margin: 1rem;
    }

    .get-involved-volunteer-icon-img.small{
        width: 3rem;
        height: 3rem;
        margin: 1rem;
    }

    .get-involved-volunteer-info{
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 90%;
    }

    .get-involved-volunteer-info-description{
        color: rgba(0, 0, 0, 0.6);
    }

    .get-involved-volunteer-btn{
        margin-bottom: 1rem;
    }
</style>