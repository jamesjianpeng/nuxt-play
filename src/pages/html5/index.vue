<template lang="html">
    <div class="">
      html5-study index
    </div>
</template>

<script>
export default {
    name: 'Html5Index',
    layout: 'html5',
    transition: 'bounce',
    mounted () {
        console.log(this.$route)
    }
}
</script>

<style lang="css">
</style>
