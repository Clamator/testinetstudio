<template>
  <v-container>
    <v-row align="center" justify="center" class="ma-4">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col cols="12" md="4">
        <UserFilters
          :filters="filters"
          @update-country="updateCountry($event)"
          @update-score="updateScore($event)"
        />
      </v-col>

      <v-col cols="12" md="4">
        <UsersList :users="users" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UsersList from "./UsersList.vue";
import UserFilters from "./UserFilters.vue";

import { mapActions, mapState } from "vuex";

export default {
  name: "ContentBlock",

  components: {
    UsersList,
    UserFilters,
  },
  // при изменении состояния делаем запрос на сервер
  watch: {
    filters: {
      handler() {
        this.getUsers();
      },
      // дип-тру т.к. следим за свойствами объекта
      deep: true,
      immediate: true,
    },
  },

  computed: {
    ...mapState("usersModule", ["users"]),
    ...mapState("filtersModule", ["filters"]),
  },

  methods: {

    ...mapActions("usersModule", ["updateUsers"]),
    ...mapActions("filtersModule", [
      "updateFilters",
      "updateCountry",
      "updateScore",
    ]),
    //  можно было перенести в экшены, можно было свой отдельный файл вынести,
    // запрос уходит на простенький сервер, лежит в папке сервера.
    async getUsers() {
      const users = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          filters: this.filters,
        }),
      }).then((response) => response.json());

      this.updateUsers(users);
    },
  },
};
</script>
