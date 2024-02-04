<template>
  <Auth v-if="!store.state.user"/>
  <Home v-else/>
</template>

<script>
import Auth from './components/Auth.vue';
import Home from './views/home.vue'

import { store } from './store'
import { supabase } from './supabase';

export default {
  components: {
    Home, Auth
  },
  setup() {
    const updateUser = (session) => {
      if (session && session.user) {
        store.state.user = session.user;
      } else {
        store.state.user = null;
      }
    };

    // Initial update
    updateUser(supabase.auth.getSession());

    // Listen to auth state changes
    supabase.auth.onAuthStateChange((event, session) => {
      if (event == "SIGNED_OUT") {
        updateUser(null);
      } else {
        updateUser(session);
      }
    });

    return {
      store,
    };
  }
};
</script>