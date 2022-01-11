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
        <v-card>
       <textarea type="text"
        v-model="title"
        class="mb-12"
        style="width:1100px; height:100px"
        
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
            v-model="content"
              color="grey lighten-1"
            class="mb-12"
             style="width:1000px"
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
        <v-card>  
            <!-- 캘린터 파트 -->
                    <v-app id="inspire">
                        <v-row>
                            <v-col
                                cols="12"
                                sm="6"
                            >
                                <v-date-picker
                                v-model="dates"
                                multiple
                                ></v-date-picker>
                            </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                        >
                        <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="dates"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-combobox
                                v-model="dates"
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
                                v-model="dates"
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
                                    @click="$refs.menu.save(dates)"
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
        View setup instructions
      </v-stepper-step>
      <v-stepper-content step="4">
        <v-card
          color="grey lighten-1"
          class="mb-12"
          height="200px"
        ></v-card>
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
            content: '',
            /* data:  */
            dates: [],
            menu: false
        
        }
    },
    methods: {
     
        senddata(){
               console.log(this.title)
               console.log(this.dates)
               console.log(JSON.stringify(this.dates))
                 
         axios({
             url: ('http://ec2-13-124-134-65.ap-northeast-2.compute.amazonaws.com/api/notice'),
             method: 'post',
             data: 
                {
                    title: this.title,
                    content: this.content,
                    registDate: "2022-12-10"// JSON.stringify(this.dates)
                 
                    
                    
                }
             
         }).
         then((response) => {
             console.log(response);
             alert('등록되었습니다')
            window.location.href="Gallery"
         })
    
        }
    }
    
    
}
</script>

<style>

</style>