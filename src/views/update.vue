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
    <v-form ref="form" style="width:50%; margin:0 auto;  margin-top:100px;" lazy-validation action="" @submit="updateitem" id="modal-template">
      <v-card id="card_board">
        <v-row no-gutters>
          <v-col id="cont">
            <v-text-field class="title" hint="50자 이내로 입력하세요" placeholder="제목을 입력해 주세요" name="title" v-model="title" :counter="50" required maxlength="50" outlined>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col id="cont">
            <v-text-field class="writer" hint="20자 이내로 입력하세요" placeholder="작성자명을 입력해 주세요" name="writer" :counter="20" required maxlength="20" outlined>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col id="cont">
            <v-textarea class="context" hint="1000자 이내로 입력하세요" placeholder="글 내용을 입력해 주세요" name="context" :counter="1000" required maxlength="1000" outlined>
            </v-textarea>
          </v-col>
        </v-row>
        <span></span>
        <v-row cols="12">
          <v-col cols="3"></v-col>
          <v-col cols="3">
            <v-btn id="back" large outlined type="" elevation="2">
              <v-icon style="font-size:15px; margin-right:10px;">mdi-find-replace</v-icon>돌아가기
            </v-btn>
          </v-col>
          <v-col cols="1"></v-col>
          <v-col cols="3">
            <v-btn id="reg" large outlined type="submit" elevation="2">
              <v-icon style="font-size:15px; margin-right:10px;">mdi-tooltip-edit</v-icon>수정하기
            </v-btn>
          </v-col>
          <v-col cols="2"></v-col>
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
          url: "http://ec2-13-124-134-65.ap-northeast-2.compute.amazonaws.com:8080/api/notice?noticeIdx=" + this.$route.query.noticeIdx,
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
#card_board{
  padding:5% 10%;
}
</style>