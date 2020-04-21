<template>
    <div class="contact-form-container">
        <h1 class="contact-form-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> We Look Forward to Hearing From You </h1>
        <v-form class="contact-form" v-model="isValid">
            <v-text-field
                v-model="name"
                label="Name"
                required
                :rules="nameRules"
            ></v-text-field>
            <v-text-field
                v-model="email"
                label="E-mail"
                required
                :rules="emailRules"
            ></v-text-field>
            <v-textarea
                v-model="message"
                label="Message"
                :rules="messageRules"
                outlined
            ></v-textarea>
            <v-btn class="contact-us-submit-btn" type="submit" depressed :disabled="!isValid">Send</v-btn>
        </v-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isValid: false,
            name: '',
            nameRules: [
            v => !!v || 'Name is required'],
            email: '',
            emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            message:'',
            messageRules:[
                v => !!v || 'Message is required'
            ]
        }
    }
}

</script>

<style lang="scss">

    .contact-form-container{
        display: flex;
        flex-flow: column;
        align-items: center;
        margin-top: 4rem;

    }
    .contact-form-title{
        margin-top: 4rem;
        color: #00BCD4;
    }

    .contact-form{
        width: 40%;
        margin-top: 3rem;
        display: flex;
        flex-flow: column;
        // align-items: center;
    }

    .contact-us-submit-btn{
        width: 50%;
        align-self: center;
        font-size: 15pt !important;
        font-weight: 350 !important;
    }

</style>