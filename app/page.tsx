"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronDown,
  Code,
  Palette,
  Users,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const translations = {
  en: {
    nav: {
      home: "Home",
      work: "Work",
      about: "About",
      services: "Services",
      contact: "Contact",
      startProject: "Start a Project",
    },
    hero: {
      year: "24",
      description:
        "In our journey, we've worked with tech-giants, venture-capitalists and ambitious start-ups, while becoming the leading full-service Digital Agency. So, we know a thing or two about growth.",
      mainTitle: "Empower",
      subTitle: "Growth",
      scrollText: "Scroll to explore",
    },
    about: {
      title: "We are Empoverse",
      subtitle: "Digital Excellence Redefined",
      description:
        "Founded after gaining valuable experience at Multicls, we combine technical mastery with creative innovation to deliver solutions that don't just meet expectations — they shatter them.",
      stats: {
        experience: "4+ Years",
        projects: "20+ Projects",
        clients: "10+ Clients",
        services: "4 Core Services",
      },
      team: {
        title: "Our Expert Team",
        subtitle: "Passionate professionals driving innovation",
        roles: [
          {
            title: "Full-Stack Developers",
            count: "2",
            icon: "Code",
            skills: [
              "React & Next.js",
              "Node.js & Express",
              "MongoDB & PostgreSQL",
              "TypeScript",
              "AWS & Docker",
              "API Development",
            ],
            description: "Building scalable, high-performance applications",
          },
          {
            title: "UI/UX Designers",
            count: "2",
            icon: "Palette",
            skills: [
              "User Research",
              "Wireframing & Prototyping",
              "Figma & Adobe XD",
              "Design Systems",
              "Usability Testing",
              "Mobile-First Design",
            ],
            description: "Crafting intuitive and engaging user experiences",
          },
          {
            title: "Web Designer",
            count: "1",
            icon: "Users",
            skills: [
              "Responsive Design",
              "HTML5 & CSS3",
              "JavaScript & jQuery",
              "WordPress",
              "SEO Optimization",
              "Performance Optimization",
            ],
            description: "Creating stunning and functional web interfaces",
          },
          {
            title: "Graphic Designer",
            count: "1",
            icon: "Palette",
            skills: [
              "Brand Identity",
              "Adobe Creative Suite",
              "Print Design",
              "Logo Design",
              "Marketing Materials",
              "Visual Storytelling",
            ],
            description: "Bringing brands to life through visual excellence",
          },
        ],
        partnerships: {
          title: "Strategic Partnerships",
          description: "Collaborating with industry leaders to deliver exceptional results",
          count: "2 Partner Companies",
        },
      },
    },
    services: {
      title: "What We Do",
      subtitle: "Comprehensive Digital Solutions",
      items: [
        {
          title: "Full-Stack Development",
          description: "Modern web and mobile applications built with cutting-edge technologies.",
          number: "01",
        },
        {
          title: "Brand & Visual Design",
          description: "Compelling visual identities that communicate your story effectively.",
          number: "02",
        },
        {
          title: "Video & Motion Graphics",
          description: "Engaging content and animations that captivate your audience.",
          number: "03",
        },
        {
          title: "IT & Network Solutions",
          description: "Robust infrastructure to keep your business connected and secure.",
          number: "04",
        },
      ],
    },
    work: {
      title: "Selected Work",
      subtitle: "Projects That Define Excellence",
    },
    contact: {
      title: "Let's Work Together",
      subtitle: "Ready to Transform Your Vision?",
      form: {
        name: "Your Name",
        email: "Email Address",
        project: "Tell us about your project",
        send: "Send Message",
      },
    },
  },

  /* ----- Arabic ----- */
  ar: {
    nav: {
      home: "الرئيسية",
      work: "الأعمال",
      about: "من نحن",
      services: "الخدمات",
      contact: "اتصل بنا",
      startProject: "ابدأ مشروع",
    },
    hero: {
      year: "24",
      description:
        "في رحلتنا، عملنا مع عمالقة التكنولوجيا ورؤوس الأموال المغامرة والشركات الناشئة الطموحة، بينما أصبحنا الوكالة الرقمية الرائدة ذات الخدمة الكاملة.",
      mainTitle: "تمكين",
      subTitle: "النمو",
      scrollText: "مرر للاستكشاف",
    },
    about: {
      title: "نحن إمبوفيرس",
      subtitle: "إعادة تعريف التميز الرقمي",
      description:
        "تأسست بعد اكتساب خبرة قيّمة في Multicls، نجمع بين الإتقان التقني والابتكار الإبداعي لتقديم حلول تتجاوز التوقعات.",
      stats: {
        experience: "4+ سنوات",
        projects: "30+ مشروع",
        clients: "10+ عميل",
        services: "4 خدمات أساسية",
      },
      team: {
        title: "فريقنا المتخصص",
        subtitle: "محترفون شغوفون يقودون الابتكار",
        roles: [
          {
            title: "مطورو Full-Stack",
            count: "2",
            icon: "Code",
            skills: [
              "React و Next.js",
              "Node.js و Express",
              "MongoDB و PostgreSQL",
              "TypeScript",
              "AWS و Docker",
              "تطوير APIs",
            ],
            description: "بناء تطبيقات قابلة للتوسع وعالية الأداء",
          },
          {
            title: "مصممو UI/UX",
            count: "2",
            icon: "Palette",
            skills: [
              "بحث المستخدمين",
              "النماذج الأولية",
              "Figma و Adobe XD",
              "أنظمة التصميم",
              "اختبار سهولة الاستخدام",
              "التصميم المتجاوب",
            ],
            description: "صياغة تجارب مستخدم بديهية وجذابة",
          },
          {
            title: "مصمم ويب",
            count: "1",
            icon: "Users",
            skills: [
              "التصميم المتجاوب",
              "HTML5 و CSS3",
              "JavaScript و jQuery",
              "WordPress",
              "تحسين SEO",
              "تحسين الأداء",
            ],
            description: "إنشاء واجهات ويب مذهلة ووظيفية",
          },
          {
            title: "مصمم جرافيك",
            count: "1",
            icon: "Palette",
            skills: [
              "هوية العلامة التجارية",
              "Adobe Creative Suite",
              "تصميم الطباعة",
              "تصميم الشعارات",
              "المواد التسويقية",
              "السرد البصري",
            ],
            description: "إحياء العلامات التجارية من خلال التميز البصري",
          },
        ],
        partnerships: {
          title: "الشراكات الاستراتيجية",
          description: "التعاون مع قادة الصناعة لتقديم نتائج استثنائية",
          count: "شركتان شريكتان",
        },
      },
    },
    services: {
      title: "ماذا نقدم",
      subtitle: "حلول رقمية شاملة",
      items: [
        { title: "التطوير الشامل", description: "تطبيقات ويب وموبايل حديثة بأحدث التقنيات.", number: "01" },
        { title: "تصميم العلامة والهوية", description: "هويات بصرية تنقل قصتك بفعالية.", number: "02" },
        { title: "الفيديو والموشن", description: "محتوى مرئي جذاب يلفت الانتباه.", number: "03" },
        { title: "حلول الشبكات و IT", description: "بنية تحتية قوية لعمل آمن ومتصل.", number: "04" },
      ],
    },
    work: { title: "أعمال مختارة", subtitle: "مشاريع تُعرّف التميز" },
    contact: {
      title: "لنعمل معًا",
      subtitle: "مستعد لتحويل رؤيتك؟",
      form: { name: "اسمك", email: "البريد الإلكتروني", project: "تفاصيل مشروعك", send: "إرسال" },
    },
  },

  /* ----- French ----- */
  fr: {
    nav: {
      home: "Accueil",
      work: "Travaux",
      about: "À propos",
      services: "Services",
      contact: "Contact",
      startProject: "Démarrer un projet",
    },
    hero: {
      year: "24",
      description:
        "Au cours de notre parcours, nous avons collaboré avec des géants de la tech, des VC et des start-ups ambitieuses, tout en devenant l'Agence Digitale de référence.",
      mainTitle: "Booster",
      subTitle: "La Croissance",
      scrollText: "Faites défiler pour explorer",
    },
    about: {
      title: "Nous sommes Empoverse",
      subtitle: "L'excellence numérique redéfinie",
      description:
        "Née d'une expérience précieuse chez Multicls, notre équipe allie expertise technique et innovation créative pour dépasser les attentes.",
      stats: {
        experience: "4+ ans",
        projects: "30+ projets",
        clients: "10+ clients",
        services: "4 services clés",
      },
      team: {
        title: "Notre Équipe d'Experts",
        subtitle: "Des professionnels passionnés qui stimulent l'innovation",
        roles: [
          {
            title: "Développeurs Full-Stack",
            count: "2",
            icon: "Code",
            skills: [
              "React & Next.js",
              "Node.js & Express",
              "MongoDB & PostgreSQL",
              "TypeScript",
              "AWS & Docker",
              "Développement API",
            ],
            description: "Construction d'applications évolutives et performantes",
          },
          {
            title: "Designers UI/UX",
            count: "2",
            icon: "Palette",
            skills: [
              "Recherche utilisateur",
              "Wireframing & Prototypage",
              "Figma & Adobe XD",
              "Design Systems",
              "Tests d'utilisabilité",
              "Design Mobile-First",
            ],
            description: "Création d'expériences utilisateur intuitives et engageantes",
          },
          {
            title: "Designer Web",
            count: "1",
            icon: "Users",
            skills: [
              "Design Responsive",
              "HTML5 & CSS3",
              "JavaScript & jQuery",
              "WordPress",
              "Optimisation SEO",
              "Optimisation Performance",
            ],
            description: "Création d'interfaces web magnifiques et fonctionnelles",
          },
          {
            title: "Designer Graphique",
            count: "1",
            icon: "Palette",
            skills: [
              "Identité de marque",
              "Adobe Creative Suite",
              "Design Print",
              "Design de logos",
              "Matériaux marketing",
              "Storytelling visuel",
            ],
            description: "Donner vie aux marques grâce à l'excellence visuelle",
          },
        ],
        partnerships: {
          title: "Partenariats Stratégiques",
          description: "Collaboration avec les leaders de l'industrie pour des résultats exceptionnels",
          count: "2 Entreprises Partenaires",
        },
      },
    },
    services: {
      title: "Ce que nous faisons",
      subtitle: "Solutions numériques complètes",
      items: [
        { title: "Développement Full-Stack", description: "Applications web & mobile modernes.", number: "01" },
        { title: "Design & Identité visuelle", description: "Identités fortes pour votre marque.", number: "02" },
        { title: "Vidéo & Motion", description: "Contenus animés qui captivent.", number: "03" },
        { title: "IT & Réseaux", description: "Infrastructure robuste et sécurisée.", number: "04" },
      ],
    },
    work: { title: "Travaux sélectionnés", subtitle: "Des projets d'excellence" },
    contact: {
      title: "Travaillons ensemble",
      subtitle: "Prêt à transformer votre vision ?",
      form: { name: "Votre nom", email: "Adresse email", project: "Décrivez votre projet", send: "Envoyer" },
    },
  },

  /* ----- Spanish ----- */
  es: {
    nav: {
      home: "Inicio",
      work: "Trabajo",
      about: "Acerca",
      services: "Servicios",
      contact: "Contacto",
      startProject: "Iniciar proyecto",
    },
    hero: {
      year: "24",
      description:
        "En nuestro viaje, hemos trabajado con gigantes tecnológicos, capital de riesgo y start-ups ambiciosas, convirtiéndonos en la Agencia Digital líder.",
      mainTitle: "Impulsar",
      subTitle: "El Crecimiento",
      scrollText: "Desplázate para explorar",
    },
    about: {
      title: "Somos Empoverse",
      subtitle: "Excelencia digital redefinida",
      description:
        "Nacida tras una valiosa experiencia en Multicls, combinamos maestría técnica con innovación creativa para superar expectativas.",
      stats: {
        experience: "4+ años",
        projects: "30+ proyectos",
        clients: "10+ clientes",
        services: "4 servicios clave",
      },
      team: {
        title: "Nuestro Equipo de Expertos",
        subtitle: "Profesionales apasionados que impulsan la innovación",
        roles: [
          {
            title: "Desarrolladores Full-Stack",
            count: "2",
            icon: "Code",
            skills: [
              "React & Next.js",
              "Node.js & Express",
              "MongoDB & PostgreSQL",
              "TypeScript",
              "AWS & Docker",
              "Desarrollo de APIs",
            ],
            description: "Construyendo aplicaciones escalables y de alto rendimiento",
          },
          {
            title: "Diseñadores UI/UX",
            count: "2",
            icon: "Palette",
            skills: [
              "Investigación de usuarios",
              "Wireframing y Prototipado",
              "Figma & Adobe XD",
              "Sistemas de diseño",
              "Pruebas de usabilidad",
              "Diseño Mobile-First",
            ],
            description: "Creando experiencias de usuario intuitivas y atractivas",
          },
          {
            title: "Diseñador Web",
            count: "1",
            icon: "Users",
            skills: [
              "Diseño Responsive",
              "HTML5 & CSS3",
              "JavaScript & jQuery",
              "WordPress",
              "Optimización SEO",
              "Optimización de rendimiento",
            ],
            description: "Creando interfaces web impresionantes y funcionales",
          },
          {
            title: "Diseñador Gráfico",
            count: "1",
            icon: "Palette",
            skills: [
              "Identidad de marca",
              "Adobe Creative Suite",
              "Diseño de impresión",
              "Diseño de logos",
              "Materiales de marketing",
              "Narrativa visual",
            ],
            description: "Dando vida a las marcas a través de la excelencia visual",
          },
        ],
        partnerships: {
          title: "Asociaciones Estratégicas",
          description: "Colaborando con líderes de la industria para entregar resultados excepcionales",
          count: "2 Empresas Asociadas",
        },
      },
    },
    services: {
      title: "Lo que hacemos",
      subtitle: "Soluciones digitales integrales",
      items: [
        { title: "Desarrollo Full-Stack", description: "Apps web y móviles de vanguardia.", number: "01" },
        { title: "Diseño e Identidad", description: "Identidades visuales convincentes.", number: "02" },
        { title: "Video & Motion", description: "Contenido cautivador y animaciones.", number: "03" },
        { title: "IT & Redes", description: "Infraestructura robusta y segura.", number: "04" },
      ],
    },
    work: { title: "Trabajo seleccionado", subtitle: "Proyectos que definen la excelencia" },
    contact: {
      title: "Trabajemos juntos",
      subtitle: "¿Listo para transformar tu visión?",
      form: { name: "Tu nombre", email: "Correo electrónico", project: "Cuéntanos tu proyecto", send: "Enviar" },
    },
  },
} as const

