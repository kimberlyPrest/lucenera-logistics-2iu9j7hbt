import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent } from '@/components/ui/card'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from '@/components/ui/drawer'
import { ptBR } from 'date-fns/locale'

export default function Calendario() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDayClick = (day: Date) => {
    setDate(day)
    setDrawerOpen(true)
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-serif font-bold">Calendário de Operações</h2>
      </div>

      <Card className="shadow-sm">
        <CardContent className="p-6 sm:p-10 flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d) => d && handleDayClick(d)}
            locale={ptBR}
            className="rounded-md border p-4 shadow-sm"
            classNames={{
              day: 'h-10 w-10 sm:h-14 sm:w-14 p-0 font-normal aria-selected:opacity-100 hover:bg-muted',
              day_selected:
                'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
            }}
          />
        </CardContent>
      </Card>

      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent>
          <div className="mx-auto w-full max-w-md pb-8">
            <DrawerHeader>
              <DrawerTitle className="font-serif text-xl">
                Detalhes: {date?.toLocaleDateString('pt-BR')}
              </DrawerTitle>
              <DrawerDescription>Resumo de entregas para esta data.</DrawerDescription>
            </DrawerHeader>
            <div className="px-4 space-y-4 mt-2">
              <div className="status-card status-card-blue p-4">
                <div className="flex justify-between items-center">
                  <span className="font-mono font-bold">#ORD-1001</span>
                  <span className="badge-separando">Programado</span>
                </div>
                <p className="text-sm mt-2 text-muted-foreground">
                  Destino: Zona Norte - Prioridade Alta
                </p>
              </div>
              <div className="status-card status-card-orange p-4">
                <div className="flex justify-between items-center">
                  <span className="font-mono font-bold">#ORD-1005</span>
                  <span className="badge-separando bg-orange-100 text-orange-800">Atrasado</span>
                </div>
                <p className="text-sm mt-2 text-muted-foreground">
                  Destino: Centro - Verificação Pendente
                </p>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
