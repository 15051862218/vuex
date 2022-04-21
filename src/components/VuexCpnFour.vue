<template>
    <div>
        

        <div>VuexCpnFour组件</div>
        <!-- <div>
            fullName: {{$store.state.firstName}} --- {{$store.state.lastName}}
        </div> -->

        <div>
            fullName = {{$store.getters.fullName}}
        </div>
    </div>
</template>
<script>


export default {
    name: "VuexCpnFour",
};
   
        
  

</script>
<style>

</style>