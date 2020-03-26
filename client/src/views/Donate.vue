<template>
    <div class='donate-page' :class="[$vuetify.breakpoint.mdAndUp ? 'donate-large' : 'donate-small']">
        <div class="donate-title-container" :class="[$vuetify.breakpoint.mdAndUp ? 'title-large' : 'title-small']" >
            <h1 class="donate-title" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']"> YOU Can Make a Difference </h1>
        </div>
        <DonateContainer />
    </div>

</template>

<script>
import DonateContainer from '../components/Donate/donateContainer'
export default {
    name: 'donate',
    components: {
        DonateContainer
    }
}
</script>

<style>
.donate-page.donate-large{
    display: flex;
}

.donate-page.donate-small{
    display: flex;
    flex-flow: column;
}


.donate-title-container{
    width: 50%;
    margin: 2rem;
    z-index: 0;
    height: 40rem;
    /* background-image: url('https://lh3.googleusercontent.com/8MCeu0HgmJqAZ2qgKvM3I927NWeaDQiBs4GwShi9u0Q5mllWypwZT0c6CULo0vW8sJ83FUtr3hGnun0gRGcVwvoFPyRikmeRGuNuIXGJsrtOnI4bLZsZGdpogIt5hzWdEjHO51oB7dIBKphHdLxBnV7DUIj9m9BXQe6x9kReJlzs3IFU-WuEHJ8WsWdDlK37qksdk5Ui4ltXKMGGlCtsgPl6c2GsAElRBqCxLy2xmOkNya1QsNFgoJAE5IdCX-SLF1MDaoER5e9oFn4GO_mhGWm9RIOYILg732Ci2mjAgTv32a1mVtRbB6gbxTXwBxDDeSl5RFh0ZuDIJg_JDuhhmTurca_zhJohhSWwC9hf4wPJonc3kTmxsqnmqqNxubAmpk5ISWYG17YDrOsxlFHukOZ_3af_f5jlcjw351H4MX5fKlrC1o85__udNSmmqUn5iEhEkm4Br6U2lZbsZ-2Xl4E9RFA5XTSODrvM1jTSJD9ftvxbhNEi9onxYEETu7Vyc7FbojG2k7soOLh8dGgHjLzD6dT4DUpl9hjHHTs_Ijg9_C0p93v75NSZaYjz0ifojqfX8RaYH6CAS3DNHRPkuLbQKpCxM0L2ET32H8YnjA7ADHm8wGdu-acDOEMfsXrO9Q_sq3mqXMfEnHey02gnvQF79csECCNNIBu9qTEKquP7XvcpZFoPVg=w1590-h1167-no'); */
    /* background-image: url('https://lh3.googleusercontent.com/LodpZDt38ZCtHZOlxna9Ri5xuyEMzoeEwi1JiJLGdGxPfxYPdgK8swAgnRyQWYPt93NECak0QDBpkeLTXeRnDq0GPaOw0dDN9BNjg5Ly0e1ureHJeNSn_MgCm6wwzzwoop47mmZNEXw83k1rSUeB_Bd66dGtvGUrLbsMVkDaFZI4AaUSovojsYCCWTkItHHbmwm8kEbJYs3j-HVlmWul8N20vue33AdMGqUQoVW2p-8CZHEkPqN-gGWKbG6Dr4V-aXfLODCZJAtMQ0Hl2YTnoEVWVsrESwQpBOE36UQ5X3KRGayyYBqkJN5sPwK9u0ePnXeGZcgW6PTYiSU-3pJ-6jfKPhe2SrV_fubFJJu11t5AEAp6FDDx7DKmvTt0M6eIGSQuk9DB7X9c96PImxtPoNSpRaOeIrNMGctrmlzbF-holrk0rsu-opFu3nFWZ3al5G8wClnnqykWFWTz8yhkJzkoU0RU0FursBoSfJQ0Ku3--M0aMuXwKlT56mwJKgxmFcb3FvKW0SXkJeitpab_6Qdcopbjt-PfPRg74q5Rr9QI9PToVHdaLIcsZ0RakTivHaV0HtONyONcCAFJgITDGg6B4WjdlQ-4f-idUFeLAEwx_3jrrTHw1KHewjIdtddUrye0kKBZT4tfpBNTozXOv8auk2wEGTmbrkjAfBdmfZ26domGt62XTLLHurYeM9FsmlN7057Hf4se784KDUgvoCzUUNK7TjWnbQitG1c4C6-lvzB-27oCnbI=w1024-h576-no'); */
    background-image: url('https://lh3.googleusercontent.com/i4cpbs7vTdCupWDHv0ityE1pDTTJVQL1t3iWYALpxlhHZLA_AhuvtX9oHivsbtWydyYjP194Ie6bETTlh-ig6oWFLkcfBw5_UlaKN16Ww-7fEeb9fPhd_jFssSO4bqhyX1zFDWaA2DQohgJb88IfC6EJspxuifpdjZQb_qY-r5KBhipaD_hq81d4PP2grhGMd00Y1UzX4Ds7aoShJNw_6fGFF3CPNaWqvRxzTijn1pcwx1Os8sGCXUrQdTZh72EbYth6dQpfTc7KmCXSNkMsNj6YZI_Ki7jmRYkM947YERwRSt9VzI_oH4z_c8AlUD4xme3qJhyrStKgUSS_2ni88tmbdDzZU0fs_yjHymAJzcOcU_e77cTtNZp59B_f9PiVNuN_QQ0rkGIW3VDtsvuXl-Mjmfxl6DrfY1istdQ_ZleGC7R3jJCaFpgDaqAsa8G9uZT1beHDR8F7M_La_M3YkyEc8FRkpFhI6nL6KZ7geQuyTRyyrYXnjxKby5wDWFvMxOz7dInI9wTkIfrlU2JsxTwd6mHdVCejXJrR4aOw3cgJg64HVUyr7XXpzvMNQfkzj0JAYByvHHeIs2w1dzpjlLmZYs8GQBI_vBF51Qdmir7l5C9kX3XF4p3-YXu4ggPTHiZTpeSAOvjvVThBurkEjr6v3SoSROsb2rECo2Ju2cU_9Q14UL7FRtCwzVyhTYfaH7oSI4HivKcf_QGansrH7eX6Ct3Icit2xD9t5dgPkYX3VcQv67ndffw=w1912-h1274-no');
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
}

.donate-title-container.title-small{
    width: 90%;
    align-self: center;
    height: 25rem;
}

.donate-title{
    width: 33%;
    margin-left: 1rem;
    text-align: center;
    color: #ffffff;
    text-shadow: 1.5px 1.5px #000000;
}

.donate-title.display-4{
    padding-top: 1rem;
}

.donate-title.display-2{
    width: 40%;
    font-size: 30pt;
}

</style>