<template>
  <div>
    <b-container class="bv-example-row">
      <h1 class="text-center">Fill Form</h1>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Food:" label-for="input-3">
          <b-form-select id="input-3" v-model="form.food" :options="foods" required></b-form-select>
        </b-form-group>
        <b-form-group id="input-group-4">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
            <b-form-checkbox value="Check me out">Check me out</b-form-checkbox>
            <b-form-checkbox value="Check that out">Check that out</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-form-group label="Gender:" id="input-group-5">
          <b-form-radio name="some-radios" value="Male" v-model="form.gender">Male</b-form-radio>
          <b-form-radio name="some-radios" value="Female" v-model="form.gender">Female</b-form-radio>
        </b-form-group>

        <b-form-group label="Description:" id="input-group-6">
          <b-form-textarea
            id="textarea"
            v-model="message"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
        <b-button type="submit" variant="dark">Submit</b-button>

        <b-button type="reset" variant="info">Reset</b-button>
      </b-form>
      <b-card
        class="mt-3 text-center text-white"
        header="FORM SUBMIT"
        style="color:red"
        overlay
        img-src="https://picsum.photos/900/250/?image=1"
        img-alt="Card Image"
        text-variant="white"
      >
        <pre class="m-0 text-left text-white">{{ form }}</pre>
        <p class="m-0 text-left text-white" style="white-space: pre">Description: {{message}}</p>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        gender: "Male",
        checked: [],
        
      },
      message:'',
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      this.form.gender = "Male";
      this.form.message = '';
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>