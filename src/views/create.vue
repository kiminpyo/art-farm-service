
<template>
  <div>
    <v-form action="" @submit="checkform" id="modal-template">
      <v-container  class="spacing-playground pa-6" fluid grid-list-sm>
        <v-card elevation="10" outlined max-width="800px" class="mx-auto">
            <v-row class="pa-md-4"></v-row>

            <v-card-title class="justify-content-center">
              <span class="title mr-2 justify-center">글작성하기</span>
            </v-card-title>
            <v-row justify="center">
              <v-col cols="8">
                <v-text-field
                  label="제목"
                  v-model="title"
                  name="title"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="8">
                <v-text-field
                  label="글쓴이"
                  v-model="writer"
                  name="writer"
                  >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="8">
                <v-textarea
                  autocomplete="내용을 입력하세요"
                  label="내용"
                  v-model="content"
                  name="content"
                >
                </v-textarea>
              </v-col>
            </v-row>
            <v-row
              align="center"
              justify="space-around"
            >
              <v-col align="center">
                <v-btn
                  tile
                  color="secondary"
                  type=""
                >
                  <v-icon left>
                    mdi-format-list-bulleted
                  </v-icon>
                  목록보기
                </v-btn>

                <v-btn
                  tile
                  color="primary"
                  type="submit"
                >
                  <v-icon left>
                    mdi-pencil
                  </v-icon>
                  작성하기
                </v-btn>
              </v-col>
            </v-row>
            <v-row class="pa-md-4"></v-row>
        </v-card>
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
.title{
  color:#43b984;
  font-weight:600;
}

</style>
