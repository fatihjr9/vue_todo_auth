<template>
    <user-layout>
        <div slot="header" class="px-10 lg:px-20 py-4 border-b flex flex-row items-center justify-between">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 40 40"><path fill="#F06225" d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z"></path><path fill="#F06225" d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path></svg>
            <div class="flex flex-row items-center gap-x-1 divide-x">
                <h5 class="pr-2">Halo, {{ name }}</h5>
                <button @click="signOut" class="pl-2">Keluar</button>
            </div>
        </div>
        <!-- Content -->
        <div class="px-10 lg:px-20 py-8">
            <div class="flex flex-row items-center justify-between">
                <h5 class="text-2xl font-semibold">Buat Agendamu</h5>
                <a href="" class="px-4 py-2 border border-slate-600 rounded-md">+ Tambah Agenda</a>
            </div>
            <div v-if="dataAgenda.length > 0" class="grid grid-cols-2 lg:grid-cols-4 my-4 gap-4">
                <div class="p-2 bg-white shadow-md ring-1 ring-slate-100 rounded-md flex flex-col space-y-4" v-for="item in dataAgenda" :key="item.id">
                    <div class="flex flex-col space-y-1">
                        <h5 class="text-xl font-bold">{{ item.name }}</h5>
                        <p class="text-gray-600 font-normal text-sm">{{ item.description }}</p>
                    </div>
                    <a href="" class="w-full bg-indigo-700 text-white py-2 text-center rounded-md">Lihat Detail</a>
                </div>
            </div>
        </div>
    </user-layout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../supabase";
import UserLayout from "../components/UserLayout.vue";

// Defining
const name = ref("");
const dataAgenda = ref([]); // Define dataAgenda as a ref
// Fetch Data
const getAgenda = async () => {
    const { data } = await supabase.from('agenda').select('*');
    dataAgenda.value = data;
};
// Logout
async function signOut() {
  const { error } = await supabase.auth.signOut();
}
// Render
onMounted(async () => {
  try {
    const { data, error } = await supabase.auth.getUser();
    const userName = data.user?.user_metadata?.display_name;
    if (userName) {
      name.value = userName;
    }
    // Fetch Agenda
    getAgenda();
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
});
</script>