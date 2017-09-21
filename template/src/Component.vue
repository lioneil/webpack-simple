<template>
    <div v-html="msg"></div>
</template>

<script>
    export default {
        name: '{{name}}',
        data () {
            return {
                msg: 'Hello'
            }
        }
    }
</script>

<style lang="scss" scoped>
    //
</style>