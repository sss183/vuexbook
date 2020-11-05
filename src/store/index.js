import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
let store = new Vuex.Store({
    state:{
        allChecked:false,
        bookList: [
            {
              checked: true,
              id: 1,
              name: "小红书",
              pub: "2018-8",
              price: 188.99,
              num: 1
            },
            {
              checked: true,
              id: 2,
              name: "小黄书",
              pub: "2020-8",
              price: 88.9,
              num: 2
            },
            {
              checked: false,
              id: 3,
              name: "小绿书",
              pub: "2013-4",
              price: 188.99,
              num: 5
            },
            {
              checked: false,
              id: 4,
              name: "小蓝书",
              pub: "2021-1",
              price: 133,
              num: 1
            },
            {
              checked: false,
              id: 5,
              name: "小紫书",
              pub: "2003-7",
              price: 555.5,
              num: 3
            }
          ]
    },
    getters:{
        totalPrice(state){
            let total = 0;
            state.bookList.map(book=>{
                if(book.checked){
                   total += book.price * book.num
                }
            })
            return total
        },
        totalNum(state){
            let total = 0;
            state.bookList.map(book=>{
                if(book.checked){
                   total += book.num
                }
            })
            return total
        },
        allChecked(state){
          return  state.bookList.every(book=>book.checked)
        }
    },
    mutations:{
        allcheckedFn(state,payload){
          // state.allChecked = payload; 
            state.bookList.map(book=>{
               book.checked = payload;
           })
        },
        checkedFn(state,i){
          state.bookList[i].checked = !state.bookList[i].checked
          state.allChecked =  state.bookList.every(book=>book.checked);     
        },
        delFn(state,i) {
          state.bookList.splice(i, 1);
        },
        addFn(state,i) {
          state.bookList[i].num++;
        },
        reduceFn(state,i) {
          if (state.bookList[i].num == 1) {
            return;
          }
          state.bookList[i].num--;
        },
    }


});
export default store;