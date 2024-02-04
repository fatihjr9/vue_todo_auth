<template>
    <div class="flex flex-col">
      <sign-up v-if="isSignUp" />
      <sign-in v-else />
      <button @click="isSignUp = !isSignUp" class="text-sm mt-2 text-slate-600">
        {{
          isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account yet? Sign Up"
        }}
      </button>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import signIn from "../views/auth/signIn.vue";
  import signUp from "../views/auth/signUp.vue";
  
  export default {
    components: { signIn, signUp },
    setup() {
      const isSignUp = ref(true);
  
      return {
        isSignUp,
      };
    },
  };
</script>