import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, PackageCheck, Route, Truck } from 'lucide-react'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts'

const kpis = [
  { title: 'Pendentes Hoje', value: '42', icon: Clock, colorClass: 'status-card-orange' },
  { title: 'Em Separação', value: '18', icon: PackageCheck, colorClass: 'status-card-blue' },
  { title: 'Entregas Finalizadas', value: '104', icon: Truck, colorClass: 'status-card-green' },
  { title: 'Eficiência de Rota', value: '94%', icon: Route, colorClass: 'status-card-primary' },
]

const recentActivity = [
  { id: '#ORD-9921', action: 'separado por', user: 'João S.', time: 'Agora', status: 'separado' },
  {
    id: '#ORD-9920',
    action: 'iniciou separação',
    user: 'Maria O.',
    time: '10 min',
    status: 'separando',
  },
  { id: '#ORD-9915', action: 'entregue em', user: 'Setor Sul', time: '1 hr', status: 'finalizado' },
]

const chartData = [
  { day: 'Seg', concluidas: 85, pendentes: 12 },
  { day: 'Ter', concluidas: 92, pendentes: 8 },
  { day: 'Qua', concluidas: 78, pendentes: 25 },
  { day: 'Qui', concluidas: 104, pendentes: 15 },
  { day: 'Sex', concluidas: 90, pendentes: 30 },
]

export default function Index() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, i) => (
          <div key={i} className={`status-card ${kpi.colorClass} p-5 flex flex-col justify-center`}>
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm font-medium text-muted-foreground">{kpi.title}</span>
              <kpi.icon className="h-4 w-4 text-muted-foreground/50" />
            </div>
            <div className="text-3xl font-bold font-serif">{kpi.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-sm border-muted">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-serif">Progresso da Semana</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full mt-4">
              <ChartContainer
                config={{
                  concluidas: { color: 'hsl(var(--success))' },
                  pendentes: { color: 'hsl(var(--primary))' },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="hsl(var(--border))"
                    />
                    <XAxis
                      dataKey="day"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12 }}
                      dy={10}
                    />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="concluidas"
                      fill="var(--color-concluidas)"
                      radius={[4, 4, 0, 0]}
                      maxBarSize={40}
                    />
                    <Bar
                      dataKey="pendentes"
                      fill="var(--color-pendentes)"
                      radius={[4, 4, 0, 0]}
                      maxBarSize={40}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-muted flex flex-col">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-serif">Atividade Recente</CardTitle>
            <Button variant="ghost" size="sm" className="h-8 text-xs">
              Ver Tudo
            </Button>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col gap-4 pt-2">
            {recentActivity.map((act, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <div
                  className={`mt-0.5 w-2 h-2 rounded-full shrink-0 ${act.status === 'finalizado' ? 'bg-success' : act.status === 'separado' ? 'bg-green-500' : 'bg-blue-500'}`}
                />
                <div className="flex-1 leading-snug">
                  <span className="font-mono font-bold text-foreground">{act.id}</span>{' '}
                  <span className="text-muted-foreground">
                    {act.action} {act.user}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{act.time}</span>
              </div>
            ))}

            <div className="mt-auto pt-4">
              <Button asChild className="w-full justify-between group">
                <Link to="/registrar-entrega">
                  Nova Entrega
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
