<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <div class="svg">
            <img src="../assets/test.svg" alt="">
        </div>
        <div class="gradient"></div>
        <p @click = " testToast">{{name}}</p>
        <ul>
            <li><router-link to="/scroll">测试betterscroll</router-link></li>
            <li><router-link to="/animate-css">测试animate.css</router-link></li>
        </ul>
    </div>
</template>

<script>
    /* eslint-disable no-unused-vars,quotes */
    import axios from 'axios'
    import moment from "moment"

    export default {
        name: 'hello',
        data() {
            return {
                msg: ' Vue.js App',
                name: '测试vue.use(toast.js)Toast.install',
                worker: null,
                content: ''
            }
        },
        methods: {
            testToast() {
                this.$toast("我是摸态框 好丑呀，2.5s消失")
            }
        },
        mounted() {
            this.msg = '333'
//            this.worker = new Worker('workerTest.js')
        },
        created() {
            console.log(moment().format('L'))
            console.log(moment().format())
            console.log(this.$msg);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    .hello {
        display: flex;
    }

    .svg {
        width: 200px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000;
    }

    img {
        width: 100px;
        height: 100px;
    }

    .gradient {
        width: 100px;
        height: 100px;
        margin-left: 100px;
        border-radius: 50%;
        color: #fff;
        border: 1px solid #666;
        background: orange;
        background-image: linear-gradient(to right, transparent 50%, green 0);
        overflow: hidden;
    }

    .gradient::before {
        content: "";
        display: block;
        height: 100%;
        margin-left: 50%;
        background-color: inherit;
        transform-origin: 0 50%;
        transform: rotate(210deg)
    }
</style>
