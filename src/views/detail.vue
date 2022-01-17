<template>
  <div>

    <v-container>
      <v-card elevation="10" outluined width="100%" class="mx-auto">
        <v-card-text style="padding-bottom:50px !important;">
          <v-row style="margin:30px 0;">
            <v-col cols="1"></v-col>
            <v-col id="detail_sub" cols="2">
              <v-subheader>글번호</v-subheader>
            </v-col>
            <v-col cols="1"></v-col>
            <v-col id="detail_cont" cols="7">
              <span>{{$route.query.id}}</span>
            </v-col>
            <v-col cols="1"></v-col>
          </v-row>
          
          <v-row style="margin:30px 0;">
            <v-col cols="1"></v-col>
            <v-col id="detail_sub" cols="2">
              <v-subheader>제목</v-subheader>
            </v-col>
            <v-col cols="1"></v-col>
            <v-col id="detail_cont" cols="7">
              <span>{{$route.query.title}}</span>
            </v-col>
            <v-col cols="1"></v-col>
          </v-row>

          <v-row style="margin30pxx 0;">
            <v-col cols="1"></v-col>
            <v-col id="detail_sub" cols="2">
              <v-subheader>글쓴이</v-subheader>
            </v-col>
            <v-col cols="1"></v-col>
            <v-col id="detail_cont" cols="7">
              <span>{{$route.query.writer}}</span>
            </v-col>
            <v-col cols="1"></v-col>
          </v-row>
          
          <v-row style="margin:30px 0;">
            <v-col cols="1"></v-col>
            <v-col id="detail_sub" cols="2">
              <v-subheader>내용</v-subheader>
            </v-col>
            <v-col cols="1"></v-col>
            <v-col id="detail_cont_1" cols="7">
              <span>{{$route.query.content}}</span>
            </v-col>
            <v-col cols="1"></v-col>
          </v-row>
          
          <v-row>
            <v-col>
              <button v-on:click="update" class="button">
                <v-icon style="font-size:15px; margin-right:10px; padding:10px 0;">mdi-tooltip-edit</v-icon>수정하기
              </button>
            </v-col>
            <v-col>
              <router-link class="button" to="/board" >
                <v-icon style="font-size:15px; margin-right:10px; padding:10px 0;">mdi-find-replace</v-icon>돌아가기
              </router-link>
            </v-col> 
            
          </v-row>
          
        </v-card-text>
      </v-card>
    </v-container>
  </div> 

</template>

<script>
import axios from 'axios'
export default {
     data() {
        const noticeIdx = this.$route.query.id;
        const title = this.$route.query.title;
        const content = this.$route.query.content;
        const writer = this.$route.query.writer;
        let views = this.$route.query.views;
  

        return{
        noticeIdx : noticeIdx,
        title : title,
       
        content: content,
        writer: writer,
        views : views
        }
    }, 

    props:['detail'],
    
  
  methods: {
  
  update(){
      console.log('hi')
      this.$router.push({
        name:"update",
        query: 
        {noticeIdx : this.noticeIdx,
        }
      })
    console.log(this.noticeIdx)
    },
    
    
  },
  mounted(){
    console.log(this.$route.query.views)
    
         axios({
          url: "http://ec2-13-124-134-65.ap-northeast-2.compute.amazonaws.com:8080/api/notice?noticeIdx="+this.$route.query.id,
          method: "get",
          
        }).then(function (response) {
          console.log("success");
          console.log(response);
          console.log(response.data.views)
          console.log(this.content)
          
        }); 
  }
}
  
   
    

</script>

<style>


a.button {
	-webkit-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	-moz-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	-ms-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	-o-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	display: block;
	margin: 0 auto;
	max-width: 100px;
  height:40px;
  line-height:30px;
	text-decoration: none;
	border-radius: 4px;
	padding: 5px;
  font-size:12px;
  font-weight:600;
  text-align: center;
}

a.button {
	color: rgba(30, 22, 54, 0.6);
	box-shadow: rgba(30, 22, 54, 0.4) 0 0px 0px 2px inset;
  background-color:white;
}

a.button:hover {
	color: rgba(255, 255, 255, 0.85);
	box-shadow: rgba(30, 22, 54, 0.7) 0 0px 0px 40px inset;
}

.button {
	-webkit-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	-moz-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	-ms-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	-o-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	display: block;
	margin: 0 auto;
	max-width: 100px;
  height:40px;
  line-height:30px;
	text-decoration: none;
	border-radius: 4px;
	padding: 5px;
  font-size:12px;
  font-weight:600;
  text-align: center;
	color: rgba(30, 22, 54, 0.6);
	box-shadow: rgba(30, 22, 54, 0.4) 0 0px 0px 2px inset;
  background-color:white;
}

.button:hover {
	color: rgba(255, 255, 255, 0.85);
	box-shadow: rgba(30, 22, 54, 0.7) 0 0px 0px 40px inset;
}
.v-subheader {
  justify-content:center;
  font-size:1.3rem !important;
  font-weight:800 !important;
}
#detail_cont{
  display:flex;
  align-items:center;
  vertical-align: middle;
  border-bottom:1px solid #cdcdcd;
  padding:10px 20px;
  font-size:1.2rem;
}
#detail_cont_1{
  display:flex;
  align-items:center;
  vertical-align: middle;
  padding:10px 20px;
  
  font-size:1rem;
  /* background-color:#cdcdcd;
  color:#fff; */

  background: white;
  box-shadow: 5px 5px rgba(0,0,0,.15);
  transition: all .4s ease;
}
#detail_cont_1:hover{
  box-shadow: 2px 2px rgba(0,0,0,.25);
}

</style>