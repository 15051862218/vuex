import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import { COUNTER_ADD , COUNTER_SUB } from './mutation-types';

const store = new Vuex.Store({
    state:{
    counter: 10,
    firstName: "",
    lastName:"",
    },
    mutations:{
    //   1.-mutations基本使用
    //   add(state) {
    //       state.counter++;
    //   },
    //   sub(state){
    //       state.counter--;
    //   },
    //  2-mutations携带参数
        //   add(state,num) {
        //       state.counter+= num;
        //   },
        //   sub(state,num){
        //       state.counter-=num;
        //   },
    // 3-通过payload封装多个参数
//    add(state,payload) {
//         state.counter = state.counter + payload.num * payload.multiple;
//     },
//    sub(state,payload) {
//      state.counter = state.counter - payload.num * payload.multiple;
//  },
//   4-通过常量引用函数
       [COUNTER_ADD](state,payload) {
           state.counter = state.counter + payload.num * payload.multiple;
       },
       [COUNTER_SUB](state,payload) {
        state.counter = state.counter - payload.num * payload.multiple;
    },
    hanldeFirstNameVal(state,payload) {
        state.firstName = payload;
    },
    submitMutations(state){
      
            state.firstName = "hello";
        
    },
    },
    
    actions:{
        // submitActions(context){
        //     setTimeout(() => {
        //        context.commit("submitMutations");
        //     }, 1000);
        // },
        submitActions(context,payload) {
            return new Promise((resolve) => {
                setTimeout(() =>{
                    context.commit("submitMutations");
                    resolve("异步操作完成" + payload);
                },1000);
            });
        },

        demoActions({commit ,state,getters}) {
            setTimeout(() =>{
                commit("submitMutations");
            },1000);
        },

    },
    getters:{
      fullName(state) {
          return state.firstName + '----' + state.lastName;
      }
    },

    modules:{

    }
});

export default store;