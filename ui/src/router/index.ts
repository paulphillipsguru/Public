import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Services from '../pages/Services/Services.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Paul Phillips - Lead Software Engineer | Professional Skills & Expertise',
      description: 'Expert Lead Software Engineer specializing in .NET, Azure, and modern software architecture. Discover my professional skills and experience.',
      keywords: 'Paul Phillips, Lead Software Engineer, .NET, Azure, Software Architecture, TypeScript, Vue.js'
    }
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Home,
    meta: {
      title: 'Technical Skills & Expertise - Paul Phillips',
      description: 'Comprehensive overview of my technical skills including .NET 10, .NET Aspire, Azure, TypeScript, Vue.js, and modern software development practices.',
      keywords: 'software engineering skills, .NET expertise, Azure development, TypeScript, Vue.js, software architecture'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta: {
      title: 'Software Development Services - Paul Phillips',
      description: 'Modular software platform services including Customer Management, Payment Systems, Order Management, and bespoke solutions built with .NET 10 and .NET Aspire.',
      keywords: 'software development services, modular platform, customer management, payment systems, .NET development, custom software solutions'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Global navigation guard for SEO
router.beforeEach((to, from, next) => {
  // Update document title and meta tags
  if (to.meta?.title) {
    document.title = to.meta.title as string
  }
  
  // Update meta description
  if (to.meta?.description) {
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', to.meta.description as string)
  }
  
  // Update meta keywords
  if (to.meta?.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.setAttribute('name', 'keywords')
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.setAttribute('content', to.meta.keywords as string)
  }
  
  next()
})

export default router