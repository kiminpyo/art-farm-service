<template>
  <div>
    <v-form action="" @submit="checkform" id="modal-template">
      <v-container fluid>
        <v-row>
          <v-text-field
            label="제목"
            v-model="title"
            name="title"
          >
          </v-text-field>
        </v-row>
        <v-row>
          <v-textarea
            autocomplete="내용을 입력하세요"
            label="내용"
            v-model="content"
            name="content"
          >
          </v-textarea>
        </v-row>
        <v-row>
          <v-col cols="12" align="center">
            <v-btn color ="info" type="submit" elevation="2">작성</v-btn> 
          </v-col>
        </v-row>
      </v-container>
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
</style>
