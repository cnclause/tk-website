<template>
    <div class="program-impact">
        <div class="program-impact-container" :class="[$vuetify.breakpoint.mdAndUp ? 'impact-container-large' : 'impact-container-small']">
            <div class="program-impact-info">
                <h1 class="program-impact-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Health and Wellness </h1>
                <p class="program-impact-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div class="program-impact-img-container">
                <v-img clas="program-impact-img" src="https://lh3.googleusercontent.com/fjC6fwTFW74wbMGvmS-tLwRes9ZUUP2BRHlxg7pbzNdq3DyVSebRyy8ayBKGoQo4NVIN0Ow8te4mgtNgsWRvfz4V99TxNQMlIJ70ieGcVPwkYsz5JDqlqu_O9Xrb_82KxXtLit4U_nCUHZ1YFT6A--sa9MSAHV7TvV5CA9_Atn-iDnEI_jE3f-JqOnjFed9BUMPLfaFHnRFnFynEVba0CEVLcvEd6-YoU6odLrKrKZbN5Ty6NEwvJ_7AYKcZCxMmoXwmsgLHnAmmUyCcUadzR-o09_cPebhBQMMGyKI3D9ZKDYXKQ-0h_AjetnD01YbVCjfZB2-7F7uGcyEBTnsAxm_3N_bQWDHudT1OUlk5HsIuu4FeZ0DH0bH45A0z8A_I7o8KJINuDkoEaokMgc_TlSljYioxVXxqX9-NXQSj2PqEru5av3plb4DuObe2Ns8J_tS16CpleKY_UXjPVTyXu1iEFdeaRvDJCEtX60g7iNtkzQJvxHVk2TMpkTr-178A9GKtc4nN6p4vSglzDWbl3kbIA9dAd8bmRmLTwrHuCoAPGIeCXWxRGsqv6eID0br0o9zoAJsSYUNQGapZqpUG1XH5ZDHC4LBzY7G0YU4EjUpu_s-iNYa1neoPmps0xCKlLDzW_Txnl9oy4dRIRnxZ1Ws6oD6AGKZ-N6ztnhRS7jDdr3V83sByjdaWQt3n5oq19E8ack8TBhhy72SB4HdaINUbDpUI93LpzQLzgWDTDRi2ZT3xzYhG880=w2220-h1480-no">
                </v-img>
            </div>
        </div>
        <v-divider class="impact-divider"></v-divider>
        <div class="program-impact-container" :class="[$vuetify.breakpoint.mdAndUp ? 'impact-container-large' : 'impact-container-small']">
            <div class="program-impact-img-container">
                <v-img clas="program-impact-img" src="https://lh3.googleusercontent.com/DRAEmuAL2Q6xXdQwzM5w42N9MeC5GJGRuh6y95Egmkjv3tO6kujruFMRdU9TZtOPcKWA6p19uHuSRw6kN4VHitrpimmWyJgvvdtVbnn53q3IGoNDq_IF0LeEzKKKZa0i99QJB5n-7YETtUfw3G7gYaDmpJimr82KCcyOXTD43dXf3wglmDx2lJEb7xyzW1Cuc9ftI59uXU5TaT6ObBAFLIcmaqgpVhCIjRWuNK9JGf4gfZG13nzwypSgcb-heVI8XXX-9tN1jVdIu6lHDIxycIElQOROSoE1ieWDNhOVxIZqpWiK5eh1Hk8u-pgFAOHYpxMyaD-uKSvwVft32Vy4ztsEvMyKqcrFsYyFeKMk2-gwJ5VaZZRq9_rEh0KurXv4Z0XpqjxmzV-kA02o2bKhaq0Cv2KC0m_rBequbc3iqgULbSKagEDfkEb0oCeWGiIXeyd-CINTUv2y0ircXaSquTNxuMiVWl7_d4mgUHdgr4uaKj1gO_bmjiaxLddS3-pxIJ14gVlydz7bEpGDjN725GDDs3xDKkks2V5Pxq3TfDkVOkTpPrvrx8q4Hk1fsqKSmA0Q8LzQOO8bZqHp0-u3zcW37_xPGHDJDzEYnZusJWvf9oe4aDOGTT8hEEpcbTyllbQOUFip6YzmPE7TkdLSiYVCEEljBj-kRtVD2BA2av-5q8p12SJ33Uo-d7YDrB2vcqtqvqUv1xNt3zMfYZC00LB_pB54cWuwo1eXDIxfw7cuUNY7g7j_-hc=w2368-h1578-no">
                </v-img>
            </div>
            <div class="program-impact-info">
                <h1 class="program-impact-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Education </h1>
                <p class="program-impact-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </div>
    </div>
</template>

<style>

.program-impact{
    margin-top: 2rem;
    display: flex;
    flex-flow: column;
    align-items: center;
}

.impact-container-large.program-impact-container{
    display: flex;
    width: 80%;
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.impact-container-small.program-impact-container{
    display: flex;
    flex-flow: column;
    width: 90%;
    margin-top: 3rem;
    margin-bottom: 3rem;
    align-items: center;
}

.program-impact-info{
    width: 50%;
    align-content: center;
    margin: 2rem;
}

.program-impact-img-container{
    width: 50%;
}

.program-impact-description{
    margin-top: 2rem;
}

.impact-divider{
    background-color: rgba(0, 0, 0, 0.12);
    margin: 1rem;
    width: 80%;
}

.program-impact-title.subtitle-2{
    font-size: 18pt !important;
    text-align: center;
    line-height: 2rem !important;
}



</style>