import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search, MapPin, Calendar, Box } from 'lucide-react'

const history = [
  { id: 'ORD-9801', date: 'Hoje, 09:15', dest: 'Setor Norte', items: 14 },
  { id: 'ORD-9802', date: 'Hoje, 10:40', dest: 'Loja Principal', items: 3 },
  { id: 'ORD-9755', date: 'Ontem, 16:20', dest: 'Filial Sul', items: 45 },
  { id: 'ORD-9750', date: 'Ontem, 14:00', dest: 'Distribuidora Alpha', items: 120 },
]

export default function EntregasFinalizadas() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-serif font-bold">Histórico de Entregas</h2>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por ID ou Destino..."
            className="pl-9 bg-background shadow-sm"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {history.map((item) => (
          <Card
            key={item.id}
            className="status-card status-card-green hover:bg-muted/30 transition-colors cursor-pointer"
          >
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-shrink-0 flex items-center justify-between sm:block w-full sm:w-auto">
                <span className="font-mono text-lg font-bold text-foreground block">{item.id}</span>
                <span className="badge-finalizado sm:mt-2">Finalizado</span>
              </div>

              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" /> {item.date}
                </div>
                <div className="flex items-center text-foreground font-medium sm:col-span-1">
                  <MapPin className="mr-2 h-4 w-4 text-muted-foreground" /> {item.dest}
                </div>
                <div className="flex items-center text-muted-foreground sm:justify-end font-mono">
                  <Box className="mr-2 h-4 w-4" /> {item.items} itens
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
