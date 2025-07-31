import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/pages/LoginPage.vue'
import SignUpPage from '@/pages/SignUp.vue'
import Dashboard from '@/pages/Dashboard.vue'
import Welcome from '@/pages/Welcome.vue'
import CompanyListPage from '@/pages/CompanyListPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'
import EmployeeDashboard from '@/pages/EmployeeDashboard.vue'
import EmployeeListPage from '@/pages/EmployeeListPage.vue'


import { useAuthStore } from '@/stores/auth'

const routes = [
  { path: '/login', component: LoginPage },
  { path: '/signup', component: SignUpPage },
  { path: '/', component: Welcome },
  {path: '/dashboard', component: Dashboard },
  { path: '/companies', component: CompanyListPage },
  { path: '/profile', component: ProfilePage },
  {path: '/employee-dashboard', component: EmployeeDashboard },
  {path: '/employee-list', component: EmployeeListPage },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})



router.beforeEach((to, from, next) => {

  const publicPages = ['/', '/login', '/signup']
  const authRequired = !publicPages.includes(to.path)

  const auth = useAuthStore()

  if (authRequired && !auth.user) {
    return next('/login')
  }
  
  if (to.path === '/dashboard' && auth.user?.role === 'employee') {
  return next('/employee-home')
  }

  next() 
})

export default router
