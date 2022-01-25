<template>

 <div id="app">
  <v-app id="inspire" style="margin-top:150px; ">
    
    <v-stepper
      v-model="e6"
      vertical
    >
        <v-stepper-step
          :complete="e6 > 1"
          editable
          step="1"
        >
          이름
          <small>전시회의 이름을 적어주세요</small>
        </v-stepper-step>
    
        <v-stepper-content step="1">
          <v-card >
        <textarea type="text"
          v-model="title"
          class="mb-12"
          style="width:100%; height:100%"        
        ></textarea>
        </v-card>
          <v-btn
            color="primary"
            @click="e6 = 2"
          >
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
    
        <v-stepper-step
          :complete="e6 > 2"
          editable
          step="2"
        >
          전시회를 소개해주세요
        </v-stepper-step>
    
        <v-stepper-content step="2">
          <v-card>
              <textarea 
              v-model="discription"
              color="grey lighten-1"
              class="mb-12"
              style="height:300px; width:100%"
              >
              </textarea>
            
          </v-card>
          <v-btn
            color="primary"
            @click="e6 = 3"
          >
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
    
        <v-stepper-step
          :complete="e6 > 3"
          editable
          step="3"
        >
          날짜를 입력해주세요
        </v-stepper-step>
    
        <v-stepper-content step="3">
          <v-card
          height="500"
          >
          <!-- 캘린터 파트 -->
            <v-app id="inspire">
              <v-row>
                <v-col
                  cols="12"
                  sm="3"
                >
                  <v-date-picker
                    v-model="exhPeriod"
                    multiple
                  ></v-date-picker>
                </v-col>
                <v-col
                  cols="12"
                  sm="3"
                >
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="exhPeriod"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-combobox
                        v-model="exhPeriod"
                        multiple
                        chips
                        small-chips
                        label="Multiple picker in menu"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      >
                      </v-combobox>
                    </template>
                    <v-date-picker
                      v-model="exhPeriod"
                      multiple
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="menu = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(exhPeriod)"
                      >
                      OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-app>
    
          </v-card>
          
          <v-btn
            color="primary"
            @click="e6 = 4"
          >
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
          <!-- 캘린터 파트 종료-->
        
        <v-stepper-step
          :complete="e6 > 4"
          editable
          step="4"
        >
          장소
          <small>전시회의 장소를 적어주세요</small>
        </v-stepper-step>
    
        <v-stepper-content step="4">
          <v-card >
            <textarea>장소는 여기인가요?</textarea>
          </v-card>
        
          <v-btn
            color="primary"
            @click="e6 = 5"
          >
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
      <!--장소 선택 파트 끝-->
    
      <!-- 이미지 업로트 파트 -->
        <v-stepper-step
        editable
        step="5">
          업로드 파일
          <small>작품을 소개할 이미지를 등록해주세요</small>
        </v-stepper-step>
        <v-stepper-content step="5">
          <div class="upload">
            <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
                <div class="form-group">
                  <input
                    type="file"
                    @change="uploadFile"
                    multiple>
                </div>
                <div class="form-group">
                  <button class="btn btn-success btn-block btn-lg">업로드하기</button>
                </div>
            </form>
          </div>    
            <!--이미지 업로드 성공-->
            
            <!-- 이미지 업로드 실패파트
              <div>
                <v-file-input
                  label="File input"
                  @change="selectFile" 
                  type="file"
                  enctype="multipart/form-data">
                </v-file-input>
                <v-btn @click="submit">서버에 전송하기</v-btn>
              </div> -->

          <v-btn
            color="primary"
            @click="senddata"
          >
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
        <!-- 이미지 업로드 파트 끝 -->
      </v-stepper>
      <!-- 전시회 등록 폼 끝 -->
    </v-app>
  </div>
 
</template>

<script>
  import axios from 'axios'  
  export default {
    data(){
      return{
        e6 : 1,
        title: '',
        place: '',
        author:'',
        category: '',
        discription: '',
        url: '',
        /* data:  */
      
        exhPeriod:[
          
        ],
        menu: false,
        files: null
      }
    },
    methods: {
      //이미지 파일 변환시
      uploadFile (event) {
        this.files = event.target.files
        },
    //이미지 파일 보내기
      handleSubmit() {
        const formData = new FormData();
        for (const i of Object.keys(this.files)) {
          formData.append('images', this.files[i])
        }
        console.log(this.files)
        axios.post('http://ec2-13-124-134-65.ap-northeast-2.compute.amazonaws.com:8080/api/images', formData, { 
          headers:{
            'Content-Type': 'multipart/form-data'
          }, 
        }).then((res) => {
          console.log(res)
        })
        }, 
    
    //전시회에 들어갈 컨텐츠 내용
        senddata(){
          console.log(this.title)
          console.log(this.exhPeriod)
          console.log(this.files)
          console.log(this.exhPeriod.toString())
          if(this.title === null){
            console.log("hi")
            }
          axios({
            url: ('http://ec2-13-124-134-65.ap-northeast-2.compute.amazonaws.com:8080/api/exhibition'),
            method: 'post',
            data: 
              {
                title: this.title,
                place: this.place,
                author: this.author,
                category: this.category,
                discription: this.discription,
                url : this.url,
                exhPeriod:[{
                  date: this.exhPeriod.toString(),
                  }                  
                ]
              },       
            }).
            then((response) => {
              console.log(response);
              console.log(this.files)
              alert('등록되었습니다')
              window.location.href="Gallery"  //갤러리로 돌아감 
            })
        },
        selectFile(file){
          this.image = file;
          console.log(this.image)
        },
          async submit() {
          console.log(this.image)
          const formData = new FormData();
          formData.append("image", this.image);
          console.log(formData);
            try {
              axios({
                method: "post",
                url : "http://ec2-13-124-134-65.ap-northeast-2.compute.amazonaws.com:8080/api/images",
                headers: {
                  "Content-Type" : "multipart/form-data"
                  } ,
                data :  {
                  images : formData.images
                  }
                })
              } catch (err) {
                console.log(err);
              }
            },
          }
        }
</script>

<style scoped>
</style>