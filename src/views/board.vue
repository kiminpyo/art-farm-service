<template>
  <div class="hello">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">게시글 번호</th> 
      <th scope="col">제목</th>
      <th scope="col">작성일</th>
      <th scope="col">조회수</th>
     
    </tr>
  </thead>
  <tbody>
    <tr v-for="data in data.content" :key="data.content">
      <th scope="row">{{data.noticeIdx}}</th>
      <td><a v-on:click="view(data)">{{data.title}}</a></td>
      <th scope="row">{{data.registDate}}</th>

      <th scope="row">{{data.views}}</th>
    </tr>
    <button v-on:click="create()">create</button>
    
  </tbody>
</table>
  </div>
</template>

<script>

import axios from 'axios'
export default {

  data(){
    return{
      data: [], 
    }
  },
  methods:{
    view(data){
      console.log(data)
      this.$router.push({
        name:"detail",
        query :{body: data.content,
                id: data.noticeIdx,
                title: data.title}
      })
    },
  
    create(){
      console.log('hi')
      this.$router.push({
        name:"create"
      })
    },
    getItem(){
        axios.get("http://localhost:8080/api/noticelist")
      .then((response) => {
        this.data = response.data;  
        console.log(this.data)
        console.log(this.data.content)
        
     
        console.log("stringify===>"+JSON.stringify(this.data)) 
          /* this.data.push(JSON.stringify(this.data)); */
         
      })
    }  
  },
  created(){

    this.getItem();
  }
}
</script>
cd
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
