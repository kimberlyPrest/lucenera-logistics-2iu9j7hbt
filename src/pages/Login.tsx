import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PackageOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Login() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (!user || !pass) {
      setError(true)
      setTimeout(() => setError(false), 500)
      return
    }
    navigate('/')
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-muted/30 p-4">
      <Card
        className={cn('w-full max-w-md shadow-lg', error && 'animate-shake border-destructive/50')}
      >
        <CardHeader className="text-center space-y-2 pb-6">
          <div className="mx-auto w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-2 shadow-sm">
            <PackageOpen size={24} />
          </div>
          <CardTitle className="font-serif text-3xl">Lucenera</CardTitle>
          <CardDescription>Gestão Logística Operacional</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <span className="field-label">Usuário</span>
              <Input
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="ID de Operador"
                className="font-mono bg-background"
              />
            </div>
            <div className="space-y-2">
              <span className="field-label">Senha</span>
              <Input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="••••••••"
                className="bg-background"
              />
            </div>
            <Button type="submit" className="w-full h-11 mt-6 text-sm font-bold tracking-wide">
              ENTRAR
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
