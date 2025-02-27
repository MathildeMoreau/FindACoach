import AddNewCoach from '@/components/Coaches/AddNewCoach.vue'
import CoachesList from '@/components/Coaches/CoachesList.vue'
import CoachProfile from '@/components/Coaches/CoachProfile.vue'
import ContactCoach from '@/components/Requests/ContactCoach.vue'
import RequestsList from '@/components/Requests/RequestsList.vue'
import NotFound from '@/components/UI/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/coaches',
    component: CoachesList,
  },
  {
    path: '/requests',
    component: RequestsList
  },
  {
    path: '/coaches/:id',
    component: CoachProfile,
    name: 'coach-profile',
    props: true
  },
  {
    path: '/register',
    component: AddNewCoach
  },
  {
    path: '/contact',
    component: ContactCoach
  },
  {
    path: '/',
    redirect: '/coaches'
  },
  {
    path: '/:notfound(.*)',
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
