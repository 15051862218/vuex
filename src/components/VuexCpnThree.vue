<template>
    <div >
        <label for="firstName"> firstName: </label>
        <input v-model="firstName" type="text" id="firstName"/>
         <label for="lastName"> firstName: </label>
        <input v-model="$store.state.lastName" type="text" id="lastName"/>

        <div>VuexCpnThree组件</div>
        <div>
            fullName: {{$store.state.firstName}} --- {{$store.state.lastName}}
        </div>
        <!-- <button @click="$store.commit('submitAsync')"> 触发异步</button> -->

        <!-- <button @click="$store.dispatch('submitActions')"> 触发异步</button> -->
       <button @click="demoAction()"> 触发异步</button>

    </div>
  
</template>
<script>


export default {
    name: "VuexCpnThree",
    methods:{
        demoAction() {
            this.$store.dispatch("submitActions","OK").then((res) => {
                alert(res);
                console.log(res);
            });
       },
    },
    computed:{
        firstName: {
            get() {
                return this.$store.state.firstName;
            },
            set(newVal){
                this.$store.commit("hanldeFirstNameVal",newVal);
            },
        },
    },
};
   
        
  

</script>
<style>

</style>