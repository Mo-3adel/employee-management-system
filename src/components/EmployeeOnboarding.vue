<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg">
      <h2 class="text-xl font-bold mb-4">Add New Employee — Step {{ step }} of 3</h2>

      <!-- Step 1: Personal Info -->
      <div v-if="step === 1" class="space-y-4">
        <input v-model="form.name" type="text" placeholder="Full Name" class="w-full p-2 border rounded" />
        <input v-model="form.email" type="email" placeholder="Email" class="w-full p-2 border rounded" />

        <div>
          <label class="block text-sm mb-2">Upload Photo</label>
          <input type="file" @change="handlePhotoUpload" accept="image/*" class="mb-2" />
          <div v-if="form.photo" class="mt-2">
            <img :src="form.photo" alt="Preview" class="w-24 h-24 object-cover rounded-full" />
          </div>
        </div>
      </div>

      <!-- Step 2: Role & Department -->
        <div v-if="step === 2" class="space-y-4">
        <!-- Role -->
        <label class="block text-sm font-medium">Role</label>
        <select v-model="form.role" class="w-full p-2 border rounded">
            <option disabled value="">Select role</option>
            <option value="employee">Employee</option>
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
        </select>

        <!-- Department -->
        <label class="block text-sm font-medium">Department</label>
        <select v-model="form.department" class="w-full p-2 border rounded">
            <option disabled value="">Select department</option>
            <option v-for="dept in departments" :key="dept" :value="dept">{{ dept }}</option>
        </select>

        <!-- Dynamic field: only for manager -->
        <div v-if="form.role === 'manager'">
            <label class="block text-sm mt-4 font-medium">Team Size (optional)</label>
            <input v-model="form.teamSize" type="number" min="1" class="w-full p-2 border rounded" />
        </div>
        </div>
                <!-- Step 3: Permissions -->
        <div v-if="step === 3" class="space-y-4">
        <p class="text-gray-700">Drag permissions into the Granted box:</p>

        <!-- Available -->
        <div class="bg-gray-100 p-4 rounded">
            <h4 class="font-semibold mb-2">Available Permissions</h4>
            <div class="flex flex-wrap gap-2">
            <div
                v-for="perm in availablePermissions"
                :key="perm"
                class="px-3 py-1 bg-white border rounded cursor-move hover:bg-gray-50"
                draggable="true"
                @dragstart="onDragStart(perm)"
            >
                {{ perm }}
            </div>
            </div>
        </div>

        <!-- Granted -->
        <div
            class="bg-blue-50 p-4 rounded border-dashed border-2 border-blue-400 mt-4 min-h-[80px]"
            @dragover.prevent
            @drop="onDrop"
        >
            <h4 class="font-semibold mb-2">Granted Permissions</h4>
            <div class="flex flex-wrap gap-2">
            <div
                v-for="perm in form.permissions"
                :key="perm"
                class="bg-blue-600 text-white px-3 py-1 rounded"
            >
                {{ perm }}
            </div>
            </div>
        </div>
        </div>



      <!-- Navigation -->
      <div class="flex justify-between mt-6">
        <button v-if="step > 1" @click="step--" class="text-gray-600 hover:underline">← Back</button>
        <button @click="nextStep" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {{ step < 3 ? 'Next →' : 'Submit' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const departments = ['HR', 'Engineering', 'Sales', 'Support']

const availablePermissions = ref([
  'View Reports',
  'Edit Records',
  'Manage Users',
  'Access Payroll',
  'Export Data',
])


const step = ref(1)

const form = ref({
  name: '',
  email: '',
  photo: '',
  role: '',
  department: '',
  teamSize: '',
  permissions: [],
})

function handlePhotoUpload(e) {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      form.value.photo = reader.result
    }
    reader.readAsDataURL(file)
  }
}

function nextStep() {
  if (step.value < 3) {
    step.value++
  } else {
    submitForm()
  }
}

function submitForm() {
  console.log('✅ New employee submitted:', form.value)
  alert('Employee created! (simulation)')
  step.value = 1
  form.value = {
    name: '',
    email: '',
    photo: '',
    role: '',
    department: '',
    permissions: [],
  }
}

let draggedPermission = null

function onDragStart(perm) {
  draggedPermission = perm
}

function onDrop() {
  if (!form.value.permissions.includes(draggedPermission)) {
    form.value.permissions.push(draggedPermission)
  }
  draggedPermission = null
}

</script>
