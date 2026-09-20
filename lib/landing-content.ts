import { SITE_HOST } from "@/lib/site"

export const LANDING_PASSOS = [
  {
    n: "1",
    titulo: "Configure seu trabalho",
    texto: "Cadastre serviços, duração, valores e horário de atendimento.",
  },
  {
    n: "2",
    titulo: "Organize seu dia",
    texto: "Adicione atendimentos e bloqueie períodos quando precisar.",
  },
  {
    n: "3",
    titulo: "Prepare sua página",
    texto: `Veja como seus clientes poderão escolher serviço e horário — como em ${SITE_HOST}/seunome.`,
  },
  {
    n: "4",
    titulo: "Trabalhe com mais clareza",
    texto: "Abra o painel e entenda rapidamente como está o dia.",
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
    titulo: "Menos tempo conferindo horários",
    texto: "Encontre espaços disponíveis sem revisar o dia inteiro manualmente.",
  },
  {
    titulo: "Menos interrupção durante o atendimento",
    texto: "Consulte o que precisa rapidamente e volte ao trabalho.",
  },
  {
    titulo: "Mais clareza na rotina",
    texto: "Veja atendimentos, espaços livres e bloqueios no mesmo lugar.",
  },
  {
    titulo: "Simples no celular",
    texto: "Interface pensada para usar entre um cliente e outro.",
  },
] as const

export const LANDING_FAQ = [
  {
    q: "O que é o Da Pra Hoje?",
    a: "É uma agenda online simples para profissionais que trabalham com horário marcado. Você organiza atendimentos, vê o que ainda cabe no dia e monta uma página para o cliente escolher horário e serviço.",
  },
  {
    q: "Para quem o Da Pra Hoje foi criado?",
    a: "Para autônomos e pequenos negócios: barbeiros, cabeleireiros, manicures, tatuadores, esteticistas, massagistas, personal trainers, fotógrafos e outros que vivem de agenda.",
  },
  {
    q: "Isso é uma demonstração?",
    a: "Sim. Você pode testar o painel e a página pública com dados de exemplo no mesmo navegador. A sincronização entre aparelhos ainda não está disponível.",
  },
  {
    q: "Como funciona o agendamento online?",
    a: "No painel você configura serviços e horários. Na página pública, o cliente escolhe um horário e um serviço, e confirma com nome e telefone — sem criar conta. Na demonstração, o fluxo usa dados locais neste navegador.",
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
