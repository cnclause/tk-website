<template>
    <div class="our-story-container" :class="[$vuetify.breakpoint.mdAndUp ? 'our-story-large' : 'our-story-small']">
        <h1 class="subtitle-1 our-story-title"> Our Story </h1>
        <p class="our-story-text" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']">In the spring of 2017, a group of Penn State students traveled to Haiti to teach English at a local school, explore the local communities, spend time at a children's home, and learn about Haitian culture. At the end of the emotional and educational trip, the group decided they wanted to further their impact on the communities. Later that year, Joe and Cat, two members of the original group, returned to Haiti to learn more about Haiti and its culture. They met with a local community leader who also happened to be the brother of their interpreter; his name was Ismael St Jour (Showdy). Showdy shared his vision for how he wished to help and contribute to the development of his community. Joe and Cat wanted to do what they could to support him and his community in striving towards that sustainable vision. They quickly realized that they would need more than a single summer to bring this vision to life. With that Timoun Kontan (now From Roots to Wings) was born. They spent the next two months learning about the fundamentals of starting and running a nonprofit. Once they returned to the US, they met up with members from the original group in State College, PA, where they all agreed to help get From Roots to Wings (FRW) off the ground.<br> 
        <br>
        We became incorporated in the Fall of 2017 and a few months later received our 501(c) 3 nonprofit status. With the help of our supporters, we are now able to provide education for ten children with the plan to follow them through their educational career. We have also been able to expand into other areas of community development including a yoga program, sex education,  a female empowerment program, a mentorship program, and an income development program. FRW prides itself on being an organization that follows the lead of the communities we serve, with programs being developed in direct response to what the community determines that it needs most. We like to go by a Haitian proverb “Piti piti, zwazo fè nich” or “little by little, the bird builds its nest.” </p>
    </div>
</template>

<style lang="scss">

    .our-story-container.our-story-large{
        width: 60%;
    }

    .our-story-container.our-story-small{
        width: 90%;
    }

    .our-story-text{
        color: rgba(0, 0, 0, 0.6);
    }

    .our-story-title{
        margin-bottom: 2rem;
        margin-top: 3rem;
        text-align: center;
    }

    .our-story-text.body-2{
        font-size: 13pt !important;
        font-weight: 300;
        line-height: 2rem !important;
    }
</style>