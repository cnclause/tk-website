<template>
  <div class="home">
    <h1 class="title header">Timoun Kontan </h1>
    <h3 class="title slogan">"little by little the bird builds its nest"</h3>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  
}
</script>

<style lang="scss">
@import '../styles/global.scss';

.title{
  font-family: $title-font;
  text-align: center;
}

.header {
  font-size: 80pt
}

.slogan {
  font-size: 30pt;
}

</style>
