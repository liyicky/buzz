<template>
  <div class="liy-nav">
    <b-navbar toggleable="md" type="dark">
      <b-navbar-brand href="#"><img src="../assets/logo.png" class="logo" alt=""><router-link to="/"></router-link></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>

          <b-nav-item href="#"><router-link to="/contact">Contact</router-link></b-nav-item>
          <b-nav-item href="#"><router-link to="/scores">Scores</router-link></b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Link</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<style scoped>

  .liy-nav {
    position: absolute;
    z-index: 100;
    width: 100%;
    background-color: rgba(0,0,0,0);
  }

  .logo {
    width: 30px;
    height: 30px;
  }

</style>
