<template>
  <!-- <div>
    <form action="" @submit="updateitem" id="modal-template"> 
      <input v-model="writer" placeholder="글쓴이" />
      <input v-model="title" placeholder="제목" />
      <input v-model="content" placeholder="내용" />
      <button type="submit">수정하기</button>
    </form> 
  </div> -->
  <div>
  <v-form  ref="form"
    style="width:60%; margin:0 auto;"
    lazy-validation
    action=""
    @submit="updateitem"
    id="modal-temlate"
    >
      <v-card>
        <v-row no-gutters>
          <v-col id="tit">
            제목
          </v-col>
        </v-row>
        <v-row>
          <v-col id="cont">
            <v-text-field class="title" hint="제목을 입력해주세요." name="title" v-model="title" :counter="50" required maxlength="50">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col id="tit">
            내용
          </v-col>
        </v-row>
        <v-row>
          <v-col id="cont">
            <v-textarea class="context" hint="내용을 입력해주세요." name="context"   :counter="1000" required maxlength="1000">
            </v-textarea>
          </v-col>
        </v-row>
        <span></span>
        <v-row>
          <v-col cols="12" align="center">
            <v-btn id="back" large outlined type="" elevation="2">
              돌아가기
            </v-btn>
            
            <v-btn id="reg" large outlined type="submit" elevation="2">
              등록하기
            </v-btn>
          </v-col>
        </v-row>
        
      </v-card>
    </v-form>
  </div>
</template>

<script>
  import axios from 'axios' 
export default {
  data(){
  const noticeIdx= this.$route.query.noticeIdx;

    return{
      noticeIdx,
      title: '',
      content: '',
      writer: ''
    }
  },
    props: ['update'],
    methods: {
        
        /* getItem(){
                axios.get("http://localhost:8080/api/notice?noticeIdx="+this.noticeIdx)
            .then((response) => {
                this.noticeIdx= response.data.noticeIdx;
                
                console.log(this.noticeIdx)
                response.data.title= '';
                response.data.content= '';
                response.data.writer= '';
                    console.log("초기화 ==> "+response.data.title)
        
            })
        }, */
      updateitem(e){
      e.preventDefault();
      console.log(this.title);
        let title = this.title;
        let content = this.content;
      console.log(content)
        axios({
          url: "http://localhost:8080/api/notice?noticeIdx=" + this.$route.query.noticeIdx,
          method:'put',
          data:{
            title: title,
            content: content
            },
          })
        .then(function(response){
            console.log("succeess")
            console.log(response)
        })
      } 
    },
  }  

</script>

<style>

</style> 