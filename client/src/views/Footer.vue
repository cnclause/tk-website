<template>
<div class="footer-container">
    <section id="donate-section" class="section-container">
        <h1 class="section-title">Donate</h1>
        <p>With your generous support, more children will have the opportunity to receive an education</p>
        <button>Donate</button>
    </section>
    <section id="about-section" class="section-container">
        <h1 class="section-title">About Us</h1>
        <li> Link </li>
        <li> Link </li>
        <li> Link </li>
        <li> Link </li>
    </section>
    <section id="involved-section" class="section-container">
        <h1 class="section-title">Get Involved</h1> 
        <li> Link </li>
        <li> Link </li>
        <li> Link </li>
        <li> Link </li>    </section>
    <section id="social-media-section" class="section-container">
        <h1 class="section-title">Follow Us</h1> 
        <li> Link </li>
        <li> Link </li>
        <li> Link </li>
        <li> Link </li>    </section>
    <section id="subscribe-section" class="section-container">
        <h1 class="section-title">Subscribe</h1>
    </section>
</div>
</template>

<style lang="scss">
@import '@/styles/global.scss';

.footer-container{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: $charcoal-grey;
    color: #ffffff;
    border-top: solid 7pt $light-blue;
    padding-bottom: 1rem;
    padding-top: .5rem;
}

.section-container{
    display: flex;
    flex-direction: column;
    max-width: 18%;
}
.section-title{
    font-family: $body-font;
    font-size: 12pt;
    text-transform: uppercase;
    text-align: center;
    font-weight: 200;
}

p, li{
    text-align: center;
    font-family: $body-font;
    font-weight: 200;
}

</style>