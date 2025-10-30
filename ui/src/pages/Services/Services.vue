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
          <div class="hidden lg:block absolute top-20 left-10 floating-element opacity-30">
            <div class="code-block">
              <span class="text-accent-400">class</span> <span class="text-primary-400">ModularPlatform</span> { }
            </div>
          </div>
          <div class="hidden lg:block absolute top-40 right-10 floating-element opacity-30" style="animation-delay: 2s;">
            <div class="code-block">
              <span class="text-success-400">// Stop reinventing the wheel</span>
            </div>
          </div>

          <h1 class="text-6xl lg:text-8xl font-bold mb-8 hero-text text-shadow-lg">
            Modular Software Platform
          </h1>
          <p class="text-2xl lg:text-3xl mb-8 text-primary-200 max-w-5xl mx-auto leading-relaxed">
            Stop reinventing the wheel. Get a proven, modular platform built with 
            <span class="text-gradient">.NET 10</span>, <span class="text-gradient">.NET Aspire</span>, 
            and <span class="text-gradient">modern architecture</span> that scales independently.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <button @click="scrollToModules" class="btn-secondary glow-effect">
              <i class="fas fa-cubes mr-2"></i>
              Explore Modules
            </button>
            <button @click="scrollToSolutions" class="btn-primary">
              <i class="fas fa-cog mr-2"></i>
              View Solutions
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Overview -->
    <section class="section-padding">
      <div class="container-max">
        <div class="text-center mb-20 animate-slide-up">
          <h2 class="text-5xl lg:text-6xl font-bold mb-8 text-gradient">
            Why Choose Our Modular Platform?
          </h2>
          <p class="text-xl text-primary-200 max-w-5xl mx-auto mb-12 leading-relaxed">
            Built on modular monolith principles, our platform allows modules to scale independently 
            without major rework. Each module is secure, tested with XUNIT, and comes with its own micro-site.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 mb-16">
          <div v-for="(benefit, index) in platformBenefits" :key="benefit.title" 
               class="tech-card text-center animate-slide-up"
               :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="feature-icon mx-auto mb-6">
              <i :class="benefit.icon" class="text-primary-400"></i>
            </div>
            <h3 class="text-2xl font-semibold text-white mb-4">{{ benefit.title }}</h3>
            <p class="text-primary-200">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Available Modules -->
    <section ref="modulesSection" class="section-padding relative">
      <div class="container-max">
        <div class="text-center mb-20">
          <h2 class="text-5xl lg:text-6xl font-bold mb-8 text-gradient">
            Available Modules
          </h2>
          <p class="text-xl text-primary-200 max-w-4xl mx-auto leading-relaxed">
            Choose the modules that fit your business needs. Each module is independently scalable 
            and built with .NET 10, .NET Aspire, and comprehensive testing.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(module, index) in availableModules" :key="module.name"
               class="module-card animate-bounce-in group"
               :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="flex items-center mb-6">
              <div class="feature-icon mr-4">
                <i :class="module.icon" class="text-primary-400 group-hover:text-white transition-colors duration-300"></i>
              </div>
              <h3 class="text-2xl font-semibold text-white">{{ module.name }}</h3>
            </div>
            <p class="text-primary-200 mb-6 leading-relaxed">{{ module.description }}</p>
            
            <div class="mb-6">
              <h4 class="font-semibold text-white mb-4 flex items-center">
                <i class="fas fa-star text-accent-400 mr-2"></i>
                Key Features:
              </h4>
              <ul class="space-y-2">
                <li v-for="feature in module.features" :key="feature" class="flex items-start">
                  <i class="fas fa-check text-success-400 mt-1 mr-3"></i>
                  <span class="text-primary-200">{{ feature }}</span>
                </li>
              </ul>
            </div>

            <div class="border-t border-white/10 pt-4">
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in module.technologies" :key="tech" class="skill-tag">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution Options -->
    <section ref="solutionsSection" class="section-padding">
      <div class="container-max">
        <div class="text-center mb-20">
          <h2 class="text-5xl lg:text-6xl font-bold mb-8 text-gradient">
            Solution Options
          </h2>
          <p class="text-xl text-primary-200 max-w-4xl mx-auto leading-relaxed">
            Flexible deployment and licensing options to match your business requirements and budget.
          </p>
        </div>

        <div class="space-y-12">
          <div v-for="(step, index) in solutionSteps" :key="step.title" 
               class="flex items-start animate-slide-in-left"
               :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-2xl flex items-center justify-center font-bold text-xl mr-8 glow-effect">
              {{ index + 1 }}
            </div>
            <div class="flex-grow glass-card p-8">
              <h3 class="text-3xl font-semibold text-white mb-4">{{ step.title }}</h3>
              <p class="text-primary-200 text-lg mb-6 leading-relaxed">{{ step.description }}</p>
              <div v-if="step.options" class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="option in step.options" :key="option" 
                     class="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                  <span class="font-medium text-white">{{ option }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Plans -->
    <section class="section-padding">
      <div class="container-max">
        <div class="text-center mb-20">
          <h2 class="text-5xl lg:text-6xl font-bold mb-8 text-gradient">
            Pricing Plans
          </h2>
          <p class="text-xl text-primary-200 max-w-4xl mx-auto leading-relaxed">
            Choose between usage-based cloud hosting or self-hosted deployment with flexible licensing.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div v-for="(plan, index) in pricingPlans" :key="plan.name" 
               class="pricing-card animate-slide-up"
               :style="{ animationDelay: `${index * 0.2}s` }"
               :class="{ 'featured': plan.featured }">
            <div class="text-center mb-8">
              <div v-if="plan.featured" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span class="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 class="text-3xl font-bold text-white mb-4">{{ plan.name }}</h3>
              <div class="text-5xl font-bold text-gradient mb-2">{{ plan.price }}</div>
              <p class="text-primary-200">{{ plan.billing }}</p>
            </div>
            
            <ul class="space-y-4 mb-8">
              <li v-for="feature in plan.features" :key="feature" class="flex items-start">
                <i class="fas fa-check-circle text-success-400 mt-1 mr-3"></i>
                <span class="text-primary-100">{{ feature }}</span>
              </li>
            </ul>

            <button :class="plan.featured ? 'btn-primary w-full' : 'btn-secondary w-full'">
              {{ plan.cta }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Model -->
    <section class="section-padding">
      <div class="container-max">
        <div class="glass-card p-16 text-center glow-effect relative overflow-hidden">
          <!-- Background decorative elements -->
          <div class="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-xl"></div>
          <div class="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-full blur-xl"></div>
          
          <h2 class="text-4xl lg:text-5xl font-bold mb-8 text-gradient">
            Comprehensive Support Model
          </h2>
          <p class="text-xl mb-12 text-primary-200 max-w-4xl mx-auto leading-relaxed">
            From initial consultation to ongoing maintenance, we provide full-spectrum support 
            to ensure your success with our modular platform.
          </p>
          
          <div class="grid md:grid-cols-3 gap-12 mt-16">
            <div v-for="(support, index) in supportOptions" :key="support.title" 
                 class="text-center animate-bounce-in"
                 :style="{ animationDelay: `${index * 0.2}s` }">
              <div class="feature-icon mx-auto mb-6">
                <i :class="support.icon" class="text-primary-400"></i>
              </div>
              <h3 class="text-2xl font-semibold mb-4 text-white">{{ support.title }}</h3>
              <p class="text-primary-200 leading-relaxed">{{ support.description }}</p>
            </div>
          </div>

          <div class="mt-16">
            <button class="btn-primary text-lg px-10 py-4">
              <i class="fas fa-rocket mr-2"></i>
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
const modulesSection = ref<HTMLElement>()
const solutionsSection = ref<HTMLElement>()

const scrollToModules = () => {
  modulesSection.value?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToSolutions = () => {
  solutionsSection.value?.scrollIntoView({ behavior: 'smooth' })
}

const platformBenefits = [
  {
    title: 'Modular Architecture',
    icon: 'fas fa-cubes',
    description: 'Built on modular monolith principles allowing independent scaling and easy maintenance without major rework.'
  },
  {
    title: 'Enterprise-Grade Security',
    icon: 'fas fa-shield-alt',
    description: 'Every module is secured with industry best practices, OAuth 2.0, and comprehensive security testing.'
  },
  {
    title: 'Comprehensive Testing',
    icon: 'fas fa-check-circle',
    description: 'All modules come with XUNIT testing, achieving 90%+ code coverage and rigorous quality assurance.'
  },
  {
    title: 'Modern Technology Stack',
    icon: 'fas fa-rocket',
    description: 'Built with .NET 10, .NET Aspire, and cutting-edge cloud-native technologies for optimal performance.'
  },
  {
    title: 'Independent Scaling',
    icon: 'fas fa-chart-line',
    description: 'Each module can scale independently based on demand, optimizing resource usage and costs.'
  },
  {
    title: 'Micro-Site Ready',
    icon: 'fas fa-globe',
    description: 'Every module includes its own micro-site for seamless integration and user experience.'
  }
]

const availableModules = [
  {
    name: 'Customer Management',
    icon: 'fas fa-users',
    description: 'Comprehensive customer relationship management with advanced segmentation, interaction tracking, and lifecycle management.',
    features: [
      'Customer profile management',
      'Segmentation and tagging',
      'Interaction history tracking',
      'Customer lifecycle automation',
      'Advanced reporting and analytics'
    ],
    technologies: ['.NET 10', '.NET Aspire', 'Entity Framework', 'Azure', 'XUNIT']
  },
  {
    name: 'Customer Communication',
    icon: 'fas fa-comments',
    description: 'Multi-channel communication platform with email, SMS, push notifications, and real-time messaging capabilities.',
    features: [
      'Multi-channel messaging',
      'Template management',
      'Automated campaigns',
      'Real-time notifications',
      'Delivery tracking and analytics'
    ],
    technologies: ['.NET 10', 'SignalR', 'Azure Service Bus', 'SendGrid', 'XUNIT']
  },
  {
    name: 'Customer Self Management',
    icon: 'fas fa-user-cog',
    description: 'Self-service portal allowing customers to manage their accounts, preferences, and interactions independently.',
    features: [
      'Account self-service portal',
      'Preference management',
      'Document access',
      'Support ticket system',
      'Mobile-responsive interface'
    ],
    technologies: ['Vue.js', 'TypeScript', '.NET 10', 'OAuth 2.0', 'TailwindCSS']
  },
  {
    name: 'Order Management',
    icon: 'fas fa-shopping-cart',
    description: 'End-to-end order processing system with inventory tracking, fulfillment automation, and real-time status updates.',
    features: [
      'Order lifecycle management',
      'Inventory tracking',
      'Fulfillment automation',
      'Real-time status updates',
      'Integration with shipping providers'
    ],
    technologies: ['.NET 10', '.NET Aspire', 'Azure Functions', 'Cosmos DB', 'XUNIT']
  },
  {
    name: 'Payment Management',
    icon: 'fas fa-credit-card',
    description: 'Secure payment processing with multiple gateway support, subscription billing, and comprehensive financial reporting.',
    features: [
      'Multiple payment gateways',
      'Subscription billing',
      'PCI DSS compliance',
      'Financial reporting',
      'Fraud detection'
    ],
    technologies: ['.NET 10', 'Stripe', 'PayPal', 'Azure Key Vault', 'XUNIT']
  },
  {
    name: 'Bespoke Solutions',
    icon: 'fas fa-cogs',
    description: 'Custom modules tailored to your specific business requirements, built with the same modular architecture principles.',
    features: [
      'Custom business logic',
      'Tailored integrations',
      'Specific workflow automation',
      'Custom reporting',
      'Seamless platform integration'
    ],
    technologies: ['.NET 10', '.NET Aspire', 'Custom APIs', 'Azure', 'XUNIT']
  }
]

const solutionSteps = [
  {
    title: 'Choose Specific Modules',
    description: 'Select the modules that best match your business requirements. Each module is designed to work independently or as part of a larger ecosystem.',
    options: ['Customer Management', 'Order Management', 'Payment Management', 'Communication', 'Self-Service', 'Custom Modules']
  },
  {
    title: 'Determine Customizations',
    description: 'Identify any changes or additional requirements needed to perfectly fit your business processes and workflows.',
    options: ['Custom workflows', 'Additional integrations', 'Branding customization', 'Extended features', 'Business rule modifications']
  },
  {
    title: 'Choose Your Plan',
    description: 'Select between usage-based cloud hosting or self-hosted deployment based on your infrastructure preferences and requirements.',
    options: ['Usage-based cloud', 'Self-hosted standard', 'Self-hosted enterprise', 'Hybrid deployment']
  },
  {
    title: 'Select Licensing Model',
    description: 'For self-hosted solutions, choose from common software licensing models that best fit your organization and budget.',
    options: ['Per-user licensing', 'Site license', 'Enterprise license', 'Volume licensing', 'Custom licensing']
  },
  {
    title: 'Support Model Selection',
    description: 'Choose the level of ongoing support and maintenance that matches your team\'s capabilities and requirements.',
    options: ['Basic support', 'Premium support', 'Managed services', 'Custom support SLA']
  }
]

const pricingPlans = [
  {
    name: 'Cloud Usage-Based',
    price: 'Pay as you scale',
    billing: 'Monthly based on usage',
    featured: false,
    cta: 'Get Started',
    features: [
      'Fully managed cloud infrastructure',
      'Automatic scaling and updates',
      'Built-in monitoring and alerting',
      'High availability and disaster recovery',
      '24/7 infrastructure support',
      'Usage-based pricing model',
      'No upfront infrastructure costs'
    ]
  },
  {
    name: 'Self-Hosted Enterprise',
    price: 'Custom pricing',
    billing: 'Based on licensing model',
    featured: true,
    cta: 'Contact Sales',
    features: [
      'Full source code access',
      'On-premises deployment',
      'Complete customization rights',
      'Multiple licensing options',
      'Dedicated support team',
      'Custom SLA agreements',
      'Training and onboarding included'
    ]
  }
]

const supportOptions = [
  {
    title: 'Implementation Support',
    icon: 'fas fa-tools',
    description: 'Expert guidance through deployment, configuration, and initial setup to ensure smooth launch.'
  },
  {
    title: 'Ongoing Maintenance',
    icon: 'fas fa-life-ring',
    description: 'Regular updates, security patches, and performance optimization to keep your system running optimally.'
  },
  {
    title: 'Custom Development',
    icon: 'fas fa-code',
    description: 'Additional features, integrations, and customizations as your business needs evolve.'
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
.animate-slide-in-left:nth-child(2) { animation-delay: 0.1s; }
.animate-slide-in-left:nth-child(3) { animation-delay: 0.2s; }
.animate-slide-in-left:nth-child(4) { animation-delay: 0.3s; }
.animate-slide-in-left:nth-child(5) { animation-delay: 0.4s; }

.animate-bounce-in:nth-child(1) { animation-delay: 0s; }
.animate-bounce-in:nth-child(2) { animation-delay: 0.1s; }
.animate-bounce-in:nth-child(3) { animation-delay: 0.2s; }
.animate-bounce-in:nth-child(4) { animation-delay: 0.3s; }
.animate-bounce-in:nth-child(5) { animation-delay: 0.4s; }
.animate-bounce-in:nth-child(6) { animation-delay: 0.5s; }
</style>