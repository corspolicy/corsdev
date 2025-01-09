"use client"

import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Terminal, CalendarDays, Code2, Laptop2, GraduationCap, Coffee } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { FaGithub, FaTelegramPlane } from "react-icons/fa"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

function BreadcrumbDemo() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className="transform hover:scale-105 transition-transform duration-300"
      >
        <Avatar className="w-32 h-32 ring-4 ring-blue-500 ring-opacity-50">
          <AvatarImage src="https://github.com/persodev0.png" alt="@persodev" />
          <AvatarFallback>@persodev</AvatarFallback>
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
          <AlertTitle className="text-white">PersoDev Says</AlertTitle>
          <AlertDescription className="text-gray-200">
            Yazılımda <strong className="text-blue-400">&apos;imkansız&apos;</strong> sadece çözüm aramaktan vazgeçenlerin bahsettiği bir kelimedir.
          </AlertDescription>
        </Alert>
      </motion.div>

      <div className="my-6"></div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl w-full px-4"
      >
        <Accordion type="single" collapsible className="w-full">
          <motion.div variants={item}>
            <AccordionItem value="skills" className="border-white/20">
              <AccordionTrigger className="text-white hover:text-blue-400">
                <div className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-blue-400" />
                  Yetenekler
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <motion.div 
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="space-y-4 pt-4"
                >
                  {[
                    { icon: <Laptop2 className="h-5 w-5 text-blue-400" />, text: "Frontend Geliştirme" },
                    { icon: <Code2 className="h-5 w-5 text-green-400" />, text: "Backend Geliştirme" },
                    { icon: <Coffee className="h-5 w-5 text-yellow-400" />, text: "UI/UX Tasarım" }
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
                  Deneyim
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <motion.div 
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="space-y-4 pt-4"
                >
                  {[
                    {
                      title: "Web Geliştirici",
                      date: "2018 - 2025",
                      desc: "Full-stack web uygulamaları geliştirme",
                      borderColor: "border-blue-400"
                    },
                    {
                      title: "Şirket Yönetimi",
                      date: "2025 - Günümüz",
                      desc: "Pos... :)",
                      borderColor: "border-green-400"
                    }
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

      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className="my-6"
      >
        <Separator className="w-48 bg-white/20" />
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex space-x-4"
      >
        {[
          { href: "https://github.com/persodev0", icon: <FaGithub size={20} className="text-white" />, hoverColor: "hover:bg-gray-800" },
          { href: "https://t.me/corspolicy", icon: <FaTelegramPlane size={20} className="text-white" />, hoverColor: "hover:bg-blue-600" }
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
            <Button className={`bg-black ${social.hoverColor} transform transition-all duration-300 border border-white/20`}>
              {social.icon}
            </Button>
          </motion.a>
        ))}
      </motion.div>

      <div className="my-6"></div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link" className="text-blue-400 hover:text-blue-300">@persodev</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 backdrop-blur-md bg-black/80 border border-white/20 text-white">
            <div className="flex justify-between space-x-4">
              <Avatar className="ring-2 ring-blue-500">
                <AvatarImage src="https://github.com/persodev0.png" alt="@persodev" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm">
                  <strong className="text-blue-400">@persodev</strong> tarafından oluşturuldu ve paylaşıldı.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-xs text-gray-400">2025</span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </motion.div>
    </motion.div>
  )
}

export default BreadcrumbDemo
