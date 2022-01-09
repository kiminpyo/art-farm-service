 <template>
  <div>
        <form action="" @submit="updateitem" id="modal-template"> 
      v-model은 data에 return값으로 반환 가능 
      <input v-model="writerre" placeholder="글쓴이" />
      <input v-model="titlere" placeholder="제목" />
      <input v-model="contentre" placeholder="내용" />
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
               titlere: '',
               contentre: '',
               writerre: ''
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
        async updateitem(e){
         e.preventDefault();
         console.log(this.titlere)
            axios({
                url: "http://localhost:8080/api/notice?noticeIdx=" +this.$route.query.noticeIdx,
                mothod: 'put',
                data:{
                    title: this.titlere,
                    content: this.contentre,
                    writer: this.writerre,
                    registDate: new Date(), //백에서 처리해야될 부분
                    views: "",
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