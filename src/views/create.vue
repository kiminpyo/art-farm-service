<template>
  <div>
    <v-form  ref="form"
    style="width:60%; margin:0 auto;"
    lazy-validation
    @submit="checkform" 
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
              목록보기
            </v-btn>
            
            <v-btn id="reg" large outlined type="submit" elevation="2">
              등록하기
            </v-btn>
          </v-col>
        </v-row>
        
      </v-card>
    </v-form>

    <Modal v-if="showModal" @close="showModal = false">
      
      <h3 slot="header">경고!</h3>
      <h3 slot="body">뭔가를 입력하세요</h3>
      <h3 slot="footer">
        <span><i class="fas fa-times" @click="showModal = false">취소</i></span>
      </h3>
    </Modal>
  </div>
</template>
<!--v-model은 data에 return값으로 반환 가능-->
<!--slot은 현재 컴포넌트에서 재사용을 할 수 있다 modal에서 header만 끌어온것-->


<script>
import axios from "axios";
import Modal from "../common/Modal.vue";
export default {
  name: "create",
  data() {
    return {
      title: '',
      content: '',
      writer: '',
     
      showModal: false,
    }
  },
/*   myDateFormat(d) {
    var d1 = new Date(Date.now());
    console.log(d1);
    return (
      d.getFullYear() +
      "/" +
      ("0" + d.getDate()).slice(-2) +
      "/" +
      ("0" + (d.getMonth() + 1)).slice(-2)
    );
  }, */
  methods: {
    async checkform(e) {
      e.preventDefault();
      let title = this.title;
      let content = this.content;
      let writer = this.writer;
      console.log(title, content, writer);
     /*  if (title == '') {
        console.log("modalSuccess");
        this.showModal = !this.showModal;
      
      } else { */
      /*   const event = new Date();
        console.log(event.toDateString()); */

        axios({
          url: "http://localhost:8080/api/notice/",
          method: "post",
          data: {
            title: title,
            content: content,
            writer: writer,
            registDate: new Date(), //백에서 처리해야될 부분
            views: "",
          },
        }).then(function (response) {
          console.log("success");
          console.log(response);
        });
     /*  } */
    },
  },
  components: {
    Modal,
  },
};
</script>

<style scoped>
button{
    background-color:black;
    color:white;
    
}
.title{
  background-color:white;
}
.context{
  background-color:white;
}
div{
  padding:20px;
}
#tit{
  padding:10px 40px;
  font-size:1.5rem;
  font-weight:400;
}
#cont{
  padding:10px 20px;
}
#back{
  color:white;
  background-color:#cdcdcd;
  font-size:1rem;
  font-weight:400;
}
#reg{
  color:white;
  background-color:#1867c0;
  font-size:1rem;
  font-weight:400;
}
</style>
