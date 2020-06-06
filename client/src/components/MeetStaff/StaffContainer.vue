<template>
    <div class="staff-cards-container">
        <div class="staff-card-container" :key="person.id" v-for="person in staff">
            <StaffCard :person="person"/>
        </div>
    </div>
</template>

<script>
import StaffCard from './StaffCard.vue'

export default {
    components: {
        StaffCard
    },
     data(){
        return{
            staff: [
                {
                    id: 1,
                    name: 'Isamel (Showdy) St Jour',
                    position: 'Co-Founder',
                    blurb: 'Hello my name is Ismael St. Jour and I am a Co-Founder and Haitian board member for FRW. I was born in City Soleil, Port-au Prince, an area overrun by gang violence and uproar. For the average Haitian, life was difficult and dangerous, but I was determined to change that way of life. Through my dedication, ingenuity and hard work, I completed my education and was able to relocate to a safer part of the city. Unfortunately, there are many people close to my heart who continue to struggle under such harsh circumstances. I worked as a translator, yoga instructor and logistical support with a number of aid organizations, prior to spearheading FRW. In the future, I plan on furthering my education in business and helping my community create jobs.',
                    img: 'https://rootstowingspictures.s3-us-west-1.amazonaws.com/ShowdyMeetStaff.jpg',
                    imgposition: 'center',
                    show: false

                },
                {
                    id: 2,
                    name: 'Catherine Clause',
                    position: 'Co-Founder',
                    blurb: "Catherine Clause (Cat) is a founding member of From Roots to Wings. She graduated from Penn State in 2016 with degrees in Sociology and Criminology. After moving to Denver, CO she began her career in software engineering. She hopes to use technology to provide social solutions to global issues and is excited to use her skills to help support From Roots to Wing's initatives. Cat enjoys spending time outdoors, reading, writing, and snowboarding.",
                    img: 'https://rootstowingspictures.s3-us-west-1.amazonaws.com/CatMeetStaff.JPG',
                    imgposition: 'center',
                    show: false

                },
                {
                    id: 3,
                    name: 'Joe McDoal',
                    position: 'Co-Founder',
                    blurb: 'Joseph McDoal is a founding member of From Roots to Wings. He graduated from Penn State in 2019 with a degree in physics and pre-medicine and a minor in global health. Joe intends to go to medical school after taking 2 gap years first to focus on his art, writing and his work for this organization. He plans on becoming a trauma surgeon in the US military and then going on to pursue a career in politics and aid work. Joe enjoys outdoor activities, sports, reading, making art, photography, writing poetry and listening to music. Simply put, “I’m just trying to make this world a better place.”',
                    img: 'https://rootstowingspictures.s3-us-west-1.amazonaws.com/JoeMeetStaff.jpg',
                    imgposition: 'center',
                    show: false

                },
                {
                    id: 4,
                    name: 'Esdras Sylvain',
                    position: 'Chief Financial Officer',
                    blurb: 'Hello everybody, my name is Esdras Sylvain and I am a professional accountant. I am the financial manager and Haitian board member of FRW. I grew up and went to school in City Soleil in an area called Cite Fequiere. Early on my life was incredibly hard and I’ve come a long way since then. But ever since I was young, I’ve had a desire and passion for helping the other poor families around me. I shared this dream with everyone in FRW and from that dream this organization was born. I plan to continue working with FRW so that it grows much larger and is able to help more children and their families. People are living in dehumanizing conditions and we need to work together to end this suffering.',
                    img: 'https://rootstowingspictures.s3-us-west-1.amazonaws.com/EsdrasMeetStaff.JPG',
                    imgposition: 'center',
                    show: false

                },
                {
                    id: 5,
                    name: 'Hinal Modasia',
                    position: 'Business Development Director',
                    blurb: 'Hinal Modasia is the Business Development Director for Timoun Kontan. She is a Penn State alumni who studied Agriculture Business Management alongside minoring in International Agriculture and Sociology. She is currently working in Carlisle, PA as an HR Assistant for Amazon. Hinal has traveled to Port Au Prince, Haiti and Nyeri, Kenya where she directed workshops of business and agriculture development. Her future goals for TK include creating individualized programs for each child in the organization. When Hinal is not working her full time job she spends most of her time with family and friends. Her favorite pass times are exploring local coffee shops and working out.',
                    img: 'https://rootstowingspictures.s3-us-west-1.amazonaws.com/HinalMeetStaff.jpeg',
                    imgposition: 'center',
                    show: false
                },
                {
                    id: 6,
                    name: 'Jonas Sylvain',
                    position: 'Education Development Director',
                    blurb: 'Hey everyone! My name is Jonas Sylvain and I am the Education Development Director for FRW. I was born in City Soleil, where I completed both primary and secondary school. Although I no longer live there, I am grateful to community organizations for their support in helping me grow out of there. I am currently pursuing studies in Management Science through PID, an organization where I initially worked as a translator and a mechanic. Because I was provided the adequate resources and opportunities to become a self-sufficient citizen, I feel a sense of responsibility to return some of that energy back to the community. Besides community service, I am also involved with FRW. I want to give children the same resources and opportunities that I had. In the future I hope to go into politics and become a Minister of Commerce in Haiti to help my community on a larger scale',
                    img: 'https://rootstowingspictures.s3-us-west-1.amazonaws.com/jonas.png',
                    imgposition: 'top',
                    show: false
                },
                {
                    id: 7,
                    name: 'Kenny Casals',
                    position: 'Public Relations Director',
                    blurb: "Kenny Casals is 22 years old and will be graduating from The Pennsylvania State University in May of 2020 and is studying Biology with a minor in Sociology. After graduation, he is seeking full time employment in consulting, recruitment, sales, or a lab setting within the life sciences. He has interests in fashion, fitness, the outdoors, watches, film and learning new skills. Kenny's involvement with From Roots to Wings started from the beginning with the trip to Haiti in 2017. During and after his time in Haiti, he realized the value of education and how he would be able to contribute to this new organization.",
                    img: 'https://rootstowingspictures.s3-us-west-1.amazonaws.com/KennyMeetStaff.jpeg',
                    imgposition: 'top',
                    show: false
                },
                {
                    id: 8,
                    name: 'Davidson',
                    position: 'Staff',
                    blurb: ' Hey guys, my name is Davidson Dasema and I am the Secretary General and a board member of the Haitian staff. I was born in City Soleil but I grew up and attended school in a small area called Lintho. After completing primary and secondary school, I pursued further education, studying Social Economic Administration in university. Currently, I am a social activist in multiple NGOs and a frequent volunteer in my community. Esdras and I attended school together and we share a common purpose of helping the less fortunate progress out of the dreadful conditions they currently reside in. When Showdy proposed the idea of establishing an organization with similar aspirations, we wanted to help immediately. I have been with FRW ever since. One day, I hope to own and run my own primary, secondary and professional schools so I can help to grow and educate the future children of Haiti.',
                    img: 'https://rootstowingspictures.s3-us-west-1.amazonaws.com/Davidson.JPG',
                    imgposition: 'center',
                    show: false
                },
                {
                    id: 9,
                    name: 'Sarah Ross',
                    position: 'Staff',
                    blurb: ' Sarah has always had a knack for service and traveling. After graduating from Penn State, she took off to various parts of the world and landed herself in Haiti, alone. There, she met the rest of the team and the rest is history. She can’t thank the team enough for allowing her to travel and still work alongside them. She’s excited to see the organization grow and can’t wait to get back down to see the kids and staff.',
                    img: 'https://rootstowingspictures.s3-us-west-1.amazonaws.com/SarahMeetStaff.jpeg',
                    imgposition: 'center',
                    show: false
                },

            ]
        }
    }
}
</script>

<style lang="scss">

    .staff-cards-container{
        width: 80%;
        display: flex;
        flex-flow: wrap;
        justify-content: space-evenly;
    }

</style>