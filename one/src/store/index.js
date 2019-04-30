import Vue from 'vue'
import  vuex from 'vuex'
// import shopCar from './shopCar.js'
import  VuePersist from 'vuex-persist'
const vuexLocal = new VuePersist({
  storage:window.localStorage
});
Vue.use(vuex);


export default new vuex.Store({
  plugins:[vuexLocal.plugin],
  state:{
       login:false
  },
  mutations:{
    // addCar(state,data){
    //   let obj={}
    //   obj.name=data
    //   state.arr.push(obj)
    // }
  },
  getters:{


    }
})
