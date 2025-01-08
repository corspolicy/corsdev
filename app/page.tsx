import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { CalendarDays } from "lucide-react"


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

import { Terminal } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { FaGithub, FaTelegramPlane } from 'react-icons/fa'; 
 

function BreadcrumbDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">


      <div>
        <Avatar className="w-32 h-32">
          <AvatarImage src="https://github.com/persodev0.png" alt="@persodev" />
          <AvatarFallback>@persodev</AvatarFallback>
        </Avatar>
      </div>

      <div className="my-4"></div>

      <div>
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>PersoDev Say's</AlertTitle>
      <AlertDescription>
      Yazılımda <strong>'imkansız'</strong> sadece çözüm aramaktan vazgeçenlerin bahsettiği bir kelimedir.
      </AlertDescription>
    </Alert>
      </div>

      <div className="my-4"></div>

  
    <div className="flex space-x-4">
    <a href="https://github.com/persodev0" target="_blank" rel="noopener noreferrer">

    <Button className="bg-black">
  <FaGithub size={20} className="text-white" />
</Button>
        </a>
        <a href="https://t.me/corspolicy" target="_blank" rel="noopener noreferrer">
        <Button className="bg-black hover:bg-blue-500">
          <FaTelegramPlane size={20} className="text-white" />
        </Button>
        </a>
      </div>

     


      {/*
       <div className="my-4"></div>
      <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">İletişime Geç</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Başka sayfaya yönlendiriliyorsun.</AlertDialogTitle>
          <AlertDialogDescription>
            Şu anda <span className="text-blue-400">Telegram</span> sitesine yönlendiriliyorsunuz, devam etmek istiyor musunuz?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>İptal Et</AlertDialogCancel>
          <a href="https://t.me/corspolicy" target="_blank" rel="noopener noreferrer"><AlertDialogAction>Evet</AlertDialogAction></a>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog> */}

    <div className="my-2"></div>

    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@persodev</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/persodev0.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm">
            <strong>@persodev</strong> tarafından oluşturuldu ve paylaşıldı.</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                2025
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>


    </div>
  )
}

export default BreadcrumbDemo
