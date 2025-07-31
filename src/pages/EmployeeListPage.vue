<template>
<!-- Filters -->
<div class="flex flex-wrap gap-4 mb-4">
  <input v-model="filters.search" placeholder="Search..." class="p-2 border rounded" />

  <select v-model="filters.role" class="p-2 border rounded">
    <option value="">All Roles</option>
    <option value="employee">Employee</option>
    <option value="manager">Manager</option>
    <option value="admin">Admin</option>
  </select>

  <select v-model="filters.department" class="p-2 border rounded">
    <option value="">All Departments</option>
    <option v-for="dept in departments" :key="dept">{{ dept }}</option>
  </select>
</div>


  <div class="p-6">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-bold">Employees</h2>
      <button @click="showWizard = true" class="bg-blue-600 text-white px-4 py-2 rounded">+ Add Employee</button>
    </div>
    <EmployeeOnboarding v-if="showWizard" @close="showWizard = false" />


    <RecycleScroller
      :items="filteredEmployees"
      :item-size="72"
      key-field="id"
      class="border rounded shadow divide-y divide-gray-100"
    >
    <template #default="{ item }">
  <div class="p-4 grid grid-cols-5 gap-4 items-center">
    <input v-model="item.name" class="p-2 border rounded" />
    <input v-model="item.email" class="p-2 border rounded" />
    <select v-model="item.role" class="p-2 border rounded">
      <option value="employee">Employee</option>
      <option value="manager">Manager</option>
      <option value="admin">Admin</option>
    </select>
    <select v-model="item.department" class="p-2 border rounded">
      <option v-for="dept in departments" :key="dept">{{ dept }}</option>
    </select>
    <button @click="deleteEmployee(item.id)" class="text-red-500 hover:underline">Delete</button>
  </div>
</template>

    </RecycleScroller>
  </div>
</template>

<script setup>
import { RecycleScroller } from 'vue3-virtual-scroller'
import { ref } from 'vue'
import EmployeeOnboarding from '@/components/EmployeeOnboarding.vue'

const employees = ref([])

const showWizard = ref(false)

// Simulate 1000 employees
for (let i = 1; i <= 1000; i++) {
  employees.value.push({
    id: i,
    name: `Employee ${i}`,
    email: `employee${i}@example.com`,
    role: i % 3 === 0 ? 'manager' : 'employee',
    department: i % 5 === 0 ? 'HR' : 'Engineering',
  })
}

const filters = ref({
  search: '',
  role: '',
  department: '',
})

const departments = ['HR', 'Engineering', 'Sales', 'Support']

const filteredEmployees = computed(() => {
  return employees.value.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(filters.value.search.toLowerCase())
      || emp.email.toLowerCase().includes(filters.value.search.toLowerCase())

    const matchesRole = filters.value.role ? emp.role === filters.value.role : true
    const matchesDept = filters.value.department ? emp.department === filters.value.department : true

    return matchesSearch && matchesRole && matchesDept
  })
})

function deleteEmployee(id) {
  employees.value = employees.value.filter(e => e.id !== id)
  saveEmployees()
}
function saveEmployees() {
  localStorage.setItem('employees', JSON.stringify(employees.value))
}

import { onMounted, watch, computed } from 'vue'

watch(employees, saveEmployees, { deep: true })

onMounted(() => {
  const saved = localStorage.getItem('employees')
  if (saved) {
    employees.value = JSON.parse(saved)
  } else {
    for (let i = 1; i <= 1000; i++) {
      employees.value.push({
        id: i,
        name: `Employee ${i}`,
        email: `employee${i}@example.com`,
        role: i % 3 === 0 ? 'manager' : 'employee',
        department: i % 5 === 0 ? 'HR' : 'Engineering',
      })
    }
    saveEmployees()
  }
})

</script>
