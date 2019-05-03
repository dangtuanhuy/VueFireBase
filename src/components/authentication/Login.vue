<template>
 <div class="signup container">


    <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
      <b-form-input id="input-1" type="email" required placeholder="Enter email" v-model="email"></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Password:" label-for="input-2">
      <b-form-input
        id="input-2"
        type="password"
        required
        placeholder="Enter your password"
        v-model="password"
      ></b-form-input>
    </b-form-group>

    <b-button type="submit" variant="primary" @click="login">Login</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
    <p>
      You don't have an account ? You can
      <router-link to="/SignUp">Register Now!z</router-link>
    </p>

 </div>
</template>

<script>
import firebase from "firebase";
import db from "../../components/firebase/init.js";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("/");
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    }
  }
};
</script>

<style >

</style>