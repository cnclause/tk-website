<template>
    <div class="get-involved-options">
        <GetInvolvedFundraise />
        <GetInvolvedVolunteer />
    </div>
</template>

<script>
import GetInvolvedFundraise from './GetInvolvedFundraise'
import GetInvolvedVolunteer from './GetInvolvedVolunteer'

export default {
    components:{
        GetInvolvedFundraise,
        GetInvolvedVolunteer
    }
}
</script>

<style>
    .get-involved-options{
        display: flex;
        flex-direction: row;
    }
</style>