<template>
  <div class="min-h-screen bg-dark-900 text-white relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
    <div class="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-accent-900/20"></div>
    
    <!-- Navigation -->
    <nav class="nav-glass fixed w-full top-0 z-50">
      <div class="container-max">
        <div class="flex justify-between items-center py-6 px-6">
          <div class="text-3xl font-bold text-gradient">
            Paul Phillips
          </div>
          <div class="hidden md:flex space-x-8">
            <router-link 
              to="/" 
              class="nav-link"
              :class="{ 'text-primary-400 font-semibold': $route.path === '/' }"
            >
              Skills
            </router-link>
            <router-link 
              to="/services" 
              class="nav-link"
              :class="{ 'text-primary-400 font-semibold': $route.path === '/services' }"
            >
              Services
            </router-link>
          </div>
          <div class="md:hidden">
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile Menu -->
        <div v-show="mobileMenuOpen" class="md:hidden py-4 px-6 border-t border-white/10">
          <router-link to="/" class="block py-2 text-white hover:text-primary-400">Skills</router-link>
          <router-link to="/services" class="block py-2 text-white hover:text-primary-400">Services</router-link>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="section-padding pt-32 pb-20 relative">
      <div class="container-max text-center">
        <div class="animate-fade-in">
          <!-- Floating Code Elements -->
          <div class="hidden lg:block absolute top-30 left-10 floating-element opacity-30">
            <div class="code-block">
              <span class="text-accent-400">const</span> <span class="text-primary-400">developer</span> = <span class="text-success-400">"Paul Phillips"</span>;
            </div>
          </div>
          <div class="hidden lg:block absolute top-40 right-10 floating-element opacity-30" style="animation-delay: 2s;">
            <div class="code-block">
              <span class="text-accent-400">await</span> <span class="text-primary-400">buildAmazingSoftware</span>();
            </div>
          </div>

          <h1 class="text-6xl lg:text-8xl font-bold mb-12 hero-text text-shadow-lg leading-tight">
            Lead Software Engineer
          </h1>
          <div class="mb-8">
            <p class="text-2xl lg:text-3xl mb-4 text-primary-200">
              Expert in <span class="text-gradient">.NET</span>, <span class="text-gradient">Azure</span>, and <span class="text-gradient">Modern Architecture</span>
            </p>
            <div class="flex justify-center items-center space-x-4 text-lg text-primary-300">
              <span class="px-4 py-2 bg-primary-500/20 rounded-full border border-primary-400/30">.NET 10</span>
              <span class="px-4 py-2 bg-accent-500/20 rounded-full border border-accent-400/30">.NET Aspire</span>
              <span class="px-4 py-2 bg-success-500/20 rounded-full border border-success-400/30">Azure Cloud</span>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <button @click="scrollToSkills" class="btn-secondary glow-effect">
              <i class="fas fa-code mr-2"></i>
              View My Skills
            </button>
            <router-link to="/services" class="btn-primary">
              <i class="fas fa-rocket mr-2"></i>
              Explore Services
            </router-link>
          </div>
        </div>
      </div>
    </section>

     <!-- Major Project Achievements -->
        <div class="mb-20">
          <h3 class="text-4xl font-bold text-center mb-16 text-white">Major Project Achievements</h3>
          <div class="grid lg:grid-cols-2 gap-12">
            <div v-for="(project, index) in majorProjects" :key="project.title" 
                 class="glass-card p-10 animate-slide-up group relative overflow-hidden"
                 :style="{ animationDelay: `${index * 0.2}s` }">
              
              <!-- Project Icon Background -->
              <div class="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <i :class="project.icon" class="text-8xl text-primary-400"></i>
              </div>
              
              <div class="relative z-10">
                <div class="flex items-center mb-6">
                  <div class="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-sm border border-primary-400/30 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <i :class="project.icon" class="text-3xl text-primary-400 group-hover:text-white transition-colors duration-300"></i>
                  </div>
                  <div>
                    <h4 class="text-2xl font-bold text-white mb-2">{{ project.title }}</h4>
                    <span class="px-3 py-1 bg-gradient-to-r from-primary-500/30 to-accent-500/30 rounded-full text-sm text-primary-200 border border-primary-400/30">
                      {{ project.category }}
                    </span>
                  </div>
                </div>
                
                <p class="text-primary-200 mb-6 leading-relaxed">{{ project.description }}</p>
                
                <div class="mb-6">
                  <h5 class="text-lg font-semibold text-white mb-4 flex items-center">
                    <i class="fas fa-star text-accent-400 mr-2"></i>
                    Key Accomplishments:
                  </h5>
                  <ul class="space-y-3">
                    <li v-for="accomplishment in project.accomplishments" :key="accomplishment" class="flex items-start">
                      <i class="fas fa-award text-success-400 mt-1 mr-3 flex-shrink-0"></i>
                      <span class="text-primary-100">{{ accomplishment }}</span>
                    </li>
                  </ul>
                </div>
                
                <div class="border-t border-white/10 pt-6">
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span v-for="tech in project.technologies" :key="tech" class="skill-tag text-xs">
                      {{ tech }}
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center text-primary-300">
                      <i class="fas fa-calendar-alt mr-2"></i>
                      <span class="text-sm">{{ project.timeline }}</span>
                    </div>
                    <div class="flex items-center text-primary-300">
                      <i class="fas fa-users mr-2"></i>
                      <span class="text-sm">{{ project.teamSize }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    <!-- Skills Overview -->
    <section ref="skillsSection" class="section-padding relative">
      <div class="container-max">
        <div class="text-center mb-20 animate-slide-up">
          <h2 class="text-5xl lg:text-6xl font-bold mb-8 text-gradient">
            Professional Skills & Expertise
          </h2>
          <p class="text-xl text-primary-200 max-w-4xl mx-auto leading-relaxed">
            With extensive experience as a Lead Software Engineer, I specialize in building scalable, 
            enterprise-grade solutions using cutting-edge technologies and modern architectural patterns.
          </p>
        </div>

        <!-- Core Technologies -->
        <div class="mb-20">
          <h3 class="text-4xl font-bold text-center mb-16 text-white">Core Technologies</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(tech, index) in coreTechnologies" :key="tech.name" 
                 class="tech-card animate-slide-up group"
                 :style="{ animationDelay: `${index * 0.1}s` }">
              <div class="flex items-center mb-6">
                <div class="feature-icon mr-6">
                  <i :class="tech.icon" class="text-primary-400 group-hover:text-white transition-colors duration-300"></i>
                </div>
                <h4 class="text-2xl font-semibold text-white">{{ tech.name }}</h4>
              </div>
              <p class="text-primary-200 mb-6 leading-relaxed">{{ tech.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="skill in tech.skills" :key="skill" class="skill-tag">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience Highlights -->
        <div class="mb-20">
          <h3 class="text-4xl font-bold text-center mb-16 text-white">Experience Highlights</h3>
          <div class="grid lg:grid-cols-2 gap-8">
            <div v-for="(highlight, index) in experienceHighlights" :key="highlight.title" 
                 class="glass-card p-8 animate-slide-in-left"
                 :style="{ animationDelay: `${index * 0.2}s` }">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-trophy text-white text-xl"></i>
                </div>
                <h4 class="text-2xl font-semibold text-white">{{ highlight.title }}</h4>
              </div>
              <p class="text-primary-200 mb-6">{{ highlight.description }}</p>
              <ul class="space-y-3">
                <li v-for="achievement in highlight.achievements" :key="achievement" class="flex items-start">
                  <i class="fas fa-check-circle text-success-400 mt-1 mr-3"></i>
                  <span class="text-primary-100">{{ achievement }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

       

        <!-- Technical Skills Grid -->
        <div class="mb-20">
          <h3 class="text-4xl font-bold text-center mb-16 text-white">Technical Proficiencies</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="(category, index) in skillCategories" :key="category.name" 
                 class="glass-card p-8 animate-bounce-in"
                 :style="{ animationDelay: `${index * 0.1}s` }">
              <h4 class="text-xl font-semibold text-white mb-6 text-center">{{ category.name }}</h4>
              <div class="space-y-4">
                <div v-for="skill in category.skills" :key="skill.name" class="space-y-2">
                  <div class="flex justify-between items-center">
                    <span class="text-primary-200 font-medium">{{ skill.name }}</span>
                    <span class="text-primary-400 text-sm">{{ skill.level * 20 }}%</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-fill" :style="{ width: `${skill.level * 20}%` }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center relative">
          <div class="glass-card p-12 glow-effect">
            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                <i class="fas fa-handshake text-white text-xl"></i>
              </div>
            </div>
            <h3 class="text-4xl font-bold mb-6 text-white">Ready to Work Together?</h3>
            <p class="text-xl mb-8 text-primary-200 max-w-3xl mx-auto">
              Let's discuss how my expertise can help transform your business with modern, scalable software solutions 
              built with the latest technologies and best practices.
            </p>
            <router-link to="/services" class="btn-primary">
              <i class="fas fa-arrow-right mr-2"></i>
              Explore My Services
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
const skillsSection = ref<HTMLElement>()

const scrollToSkills = () => {
  skillsSection.value?.scrollIntoView({ behavior: 'smooth' })
}

const coreTechnologies = [
  {
    name: '.NET & .NET Aspire',
    icon: 'fas fa-code',
    description: 'Expert in .NET 10, .NET Aspire, C#, and building scalable enterprise applications with modern cloud-native architectures.',
    skills: ['.NET 10', '.NET Aspire', 'C#', 'ASP.NET Core', 'Entity Framework', 'SignalR']
  },
  {
    name: 'Cloud & Azure',
    icon: 'fas fa-cloud',
    description: 'Comprehensive Azure expertise including containerization, microservices, and cloud-native application development.',
    skills: ['Azure', 'Docker', 'Kubernetes', 'Azure Functions', 'Service Bus', 'Cosmos DB']
  },
  {
    name: 'Frontend & Modern Web',
    icon: 'fas fa-desktop',
    description: 'Full-stack capabilities with modern frontend frameworks and responsive design principles.',
    skills: ['TypeScript', 'Vue.js', 'React', 'TailwindCSS', 'Vite', 'Progressive Web Apps']
  },
  {
    name: 'Architecture & Testing',
    icon: 'fas fa-cogs',
    description: 'Software architecture design, test-driven development, and quality assurance practices.',
    skills: ['Microservices', 'Domain-Driven Design', 'XUNIT', 'Integration Testing', 'CI/CD', 'DevOps']
  },
  {
    name: 'Database & Storage',
    icon: 'fas fa-database',
    description: 'Database design, optimization, and management across multiple database technologies.',
    skills: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'Entity Framework', 'Database Design']
  },
  {
    name: 'Security & Compliance',
    icon: 'fas fa-shield-alt',
    description: 'Enterprise-grade security implementation and compliance with industry standards.',
    skills: ['OAuth 2.0', 'JWT', 'Azure AD', 'GDPR', 'Security Best Practices', 'Encryption']
  }
]

const experienceHighlights = [
  {
    title: 'Enterprise Software Leadership',
    description: 'Led development teams in creating large-scale enterprise applications serving thousands of users.',
    achievements: [
      'Architected modular monolith systems for improved scalability',
      'Implemented microservices architectures with .NET and Azure',
      
      'Mentored junior developers and established coding standards'
    ]
  },
  {
    title: 'Cloud-Native Solutions',
    description: 'Specialized in designing and implementing cloud-first applications with modern DevOps practices.',
    achievements: [
      'Migrated legacy systems to Azure cloud infrastructure',
      'Implemented containerized deployments with Docker and Kubernetes',
      'Established CI/CD pipelines reducing deployment errors by 85%',
      'Optimized cloud costs while improving performance by 40%'
    ]
  },
  {
    title: 'Full-Stack Development',
    description: 'Delivered end-to-end solutions combining robust backend services with intuitive user interfaces.',
    achievements: [
      'Built responsive web applications with Vue.js and TypeScript',
      'Integrated real-time features using SignalR and WebSockets',
      'Implemented progressive web app capabilities',
      'Achieved 98+ Lighthouse performance scores'
    ]
  },
  {
    title: 'Quality & Testing Excellence',
    description: 'Championed quality-first development with comprehensive testing strategies and automation.',
    achievements: [
      'Established unit testing practices with XUNIT achieving 90%+ coverage',
      'Implemented automated integration testing pipelines',
      'Reduced production bugs by 75% through rigorous testing',
      'Created testing frameworks adopted across multiple teams'
    ]
  }
]

const majorProjects = [
  {
    title: 'Document Authoring and Generation Platform',
    category: 'Enterprise Software',
    icon: 'fas fa-file-alt',
    description: 'Streamlined document generation across two platforms by removing hard-coded embedded documents, reducing engineering dependency and enabling faster business agility. Designed and delivered a self-service solution that empowered teams to manage and release new documents independently, delivery changes to production in minutes instead of weeks',
    accomplishments: [
      'Worked closely with stakeholders to determine requirements and problem areas',
      'Designed prototype solutions and presented to business units for feedback',
      'Got buy-in from leadership and secured funding for development',
      'Lead workshops on User Experience best practices',
      'Personally designed, architected and led the implementation from start to finish',
      'Managed Quality Assurance and User Acceptance Testing phases to ensure high-quality deliverables'
    ],
    technologies: ['.NET Core', 'K8', 'DevExpress XAF', 'SQL Server', 'Docker', 'VueJS 3'],
    timeline: '18 months',
    teamSize: '1 developer'
  },
  {
    title: 'Cinema Fire Control System',
    category: 'Enterprise Safety',
    icon: 'fas fa-shield-alt',
    description: 'Developed mission-critical fire detection and control system for Hoyts, ensuring patron safety through real-time monitoring and automated emergency response protocols.',
    accomplishments: [
      'Designed and developed an innovative Fire Control platform',
      'Automated the entire evacuation process, eliminating the need for staff intervention.',
      'Enabled direct communication with each cinema screen to manage emergency responses in real time.',
      'System automatically paused the movie, activated lights, displayed an evacuation message, and broadcast a pre-recorded announcement.',
      'Integrated the platform with the POS terminal, allowing seamless control and monitoring from a single interface.'
    ],
    technologies: ['.NET Framework', 'Cinema Projection System', 'WPF', 'Industrial Controllers','POS'],
    timeline: '12 months',
    teamSize: '1 developer'
  },
  {
    title: 'Cinema Automated Ticket Management Platform ',
    category: 'Business Systems',
    icon: 'fas fa-chart-line',
    description: 'Built a .NET-based platform to streamline workforce management and cinema support. Enabled technicians to register availability and expertise, while cinemas tracked issues in real time. Automated task assignment matched the nearest qualified technician, with SMS and IVR-based acceptance ensuring fast, efficient resolution.',
    accomplishments: [
      'Developed a .NET-based platform to streamline workforce management and technical support across cinemas.',
      'Enabled technicians to register availability, location, and expertise, improving visibility and coordination.',
      'Allowed cinemas to report and track equipment issues in real time for faster response.',
      'Integrated SMS and IVR systems for job acceptance and automated reassignment of declined tasks.',
      'Enhanced operational efficiency, ensuring rapid and reliable issue resolution.'
    ],
    technologies: ['.NET Core', 'Sql Server',  'Vue.js', 'Azure DevOps', 'Dapper ORM'],
    timeline: '6 months',
    teamSize: '1 developers'
  },
  {
    title: 'Logistics Platform',
    category: 'Enterprise Software',
    icon: 'fas fa-chart-bar',
    description: 'Led a global supply chain transformation, reducing costs and streamlining product movement through a data-driven .NET and VueJS platform.Directed a cross-functional team to deliver a scalable microservices architecture integrated with Azure AD for secure operations.',
    accomplishments: [
      'Analyzed manual operations and designed a data-driven Supply Chain System to optimize transport routes and modes.',
      'Built and led a cross-functional team of UX designers and developers, ensuring seamless system integration.',
      'Implemented a microservices architecture using .NET, VueJS, and Azure Active Directory for secure, scalable performance.',
      'Delivered intelligent features including dynamic product profiling, optimized routing, and automated transport mode selection.',

    ],
    technologies: ['.NET', 'SQL Server', 'VueJS 2', 'Kubernetes', 'Docker', 'Microservices'],
    timeline: '15 months',
    teamSize: '4 developers, BA/Project Manager, UX Designer'
  }
]

const skillCategories = [
  {
    name: 'Backend Development',
    skills: [
      { name: '.NET/C#', level: 4 },
      { name: 'ASP.NET Core', level: 4 },
      { name: 'Entity Framework', level: 3 },
      { name: 'Web APIs', level: 5 },
      { name: 'Microservices', level: 4 }
    ]
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'Azure', level: 2 },
      { name: 'AWS', level: 3 },
      { name: 'Docker', level: 4 },
      { name: 'Kubernetes', level: 3 },
      { name: 'CI/CD', level: 4 }
      
    ]
  },
  {
    name: 'Frontend Development',
    skills: [
      { name: 'TypeScript', level: 5 },
      { name: 'Vue.js', level: 4 },
      { name: 'React', level: 3 },
      { name: 'HTML/CSS', level: 4 },
      { name: 'TailwindCSS', level: 3 }
      
    ]
  },
  {
    name: 'Database & Tools',
    skills: [
      { name: 'SQL Server', level: 5 },      
      { name: 'MongoDB', level: 3 },
      { name: 'Redis', level: 2.5 },
      { name: 'Git', level: 4 }
    ]
  }
]
</script>

<style scoped>
.nav-link {
  @apply text-primary-200 hover:text-primary-400 transition-all duration-300 font-medium relative;
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 transition-all duration-300;
}

.nav-link:hover::after {
  @apply w-full;
}

/* Custom animation delays */
.animate-slide-up:nth-child(1) { animation-delay: 0s; }
.animate-slide-up:nth-child(2) { animation-delay: 0.1s; }
.animate-slide-up:nth-child(3) { animation-delay: 0.2s; }

.animate-slide-in-left:nth-child(1) { animation-delay: 0s; }
.animate-slide-in-left:nth-child(2) { animation-delay: 0.2s; }

.animate-bounce-in:nth-child(1) { animation-delay: 0s; }
.animate-bounce-in:nth-child(2) { animation-delay: 0.1s; }
.animate-bounce-in:nth-child(3) { animation-delay: 0.2s; }
.animate-bounce-in:nth-child(4) { animation-delay: 0.3s; }
</style>