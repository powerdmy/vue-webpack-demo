<template>
  <div id="table-app">
      <h2>书单</h2>
        <table class="book-table">
           <tr>
            <th>序号</th>
            <th>书名</th>
            <th>作者</th>
            <th>价格</th>
            <th>操作</th>
           </tr>
           <tr v-for="(item,index) in booklists">
              <td>{{index+1}}</td>
              <td>{{item.bName}}</td>
              <td>{{item.bAuth}}</td>
              <td>{{item.bPrice}}</td>
              <td><div v-on:click="remove(index)">删除</div></td>
           </tr>

        </table>
        <span class="sum">总价:{{sum}}</span>
        <div class="addbox">
            <div class="a-item fixed">
                  <div class="a-title">书名</div>
                  <div class="a-txt"><input type="text" name="" v-model="nam"></div>
            </div>
            <div class="a-item fixed">
                  <div class="a-title">作者</div>
                  <div class="a-txt"><input type="text" name="" v-model="aut"></div>
            </div>
            <div class="a-item fixed">
                  <div class="a-title">价格</div>
                  <div class="a-txt"><input type="number" name="" v-model="pri"></div>
            </div>
            <div class="a-btn" v-on:click='add'>添加</div>
        </div>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      booklists:[
                {
                  bName:"红楼梦",
                  bAuth:"曹雪芹",
                  bPrice:32
                },
                {
                  bName:"三国演义",
                  bAuth:"罗贯中",
                  bPrice:32
                },
                {
                  bName:"水浒传",
                  bAuth:"施耐庵",
                  bPrice:32
                },
                {
                  bName:"西游记",
                  bAuth:"吴承恩",
                  bPrice:32
                }
        ],
         aut:'',
         pri:'',
         nam:'',
         count:4
    }
  },
  methods:{
        remove:function(index){
          this.booklists.splice(index,1);
          this.count--;
        },
        add:function(){
          this.count++;
          var obj={
            bName:this.nam,
            bAuth:this.aut,
            bPrice:this.pri
          };
          for(var k in obj){
            if(obj[k]==''){
              alert("表格不能为空");
              return;
            }
          }
          this.booklists.push(obj);
          this.aut='';
          this.pri='';
          this.nam='';
        }
      },
      computed:{
        sum:function(){
          var sum=0;
                this.booklists.forEach(function(e,i){
                     sum+=parseInt(e.bPrice);
                })
                return sum;
        }
      }
}
</script>

<style>
body{
      font-family: "微软雅黑";
    }
    #table-app{
      width: 600px;
      margin: 20px auto;
    }
    .fixed{
      zoom: 1;
    }
    .fixed:after{
        content: '';
        display: block;
        clear: both;
        visibility: hidden;
        height: 0;
    }
    .book-table{
      border-collapse:collapse;
    }
    .book-table tr td,.book-table tr th{
        width: 100px;
        text-align: center;
        line-height: 25px;
    }
      .book-table tr:nth-child(odd){
        background-color: #f1f1f1;
      }
      .book-table tr td div{
        cursor: pointer;
        border-radius: 4px;
        margin: 8px 12px;
        color: #fff;
        background-color: green;
      }
      .book-table tr:nth-child(odd) td div{
        background-color: red;
      }
      .a-item{
        line-height: 30px;
        width: 510px
      }
      .a-title{
        width: 40px;
        text-align: left;
      }
      .a-txt{
        width: 100%;
      }
      .a-txt input{
        width:100%;
        height: 20px;
        font-size: 16px;
      }
      .a-btn{
        text-align: center;
        line-height: 30px;
        cursor: pointer;
        border-radius: 4px;
        color: #fff;
        width: 515px;
        background-color: #337AB7;
        margin-top: 10px;
      }
</style>