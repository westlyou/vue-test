<template>
    <div>
        <p>{{name}}</p>
    </div>
</template>

<script>
    import axios from 'axios'
    /* eslint-disable */
    export default {
        name: 'tpl',
        data() {
            return {
                name: ''
            }
        },
        methods: {
            getUser() {
                return axios.get("http://easy-mock.com/mock/5a0d3a9985e6ba3feeeafff3/zrn/user")
                    .then(res =>{
                        console.log(res)
                        this.name = res.data.data[0].user.name
                     })
                    .catch((err) =>{
                        console.log(err)
                    })
            }
        },
        mounted() {
        },
        created() {
            this.getUser()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
