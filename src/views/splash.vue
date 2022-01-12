<template>
  
  
  <vue-splash
    :show="true"
    :logo="logo"
    title="ART FARM"
    color="#F29661"
    :size="300"
    :fixed="true"
  />
</template>

<script>
import YourLogo from "@/assets/artfarm.png";

export default {
  name: "splash-component",
  computed: {
    logo() {
      return YourLogo;
    }
  }
}
</script>