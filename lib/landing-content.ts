import { SITE_HOST } from "@/lib/site"

export const LANDING_PASSOS = [
  {
    n: "1",
    titulo: "Configure sua agenda",
    texto: "Cadastre serviços, duração, valores e o horário de funcionamento.",
  },
  {
    n: "2",
    titulo: "Organize os atendimentos",
    texto: "Veja clientes, horários e o que ainda está livre no dia.",
  },
  {
    n: "3",
    titulo: "Monte sua página pública",
    texto: `Crie um link como ${SITE_HOST}/seunome — o cliente escolhe horário e serviço sem criar conta.`,
  },
  {
    n: "4",
    titulo: "Veja se dá pra hoje",
    texto: "Os horários disponíveis ficam claros assim que você abre o painel.",
  },
] as const

export const LANDING_CATEGORIAS = [
  "Barbearias",
  "Cabeleireiros",
  "Manicures",
  "Tatuadores",
  "Esteticistas",
  "Design de sobrancelha",
  "Massagistas",
  "Personal trainers",
  "Fotógrafos",
  "Autônomos com hora marcada",
] as const

export const LANDING_BENEFICIOS = [
  {
    titulo: "Saiba exatamente quando cabe mais um cliente",
    texto: "Horários livres calculados com a duração real dos seus serviços.",
  },
  {
    titulo: "Menos vai-e-volta no WhatsApp",
    texto:
      "Sua página pública mostra disponibilidade — o cliente escolhe e agenda.",
  },
  {
    titulo: "Abra a agenda e entenda o dia em segundos",
    texto: "Próximo horário, resumo e timeline sem caçar informação.",
  },
  {
    titulo: "Use de verdade no meio do trabalho",
    texto: "Interface compacta, mobile-first, sem ruído visual.",
  },
] as const

export const LANDING_FAQ = [
  {
    q: "O que é o Da Pra Hoje?",
    a: "É uma agenda online simples para profissionais que trabalham com horário marcado. Você organiza atendimentos, vê horários livres e monta uma página para o cliente agendar.",
  },
  {
    q: "Para quem o Da Pra Hoje foi criado?",
    a: "Para autônomos e pequenos negócios: barbeiros, cabeleireiros, manicures, tatuadores, esteticistas, massagistas, personal trainers, fotógrafos e outros que vivem de agenda.",
  },
  {
    q: "Isso é uma demonstração?",
    a: "Sim. Hoje você pode testar o painel e a página pública com dados de exemplo no mesmo navegador. A sincronização entre aparelhos ainda não está disponível — o foco agora é mostrar o produto funcionando.",
  },
  {
    q: "Como funciona o agendamento online?",
    a: "No painel você configura serviços e horários. Na página pública, o cliente escolhe um horário disponível e um serviço, e confirma com nome e telefone — sem criar conta.",
  },
  {
    q: "Meu cliente precisa criar uma conta?",
    a: "Não. O agendamento pela página pública não exige cadastro do cliente.",
  },
  {
    q: "Posso configurar meus horários de atendimento?",
    a: "Sim. Você define os dias e horários de funcionamento e pode criar bloqueios pontuais quando precisar.",
  },
  {
    q: "O Da Pra Hoje funciona no celular?",
    a: "Sim. O painel foi pensado mobile-first para uso durante o expediente, e também funciona bem no computador.",
  },
  {
    q: "Preciso instalar algum aplicativo?",
    a: "Não. É uma aplicação web — basta abrir no navegador do celular ou do computador.",
  },
  {
    q: "Serve para barbearias, manicures e outros autônomos?",
    a: "Sim. Qualquer profissional ou pequeno negócio que trabalhe com horários marcados pode usar.",
  },
] as const
