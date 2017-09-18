<template>
    <div v-html="msg"></div>
</template>

<script>
    export default {
        name: '{{ uppercase name }}',
        data () {
            return {
                msg: 'Hello'
            }
        }
    }
</script>

<style lang="scss">
    //
</style>