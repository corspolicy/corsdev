"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import {Terminal, Code2, Laptop2, GraduationCap, Coffee, Volume2, VolumeX, Globe, FolderGit2, Code } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { FaGithub } from "react-icons/fa"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const translations = {
  tr: {
    skills: "Yetenekler",
    experience: "Deneyim",
    quote: "Yazılımda 'imkansız' sadece çözüm aramaktan vazgeçenlerin bahsettiği bir kelimedir.",
    frontendDev: "Frontend Geliştirme",
    backendDev: "Backend Geliştirme",
    uiuxDesign: "UI/UX Tasarım",
    webDeveloper: "Web Geliştirici",
    companyManagement: "Şirket Yönetimi",
    companyDescyription: "Posgen Software | Genel Müdür",
    fullstack: "Full-stack web uygulamaları geliştirme",
    createdBy: "tarafından oluşturuldu ve paylaşıldı.",
    projects: "Projeler",
    projectsLoading: "Projeler yükleniyor...",
    viewProject: "Projeyi Görüntüle",
    viewOnGithub: "GitHub'da Görüntüle",
    discordbotDesc:"Discord kumar botu. Kullanıcıların belirli komutları kullanarak kumar oynamasına olanak tanır.",
    watchgenDesc:
      "Vue.js ve TypeScript ile geliştirilmiş modern bir anime izleme platformu. Kullanıcı dostu arayüz ve responsive tasarım.",
    corsdevDesc: "Kişisel web geliştirme projelerim ve deneysel çalışmalarım için oluşturuldu.",
    depremapiDesc:"Türkiye'deki son ve geçmiş deprem bilgilerini sunar. Veriler, KOERI (Boğaziçi Üniversitesi Kandilli Rasathanesi ve Deprem Araştırma Enstitüsü) tarafından sağlanır ve hızlı, güvenilir erişim için önbellekleme (cache) sistemi kullanır.",
    kandillimapDesc:"Kandilli Rasathanesi ve Deprem Araştırma Enstitüsü tarafından sağlanan verilerle Türkiye'deki son depremleri harita üzerinde gösterir.",
    technologies: "Teknolojiler:",
    nodejs: "Node.js",
    javascript: "JavaScript",
    vuejs: "Vue.js",
    typescript: "TypeScript",
    tailwind: "Tailwind CSS",
    html: "HTML",
    css: "CSS",
    express: "Express.js",
    vite: "Vite",
    pinia: "Pinia",
    reactjs: "React.js",
    nextjs: "Next.js",
  },
  en: {
    skills: "Skills",
    experience: "Experience",
    quote: "In software development, 'impossible' is just a word used by those who gave up looking for solutions.",
    frontendDev: "Frontend Development",
    backendDev: "Backend Development",
    uiuxDesign: "UI/UX Design",
    webDeveloper: "Web Developer",
    companyManagement: "Company Management",
    companyDescyription: "Posgen Software | Chief Executive Officier",
    fullstack: "Full-stack web application development",
    createdBy: "created and shared by",
    projects: "Projects",
    projectsLoading: "Loading projects...",
    viewProject: "View Project",
    viewOnGithub: "View on GitHub",
    discordbotDesc:"Discord gambling bot. Allows users to gamble using specific commands.",
       watchgenDesc:
      "A modern anime viewing platform developed with Vue.js and TypeScript. User-friendly interface and responsive design",
    corsdevDesc: "It was created for my personal web development projects and experimental work.",
    depremapiDesc:"Provides information about recent and past earthquakes in Turkey. The data is provided by KOERI (Kandilli Observatory and Earthquake Research Institute of Boğaziçi University) and uses a caching system for fast and reliable access.",
    kandillimapDesc:"Displays recent earthquakes in Turkey on a map using data provided by the Kandilli Observatory and Earthquake Research Institute.",
    technologies: "Technologies:",
    nodejs: "Node.js",
    javascript: "JavaScript",
    vuejs: "Vue.js",
    typescript: "TypeScript",
    tailwind: "Tailwind CSS",
    html: "HTML",
    css: "CSS",
    express: "Express.js",
    vite: "Vite",
    pinia: "Pinia",
    reactjs: "React.js",
    nextjs: "Next.js",
  },
}

interface Project {
  id: number
  title: string
  description: string
  image: string
  link: string
  icon: React.ReactNode
  technologies: string[]
}

