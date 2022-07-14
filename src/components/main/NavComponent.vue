<template>
  <div class="navbar_component">
    NavBar
     <nav>
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>

        <li>
          <a href="about.html">About</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
