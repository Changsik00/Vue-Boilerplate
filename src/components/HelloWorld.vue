<template>
  <v-container>
    <v-layout justify-center column style="margin: 30px; width: 200px; margin: auto">
        <v-btn outlined rounded color="primary" 
               :loading="loadingTest"
               :disabled="loadingTest" 
               @click="showButtonLoading">
               <span class="mr-2">Loading</span>
        </v-btn>
        <v-btn outlined rounded color="primary" @click="showLoading">
          <span class="mr-2">Loading2</span>
        </v-btn>
        <v-btn outlined rounded color="primary" @click="apiTest">
          <span class="mr-2">API Test</span>
        </v-btn>
        <v-btn outlined rounded color="primary" @click="showSnackbar">
          <span class="mr-2">Snackbar Show</span>
        </v-btn>
      </v-layout>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/logo.svg')"
                class="my-3"
                contain 
                height="200">
        </v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>
        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a href="https://community.vuetifyjs.com" target="_blank">Discord Community</a>
        </p>
      </v-flex>

      <v-flex mb-5 xs12>
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>

        <v-layout justify-center>
          <a v-for="(next, i) in whatsNext"
             :key="i"
             :href="next.href"
             class="subheading mx-3"
             target="_blank">
            {{ next.text }}
          </a>
        </v-layout>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>
        <v-layout justify-center>
          <a v-for="(link, i) in importantLinks"
             :key="i"
             :href="link.href"
             class="subheading mx-3"
             target="_blank">
            {{ link.text }}
          </a>
        </v-layout>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>
        <v-layout justify-center>
          <a v-for="(eco, i) in ecosystem"
             :key="i"
             :href="eco.href"
             class="subheading mx-3"
             target="_blank">
            {{ eco.text }}
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  data: () => ({
     loadingTest: false,
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer',
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/layout/pre-defined',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
  computed: {
    ...mapGetters(["isLoading"]),
  },
  methods: {
    ...mapActions({showLoading : 'showLoading'}),
    showButtonLoading() {
      this.loadingTest = true;
      setTimeout(() => this.loadingTest = false , 2000)
    },
    apiTest() {
      this.$axios.get('/users?page=2')
      .then(result => console.log("#@# result1", result))
      .catch(error => console.log("#@# error1" , error));
      this.$axios.get('/users/23')
      .then(result => console.log("#@# result2", result))
      .catch(error => console.log("#@# error2" , error));
      this.$axios.get('/users?delay=3')
      .then(result => console.log("#@# result3", result))
      .catch(error => console.log("#@# error3" , error));

      this.apiTest2();
    },
    async apiTest2() {
      try {
        const response1 = await this.$axios.get('/user?ID=12345');
        console.log("#@# 1", response1);
        const response3 = await this.$axios.get('/users?delay=3');
        console.log("#@# 3", response3);
        const response2 = await this.$axios.get('/users/23');
        console.log("#@# 2", response2);
      } catch (error) {
        console.error(error);
      }
    },
    showSnackbar() {
      this.$showSnackbar("this is snackbar test<br>adasdf<br>adasdf<br>adasdf");
    }
  }
};
</script>
<style lang="scss">

</style>