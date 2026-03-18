import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Layout from './components/Layout'

import Login from './pages/Login'
import Index from './pages/Index'
import Calendario from './pages/Calendario'
import Pendentes from './pages/Pendentes'
import Separacao from './pages/Separacao'
import RegistrarEntrega from './pages/RegistrarEntrega'
import RouteOptimizer from './pages/RouteOptimizer'
import EntregasFinalizadas from './pages/EntregasFinalizadas'
import NotFound from './pages/NotFound'

const App = () => (
  <BrowserRouter future={{ v7_startTransition: false, v7_relativeSplatPath: false }}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/pendentes" element={<Pendentes />} />
          <Route path="/separacao/:id" element={<Separacao />} />
          <Route path="/registrar-entrega" element={<RegistrarEntrega />} />
          <Route path="/route-optimizer" element={<RouteOptimizer />} />
          <Route path="/entregas-finalizadas" element={<EntregasFinalizadas />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </BrowserRouter>
)

export default App
