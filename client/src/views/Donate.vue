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
    background-image: url('https://lh3.googleusercontent.com/8MCeu0HgmJqAZ2qgKvM3I927NWeaDQiBs4GwShi9u0Q5mllWypwZT0c6CULo0vW8sJ83FUtr3hGnun0gRGcVwvoFPyRikmeRGuNuIXGJsrtOnI4bLZsZGdpogIt5hzWdEjHO51oB7dIBKphHdLxBnV7DUIj9m9BXQe6x9kReJlzs3IFU-WuEHJ8WsWdDlK37qksdk5Ui4ltXKMGGlCtsgPl6c2GsAElRBqCxLy2xmOkNya1QsNFgoJAE5IdCX-SLF1MDaoER5e9oFn4GO_mhGWm9RIOYILg732Ci2mjAgTv32a1mVtRbB6gbxTXwBxDDeSl5RFh0ZuDIJg_JDuhhmTurca_zhJohhSWwC9hf4wPJonc3kTmxsqnmqqNxubAmpk5ISWYG17YDrOsxlFHukOZ_3af_f5jlcjw351H4MX5fKlrC1o85__udNSmmqUn5iEhEkm4Br6U2lZbsZ-2Xl4E9RFA5XTSODrvM1jTSJD9ftvxbhNEi9onxYEETu7Vyc7FbojG2k7soOLh8dGgHjLzD6dT4DUpl9hjHHTs_Ijg9_C0p93v75NSZaYjz0ifojqfX8RaYH6CAS3DNHRPkuLbQKpCxM0L2ET32H8YnjA7ADHm8wGdu-acDOEMfsXrO9Q_sq3mqXMfEnHey02gnvQF79csECCNNIBu9qTEKquP7XvcpZFoPVg=w1590-h1167-no');
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
    text-align: center;
    color: #2d81c5;
    text-shadow: 1px 1px #ffffff;
}

</style>