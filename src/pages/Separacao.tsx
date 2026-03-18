import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const mockItems = [
  { id: 'SKU-1001', name: 'Caixa Organizadora M', qty: 2 },
  { id: 'SKU-2055', name: 'Fita Adesiva Industrial', qty: 5 },
  { id: 'SKU-8890', name: 'Palete Padrão', qty: 1 },
]

export default function Separacao() {
  const { id } = useParams()
  const orderId = id === 'geral' ? 'N/A' : id
  const [checkedItems, setCheckedItems] = useState<string[]>([])
  const { toast } = useToast()

  const allChecked = checkedItems.length === mockItems.length && mockItems.length > 0

  const handleCheck = (itemId: string) => {
    setCheckedItems((prev) =>
      prev.includes(itemId) ? prev.filter((i) => i !== itemId) : [...prev, itemId],
    )
  }

  const handleFinalize = () => {
    toast({
      title: 'Separação Concluída',
      description: `Pedido ${orderId} separado com sucesso.`,
      className: 'animate-slide-in-right border-l-4 border-l-success',
    })
  }

  if (id === 'geral') {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
        <h2 className="text-xl font-serif">Selecione um pedido pendente para iniciar</h2>
        <Button asChild>
          <Link to="/pendentes">Ver Pendentes</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/pendentes">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <h2 className="text-2xl font-serif font-bold">Processo de Separação</h2>
          <div className="text-muted-foreground font-mono mt-1">{orderId}</div>
        </div>
        <div>
          {allChecked ? (
            <span className="badge-separado animate-fade-in">Separado</span>
          ) : (
            <span className="badge-separando">Separando</span>
          )}
        </div>
      </div>

      <div className="grid gap-4">
        {mockItems.map((item) => (
          <Card
            key={item.id}
            className={`transition-all duration-200 ${checkedItems.includes(item.id) ? 'border-success/50 bg-success/5' : 'hover:border-primary/30'}`}
          >
            <CardContent className="p-4 flex items-center gap-4">
              <Checkbox
                id={item.id}
                checked={checkedItems.includes(item.id)}
                onCheckedChange={() => handleCheck(item.id)}
                className="h-6 w-6 rounded-md data-[state=checked]:bg-success data-[state=checked]:border-success"
              />
              <div
                className="flex-1 cursor-pointer select-none"
                onClick={() => handleCheck(item.id)}
              >
                <label className="font-mono text-sm font-bold block mb-1 text-muted-foreground">
                  {item.id}
                </label>
                <div className="font-medium text-lg leading-tight">{item.name}</div>
              </div>
              <div className="text-2xl font-mono font-bold bg-muted px-4 py-2 rounded-md">
                x{item.qty}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="pt-6 border-t">
        <Button
          size="lg"
          className="w-full h-14 text-lg font-bold"
          disabled={!allChecked}
          onClick={handleFinalize}
        >
          {allChecked && <CheckCircle2 className="mr-2 h-6 w-6" />}
          FINALIZAR SEPARAÇÃO
        </Button>
      </div>
    </div>
  )
}
