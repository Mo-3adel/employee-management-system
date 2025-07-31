<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-bold">Companies</h2>
      <button @click="openAddForm" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        + Add Company
      </button>
    </div>

    <!-- Search -->
    <input
      v-model="search"
      type="text"
      placeholder="Search by name or code"
      class="mb-4 p-2 border w-full max-w-md rounded"
    />

    <!-- Table -->
    <table class="w-full border text-left bg-white shadow-sm">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-3">Name</th>
          <th class="p-3">Code</th>
          <th class="p-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="company in filteredCompanies"
          :key="company.id"
          class="border-t hover:bg-gray-50"
        >
          <td class="p-3">{{ company.name }}</td>
          <td class="p-3">{{ company.code }}</td>
          <td class="p-3 text-sm">
            <button @click="editCompany(company)" class="text-blue-600 hover:underline mr-2">Edit</button>
            <button @click="deleteCompany(company.id)" class="text-red-500 hover:underline">Delete</button>
          </td>
        </tr>
        <tr v-if="filteredCompanies.length === 0">
          <td colspan="3" class="p-3 text-gray-500 text-center">No companies found.</td>
        </tr>
      </tbody>
    </table>

    <!-- Form Modal -->
    <div v-if="showForm" class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow w-full max-w-md">
        <h2 class="text-xl font-bold mb-4">{{ isEditing ? 'Edit' : 'Add' }} Company</h2>

        <form @submit.prevent="submitForm">
          <input
            v-model="formData.name"
            type="text"
            placeholder="Company Name"
            class="w-full mb-3 p-2 border rounded"
          />
          <input
            v-model="formData.code"
            type="text"
            placeholder="Company Code"
            class="w-full mb-3 p-2 border rounded"
          />

          <div class="flex justify-end space-x-2">
            <button type="button" @click="closeForm" class="text-gray-600">Cancel</button>
            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              {{ isEditing ? 'Save Changes' : 'Add Company' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const companies = ref([
  { id: 1, name: 'OpenAI Inc.', code: 'OPAI' },
  { id: 2, name: 'TechVerse', code: 'TVS' },
])

const search = ref('')
const showForm = ref(false)
const isEditing = ref(false)
const formData = ref({ name: '', code: '' })
const editingId = ref(null)

// Search Logic
const filteredCompanies = computed(() => {
  const q = search.value.toLowerCase()
  return companies.value.filter(
    c => c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q)
  )
})

// Form Handlers
function openAddForm() {
  formData.value = { name: '', code: '' }
  isEditing.value = false
  showForm.value = true
}

function editCompany(company) {
  formData.value = { ...company }
  editingId.value = company.id
  isEditing.value = true
  showForm.value = true
}

function deleteCompany(id) {
  companies.value = companies.value.filter(c => c.id !== id)
}

function submitForm() {
  if (!formData.value.name || !formData.value.code) return

  if (isEditing.value) {
    const company = companies.value.find(c => c.id === editingId.value)
    if (company) {
      company.name = formData.value.name
      company.code = formData.value.code
    }
  } else {
    companies.value.push({
      id: Date.now(),
      name: formData.value.name,
      code: formData.value.code,
    })
  }

  closeForm()
}

function closeForm() {
  showForm.value = false
  formData.value = { name: '', code: '' }
  editingId.value = null
  isEditing.value = false
}
</script>
