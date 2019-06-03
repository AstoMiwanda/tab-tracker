<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title class="mr-4">
            <span class="nav-brand" flat dark @click="navigateTo({name: 'root'})">
                TabTracker
            </span>
        </v-toolbar-title>

      <!-- <v-toolbar-items>
          <v-btn flat dark>Browse</v-btn>
      </v-toolbar-items> -->

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn
                v-if="!isUserLogedIn"
                flat dark
                @click="navigateTo({name: 'login'})">
                Login ku
            </v-btn>
            <v-btn
                v-if="!$store.state.isUserLogedIn"
                flat dark
                @click="navigateTo({name: 'register'})">
                Sign Up
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  computed: {
    isUserLogedIn () {
      return this.$store.getters.isUserLogedIn
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-brand:hover {
    cursor: pointer;
    color: #e9e9e9;
}
</style>
