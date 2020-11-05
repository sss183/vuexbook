<template>
    <table id="table" border="1" cellspacing=0 cellpadding=0>
            <tr>
                <th>
                    <input type="checkbox" :checked="allChecked" @change="allcheckedFn($event.target.checked)">
                </th>
                <th>
                    id
                </th>
                <th>书籍</th>
                <th>出版日期</th>
                <th>价格</th>
                <th>数量</th>
                <th>操作</th>
            </tr>
            <tr v-for="(book,index) in bookList" :key="index">
                <td>
                    <input type="checkbox" :checked="book.checked" @change="checkedFn(index)">
                </td>
                <td>{{book.id}}</td>
                <td>{{book.name}}</td>
                <td>{{book.pub}}</td>
                <td>{{book.price}}</td>
                <td>
                    <button :disabled="book.num<=1" @click="reduceFn(index)">-</button>  
                    <span>{{book.num}}</span>

                    <button @click="addFn(index)">+</button></td>
                <td>
                   <button @click="delFn(index)">删除</button>
                </td>
            </tr>
        </table>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from "vuex"
export default {
    data(){
        return{

        }
    },
    computed:{
            ...mapState(["bookList"]),
            // ...mapState(["allChecked"])  
              ...mapGetters(["allChecked"])
    },
    methods:{
        //合写
       ...mapMutations(["allcheckedFn","checkedFn","delFn","addFn","reduceFn"]),
    //    ...mapMutations(["checkedFn"]),
    //    ...mapMutations(["delFn"]),
    //    ...mapMutations(["addFn"]),
    //    ...mapMutations(["reduceFn"])
       
    }
}
</script>

<style lang="">
 table{
         margin: 20px auto;
        }
td,th{
       width: 80px;
       height: 40px;
       text-align: center;
        }
 button{
         cursor: pointer;
     }
</style>