function BreadcrumbDemo() {
  const [language, setLanguage] = useState("tr")
  const [isMuted, setIsMuted] = useState(true)
  const t = translations[language as keyof typeof translations]
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState<Project[]>([])
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => {
    const pageTimer = setTimeout(() => {
      setPageLoaded(true)
    }, 1500)

    return () => clearTimeout(pageTimer)
  }, [])

  useEffect(() => {
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects([
        {
          id: 1,
          title: "Watchgen Platform",
          description: language === "tr" ? t.watchgenDesc : t.watchgenDesc,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png",
          link: "https://github.com/corspolicy/watchgen",
          icon: <Code className="h-5 w-5 text-yellow-400" />,
          technologies: [t.vuejs, t.typescript, t.tailwind, t.css, t.html, t.vite, t.pinia],
        },
        {
          id: 2,
          title: "CorsDev Portfolio",
          description: language === "tr" ? t.corsdevDesc : t.corsdevDesc,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png",
          link: "https://github.com/corspolicy/corsdev",
          icon: <Code className="h-5 w-5 text-yellow-400" />,
          technologies: [t.javascript, t.nodejs, t.reactjs, t.nextjs, t.html, t.css, t.tailwind],
        },
        {
          id: 3,
          title: "Koeri API",
          description: language === "tr" ? t.depremapiDesc : t.depremapiDesc,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png",
          link: "https://github.com/corspolicy/deprem-api-nodejs",
          icon: <Code className="h-5 w-5 text-yellow-400" />,
          technologies: [t.javascript, t.nodejs, t.html, t.css],
        },
        {
          id: 4,
          title: "Kandilli Map",
          description: language === "tr" ? t.kandillimapDesc : t.kandillimapDesc,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png",
          link: "https://github.com/Squezilia/kandilli-map",
          icon: <Code className="h-5 w-5 text-yellow-400" />,
          technologies: [t.vuejs, t.typescript, t.html, t.css],
        },
        {
          id: 5,
          title: "Discord Bot",
          description: language === "tr" ? t.discordbotDesc : t.discordbotDesc,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png",
          link: "https://github.com/corspolicy/discord_bot",
          icon: <Code className="h-5 w-5 text-yellow-400" />,
          technologies: [t.javascript, t.nodejs],
        },
      ])
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [language, t])

  const toggleMute = () => {
    const iframe = document.getElementById("youtube-audio") as HTMLIFrameElement
    if (iframe && iframe.contentWindow) {
      if (isMuted) {
        iframe.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', "*")
      } else {
        iframe.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', "*")
      }
      setIsMuted(!isMuted)
    }
  }

  if (!pageLoaded) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="flex flex-col items-center">
          <div className="animate-spin mb-4">
            <svg className="h-16 w-16 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    )
  }

  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="hidden">
        <iframe
          id="youtube-audio"
          width="0"
          height="0"
          src="https://www.youtube.com/embed/diPgJjT-DUg?autoplay=1&enablejsapi=1&mute=1&loop=1&playlist=diPgJjT-DUg"
          allow="autoplay"
        ></iframe>
      </div>

      <div className="fixed top-4 right-4 flex gap-2 z-50">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="bg-black/50 border border-white/20">
              <Globe className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-black/80 border border-white/20 text-white">
            <DropdownMenuItem onClick={() => setLanguage("tr")} className="hover:bg-white/10">
              Türkçe
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLanguage("en")} className="hover:bg-white/10">
              English
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="outline" size="icon" className="bg-black/50 border border-white/20" onClick={toggleMute}>
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="transform hover:scale-105 transition-transform duration-300"
      >
        <Avatar className="w-32 h-32 ring-4 ring-blue-500 ring-opacity-50 mt-10">
          <AvatarImage src="https://github.com/corspolicy.png" alt="@corspolicy" />
          <AvatarFallback>@corspolicy</AvatarFallback>
        </Avatar>
      </motion.div>

      <div className="my-6"></div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <Alert className="backdrop-blur-md bg-white/10 border border-white/20">
          <Terminal className="h-4 w-4" />
          <AlertTitle className="text-white">CorsPolicy Says</AlertTitle>
          <AlertDescription className="text-gray-200">
            {t.quote.includes("'imkansız'") ? (
              <>
                Yazılımda <strong className="text-blue-400">&apos;imkansız&apos;</strong> sadece çözüm aramaktan
                vazgeçenlerin bahsettiği bir kelimedir.
              </>
            ) : (
              <>
                In software development, <strong className="text-blue-400">&apos;impossible&apos;</strong> is just a
                word used by those who gave up looking for solutions.
              </>
            )}
          </AlertDescription>
        </Alert>
        <center>
          <br  />
        <img 
    width="320"
    src="https://lanyard-profile-readme.vercel.app/api/1245731554286633033?theme=dark&bg=111827&animated=false&borderRadius=10px"
    alt="Discord Presence"
  /></center>
      </motion.div>
      <div className="my-6"></div>

      <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl w-full px-4">
        <Accordion type="single" collapsible className="w-full">
          <motion.div variants={item}>
            <AccordionItem value="skills" className="border-white/20">
              <AccordionTrigger className="text-white hover:text-blue-400">
                <div className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-blue-400" />
                  {t.skills}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-4 pt-4">
                  {[
                    { icon: <Laptop2 className="h-5 w-5 text-blue-400" />, text: t.frontendDev },
                    { icon: <Code2 className="h-5 w-5 text-green-400" />, text: t.backendDev },
                    { icon: <Coffee className="h-5 w-5 text-yellow-400" />, text: t.uiuxDesign },
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      className="flex items-center space-x-2 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {skill.icon}
                      <span>{skill.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>

          <motion.div variants={item}>
            <AccordionItem value="experience" className="border-white/20">
              <AccordionTrigger className="text-white hover:text-blue-400">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-400" />
                  {t.experience}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-4 pt-4">
                  {[
                    {
                      title: t.webDeveloper,
                      date: "2018 - 2025",
                      desc: t.fullstack,
                      borderColor: "border-blue-400",
                    },
                    {
                      title: t.companyManagement,
                      date: "2025 - Günümüz",
                      desc: t.companyDescyription,
                      borderColor: "border-green-400",
                    },
                  ].map((exp, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      className={`border-l-2 ${exp.borderColor} pl-4 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors`}
                      whileHover={{ scale: 1.02, x: 10 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <h3 className="font-bold">{exp.title}</h3>
                      <p className="text-sm text-gray-400">{exp.date}</p>
                      <p className="text-sm mt-2">{exp.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        </Accordion>
      </motion.div>

      <div className="my-6"></div>

      <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl w-full px-4">
        <motion.div variants={item} className="mb-4">
          <div className="flex items-center gap-2 text-xl font-bold text-white">
            <FolderGit2 className="h-5 w-5 text-blue-400" />
            {t.projects}
          </div>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-black/50 border border-white/20 text-white overflow-hidden">
                <CardHeader className="p-0">
                  <Skeleton className="h-40 w-full rounded-none bg-white/10" />
                </CardHeader>
                <CardContent className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2 bg-white/10" />
                  <Skeleton className="h-4 w-full mb-1 bg-white/10" />
                  <Skeleton className="h-4 w-2/3 bg-white/10" />
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Skeleton className="h-9 w-full bg-white/10" />
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <motion.div key={project.id} variants={item} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Card className="bg-black/50 border border-white/20 text-white overflow-hidden h-full flex flex-col">
                  <CardHeader className="p-0">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-2 left-2 flex items-center">
                        <div className="bg-black/60 p-1 rounded-full">{project.icon}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-lg text-blue-400">{project.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                    <div className="mt-3">
                      <p className="text-xs text-gray-400 mb-1">{t.technologies}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="bg-blue-500/10 text-blue-300 border-blue-500/30 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button
                      className="w-full bg-blue-500/20 hover:bg-blue-500/40 text-blue-300"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <FaGithub className="mr-2 h-4 w-4" />
                      {t.viewOnGithub}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className="my-6"
      ></motion.div>

      <motion.div variants={container} initial="hidden" animate="show" className="flex space-x-4">
        {[
          {
            href: "https://github.com/corspolicy",
            icon: <FaGithub size={20} className="text-white" />,
            hoverColor: "hover:bg-gray-800",
          },
        ].map((social, index) => (
          <motion.a
            key={index}
            variants={item}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              className={`bg-black ${social.hoverColor} transform transition-all duration-300 border border-white/20`}
            >
              {social.icon}
            </Button>
          </motion.a>
        ))}
      </motion.div>



      <div className="my-2"></div>

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link" className="text-blue-400 hover:text-blue-300">
              @corspolicy
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 backdrop-blur-md bg-black/80 border border-white/20 text-white">
            <div className="flex justify-between space-x-4">
              <Avatar className="ring-2 ring-blue-500">
                <AvatarImage src="https://github.com/corspolicy.png" alt="@corspolicy" />
              </Avatar>
                <p className="text-sm">
                <strong className="text-blue-400">@corspolicy</strong> {t.createdBy}.
                </p>
                
            </div>
          
          </HoverCardContent>
        </HoverCard>
      </motion.div>
    </motion.div>
  )
}

export default BreadcrumbDemo

