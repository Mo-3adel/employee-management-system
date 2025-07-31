<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-800 text-white p-6">
      <h2 class="text-lg font-semibold mb-6">Dashboard</h2>

      <ul class="space-y-3">
        <li v-if="auth.user?.role === 'admin'">
          <router-link to="/companies" class="hover:underline">Manage Companies</router-link>
        </li>
        <li v-if="auth.user?.role === 'admin' || auth.user?.role === 'manager'">
          <router-link to="/employee-list" class="hover:underline">Employees</router-link>
        </li>
        <li v-if="auth.user?.role === 'manager'">
          <router-link to="/departments" class="hover:underline">Departments</router-link>
        </li>
        <li v-if="auth.user?.role === 'employee'">
          <router-link to="/profile" class="hover:underline">My Profile</router-link>
        </li>
        <li v-if="auth.user">
          <button @click="auth.logout" class="text-red-400 hover:underline mt-8">Logout</button>
        </li>
        <li v-if="auth.user?.role === 'employee'">
          <router-link to="/profile" class="hover:underline">My Profile</router-link>
        </li>

      </ul>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-10 bg-gray-100">
      <h1 class="text-2xl font-bold mb-4">Welcome, {{ auth.user?.name }}</h1>
      <p class="text-gray-700">
        You are logged in as <strong>{{ auth.user?.role }}</strong>.
      </p>
    </main>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const auth = useAuthStore()
const router = useRouter()

onMounted(() => {
  if (auth.user?.role === 'employee') {
    router.replace('/employee-home') 
  }
})
</script>