const portfolioItems = [
  {
    id: 1,
    title: "Hotel Management System",
    category: "Full-Stack Web Application",
    year: "2024",
    image: "/images/portfolio/hotel-management.jpg",
    color: "from-emerald-400 to-teal-500",
    description:
      "A modern, full-stack Hotel Management System built with Next.js, TailwindCSS, and PDF.js. Features room & booking management, invoice generation, guest profiles, and analytics dashboard.",
    hashtags: ["#WebApplication", "#HotelTech", "#NextJS", "#FullStack"],
    liveUrl: "https://github.com/elfahsimounir/Hotel-Management-System",
    features: [
      "Room & Booking Management",
      "Invoice & PDF Generation",
      "Guest Profiles & History",
      "Dashboard & Analytics",
      "Responsive UI Design",
    ],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "PDF.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Smart TV Media Player System",
    category: "IoT & Media Management Platform",
    year: "2024",
    image: "/images/portfolio/smart-tv-system.jpg",
    color: "from-teal-500 to-emerald-600",
    description:
      "A powerful, scalable solution for managing and delivering media content to smart TVs. Features remote device control, playlist creation, and Wake-on-LAN functionality.",
    hashtags: ["#IoT", "#MediaManagement", "#SmartTV", "#AndroidApp"],
    liveUrl: "https://github.com/elfahsimounir/Smart-TV-Media-Player-System",
    features: [
      "Device Management via IP",
      "Media Upload & Organization",
      "Custom Playlist Creation",
      "Remote Playback Control",
      "Android Helper App",
      "Wake-on-LAN Support",
    ],
    techStack: ["React", "Next.js", "Prisma", "SQLite", "Kotlin", "Android SDK"],
  },
  {
    id: 3,
    title: "Moroccan HR Management System",
    category: "Enterprise HR Solution",
    year: "2023",
    image: "/images/portfolio/hr-system.jpg",
    color: "from-emerald-500 to-green-500",
    description:
      "Comprehensive HR management system tailored for Moroccan businesses. Complete solution from employee onboarding to payroll management, built with local compliance in mind.",
    hashtags: ["#HRTech", "#Morocco", "#Enterprise", "#Payroll"],
    liveUrl: "https://github.com/elfahsimounir/hr-application",
    features: [
      "Employee Management",
      "Payroll & Benefits",
      "Attendance Tracking",
      "Performance Reviews",
      "Moroccan Labor Law Compliance",
      "Multi-language Support",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Express", "JWT Auth"],
  },
  {
    id: 4,
    title: "3R Centre Brand & Digital Presence",
    category: "Brand Identity & Web Development",
    year: "2023",
    image: "/images/portfolio/3r-centre.jpg",
    color: "from-teal-400 to-emerald-500",
    description:
      "Complete brand scaling project for 3R Centre including landing page development, creative social media designs, and comprehensive digital marketing materials.",
    hashtags: ["#BrandDesign", "#LandingPage", "#SocialMedia", "#DigitalMarketing"],
    liveUrl: "https://www.3rcentre.ma",
    features: [
      "Brand Identity Design",
      "Responsive Landing Page",
      "Social Media Templates",
      "Marketing Materials",
      "SEO Optimization",
      "Content Strategy",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "WordPress", "Adobe Creative Suite"],
  },
  {
    id: 5,
    title: "Multicls Tech Company Landing Page",
    category: "Corporate Web Development",
    year: "2023",
    image: "/images/portfolio/multicls-landing.jpg",
    color: "from-blue-500 to-purple-600",
    description:
      "Modern, responsive landing page for Multicls tech company built with Next.js, shadcn/ui, Aceternity UI, and Framer Motion. Features advanced animations, interactive components, and optimized performance.",
    hashtags: ["#LandingPage", "#NextJS", "#ShadcnUI", "#AceternityUI"],
    liveUrl: "https://www.multicls.ma",
    features: [
      "Modern UI/UX Design",
      "Advanced Animations",
      "Interactive Components",
      "Mobile-First Responsive",
      "SEO Optimized",
      "Performance Optimized",
    ],
    techStack: ["Next.js", "shadcn/ui", "Aceternity UI", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  {
    id: 6,
    title: "AI-Powered E-Commerce Platform",
    category: "Full-Stack E-Commerce with AI Integration",
    year: "2024",
    image: "/images/portfolio/ecommerce-platform.jpg",
    color: "from-teal-500 to-cyan-600",
    description:
      "Advanced e-commerce platform featuring AI assistant powered by DeepSeek for enhanced user experience. Complete beauty & cosmetics marketplace with intelligent product recommendations, automated customer support, and seamless shopping experience.",
    hashtags: ["#ECommerce", "#AI", "#DeepSeek", "#NextJS", "#FullStack"],
    liveUrl: "https://github.com/elfahsimounir/fs-ecommerce",
    features: [
      "AI Shopping Assistant (DeepSeek)",
      "Intelligent Product Recommendations",
      "Real-time Inventory Management",
      "Multi-category Product Catalog",
      "Advanced Search & Filtering",
      "Automated Customer Support",
      "Secure Payment Integration",
      "Admin Dashboard & Analytics",
    ],
    techStack: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
      "DeepSeek AI",
      "TypeScript",
    ],
  },
]

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Code":
      return Code
    case "Palette":
      return Palette
    case "Users":
      return Users
    default:
      return Code
  }
}

