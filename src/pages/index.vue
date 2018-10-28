<template lang="html">
  <div class="root-content">
    <h1 class="title"> James Nuxt play</h1>
    <ul class="route-content">
      <li class="route">
        <nuxt-link
          :to="{ name: 'html5-html5', params: { 'html5': '66'  }, query: { name: 'html5', studyNo: '1' } }">
          html5-study
        </nuxt-link>
        <!-- <nuxt-link
          :to="{ path: '/html5/66', query: { name: 'html5', studyNo: '1' } }">
          html5-study
        </nuxt-link> -->
      </li>
    </ul>

  </div>
</template>

<script>
export default {
    name: 'Index',
    layout: null,
    mounted () {
        console.log(this.$router)
    }
}
</script>

<style lang="css">
</style>
