<template lang="html">
    <div class="">
      html5-study _html5
    </div>
</template>

<script>
export default {
    name: 'Html5Child',
    layout: 'html5',
    transition: 'bounce',
    mounted () {
        console.log(this.$route)
    }
}
</script>

<style lang="css">
</style>
