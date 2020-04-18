<template>
    <div class="meet-bird-container">
        <div class="meet-birds-title-container">
            <div class="meet-birds-title-txt-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <h1 class ="meet-birds-title" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Meet the Birds</h1>
            </div>
            <div class="meet-birds-title-img-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <v-img class="meet-birds-title-img" src="https://lh3.googleusercontent.com/lfG2xjPpzO-IwFKcmTfrpihQiq6OJ3dVtEvPx6mtZn1WDJlLGfSuqp56cMpwv463FGD9MRFPm1PZrxl3ehY8RSuZa2hNA7ZQqGURDIFF9XgfPd0mRt5mn3MVF5umqpLyTcMZSoVCBd0O6kZs7mAVVLcQoZgyIRQjKvhNlgeaP21YADdTft-AewKEEMlMOhb853J9KYN_j7NmBk_gzzRkfbFCYfU1sHHldgjiodS5W4_xsQ6E7kyvHn8IVpO7pNn6lEuQwNY_x-XkijC49wAUaTIw4WJmEQ13LD8uTt2qp5wtMNg1qaE994xCHKcUjNaRlaqmZPBWjd9vb1qDwQ53_ptGiP3xUWbjPGqaJ1NQEBKFIqN93lCD3dllhqhXhMlQkucMFD9VyT5sZlGYmXhontPvbqZ_ATEdRX6OpPnijt4hRnuZ1YZCY_lLTEAe0mNJywzGQNxB2V1hoJA5Nx2zo8yN0yaDh6Z-yFfWC4jjR1f63UkyxQHBGIhOd4UP2rz0axkqORA5IcJd5IMjjAHGxwjS2J-cSK4nunHKB6Nqx82ooaYupC2drrk3uv114AxShkQH_m2i3199qw3d5y6MakzbriJxF5MX9j-xnlsmvwuhVV9a0UV2QZwSMUrpq1ImTxT-ZNz4hFxAwj_ZUb1tORoYQIji-YlDZZjFHW7mI-DTB7vDDdTIBw4utgEniUQbn4cAePMA9k6yqHsfB9biIXUIo8nK8YlnyRnEXlz2TCFYB1yE00JbJkM=w2198-h1236-no"
                    max-height="40rem"
                    contain
                ></v-img>
            </div>
        </div>
        <MeetBirdsGrid/>
    </div>
</template>

<script>
import MeetBirdsGrid from './MeetBirdsGrid'
export default {
    name: 'birds',
    components: {
        MeetBirdsGrid
    }
}
</script>

<style>
    .meet-birds-title.display-4{
        text-align: right;
        letter-spacing: 0.75rem !important;
        width: 100%;
        align-self: center;
        padding: 0pt;
    }


    .meet-birds-title.display-2{
        font-size: 30pt !important;
        text-align: right;
    }

    .meet-bird-container{
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .meet-birds-title-txt-container.large{
        display: flex;
        width: 50%;
    }

    .meet-birds-title-txt-container.small{
        display: flex;
        width: 60%;
    }

    .meet-birds-title-img-container.large{
        display: flex;
        width: 50%;
        justify-items: left;
        margin-right: 4rem;
    }

    .meet-birds-title-img-container.small{
        display: flex;
        width: 40%;
        justify-items: left;
   
    }

    .meet-birds-title-container{
        display: flex;
        justify-items: center;
        width: 100%;
    }
</style>