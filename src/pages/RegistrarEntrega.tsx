import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Save } from 'lucide-react'

export default function RegistrarEntrega() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [dest, setDest] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!dest) {
      toast({
        title: 'Erro de Validação',
        description: 'O destino é obrigatório.',
        variant: 'destructive',
        className: 'animate-shake',
      })
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast({
        title: 'Sucesso!',
        description: 'Entrega registrada com sucesso.',
        className: 'animate-slide-in-right border-l-4 border-l-success',
      })
      setDest('')
    }, 800)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-serif font-bold">Registrar Nova Entrega</h2>

      <Card className="shadow-sm">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="field-label">Destino *</label>
                <Input
                  value={dest}
                  onChange={(e) => setDest(e.target.value)}
                  placeholder="Ex: Galpão Central"
                />
              </div>

              <div className="space-y-2">
                <label className="field-label">Prioridade</label>
                <Select defaultValue="normal">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="baixa">Baixa</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="alta">Alta</SelectItem>
                    <SelectItem value="urgente">Urgente</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="field-label">Tipo de Veículo</label>
                <Select defaultValue="van">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o veículo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="moto">Moto</SelectItem>
                    <SelectItem value="van">Furgão/Van</SelectItem>
                    <SelectItem value="caminhao">Caminhão Leve</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="field-label">Data Prevista</label>
                <Input type="date" className="font-mono text-sm" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="field-label">Observações</label>
              <Textarea
                placeholder="Instruções especiais para entrega..."
                className="resize-none h-24"
              />
            </div>

            <div className="pt-4 border-t flex justify-end">
              <Button type="submit" disabled={loading} className="w-full sm:w-auto min-w-[200px]">
                {loading ? (
                  <span className="animate-pulse">Registrando...</span>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" /> Registrar
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
