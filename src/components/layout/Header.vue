<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <router-link to="/redirect-me" tag="div">
        <b-navbar-brand>Project</b-navbar-brand>
      </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/myForm" tag="div">
            <b-nav-item>My Form</b-nav-item>
          </router-link>
        </b-navbar-nav>
        <b-navbar-nav>
          <router-link to="/myFormBoots" tag="div">
            <b-nav-item>Form BOOTVUE</b-nav-item>
          </router-link>
        </b-navbar-nav>
        <b-navbar-nav>
          <router-link to="/tableData" tag="div">
            <b-nav-item>Table</b-nav-item>
          </router-link>
        </b-navbar-nav>
         <b-navbar-nav>
          <router-link to="/fruit" tag="div">
            <b-nav-item>Fruits</b-nav-item>
          </router-link>
        </b-navbar-nav>
        <b-navbar-nav>
          <router-link to="/SignUp" tag="div">
            <b-nav-item>Register</b-nav-item>
          </router-link>
        </b-navbar-nav>
                <b-navbar-nav>
          <router-link to="/login" tag="div">
            <b-nav-item>Login</b-nav-item>
          </router-link>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
        </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "../../components/firebase/init.js";
export default {
  methods:{
    logout :  function(){
      firebase.auth().signOut().then(()=>{
        this.$router.replace('/login')
      })
    }
  }
};
</script>

<style>
</style>
