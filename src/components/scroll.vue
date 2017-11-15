<template>
    <div ref="wrapper" class="list-wrapper">
        <ul class="list-content">
            <li @click="clickItem($event,item)" class="list-item" v-for="item in data">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    /* eslint-disable */
    export default {
        name: 'scroll',
        data() {
            return {
                scroll: null,
                data:40
            }
        },
        methods: {
        },
        mounted() {
            const options = {
                scrollY: true ,// 因为scrollY默认为true，其实可以省略
                scrollbar: {
                    fade:true // 滚动条随着滚动操作淡入淡出
                }
            }
            this.$nextTick(() => {
                this.scroll = new BScroll(this.$refs.wrapper, options)
            })
        },
        created() {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*.list-content{
        width: 100px;
        height: 200px;
        border: 1px solid red;
    }*/
    .list-wrapper{
        width: 100px;
        height: 200px;
        border: 1px solid red;
        border: 1px solid red;
        overflow-y: hidden;
    }
</style>
