<template>
  <v-card max-width="450" class="mx-auto">
    <v-list three-line>
      <div class="flex-line">
        <v-subheader> Users List </v-subheader>
        <preloader-component v-if="users.length === 0"></preloader-component>
        <empty-component v-if="users.length === 0"></empty-component>
      </div>

      <transition-group
        name="staggered-fade"
        tag="div"
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <div v-for="(user, index) in users" :key="user.id">
          <User :user="user" />

          <v-divider inset v-if="index + 1 < users.length" />
        </div>
      </transition-group>
    </v-list>
  </v-card>
</template>

<script>
import User from "./User.vue";
import velocity from "velocity-animate";
import PreloaderComponent from "@/components/PreloaderComponent";
import EmptyComponent from "@/components/EmptyComponent";

export default {
  components: {
    EmptyComponent,
    PreloaderComponent,
    User,
  },

  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
  // эта часть кода - для плавности анимации, https://ru.vuejs.org/v2/guide/transitions.html
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter(el, done) {
      const delay = el.dataset.index * 150;

      setTimeout(() => {
        // высоту пришлось захардкодить
        velocity(el, { opacity: 1, height: "89px" }, { complete: done });
      }, delay);
    },
    leave(el, done) {
      const delay = el.dataset.index * 150;

      setTimeout(() => {
        velocity(el, { opacity: 0, height: 0 }, { complete: done });
      }, delay);
    },
  },
};
</script>
<style>
.flex-line {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
