<template>
 <div id="app">
  <v-app id="inspire">
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
            ></textarea>
           
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
        height="500">  
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
                                ></v-combobox>
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
     <!-- 캘린터 파트 종료-->
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
  
      <v-stepper-step
       editable
       step="4">
        업로드 파일
        <small>작품을 소개할 이미지를 등록해주세요</small>
      </v-stepper-step>
      <v-stepper-content step="4">
        
     
              <div class="upload">
                <form @submit.prevent="handleSubmit">
                    <div class="form-group">
                        <input
                    
                         type="file"
                          @change="uploadFile"
                          
                           multiple>
                    </div>

                    <div class="form-group">
                        <button class="btn btn-success btn-block btn-lg">Upload</button>
                    </div>
                    </form>
              </div>    
 

      
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
    </v-stepper>
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
            exhPeriod: [],
            menu: false,
            files: null
        
        }
    },
    methods: {
       
       uploadFile (event) {
        this.files = event.target.files
        },

      /*   handleSubmit() {
          const formData = new FormData();
          for (const i of Object.keys(this.files)) {
            formData.append('files', this.files[i])
          }
          console.log(this.files)
           axios.post('', formData, {
          }).then((res) => {
            console.log(res)
          }) 
        }, */
     
        senddata(){
               console.log(this.title)
               console.log(this.exhPeriod)
              console.log(this.files)
                 
         axios({
             url: ('http://localhost:8080/api/exhibition'),
             method: 'post',
             data: 
                {
                    title: this.title,
                    place: this.place,
                    author: this.author,
                    category: this.category,
                    discription: this.discription,
                    url : this.url,
                    exhPeriod: this.exhPeriod,
                  registDate: ""// JSON.stringify(this.dates)   
                }
             
         }).
         then((response) => {
             console.log(response);
             alert('등록되었습니다')
           /*  window.location.href="Gallery" */
         })
    
        }
    }
    
    
}
</script>

<style scoped>


</style>