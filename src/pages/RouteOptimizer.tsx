import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Navigation, Map as MapIcon, GripVertical } from 'lucide-react'

const initialStops = [
  { id: '1', address: 'Galpão Central (Origem)', status: 'start' },
  { id: '2', address: 'Av. Paulista, 1000 - Cj 42', status: 'pending' },
  { id: '3', address: 'Rua Augusta, 500', status: 'pending' },
  { id: '4', address: 'Al. Santos, 1200', status: 'pending' },
]

export default function RouteOptimizer() {
  const [optimizing, setOptimizing] = useState(false)
  const [stops, setStops] = useState(initialStops)

  const handleOptimize = () => {
    setOptimizing(true)
    setTimeout(() => {
      // Fake optimization logic (reorder)
      setStops([stops[0], stops[2], stops[3], stops[1]])
      setOptimizing(false)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-serif font-bold">Otimizador de Rotas</h2>
        <Button onClick={handleOptimize} disabled={optimizing} className="font-bold">
          {optimizing ? (
            <span className="animate-pulse flex items-center">
              <Navigation className="mr-2 h-4 w-4 animate-spin" /> Calculando...
            </span>
          ) : (
            <>
              <Navigation className="mr-2 h-4 w-4" /> Gerar Rota Ótima
            </>
          )}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-sm overflow-hidden flex flex-col">
          <CardHeader className="bg-muted/30 border-b pb-4">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center">
              <MapIcon className="mr-2 h-4 w-4" /> Visualização de Rota
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex-1 min-h-[300px] lg:min-h-[400px] bg-muted/20 relative flex items-center justify-center">
            {/* Map Placeholder */}
            <div
              className={`absolute inset-0 flex items-center justify-center flex-col transition-opacity ${optimizing ? 'opacity-50' : 'opacity-100'}`}
            >
              <MapIcon className="h-16 w-16 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground font-medium">Mapa Interativo (Módulo Externo)</p>
            </div>
            {optimizing && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-10">
                <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="border-b pb-4">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Pontos de Parada
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            {stops.map((stop, index) => (
              <div
                key={stop.id}
                className={`flex items-center gap-3 p-3 rounded-md border bg-card ${stop.status === 'start' ? 'border-l-4 border-l-primary' : 'border-l-4 border-l-transparent'}`}
              >
                <GripVertical className="h-4 w-4 text-muted-foreground/50 cursor-move" />
                <div className="flex-1">
                  <div className="text-xs font-bold text-muted-foreground mb-1">
                    {index === 0 ? 'PARTIDA' : `PARADA 0${index}`}
                  </div>
                  <div className="text-sm font-medium">{stop.address}</div>
                </div>
                <MapPin
                  className={`h-4 w-4 ${index === 0 ? 'text-primary' : 'text-muted-foreground'}`}
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
