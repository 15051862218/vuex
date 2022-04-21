<template>
  <div id="app">
    <!-- <vuex-cpn-one></vuex-cpn-one>
    <br>
    <vuex-cpn-two></vuex-cpn-two> -->
   <vuex-cpn-three></vuex-cpn-three>
   <hr/>
   <vuex-cpn-four></vuex-cpn-four>
 
  </div>
</template>

<script>

// import VuexCpnOne from '@/components/VuexCpnOne.vue'
// import VuexCpnTwo from '@/components/VuexCpnTwo.vue'
import VuexCpnThree from '@/components/VuexCpnThree.vue'
import VuexCpnFour from '@/components/VuexCpnFour.vue'


export default {
  name: 'App',
  components: {
  //  VuexCpnOne,
  //  VuexCpnTwo
  VuexCpnThree,
  VuexCpnFour,

  },
  onload(){
    this.addToList;
  },
   data () {
    return {
      msg: 'Hello vue-baberrage',
      barrageIsShow: true,
      currentId : 0,
      barrageLoop: false,
      barrageList: []
    }
  },  
  methods:{
    addToList (){
      this.barrageList.push({
        id: ++this.currentId,
        avatar: "./static/avatar.jpg",
        msg: this.msg,
        time: 5,
        type: MESSAGE_TYPE.NORMAL
      });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
