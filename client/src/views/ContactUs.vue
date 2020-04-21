<template>
    <div class="contact-us-container">
        <h1 class ="contact-us-title" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Contact Us</h1>
        <ContactForm />
    </div>
</template>

<script>
import ContactForm from '../components/ContactUs/ContactForm'

export default {
    name: 'contact',
    components: {
        ContactForm
    }
}
</script>

<style lang="scss">
    .contact-us-title.display-4{
        text-align: center;
    }

    .contact-us-title.display-2{
        text-align: center;
        font-size: 40pt !important;
    }
</style>