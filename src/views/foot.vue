<template>
  <v-footer id="footer" class="pa-0 ma-0"
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
      width="100%"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0 d-flex" cols="12">
        <v-col id="cols-foot" cols="4">
          <v-row>
            <v-col>
              <v-img style="margin:0 auto" max-width="250" src="@/assets/define.png"></v-img>
            </v-col>
          </v-row>
          <v-row>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12931.37791404179!2d128.7360435!3d35.8773279!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xed9348a5a7daefae!2z7LKo64uo7KCV67O07Ya17Iug7Jy17ZWp7IKw7JeF6riw7Iig7JuQ!5e0!3m2!1sko!2skr!4v1642146264942!5m2!1sko!2skr" style="height:250px; border:0;" allowfullscreen="" loading="lazy"></iframe>
          </v-row>
        </v-col>
        <v-col id="cols-foot" cols="4">
          <v-row id="row-tit">운영시간</v-row>
          <v-row>월 ~ 금 : 오전 9시 ~ 오후 6시</v-row>
          <v-row id="row-tit">문의</v-row>
          <v-row>1990 - 0209</v-row>
          <v-row style="text-decoration:underline">artfarm.hustar@gmail.com</v-row>
          <v-row  class="d-flex">
            <v-col>
              <v-img max-width="100" src="@/assets/hustar.png"></v-img>
            </v-col>
            <v-col>
              <v-img max-width="100" src="@/assets/daegu.png"></v-img>
            </v-col>
            <v-col></v-col>
            <v-col></v-col>
          </v-row>
        </v-col>
        <v-col id="cols-foot" cols="4">
          <v-row>
            <v-col center>
              <v-img style="margin:0 auto" max-width="200" src="@/assets/logo.png"></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>ArtFarm Co.</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    name : "foot",
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-youtube',
        'mdi-instagram',
      ],
    }),
  }
</script>
<style>
#footer{
  position:absolute;
  bottom:0;
  margin:0 auto;
  width:100%;
}
#footer .row{
  padding:2% 5%;
  font-size:1rem;
  font-weight:100;
}
#footer #row-tit{
  font-weight:600;
}
#cols-foot{background: #e1e1e1;width:33.33%; color:#000;}
.v-card__text{
  box-shadow:4px 4px 3px #1e1e1e inset;
  padding:0px !important;
  border:1px solid #323232;
}

</style>