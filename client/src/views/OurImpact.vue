<template>
    <div class="our-impact">
      <div class="our-impact-container">
        <h1 class ="our-impact-title" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Our Impact</h1>
      </div>
      <OurImpactStatContainer />
      <ProgramImpact />
  </div>
</template>

<script>
import OurImpactStatContainer from '../components/OurImpact/OurImpactStatContainer.vue'
import ProgramImpact from '../components/OurImpact/ProgramImpact'

export default {
    name: 'impact',
    components: {
      OurImpactStatContainer,
      ProgramImpact
    }
}
</script>

<style lang="scss">
 .our-impact-container{
    margin: 2rem;
    z-index: 0;
    height: 35rem;
    background-image: url('https://lh3.googleusercontent.com/v2doKGehUR4g76l2zJgldgVg3WLLk7VTGcYiWRKO_dE9I1Ip5UFWdlsfi2ce9m1PrppOzdi067xV9duAbkbJnpfuu7K_Sijq-umxbsRwA3aG6PRYkAdyW9mP4rVdZ2HFIOZb-eS7zES25oEVMXejqF4GzOzHbuLf6LnOLj7buJMDTIC8p-8PHxHz0WZ98qHXU1wIl_fKdZoIDaa6fcBZ_ovg860Smu8tsxp0EH6hdO4qB0bxtkQESODxW8KPrQY2-ooNK3YTpyCSVqmHp88DKQ9YLnmUK3aKTIbXIjiToZMBYJVXYe2aVPMF-yxOSxpVfPEWYwN-uURaVxMSCdQee8OEaIoTQRj8JLXt4FvzaaksF-ha-pIf4t47Eas_wRd3D9O1oT3um0i5ax1_dpOz-7mz3eGDL2gfoYgWSEuTJhN_8xLsTG37cctteka3uQeLfaj9bJtAmoq3qFNQgJGE2CK1mwOMFj6NEq3QuiA-J3ducXl-Qfaxdx0iG4amHMvDza368oDpLwOQ2dqu7X9MixanHaRpqoc1nAyUm7aoHN2IPk8k1VpmP9lu9jMXhmcmQJHu_e5d-lekqmpMt0TUgTk1zOlcmS58C-juVIMMF9iOSCzDjrSrSz3xXwynGlgbV1aJmfPvNG-3cNWKsHWcsPcRM9YVAywxdbBDOoVn7wjVq1Hr07Ii9bBepJj0DQ=w2220-h1480-no');
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
  }

  .our-impact-title.display-4{
    margin-left: 5rem;
    // padding-top: 0px;
    color: white;
  }

  .our-impact-title.display-2{
    color: white;
    font-size: 50pt !important;
    padding-top: 5rem;
  }
</style>