<template>
    <div>
        <div :key=bird.id v-for="bird in birds">
            <Bird v-if="bird.id%2===0" v-bind:bird="bird"/>
            <FlippedBird v-else v-bind:bird="bird"/>
        </div>
    </div>
</template>

<script>
    import Bird from './Bird'
    import FlippedBird from './FlippedBird'
    export default {
        name: "meetBirdsGrid",
        components: {
            Bird,
            FlippedBird
        },
        data() {
    return {
      birds:
          [
            {
            id: 1,
            name: "name",
            bio: "imsum dimsum",
            thumbnail: 'https://lh3.googleusercontent.com/CQuMZoHXJ6422SuVsJipsLseymvAdGXPbp0WJSEw7MeDFnIZCY7rYWh7lj6uYs6cVWvAZQlmRcZG6i3yqHUb6OVizfEZn1kqdk5Wtt1lTY_Dkc1T8gBmqxg_uGPME4WPxtizHSnlwgPzVJMoP3zSOMd9lap1WRCi0VVA5PnruS496hRsGzt0yb_XWw87f5UwHINahPPS3PIDcfSaQPNgD29ImCMA6l7zJabZGiLl8ySeWuDA-Efs5Hc8gWAWPEDoSFIk1DS19vab4eI0fEu_ekse96SAOawrNVXXThPtphjhOTIsimxAuYNhmqmbE0KSMqIVoXPN3kC9lVCtSt8L5RsCuCHnPVBRmGuI1LTcGnMieOuOpDGROohtPboqeO2HlUf6WywEjJdpxEM7FPWnHXkGR80-t2UEXkjzaM1QzXyeGXf9KPLlmShCcQ1t9nxbw2PovzBLaLrwkLVLAssj6vOEfbKVeCyeqNaN2VH0G22KG4yWICfZ7wzgxUVkjEkzP8KLyqpvUJ3Fj5ccIVGFABMi7Qk0F1MaBaAnyKcfHRklWxpkuozT57AO0SVgkxzT3FAxY9SgDLMrvikWVofYWCMOGFPbh_t3i1d_PXgPDzIcYTirAO25llG7sxB-1-d1exjzgFJsTvYtIytrwb5yStfpcYNE2-PZVDtwoO0ZHDLVIBKTA_txp8bxh6yYSnAHVVpvbNC8h70bkIep4yA_7Td4m0ynLtIKQp3m7dpsrfCpInKO3_69iQ=w1080-h607-no'
            },
            {
            id: 2,
            name: "name2",
            bio: "ipsum plipsum",
            thumbnail: "https://lh3.googleusercontent.com/54oZxiwfNukvJMorqch3IHSBWoOWy1lYqUKLEh7YHUpVQof6n21DHfq7-sVGkDVkbr-B5y3t30lT90Lrx47KUA1VbanrQmRp8OTSoHvRxz0PxyGXhxJgGF9o8H89aFq1RRElbUAYMFxSHHAiEQpsZEgEisMMfg-O-O-7dZJsZNu7U3AmkC0Zn8Vb5wvbJezhV9FudJKpdxOlCD38h56VIL94oS2jCI1aqyUNyU4QQdsqK088jfum1mA7wTrg0ifBHy5g54GFxzPaX5hMSZg71kQPBnU6R4rd46QPnmmh-S-2Ix-0nPIvm_d0JNIAofvFKXvW2gYySjqaYfb_lQUifDYm73GEzt-EbDE7nuVSERKE5ZDuJPwSrsMBqFakzqWyWnYYSp-qtm8RcZpLdgR5kPp6Yx8pIoZfLVRk73-CY7Hbe1O34Adr-h99GnBNdCOx2yz2fmwCqjmrGUFOzuwqXmUQJCkvkF1upSpDBT-MkqSKfGSnvFPbmMcfxnahHuaWA9BVyiE9O2c0yYEkkH_QUv8Xerq8BXjv5BpztFXgVb26zQFp0_bo7tNGLJQOUU3yjw_POclMs7EX7MYjPr4H28UNVVmP_qXuHOH61onqQYq8ZGUleJbJ2ne-Jl8jx0le5yZYAGxe6jZjPoZIHo92ULbJvjbfSfv5yTZ7q3bvrvZFuNtVkJi4zNJvEsvzvpAsyHBbvmKlxBFQGvW-J8suzCmGie2VkIWOeXpXnWpklF0Vg1G_Qhvq6A=w926-h617-no"
            }
          ]
      }
  },
    }
</script>

<style lang="scss" scoped>
   
</style>