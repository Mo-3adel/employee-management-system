<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold">Welcome, {{ auth.user?.name }}</h1>
    <p class="text-gray-600 mt-2">This is your personal dashboard.</p>
    <ul class="mt-6 space-y-2 text-blue-600">
      <li><router-link to="/profile">View / Edit Profile</router-link></li>
      <li><router-link to="/timeline">Your Timeline</router-link></li>
    </ul>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
const auth = useAuthStore()
</script>
