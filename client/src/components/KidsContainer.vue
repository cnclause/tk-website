<template>
 <div class="kids-container">
    <h1 class="title">Meet the Birds</h1>
    <MeetBirdsContainer/>
  </div>
</template>

<script>
  import MeetBirdsContainer from './MeetBirds/MeetBirdsContainer'
export default {
    name: 'kids',
    components: {
      MeetBirdsContainer
    }
}
</script>