import { Link, Outlet, useLocation } from 'react-router-dom'
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar'
import {
  LayoutDashboard,
  CalendarDays,
  Clock,
  PackageOpen,
  Truck,
  Map as MapIcon,
  CheckCircle2,
  Search,
  Bell,
  User,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const NAV_ITEMS = [
  { title: 'Dashboard', path: '/', icon: LayoutDashboard },
  { title: 'Calendário', path: '/calendario', icon: CalendarDays },
  { title: 'Pendentes', path: '/pendentes', icon: Clock },
  { title: 'Separação', path: '/separacao/geral', icon: PackageOpen },
  { title: 'Registrar Entrega', path: '/registrar-entrega', icon: Truck },
  { title: 'Otimizador de Rotas', path: '/route-optimizer', icon: MapIcon },
  { title: 'Entregas Finalizadas', path: '/entregas-finalizadas', icon: CheckCircle2 },
]

function Header() {
  const { state } = useSidebar()
  const location = useLocation()

  const currentTitle =
    NAV_ITEMS.find((item) => {
      if (item.path === '/') return location.pathname === '/'
      return location.pathname.startsWith(
        item.path.split('/')[1] ? `/${item.path.split('/')[1]}` : item.path,
      )
    })?.title || 'Lucenera Logistics'

  return (
    <header className="h-16 border-b bg-background flex items-center justify-between px-4 sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        <h1 className="font-serif font-semibold text-lg hidden sm:block">{currentTitle}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative w-48 sm:w-64">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar ID..."
            className="pl-9 h-9 font-mono text-sm bg-muted/50 border-none focus-visible:ring-1"
          />
        </div>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
          <Bell className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full bg-primary/5">
          <User className="h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}

export default function Layout() {
  const location = useLocation()

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-muted/20">
        <Sidebar>
          <SidebarHeader className="h-16 flex items-center px-4 border-b">
            <Link
              to="/"
              className="flex items-center gap-2 font-serif text-xl font-bold tracking-tight text-primary"
            >
              <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-xs leading-none">L</span>
              </div>
              Lucenera
            </Link>
          </SidebarHeader>
          <SidebarContent className="px-2 py-4">
            <SidebarMenu>
              {NAV_ITEMS.map((item) => {
                const isActive =
                  location.pathname === '/'
                    ? item.path === '/'
                    : item.path !== '/' &&
                      location.pathname.startsWith(
                        item.path.split('/')[1] ? `/${item.path.split('/')[1]}` : item.path,
                      )

                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={`h-10 transition-colors ${isActive ? 'bg-primary/5 text-primary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-6 before:w-1 before:bg-primary before:rounded-r' : ''}`}
                    >
                      <Link to={item.path}>
                        <item.icon className="h-4 w-4" />
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1 flex flex-col min-h-0 overflow-hidden relative">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 animate-fade-in">
            <div className="mx-auto max-w-6xl w-full">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
