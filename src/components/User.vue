<template>
  <!-- здесь выводятся данные пользователя, есть ряд условия для отображения некоторых полей -->
  <v-list-item>
    <v-list-item-avatar>
      <v-img @click="toggleAddressVisibility(user)" :src="user.avatar"></v-img>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title>
        {{ user.title }}

        <span class="grey--text text--lighten-1" v-if="user.count > 0">
          {{ user.count }}
        </span>
      </v-list-item-title>

      <v-list-item-subtitle>
        <span class="text--primary">
          <span v-if="user.recipients.length > 1"> to </span>
          <span v-for="(recipient, index) in user.recipients" :key="recipient">
            {{ recipient
            }}<span v-if="index + 1 < user.recipients.length">,</span>
          </span>
        </span>

        {{ user.subject }}
      </v-list-item-subtitle>
      <div
        v-show="this.isAddressVisible"
        class="user-card__address user-address"
      >
        <span>
          {{ user.address }}
        </span>
      </div>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isAddressVisible: false,
    };
  },
  methods: {
    // реализовано через флаг,
    // можно реализовать через добавление свойства, но это меняет состояние юзера без необходимости,
    toggleAddressVisibility(user) {
      console.log(user);
      // this.$set(user, "showAddress", !user.showAddress);
      this.isAddressVisible = !this.isAddressVisible;
    },
  },
};
</script>
<style>
.user-card__address {
  position: absolute;
  width: 250px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  top: 25%;
  left: -25%;
  transform: translateX(-50%);
  transition: top 1.5s;
  z-index: 999;
}
</style>
