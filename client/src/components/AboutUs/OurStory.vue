<template>
    <div class="our-story-container" :class="[$vuetify.breakpoint.mdAndUp ? 'our-story-large' : 'our-story-small']">
        <h1 class="subtitle-1 our-story-title"> Our Story </h1>
        <p class="our-story-text" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']">Timoun Kontan, or “Happy Kids,” is a non-profit organization that was founded in June 2017 with the hope of creating a happy, healthy and self-sustaining community by partnering with local community leaders. The seeds of this organization were planted in March 2017 when a group of students took a trip to Haiti and met Ismael “Showdy” Stjour. Showdy is a local community leader who shares our passion for sustainable community development and creating a positive future for Haitian children. Through many conversations with Showdy and other community leaders we began to become aware of the corruption in the orphanage system. It is common for owners of homes to keep funds and resources to themselves and profit off the children they are supposed to be helping. As a member of the community, Showdy also shared his knowledge about the community and its need for education and development.
            <br> 
        <br>
       Our goal is sustainable development. Sustainable development to us is the idea that one day our organization won’t have to exist for its programs and impact to continue. In order to ensure this, we want to use our privilege to give the City Soleil community tools they need to secure jobs and increase the number of students that receive an education. This mission is carried out by following the lead of our Haitian partners.  
        <br>
        <br>
        Our partners in Haiti grew up in City Soleil and are leading the charge by continuing to build relationships and have conversations with community members about living conditions, childhood education, and jobs. Our trust in our partners helps guide our mission in building a community center that will host leadership and educational seminars that are taught by Haitian professionals so that locals do not need to rely on inconsistent volunteers. These seminars will include job training, health education, nutrition and family planning. The center will also give community members access to an onsite nurse and a library in order to promote healthy bodies and healthy minds. Additionally, to circumvent the corrupt orphanage system, we decided to expand our community center by adding an additional floor that will serve as a children’s home. We want to support local families and keep them together by supporting family units. We don’t believe that anyone should have to give up their child in hopes of them having a better life.  The home would be solely for children who are not connected with their family or simply don’t have living relatives. We have three children without families that are staying with community members until the center is built. However, many of these community members have indicated that they cannot continue to take care of these children for much longer. Therefore it is more urgent than ever that we secure the funding to build this home for them. 
        </p>
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
    }
</style>