<template>
    <div class="programs-container">
        <h1> Educational Programs </h1>
        <div class="each-program-container" :class="[$vuetify.breakpoint.mdAndUp ? 'each-program-container-large' : 'each-program-container-small']">
            <div class="program-info">
                <h1 class="each-program-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Scholarships </h1>
                <p class="program-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div class="program-img-container">
                <v-img clas="program-img" src="https://lh3.googleusercontent.com/-6O9_0r5L5yTZm3XJMa0mKr8Y1G7OtyM97hI8HDuAFEQSYJznqHF783FQJPwRKGgYlppI9tUxmraE7raVYu2DzeZ_oDgesoJbb31NFqtveK9jwF9uLhEBDLc9UE8wF2knxnIhwqxxF2RAcUv_7E9rdcsAloL5Y94X8_PsjPyc1-RYfTn9rHauQTapCBrOwbZKaOcOUWg_lEb7pXvuugWi2i5RhVkICzu3uUFY986c8Q3Ys8c4f5BB322L3H2Rb68j4tpa3GnihCZsWNCrn-G-vAIX4NkChQ13rlDLfmdRCtfQqLPvXsLqh9fIojY-DOVYDVBswi-iCPdS_WGbJB8sduID8P8_ekf6eXtn0XSYtH0OYzG1i0qQzjuMeYDQMGsDj_Qmn0y4nQDqRtLbM5Gkp8HM5H8sVa6gsmr9IlinAXkXPdyRnpAoMKx9BK5vLQ3RN9dMmEpymyyC_SQDsfckB_TQeA2JC21mkaf2aW-W7m60HkTPRGCkvFafZMa9YdHMejDN-A06tMPOUHUdyjl8KUXYvhXUEemWZFkM34BBoPIpSKW1YoZDSbXiK-Im6pyS5oO4emq0a4K2rFlKwSlgL0aozj12m-Xa7G7bDwSicicT7c8EE7EUrD37xh0RpEjs9k8MAKp00hDSH2Agy_k8L-3f64z2VJDnUZem9_fEQKuiSuuGreLzLQVgpXbpzXFCKDa8D5PO0toSWprKhtHC1QALqFUaNRi14_jTyx2QHPOmFd2nnVW1aY=w1024-h576-no">
                </v-img>
            </div>
        </div>
        <div class="each-program-container" :class="[$vuetify.breakpoint.mdAndUp ? 'each-program-container-large' : 'each-program-container-small']">
            <div class="program-img-container">
                <v-img clas="program-img" src="https://lh3.googleusercontent.com/yMjLpgkoQeWSZxOXTg5zcORE-71PDX269OpxiGkVj9l-GounhsFnOXMvl8st-K3aPmcdiT8tEVGfBF37RVZj2P3pRvo-9fHVILZ9GKUpmq8S0Dvy-RTB5FxTNXM5MEx6O6S6q9G1OZtyzT08RvOLohIwAzfP8j4LkjD7nWevYWivo7loms6GLqptOFR7FUQcHbt6v-LcHIx-5pVJ2nFJoNmvLvkCAeIeJrO4BcIq9wufb_FOeQWVkqRXRg_ZPytRASuEmqeS6MQXUccLyEeeSSU2-v1nAVWyY0ohtaAx9URc7MXP22GHRIV_JzeaoIOw0AGrHKiZT_oGxquFDiONDU1q_zESgshQ2jwsEw-4pv1V6jhwjUM1Pq9PcLv8I5UfhKHFHBOlaSWoF80LhEMUZ4QnVhPTBeEanGhEK-zoEBJ8IFhQrixVZUvAcRBGpwmiXd13qSMmNU40wnbeV5bFJ8Uewnp-H_TWxUY-xaw8VSGfj2TBJZ3nkbg1Ps3ZTkLAeHnvJUuVQ-yS4o0jVYIs5Nv9YcT_FaX1bJImBYNn-3nE3VXNJDSKZ6QX8yaLBmIPAGYuXetyPjM7WC1FgHeE2T2O9ZQywfEmhza-j4a80b97-PYhHA-J6TYgD5eHHVziI8T1P_7V9B1S9AlVAJCJJvQTseH52JBw_sLJmRLC42Ztz4szYgb54a6WqEO9jw9MbGwSOEAsb6cP0tMb5cJkjiZxGeAL2RezZrtkFsr9-FUy3CK9JaZU2Xg=w852-h640-no">
                </v-img>
            </div>
            <div class="program-info">
                <h1 class="each-program-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Mentorship </h1>
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

</style>