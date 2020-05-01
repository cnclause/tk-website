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
                    name: 'Catherine Clause',
                    position: 'Co-Founder',
                    blurb: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
                    img: 'https://rootstowingspictures.s3-us-west-1.amazonaws.com/CatMeetStaff.JPG',
                    imgposition: 'center',
                    show: false

                },
                {
                    id: 2,
                    name: 'Joe McDoal',
                    position: 'Co-Founder',
                    blurb: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
                    img: 'https://rootstowingspictures.s3-us-west-1.amazonaws.com/JoeMeetStaff.jpg',
                    imgposition: 'center',
                    show: false

                },
                {
                    id: 3,
                    name: 'Kenny Casals',
                    position: 'Public Relations Director',
                    blurb: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
                    img: 'https://rootstowingspictures.s3-us-west-1.amazonaws.com/KennyMeetStaff.jpeg',
                    imgposition: 'top',
                    show: false

                },
                {
                    id: 4,
                    name: 'Hinal Modasia',
                    position: 'Business Development Director',
                    blurb: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
                    img: 'https://rootstowingspictures.s3-us-west-1.amazonaws.com/JoeMeetStaff.jpg',
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