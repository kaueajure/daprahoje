# Da Pra Hoje

Agenda online simples para profissionais autônomos — barbeiros, manicures, tatuadores e quem trabalha com hora marcada.

## Ideia

Abrir → olhar → entender → agir.

A tela **Hoje** e a pergunta **“Dá pra hoje?”** são o centro da experiência.

## Como rodar

```bash
# Idealmente (com rede):
pnpm install
pnpm dev
```

Se `pnpm`/`npm install` falhar por rede, as dependências principais já podem estar em `node_modules` (copiadas localmente). Nesse caso:

```bash
node node_modules/next/dist/bin/next dev -p 3000
```

Abra [http://localhost:3000](http://localhost:3000).

Página pública de exemplo: [http://localhost:3000/joaobarber](http://localhost:3000/joaobarber)

## O que tem no MVP

- Painel: Hoje, Agenda (Hoje / Dia / Semana), Clientes, Serviços, Configurações
- “Dá pra hoje?” com chips de horários livres
- Criar / editar / cancelar / concluir / marcar ausência
- Bloquear horários e horário de funcionamento
- Página pública com agendamento sem conta
- Persistência local (`localStorage`)
- Toasts e empty states

## Stack

Next.js 16 · React 19 · Tailwind CSS 4 · Lucide

## Design

Clean UI preto e branco, fundo `#F7F7F5`, cards brancos, botões pretos — inspirado na referência visual enviada, sem copiar componentes.
