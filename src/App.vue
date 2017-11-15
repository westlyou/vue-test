<template>
    <div id="app">
        <img src="~assets/logo.png">
        <router-link to="/">返回主页</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    /* eslint-disable quotes,prefer-arrow-callback,prefer-const,no-new */

//    import _ from 'lodash'
    import axios from 'axios'
//    import utils, {sumArr} from 'zrn-utils'
//    var shuffle = require('lodash/shuffle');
    import shuffle from 'lodash/shuffle'
    export default {
        name: 'app',
        data() {
            return {
                content: []
            }
        },
        methods: {
            getData() {
                axios.get('/api/movie/top250').then((res) => {
                    console.log(res.data)
                })
            }
        },
        created() {
            /*console.log(_.now())
            console.log(_.sample([1, 2, 3, 4]))
            console.log(_.shuffle([1, 2, 3, 4, 344, 43, 3, 45, 6]))*/
            console.log(shuffle([1, 2, 3, 4, 344, 43, 3, 45, 6]))
            this.getData()
            Notification.requestPermission(function (status) {
                new Notification('通知标题', { body: '这里是通知内容！' })
            })
//            navigator.vibrate(5000);
//            console.log(sumArr([2,3]))
//            console.log(utils)
//            console.log(utils.sumArr([2,3]))
//            console.log(concat)
            console.log(process.env.NODE_ENV)
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
