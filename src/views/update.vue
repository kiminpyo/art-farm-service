 <template>
  <div>
        <form action="" @submit="updateitem" id="modal-template"> 
      <!--v-model은 data에 return값으로 반환 가능  -->
      <input v-model="writer" placeholder="글쓴이" />
      <input v-model="title" placeholder="제목" />
      <input v-model="content" placeholder="내용" />
      <button type="submit">수정하기</button>
    </form> 
   
   
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