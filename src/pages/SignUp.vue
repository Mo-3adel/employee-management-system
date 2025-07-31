<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
    <div class="bg-white p-8 rounded shadow-lg w-full max-w-md text-gray-900">
      <h2 class="text-2xl font-bold mb-6 text-center">Sign Up</h2>

      <form @submit.prevent="handleSignup" class="space-y-4">
        <input type="text" placeholder="Full Name" v-model="name" class="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" v-model="email" class="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" v-model="password" class="w-full p-2 border rounded" />
        <select v-model="role" class="w-full p-2 border rounded">
            <option disabled value="">Select Role</option>
            <option value="employee">Employee</option>
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
        </select>

        <button class="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition">
          Create Account
        </button>
      </form>

      <p class="text-sm mt-4 text-center">
        Already have an account?
        <router-link to="/login" class="text-blue-600 hover:underline">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const name = ref('')
const email = ref('')
const password = ref('')
const role = ref('')

function handleSignup() {
  if (!name.value || !email.value || !password.value || !role.value) {
    alert('Please fill all fields and choose a role')
    return
  }

  auth.signup(name.value, email.value, password.value, role.value)
}


</script>
