<template>
  <div id="app">
    <img alt="Vue logo" src="../../assets/logo.png">
    <BannerComponent></BannerComponent>
    <NavComponent></NavComponent>
    <AddComponent></AddComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import BannerComponent from '../../components/main/BannerComponent.vue'
import NavComponent from '../../components/main/NavComponent.vue'
import AddComponent from '../../components/main/AddComponent.vue'
import FooterComponent from '../../components/main/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    BannerComponent,
    NavComponent,
    AddComponent,
    FooterComponent
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
