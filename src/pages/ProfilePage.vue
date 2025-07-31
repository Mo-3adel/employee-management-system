<template>
  <div class="max-w-xl mx-auto p-6 mt-10 bg-white rounded-lg shadow">
    <h2 class="text-2xl font-bold mb-4">My Profile</h2>

    <!-- Avatar Upload -->
    <div class="flex items-center mb-4 space-x-4">
      <img
        :src="form.photo || defaultPhoto"
        alt="Avatar"
        class="w-20 h-20 rounded-full object-cover border"
      />
      <div>
        <label class="cursor-pointer text-blue-600 underline">
          Change Photo
          <input type="file" accept="image/*" class="hidden" @change="onPhotoUpload" />
        </label>
      </div>
    </div>

    <form @submit.prevent="saveChanges" class="space-y-4">
      <input
        v-model="form.name"
        type="text"
        placeholder="Name"
        class="w-full p-2 border rounded"
      />

      <input
        v-model="form.password"
        type="password"
        placeholder="New Password"
        class="w-full p-2 border rounded"
      />

      <div class="flex justify-end">
        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const defaultPhoto = 'https://via.placeholder.com/100'

const form = ref({
  name: auth.user?.name || '',
  password: '',
  photo: auth.user?.photo || '',
})

function saveChanges() {
  auth.user.name = form.value.name
  auth.user.photo = form.value.photo

  if (form.value.password) {
    // Simulate password change (no real backend)
    console.log('Password changed to:', form.value.password)
  }

  localStorage.setItem('user', JSON.stringify(auth.user))
  alert('Profile updated!')
}

function onPhotoUpload(e) {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      form.value.photo = reader.result
    }
    reader.readAsDataURL(file)
  }
}
</script>
