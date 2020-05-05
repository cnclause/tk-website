<template>
    <div class="staff-card-container" >
        <v-card
            class="mx-auto staff-card"
            max-width="344"
        >
            <v-img
                eager
                :src="person.img"
                height="250px"
                width="320px"
                :position="person.imgposition"
            ></v-img>
            <v-card-title>
                {{person.name}}
            </v-card-title>
            <v-card-subtitle>
                {{person.position}}
            </v-card-subtitle>
            <v-card-actions :v-model="person.show">
                <v-btn
                    icon
                    @click="person.show = !person.show"
                >
                    <v-icon>{{ person.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-card-actions>
            <v-expand-transition v-if="person.show">
                <div v-if="person.show">
                    <v-divider></v-divider>
                    <v-card-text>
                        {{person.blurb}}
                    </v-card-text>
                 </div>
             </v-expand-transition>

        </v-card>
    </div>
</template>

<script>
export default {
   props: {
       person: Object
   }
}
</script>

<style lang="scss">

    .staff-card-container{
        margin-top: 2rem;
        margin: 1rem;
    }
</style>