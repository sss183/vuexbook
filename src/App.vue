<template>
  <div id="app">
    <List></List>
    <Total/>
    
  </div>
</template>

<script>
import List from "./components/List";
import Total from "./components/Total";
export default {
  name: "App",
  components: {
    List,
    Total
  }/* ,
  methods: {
    del(i) {
      this.bookList.splice(i, 1);
    },
    addFn(i) {
      this.bookList[i].num++;
    },
    mulFn(i) {
      if (this.bookList[i].num == 1) {
        return;
      }
      this.bookList[i].num--;
    },
    allCheckFn(bol) {
      console.log(bol);
      // 设置allChecked，触发allChecked set函数
      this.allChecked = bol;
    },
    checkFn(i) {
      this.bookList[i].checked = !this.bookList[i].checked;
    }
  },
  computed: {
    allChecked: {
      get() {
        return this.bookList.every(book => book.checked);
      },
      // 设置 allChecked触发
      set(val) {
        this.bookList.map(book => (book.checked = val));
      }
    },
    totalPrice() {
      // 总价变量
      var total = 0;
      // 遍历数据，累加金额
      this.bookList.map(book => {
        if (book.checked) {
          total += book.price * book.num;
        }
      });
      // 赋值给总价
      return total;
    },
    totalNum() {
      return this.bookList.reduce((total, item) => {
        if (item.checked) {
          return total + item.num;
        } else {
          return total + 0;
        }
      }, 0);
    }*/
  } 
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
