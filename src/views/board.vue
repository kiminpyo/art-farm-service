<template>
  <div class="hello">
    <table class="table mx-auto" outlined max-width="80%" >
        <colgroup class="col-md-12">
					<col class="col-md-2" />
					<col class="col-md-6" />
					<col class="col-md-2" />
					<col class="col-md-2" />
				</colgroup>

        <tr class="col-md-6"> 
          <th scope="col">게시글 번호</th> 
          <th scope="col"  >제목</th>
          <th scope="col" >작성일</th>
          <th scope="col" >조회수</th>     
        </tr>
      
      
        <tr v-for="data in data.content" :key="data.noticeIdx">
          <th scope="row">{{data.noticeIdx}}</th>
          <td><a v-on:click="view(data)">{{data.title}}</a></td>
          <th scope="row">{{data.registDate}}</th>
          <th scope="row">{{data.views}}</th>   
        </tr>
      
    </table>
    <v-button v-on:click="create()">create</v-button>
    <div class="">
      <v-pagination 
        v-model="data.currentPage"
        :length="data.totalPages"
        @input="handlePageChange"
      ></v-pagination>    
    </div>
      
  </div>
</template>

<script>
 import $ from 'jquery' 
import axios from 'axios'
export default {
  

  data(){
    return{
      data: [], 
      page: 1
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
     handlePageChange(pageNo) {
      this.page = pageNo;
      console.log(this.page)
    axios({
        url: "http://localhost:8080/api/noticelist?page=" + (pageNo-1),
        type : "get",
       
      })
       .then((response) =>{
        this.data = response.data;
        console.log("thisis "+this.data)
       
        var list= '';
        for(let i = 0; i < this.data.numberOfElements; i++){
           list += "<tr>"
           list +=   "<td>" + this.data.content[i].notIdx + "</td>"     
           list +=   "<td><a href='notice?notIdx=" + this.data.content[i].notIdx + "'>" + this.data.content[i].notTitle + "</a></td>"    
           list +=   "<td>" + this.content[i].writer + "</td>"    
           list +=   "<td>" + this.content[i].regDate + "</td>"    
           list +=   "<tr>"    
           }
           $("tbody").empty();
           $("tbody").append(list);
    })
    },
  
    create(){
      console.log('hi')
      this.$router.push({
        name:"create"
      })
    },
    getItem(){
      const page = 0;

        axios.get("http://localhost:8080/api/noticelist?page=" + page)
        .then((response) => {
            this.data = response.data;  
            console.log(this.data)
            console.log( this.data.totalPages)
            console.log(this.data.totalElements)
            console.log(this.data.size)
            console.log(this.data.numberOfElements)
            console.log(this.data.content)
          var pageBtn  = '';
          
          for(var pageNo = 0; pageNo < this.data.totalPages; pageNo++){ 
              pageBtn += "<li>";
              pageBtn += "<button id=\"btn_write\" class=\"btn_write btn btn-primary btn-floating\" v-on:click=\"page("+ (pageNo+1) +")\">" +(pageNo+1)+"</button>";
              pageBtn += "</li>";

          }
          console.log(pageBtn)
          $("ul#pages").append(pageBtn)
       })
    },
/*    page(pageNo){
      console.log('hi')
      axios({
        url: "http://localhost:8080/api/noticelist?page=" + (pageNo-1),
        type : "get",
       
      })
      .then((response) =>{
        this.data = response.data;
        console.log("thisis "+this.data)
       
        var list= '';
        for(let i = 0; i < this.data.numberOfElements; i++){
           list += "<tr>"
           list +=   "<td>" + this.data.content[i].notIdx + "</td>"     
           list +=   "<td><a href='notice?notIdx=" + this.data.content[i].notIdx + "'>" + this.data.content[i].notTitle + "</a></td>"    
           list +=   "<td>" + this.content[i].writer + "</td>"    
           list +=   "<td>" + this.content[i].regDate + "</td>"    
           list +=   "<tr>"    
           }
           $("tbody").empty();
           $("tbody").append(list);
    })
  },  */
  
    
  },
  
  created(){
    this.getItem();
    
  },

 
  
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
.pagination-wrapper{
	display:flex;
}
.pageBtn{
	display: flex;
    align-content: stretch;
    padding: 10px;
    justify-content: center;
}
.table {
  text-align: center;
}
</style>
