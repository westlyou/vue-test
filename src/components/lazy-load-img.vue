<template>
    <div>
        <img src="../assets/logo.png" data-src="../assets/lg.png" alt="" width="300px" height="300px">
        <img src="../assets/lg.png" alt="" width="300px" height="300px">
    </div>
</template>

<script>
    import LazyLoad from 'lazy-load-imgs'
    /* eslint-disable */
    export default {
        name: 'tpl',
        data() {
            return {
            }
        },
        methods: {
        },
        mounted() {
            console.log(LazyLoad)
            new LazyLoad({
                rootMargin: '50px'
            })
        },
        created() {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
