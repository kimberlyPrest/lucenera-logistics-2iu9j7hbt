import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { PackageX } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center mb-6">
        <PackageX className="h-12 w-12 text-muted-foreground" />
      </div>
      <h1 className="text-4xl font-serif font-bold mb-2">404</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        A rota que você tentou acessar não existe ou foi movida.
      </p>
      <Button asChild size="lg" className="font-bold tracking-wide">
        <Link to="/">VOLTAR AO INÍCIO</Link>
      </Button>
    </div>
  )
}
