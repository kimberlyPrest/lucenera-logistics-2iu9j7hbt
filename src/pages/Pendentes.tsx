import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

const pendingOrders = [
  { id: 'ORD-9930', items: 12, destination: 'Centro Comercial', priority: 'Alta', time: '10:30' },
  {
    id: 'ORD-9931',
    items: 4,
    destination: 'Zona Sul - Galpão 2',
    priority: 'Normal',
    time: '11:00',
  },
  { id: 'ORD-9932', items: 28, destination: 'Filial Leste', priority: 'Baixa', time: '11:45' },
  { id: 'ORD-9933', items: 1, destination: 'Diretoria', priority: 'Urgente', time: '12:00' },
  { id: 'ORD-9934', items: 6, destination: 'Shopping Central', priority: 'Normal', time: '14:30' },
]

export default function Pendentes() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-serif font-bold">Ordens Pendentes</h2>
        <span className="text-sm text-muted-foreground font-medium">
          {pendingOrders.length} registros
        </span>
      </div>

      <Card className="overflow-hidden shadow-sm">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead className="w-[120px]">ID</TableHead>
              <TableHead>Destino</TableHead>
              <TableHead className="hidden md:table-cell">Prioridade</TableHead>
              <TableHead className="hidden sm:table-cell text-right">Itens</TableHead>
              <TableHead className="hidden lg:table-cell">Horário</TableHead>
              <TableHead className="text-right">Ação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pendingOrders.map((order) => (
              <TableRow key={order.id} className="group">
                <TableCell className="font-mono font-bold text-sm">{order.id}</TableCell>
                <TableCell className="font-medium text-sm">{order.destination}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${order.priority === 'Urgente' || order.priority === 'Alta' ? 'text-destructive' : 'text-muted-foreground'}`}
                  >
                    {order.priority}
                  </span>
                </TableCell>
                <TableCell className="hidden sm:table-cell text-right font-mono text-sm">
                  {order.items}
                </TableCell>
                <TableCell className="hidden lg:table-cell text-sm text-muted-foreground">
                  {order.time}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    size="sm"
                    variant="secondary"
                    asChild
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Link to={`/separacao/${order.id}`}>
                      <span className="hidden sm:inline">Iniciar</span>
                      <Play className="h-3 w-3 sm:ml-2" />
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
