<template>
  <div class="signup container">
    <h4 class="text-center">REGISTER</h4>
    <b-form @submit.prevent="signup">
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
        <b-form-input
          id="input-1"
          type="email"
          name="email"
          required
          placeholder="Enter email"
          v-model="email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          name="password"
          type="password"
          required
          placeholder="Enter your password"
          v-model="password"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Alias:" label-for="input-2">
        <b-form-input
          id="input-3"
          name="alias"
          type="text"
          required
          placeholder="Alias"
          v-model="alias"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <p class="red-text center" v-if="feedback">{{ feedback }}</p>
      </b-form-group>
      <b-form-group>
        <b-button type="submit" variant="primary">Register</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form-group>
    </b-form>
    <p class="text-center">
      or Login with Social
      <br>
      <button @click="socialLogin" class="social-button">
        <img alt="Google Logo" src="../../img/google.jpg">
      </button>
      <button @click="socialLoginFacebook" class="social-button">
        <img alt="Facebook" src="../../img/facebook.png">
      </button>
    </p>
  </div>
</template>

<script>
// import slugify from "slugify";
import db from "../../components/firebase/init.js";
import firebase from "firebase";
import slugify from "slugify";

export default {
  name: "Signup",
  data() {
    return {
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null
    };
  },
  methods: {
    signup() {
      if (this.alias && this.email && this.password) {
        this.slug = slugify(this.alias, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        let ref = db.collection("dangtuanhuyhachi").doc(this.slug);
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = "This alias already exists";
          } else {
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .then(cred => {
                ref.set({
                  alias: this.alias,
                  user_id: cred.user.uid
                });
              })
              .then(() => {
                this.$router.push({ name: "success" });
              })
              .catch(err => {
                this.feedback = err.message;
              });
            this.feddback = "Alias free to use";
          }
        });
      } else {
        this.feedback = "You must enter an all fields";
      }
    },
    socialLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          this.$router.replace("success");
        })
        .catch(err => {
          alert("Oops. " + err.message);
        });
    },
    socialLoginFacebook() {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          this.$router.replace("success");
        })
        .catch(err => {
          alert("Oops. " + err.message);
        });
    }
  }
};
</script>

<style>
.signup {
  max-width: 400px;
  margin-top: 60px;
}
.signup h2 {
  font-size: 2.4em;
}
.signup .field {
  margin-bottom: 16px;
}
.social-button {
  width: 75px;
  background: white;
  padding: 10px;
  border-radius: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  outline: 0;
  border: 0;
}
.social-button:active {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.social-button img {
  width: 100%;
}
</style>