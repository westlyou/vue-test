<template>
    <div id="example-3">
        <button @click="show = !show">
            Toggle render
        </button>
        <transition
            name="custom-classes-transition"
            enter-active-class="animated tada"
            leave-active-class="animated bounceOutRight"
        >
            <p v-if="show">hello</p>
        </transition>

        <transition enter-active-class="animated wobble" leave-active-class="animated wobble" >
            <div class="aaa" v-show="show">aaaa</div>
        </transition>
        <div class="">
            <!--输入abc匹配到就会左右出现消失 fadein等皆可-->
            <input v-model="msg">
            <transition-group name="fade" enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
                <p v-show="msg" v-for="(item,index) in newArr" :key="index">{{item}}</p>
            </transition-group>
        </div>
    </div>
</template>

<script>

    /* eslint-disable */
    export default {
        name: 'scroll',
        data() {
            return {
                show: true,
                arr:['apple','banana','orange'],
                msg:''
            }
        },
        computed:{
            newArr(){
                let a = [];
                this.arr.forEach((item)=>{
                    if(item.indexOf(this.msg) != -1){
                        a.push(item);
                    }
                })
                return a
            }
        },
        methods: {
        },
        mounted() {
        },
        created() {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .aaa{
        width: 300px;
        height: 300px;
        background: red;
    }
</style>
