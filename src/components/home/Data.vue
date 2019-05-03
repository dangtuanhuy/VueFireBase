<template>
  <div>
    <b-container class="bv-example-row">
      <br>
      <button @click="navigateToHome" class="btn btn-dark">Go to Home</button>
      <hr>
      <p class="mt-3">Current Page: {{ currentPage }}</p>
      <b-row>
        <b-col md="6" class="my-1">
          <b-form-group label-cols-sm="3" label="Search" class="mb-0">
            <b-input-group>
              <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="6" class="my-1">
          <b-form-group label-cols-sm="3" label="Filter" class="mb-0">
            <b-dropdown id="dropdown-1" :text="selected" class="mb-0">
              <b-dropdown-item v-for="item in options" @click="setPerPage(item)">{{item}}</b-dropdown-item>
            </b-dropdown>
          </b-form-group>
        </b-col>
      </b-row>
      <div class="overflow-auto">
        <b-table
          bordered="1"
          id="my-table"
          :items="dataTable"
          :per-page="perPage"
          :current-page="currentPage"
          small
        ></b-table>
        <div>
          <b-container class="bv-example-row">
            <b-row>
              <b-col>
                <b-pagination
                  align="center"
                  v-model="currentPage"
                  :total-rows="rows"
                  :per-page="perPage"
                  first-text="First"
                  prev-text="Prev"
                  next-text="Next"
                  last-text="Last"
                  aria-controls="my-table"
                >
                  <span class="text-info" slot="first-text">First</span>
                  <span class="text-info" slot="prev-text">Prev</span>
                  <span class="text-info" slot="next-text">Next</span>
                  <span class="text-info" slot="last-text">Last</span>
                  <div slot="ellipsis-text">
                    <b-spinner small type="grow"></b-spinner>
                    <b-spinner small type="grow"></b-spinner>
                    <b-spinner small type="grow"></b-spinner>
                  </div>
                  <span slot="page" slot-scope="{ page, active }">
                    <b v-if="active">{{ page }}</b>
                    <i v-else>{{ page }}</i>
                  </span>
                </b-pagination>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      items: [],
      options: [5, 10, 15, 20, 50],
      selected: "5",
      filter: ""
    };
  },
  methods: {
    setPerPage(item) {
      this.perPage = item;
      this.selected = item + "";
    },
    navigateToHome() {
      this.$router.push({ name: "home" });
    }
  },
  computed: {
    rows() {
      return this.items.length;
    },
    dataTable() {
      let res = this.items.filter(item => {
        return item.title.includes(this.filter);
      });
      return res;
    }
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
      this.items = response.data;
    });
  }
};
</script>