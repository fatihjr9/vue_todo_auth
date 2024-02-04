<template>
    <div>
        <auth-layout>
            <!-- Header -->
            <div slot="header" class="flex flex-row items-center gap-x-2 mt-10 justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 40 40"><path fill="#F06225" d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z"></path><path fill="#F06225" d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path></svg>
                <h5 class="text-xl text-center font-medium ">TodoList.</h5>
            </div>
            <!-- Content -->
            <form @submit.prevent="handleSignUp" class="max-w-sm mx-auto mt-6 ring-1 bg-white shadow-sm ring-gray-100 rounded-lg">
                <h5 class="text-xl text-center font-medium py-2 border-b">Register</h5>
                <div class="p-4">
                    <div class="mb-4">
                      <label for="displayName" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
                      <input type="text" id="displayName" v-model="displayName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John Doe" required>
                    </div>
                    <div class="mb-4">
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                      <input type="email" id="email" v-model="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required>
                    </div>
                    <div class="mb-4">
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                      <input type="password" id="password" v-model="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full py-2.5 text-center">Continue</button>
                </div>
            </form>
            <!-- Footer -->
        </auth-layout>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import { supabase } from "../../supabase"
    import AuthLayout from "../../components/AuthLayout.vue";
    
    const email = ref("");
    const password = ref("");
    const displayName = ref("");
    
    const handleSignUp = async() => {
        try {
            const { error } = await supabase.auth.signUp({
                email: email.value,
                password: password.value,
                options: {
                  data: {
                    display_name: displayName.value,
                  }
                }
            });
            if(error) throw error
        } catch(error) {
            alert(error.error_description || error.message)
        };
        return {email, password, handleSignUp}
    }

</script>