<template>
    <div class="get-involved-options-container">
        <div class="get-involved-options">
            <GetInvolvedFundraise />
            <GetInvolvedVolunteer />
        </div>
        <div class="get-involved-options">
            <GetInvolvedJoinTeam />
            <GetInvolvedOtherWays />
        </div>
    </div>
</template>

<script>
import GetInvolvedFundraise from './GetInvolvedFundraise'
import GetInvolvedVolunteer from './GetInvolvedVolunteer'
import GetInvolvedJoinTeam from './GetInvolvedJoinTeam'
import GetInvolvedOtherWays from './GetInvolvedOtherWays'

export default {
    components:{
        GetInvolvedFundraise,
        GetInvolvedVolunteer,
        GetInvolvedJoinTeam,
        GetInvolvedOtherWays
    }
}
</script>

<style>
    .get-involved-options-container{
        display: flex;
        flex-flow: column;
        align-items: center;
    }
    .get-involved-options{
        display: flex;
        flex-direction: row;
    }
</style>