export default function RefokusStyleLanding() {
  const [currentLang, setCurrentLang] = useState("en")
  const [isLoading, setIsLoading] = useState(true)
  const [showHero, setShowHero] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const t = translations[currentLang as keyof typeof translations]
  const isRTL = currentLang === "ar"

  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Small delay to ensure smooth transition
      setTimeout(() => setShowHero(true), 100)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className={`w-full overflow-x-hidden ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-green-500 flex items-center justify-center z-50 w-full h-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-8xl md:text-9xl font-black text-white mb-8"
              >
                E
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1 }}
                className="h-1 bg-white mx-auto"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="text-white text-xl mt-4 font-light"
              >
                Empoverse
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <AnimatePresence>
        {!isLoading && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="fixed top-0 w-full z-40 px-4 sm:px-6 py-6"
            role="navigation"
            aria-label="Main navigation"
          >
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
              <Link href="/" className="flex items-center space-x-3" aria-label="Empoverse homepage">
                <Image src="/images/icon.png" alt="Empoverse logo" width={24} height={24} loading="eager" priority />
                <span className="text-xl font-bold text-white">Empoverse</span>
              </Link>

              <div className="flex items-center space-x-6">
                {/* Language Selector */}
                <select
                  value={currentLang}
                  onChange={(e) => setCurrentLang(e.target.value)}
                  className="bg-transparent text-white text-sm border border-white/20 rounded px-2 py-1 focus:outline-none"
                  aria-label="Select language"
                >
                  <option value="en" className="text-black">
                    EN
                  </option>
                  <option value="ar" className="text-black">
                    AR
                  </option>
                  <option value="fr" className="text-black">
                    FR
                  </option>
                  <option value="es" className="text-black">
                    ES
                  </option>
                </select>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-green-500 flex items-center justify-center overflow-hidden w-full"
          aria-labelledby="hero-title"
        >
          <div className="absolute inset-0 bg-black/10" />

          <AnimatePresence>
            {showHero && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  y: scrollYProgress.get() > 0 ? heroY : 0,
                  opacity: scrollYProgress.get() > 0.3 ? heroOpacity : 1,
                }}
                className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen w-full">
                  {/* Left Side */}
                  <div className="space-y-8 w-full">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="text-white"
                    >
                      <div className="text-6xl sm:text-8xl md:text-9xl font-black mb-4">©/ {t.hero.year}</div>
                    </motion.div>
                  </div>

                  {/* Right Side */}
                  <div className="space-y-8 w-full">
                    <motion.p
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="text-white/90 text-base sm:text-lg leading-relaxed max-w-md"
                    >
                      {t.hero.description}
                    </motion.p>
                  </div>
                </div>

                {/* Main Title */}
                <motion.div
                  style={{
                    scale: scrollYProgress.get() > 0 ? titleScale : 1,
                  }}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                  className="absolute bottom-20 left-4 right-4 sm:left-6 sm:right-6"
                >
                  <h1
                    id="hero-title"
                    className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] font-black text-white/20 leading-none"
                  >
                    <span className="block">{t.hero.mainTitle}</span>
                    <span className="block -mt-4">{t.hero.subTitle}</span>
                  </h1>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
                  role="button"
                  tabIndex={0}
                  aria-label="Scroll to explore content"
                >
                  <p className="text-white/60 text-sm mb-4">{t.hero.scrollText}</p>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ChevronDown className="w-6 h-6 text-white/60" aria-hidden="true" />
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen bg-slate-900 text-white w-full overflow-hidden"
          aria-labelledby="about-title"
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20">
            {/* Company Info */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20 w-full">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <h2 id="about-title" className="text-4xl sm:text-6xl md:text-7xl font-black mb-8 leading-tight">
                  {t.about.title}
                </h2>
                <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-12">{t.about.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-8">
                  {Object.entries(t.about.stats).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2">{value}</div>
                      <div className="text-white/60 text-sm uppercase tracking-wider">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative w-full"
              >
                <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl p-8 text-center">
                  <Users className="w-16 h-16 text-white mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{t.about.team.partnerships.title}</h3>
                  <p className="text-white/80 mb-4 text-sm sm:text-base">{t.about.team.partnerships.description}</p>
                  <div className="text-2xl sm:text-3xl font-black text-white">{t.about.team.partnerships.count}</div>
                </div>
              </motion.div>
            </div>

            {/* Team Section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16 w-full"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">{t.about.team.title}</h3>
              <p className="text-lg sm:text-xl text-white/70">{t.about.team.subtitle}</p>
            </motion.div>

            {/* Team Roles Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              {t.about.team.roles.map((role, index) => {
                const IconComponent = getIcon(role.icon)
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="group w-full"
                  >
                    <Card className="bg-slate-800/50 border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 h-full">
                      <CardContent className="p-6">
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/30 transition-colors duration-500">
                            <IconComponent className="w-8 h-8 text-emerald-400" aria-hidden="true" />
                          </div>
                          <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-2">{role.count}</div>
                          <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{role.title}</h4>
                          <p className="text-white/60 text-sm">{role.description}</p>
                        </div>

                        {/* Skills */}
                        <div className="space-y-2">
                          <h5 className="text-sm font-semibold text-white/80 mb-3">Core Skills:</h5>
                          <div className="flex flex-wrap gap-1">
                            {role.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded border border-emerald-500/20"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="min-h-screen bg-white w-full overflow-hidden"
          aria-labelledby="services-title"
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 id="services-title" className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 mb-8">
                {t.services.title}
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">{t.services.subtitle}</p>
            </motion.div>

            <div className="space-y-0 w-full">
              {t.services.items.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="group border-b border-slate-200 last:border-b-0 w-full"
                >
                  <div className="py-8 sm:py-12 flex items-center justify-between hover:bg-slate-50 transition-colors duration-500 px-4 sm:px-8 -mx-4 sm:-mx-8">
                    <div className="flex items-center space-x-4 sm:space-x-8 flex-1">
                      <div className="text-4xl sm:text-6xl font-black text-slate-200 group-hover:text-emerald-500 transition-colors duration-500">
                        {service.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                          {service.title}
                        </h3>
                        <p className="text-base sm:text-lg text-slate-600 max-w-2xl">{service.description}</p>
                      </div>
                    </div>
                    <motion.div whileHover={{ x: 10 }} className="hidden md:block">
                      <ArrowRight
                        className="w-8 h-8 text-slate-400 group-hover:text-emerald-500 transition-colors duration-500"
                        aria-hidden="true"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section
          id="work"
          className="min-h-screen bg-slate-900 text-white w-full overflow-hidden"
          aria-labelledby="work-title"
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 id="work-title" className="text-4xl sm:text-6xl md:text-7xl font-black mb-8">
                {t.work.title}
              </h2>
              <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">{t.work.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 w-full">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 w-full"
                >
                  {/* Project Image - Compact */}
                  <div className="relative overflow-hidden">
                    <div className={`aspect-[16/10] bg-gradient-to-br ${item.color} relative`}>
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={`${item.title} project screenshot`}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black/30" />

                      {/* Year Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                          {item.year}
                        </span>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 bg-emerald-500/80 text-white text-xs font-medium rounded-full">
                          {item.category}
                        </span>
                      </div>

                      {/* Live View Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <Button
                          asChild
                          size="sm"
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
                        >
                          <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Live
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Project Content - Compact */}
                  <div className="p-6 space-y-4">
                    {/* Title */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed line-clamp-2">{item.description}</p>
                    </div>

                    {/* Hashtags - Compact */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.hashtags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded border border-emerald-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.hashtags.length > 3 && (
                        <span className="px-2 py-1 text-white/40 text-xs">+{item.hashtags.length - 3}</span>
                      )}
                    </div>

                    {/* Key Features - Compact */}
                    <div>
                      <div className="grid grid-cols-1 gap-1">
                        {item.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-white/50 text-xs">
                            <div className="w-1 h-1 bg-emerald-400 rounded-full mr-2 flex-shrink-0" />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack - Compact */}
                    <div className="pt-2 border-t border-slate-700/50">
                      <div className="flex flex-wrap gap-1">
                        {item.techStack.slice(0, 4).map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-0.5 bg-slate-700/50 text-white/70 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                        {item.techStack.length > 4 && (
                          <span className="px-2 py-0.5 text-white/40 text-xs">+{item.techStack.length - 4}</span>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/50 bg-transparent"
                      >
                        <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                          View Project Details
                          <ArrowRight className="w-3 h-3 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-green-500 text-white flex items-center w-full overflow-hidden"
          aria-labelledby="contact-title"
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <h2 id="contact-title" className="text-4xl sm:text-6xl md:text-7xl font-black mb-8 leading-tight">
                  {t.contact.title}
                </h2>
                <p className="text-lg sm:text-xl text-white/80 mb-12">{t.contact.subtitle}</p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6" aria-hidden="true" />
                    <span className="text-sm sm:text-base">elfahssimounir7@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6" aria-hidden="true" />
                    <span className="text-sm sm:text-base">+212 602 553 740</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6" aria-hidden="true" />
                    <span className="text-sm sm:text-base">Hay Chbar Av Moulay Rachid Nr 2, Martil</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardContent className="p-6 sm:p-8">
                    <form className="space-y-6">
                      <Input
                        placeholder={t.contact.form.name}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
                      />
                      <Input
                        type="email"
                        placeholder={t.contact.form.email}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
                      />
                      <Textarea
                        placeholder={t.contact.form.project}
                        rows={6}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-32 resize-none"
                      />
                      <Button className="w-full" size="lg">
                        {t.contact.form.send}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* WhatsApp Floating Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.a
          href="https://wa.me/212602553740?text=Hello%20Empoverse!%20I'm%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />

          {/* Tooltip */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Message us on WhatsApp
            <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
          </div>

          {/* Pulse animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        </motion.a>
      </motion.div>
    </div>
  )
}
