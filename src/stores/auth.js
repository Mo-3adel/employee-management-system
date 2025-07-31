import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const user = ref(JSON.parse(localStorage.getItem('user')) || null)

  function login(email, password) {
    if (email === 'admin@site.com' && password === 'admin123') {
      user.value = { name: 'Admin', email, role: 'admin' }
    } else if (email === 'manager@site.com' && password === 'manager123') {
      user.value = { name: 'Manager', email, role: 'manager' }
    } else if (email === 'employee@site.com' && password === 'employee123') {
      user.value = { name: 'Employee', email, role: 'employee' }
    } else {
      return alert('Invalid credentials')
    }

    localStorage.setItem('user', JSON.stringify(user.value))
    router.push('/dashboard')
  }

  function signup(name, email, password, role) {
    user.value = { name, email, role }
    localStorage.setItem('user', JSON.stringify(user.value))
    router.push('/dashboard')
  }

  function logout() {
    user.value = null
    localStorage.removeItem('user')
    router.push('/login')
  }

  return {
    user,
    login,
    signup,
    logout,
  }
})
