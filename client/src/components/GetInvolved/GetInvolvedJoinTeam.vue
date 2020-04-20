<template>
    <div class="get-involved-join" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
        <v-card outlined class="get-involved-join-card" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" flat>
            <div class="get-involved-join-title-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" >
                <v-img class="get-involved-join-icon-img" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" src="https://lh3.googleusercontent.com/M8VRV6Tpo027ILyZjzkFEkAx_mY6M3R0l9Ns584AEEkaYFISamixY3w1JSaBnXfFCEuSd2BfpyqquyareZbhhZihaVq_-_pZaQwYInkpMPG-_6U1OaNkufunyLZshbrwGzQYtHq2kXansil8oaPUn19QTWUui7NJCN4hKWCJvL_xe3idZ4Ety5kJLLYAgcTir78cb9aGly1v4JTnLrtJQYQ3cXMj6sN1QkslaYgvr2lz-la3tx8JKghDfvykmJyt-5EvYlb9fFtjvFugvKj0aOwLDZnACzrVNp9dOqRIiqPnKLN7tCEUt33ymGk5htmJOandYZ8W-jaVFprM4YG2tnlG6mdJAXUZHuWVvs6q_R5V6OOx8Cz--GXCzrxGUlsaFOFY6RWaMRWCkR-Gil-L5RV8txxRy0aFKbHTCDxfiC1vJ5dXJxENBpTpColbMVBm5XWA2qQGZqAwOQDAnmPiyydpR8xzJ6mzJP9qLf0jpieYRW7KLj9Ty2xhPlMgfpmR0xsk9kDI6x3PG5tErSxLL0QX8D_yIgCM_bS-wIAG6ZECED5ohhvX13j1ZE70xYCIb5JGx-mtRW4vf3U4nHd7Zboi4fRVC9yIkqfwIsXreofIZ26srD0w9-easTCOSTzb3KEykwwyu8l-FAUzyrNOuJfJZiKzhRH8Tm-aTyO8ttm2EynGsj_1RBMW6IqnGw71JFR6JDf4D6YPCBR8jtS_8ZrXGD3zvT-QJJmRyAuA2fXbnIJ9XLLC8Lc=s128-no"></v-img> 
                <h1 class="get-involved-join-title" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> Join Our Team</h1>
            </div>
            <div class="get-involved-join-info">
                <p class="get-involved-join-info-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <v-btn class="get-involved-join-btn pink--text" text> Join Our Team </v-btn>
            </div>
        </v-card>
    </div>
</template>

<style>
    .get-involved-join.large{
        width: 50%;
        display: flex;
        justify-content: flex-end;
        margin: 0pt;
        margin-top: 3rem;
        margin-right: 1rem;
    }

    .get-involved-join.small{
        display: flex;
        justify-items: center;
        margin: 1rem;
        margin-top: 3rem;
        
    }

    .get-involved-join-card.large{
        width: 60%;
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .get-involved-join-card.small{
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .get-involved-join-title-container{
        display: flex;
    }

    .get-involved-join-title-container.small{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    .get-involved-join-title.body-1{
        text-transform: uppercase;
        margin: 0pt;
        /* margin-right: 5rem; */
        margin-top: 2.5rem;
        font-size: 25pt !important;
        letter-spacing: 0.5rem !important;
        line-height: 2.5rem !important;
    }

     .get-involved-join-title.body-2{
        text-transform: uppercase;
        margin-top: 2rem;
        margin-right: 1rem;
        font-size: 18pt !important;
        letter-spacing: 0.5rem !important;
    }

    .get-involved-join-icon-img.large{
        width: 7rem;
        height: 7rem;
        margin: 1rem;
    }

    .get-involved-join-icon-img.small{
        width: 3rem;
        height: 3rem;
        margin: 1rem;
    }

    .get-involved-join-info{
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 90%;
    }

    .get-involved-join-info-description{
        color: rgba(0, 0, 0, 0.6);
    }

    .get-involved-join-btn{
        margin-bottom: 1rem;
        font-size: 14pt !important;
    }

    
</style>