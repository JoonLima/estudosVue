<template>
  <MyMenu v-if="$router.currentRoute.name != 'login'" />

  <div class="container">
  
    
  </div>  

  <router-view/>
</template>

<script>

import MyMenu from '@/components/menu/MyMenu'

export default {
  components: {
    MyMenu
  },
  data(){
    return {
      
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Anek+Odia&family=Anek+Tamil:wght@300&family=Indie+Flower&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Press+Start+2P&family=Quicksand:wght@300;400;500;600;700&family=Roboto:wght@100;300&family=Rubik+Wet+Paint&family=Ubuntu+Mono&display=swap');

:root {

}

body {
  padding: 0;
  margin: 0;
  font-family: 'Anek Odia', sans-serif;
  font-family: 'Anek Tamil', sans-serif;
  font-family: 'Indie Flower', cursive;
  font-family: 'Open Sans', sans-serif;
  font-family: 'Press Start 2P', cursive;
  font-family: 'Quicksand', sans-serif;
  font-family: 'Roboto', sans-serif;
  font-family: 'Rubik Wet Paint', cursive;
  font-family: 'Ubuntu Mono', monospac
}

.container{
  display: block;
  margin-top: 15px;
}

.titulo {
  font-weight: 600;
  color: #363636;
}

hr {
  margin: 0;
}

.sub-container {
  margin-top: 15px;
  margin-bottom: 15px;
}

</style>
