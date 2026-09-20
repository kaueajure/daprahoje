Quero criar/refatorar uma aplicação web chamada “Da Pra Hoje”, uma agenda online extremamente simples para profissionais autônomos e pequenos prestadores de serviço que trabalham com horários marcados.

O objetivo é desenvolver um produto com UI/UX clean, minimalista, compacta e extremamente intuitiva, inspirado visualmente na referência fornecida.

A referência deve servir principalmente para definir:

composição visual;
hierarquia;
espaçamento;
uso de cards;
tipografia;
botões;
proporções;
minimalismo;
contraste;
distribuição das informações.

Não copie literalmente os componentes da imagem.

Utilize a linguagem visual dela para criar uma identidade própria para o Da Pra Hoje.

1. Conceito principal do produto

O nome do produto é:

Da Pra Hoje

A principal pergunta que o sistema deve responder é:

“Dá pra hoje?”

O profissional deve conseguir abrir o sistema e descobrir imediatamente:

quem é o próximo cliente;
qual o próximo horário;
qual serviço será realizado;
quanto será cobrado;
quais horários ainda estão disponíveis;
quantos atendimentos existem hoje;
quanto está previsto para o dia.

O sistema não deve parecer um ERP, CRM ou software administrativo complexo.

A ideia é:

abrir → olhar → entender → agir.

A experiência precisa ser simples o suficiente para alguém aprender a usar praticamente sozinho em poucos minutos.

2. Público-alvo

O sistema será utilizado principalmente por:

barbeiros;
cabeleireiros;
tatuadores;
manicures;
designers de sobrancelha;
esteticistas;
massagistas;
personal trainers;
fotógrafos;
profissionais de beleza;
profissionais autônomos;
pequenos negócios que trabalham com agendamento.

A maioria desses profissionais provavelmente utilizará a aplicação pelo celular durante o trabalho.

Portanto:

o projeto deve ser mobile-first.

Porém, a experiência desktop também precisa ser excelente.

Não quero simplesmente uma interface mobile esticada para telas grandes.

3. Direção visual — Clean UI

A interface deve seguir uma estética semelhante à referência enviada.

Quero uma combinação de:

Clean UI + minimalismo editorial + aplicação moderna.

A aparência deve transmitir:

organização;
leveza;
rapidez;
simplicidade;
confiança;
modernidade.

Usar predominantemente:

branco;
off-white;
cinza muito claro;
preto;
tons neutros.

Uma cor de destaque da marca pode existir, porém deve ser utilizada com moderação.

O visual principal deve continuar limpo e neutro.

4. Fundo da aplicação

Evitar fundo completamente branco com cards desaparecendo sobre ele.

Utilizar preferencialmente um fundo muito claro, como:

#F7F7F5
#F8F8F7
#FAFAF9

Os elementos principais podem ficar sobre cards brancos.

Exemplo:

background geral: #F7F7F5

cards:
#FFFFFF

Isso deve criar a mesma sensação de profundidade sutil vista na referência.

5. Cards

Os cards são importantes, porém não quero transformar tudo em card.

Usar cards apenas quando ajudarem a agrupar informações.

Características:

fundo branco;
border-radius entre 14px e 20px;
borda extremamente discreta;
sombra quase imperceptível;
padding consistente;
conteúdo compacto.

Exemplo:

border: 1px solid rgba(0,0,0,0.04);

box-shadow:
0 2px 8px rgba(0,0,0,0.025);

Evitar:

sombras pesadas;
glassmorphism;
gradientes chamativos;
cards dentro de cards;
bordas grossas;
excesso de separadores.
6. Tipografia

Utilizar uma fonte moderna, limpa e extremamente legível.

Sugestões:

Inter, Geist, Manrope ou equivalente.

A tipografia deve criar grande parte da identidade visual.

Hierarquia sugerida:

Título principal:
28–32px
600 / 650

Título de seção:
18–20px
600

Informação principal:
20–26px
600

Texto normal:
14–16px
400 / 500

Labels:
12–13px
500

Informações secundárias:
12–14px
400

Evitar utilizar bold excessivamente.

Usar contraste entre:

tamanho;
peso;
espaçamento;
cor.
7. Cores e contraste

A principal ação da interface deve utilizar:

preto ou quase preto.

Exemplo:

#111111
#171717

Botões principais:

fundo: preto
texto: branco

Botões secundários:

fundo: cinza muito claro
texto: preto

Status podem utilizar cores suaves.

Exemplo:

Confirmado:
verde muito suave

Agendado:
azul muito suave

Concluído:
cinza

Cancelado:
vermelho suave

Não compareceu:
laranja suave

As cores nunca devem dominar a tela.

8. Botões

Seguir o estilo clean da referência.

Botões devem ser:

compactos;
claros;
arredondados;
fáceis de identificar.

Preferencialmente:

border-radius: 10–14px
altura: 40–46px

Botão principal:

background: #111
color: #FFF

Exemplo:

+ Novo agendamento

Evitar botões gigantes.

No mobile, ações importantes podem ocupar toda a largura quando fizer sentido.

9. Ícones

Utilizar ícones simples em estilo outline.

Preferência:

Lucide Icons ou equivalente.

Não misturar diferentes estilos de ícones.

Ícones devem complementar a informação, não substituir textos importantes.

10. Espaçamento

A referência visual possui bastante organização, porém não quero desperdício de espaço.

O sistema precisa ser:

arejado sem ser vazio.

Utilizar um sistema consistente como:

4px
8px
12px
16px
20px
24px
32px

Evitar grandes espaços de 60–100px sem necessidade.

11. Tela principal — Hoje

Essa é a tela mais importante de toda a aplicação.

Quando o profissional abrir o sistema, quero que veja imediatamente algo semelhante a:

Boa tarde, João

Sábado, 19 de setembro

          + Novo agendamento

Logo abaixo:

Próximo atendimento

Criar um card clean com destaque para o horário.

Exemplo:

PRÓXIMO ATENDIMENTO

14:30

Matheus Silva
Corte + Barba

1h        R$ 60

Confirmado

[ Ver atendimento ]

O horário deve ter forte destaque visual.

Não precisa utilizar muitas cores.

12. “Dá pra hoje?”

Essa seção deve ser uma das assinaturas visuais do produto.

Exemplo:

Dá pra hoje?

Sim.

3 horários disponíveis

15:30    16:30    18:00

Ou:

Dá pra hoje?

3 horários livres

15:30
16:30
18:00

Os horários podem aparecer como pequenos chips/botões arredondados.

Ao clicar:

abrir imediatamente a criação de agendamento naquele horário.

Não obrigar o usuário a selecionar a hora novamente.

13. Resumo do dia

Criar um resumo pequeno e elegante.

Não quero quatro cards gigantes separados.

Preferir algo compacto:

Hoje

6 atendimentos
3 disponíveis
R$ 320 previstos

No desktop, pode aparecer horizontalmente:

6 atendimentos    3 disponíveis    R$ 320 previstos

No mobile pode utilizar três pequenas áreas lado a lado ou uma estrutura adaptável.

14. Agenda de hoje

Depois das informações principais, mostrar:

Agenda de hoje

Exemplo:

09:00

Carlos Mendes
Corte
30 min • R$ 40

Confirmado

Depois:

10:00

Pedro Santos
Corte + Barba
1h • R$ 60

Horário disponível:

11:30

Disponível

+ Agendar

A diferença entre horários ocupados e disponíveis precisa ser percebida imediatamente.

15. Visual dos horários

Evitar criar enormes cards individuais para cada horário.

A agenda deve parecer uma lista/timeline compacta.

Exemplo desktop:

09:00   Carlos Mendes       Corte             30 min    R$ 40   Confirmado
10:00   Pedro Santos        Corte + Barba      1h        R$ 60   Confirmado
11:30   Disponível                                         + Agendar
13:00   Lucas Oliveira      Barba             30 min    R$ 30   Agendado
14:30   Matheus Silva       Corte + Barba      1h        R$ 60   Confirmado
15:30   Disponível                                         + Agendar

No celular, transformar cada linha naturalmente em uma composição vertical:

14:30

Matheus Silva
Corte + Barba

1h • R$ 60

Confirmado
16. Interações da agenda

Ao clicar em um horário vazio:

abrir diretamente:

Novo agendamento

com:

Data: 19/09
Horário: 15:30

já preenchidos.

Ao clicar em um atendimento:

abrir detalhes.

Permitir:

editar;
confirmar;
concluir;
cancelar;
marcar ausência.

Evitar navegar para várias páginas desnecessariamente.

17. Criar agendamento

O processo precisa ser extremamente rápido.

Preferir:

Bottom Sheet no mobile

e

Drawer lateral no desktop.

Não utilizar uma nova página completa se não for necessário.

Campos:

Cliente

Nome
Telefone

Serviço

Data

Horário

Duração

Valor

Observação

Botão:

Agendar horário

18. Progressive disclosure

Não mostrar todos os campos avançados imediatamente.

Por exemplo:

Cliente
Serviço
Data
Horário

+ Mais opções

Ao abrir:

Duração
Valor
Observações

Isso mantém o formulário simples.

19. Clientes

Criar uma página extremamente simples.

Topo:

Clientes

[ Buscar cliente... ]

+ Novo cliente

Lista:

João Silva
(17) 99999-9999

12 atendimentos
Último: 12/09

Não criar CRM.

Não incluir:

funil;
lead score;
pipeline;
oportunidades;
automações complexas.
20. Perfil do cliente

Exemplo:

João Silva

(17) 99999-9999

12 atendimentos
R$ 540 em serviços

Histórico:

12 set

Corte
R$ 40

29 ago

Corte + Barba
R$ 60

Layout clean e predominantemente tipográfico.

21. Serviços

Tela:

Serviços

+ Novo serviço

Exemplo:

Corte

30 min
R$ 40

Ativo

Outro:

Corte + Barba

1h
R$ 60

Ativo

Permitir:

adicionar;
editar;
excluir;
ativar/desativar.

Preferir edição rápida via drawer/modal.

22. Horário de funcionamento

Criar uma interface extremamente simples.

Exemplo:

Segunda

09:00              18:00
Terça

09:00              18:00
Domingo

Fechado

Permitir ligar/desligar um dia com toggle.

23. Bloquear horário

Adicionar opção:

Bloquear horário

Exemplo:

Data
20/09

De
14:00

Até
16:00

Motivo
Compromisso pessoal

Motivo deve ser opcional.

24. Agenda

Criar três modos:

Hoje
Dia
Semana

Utilizar um segmented control compacto.

Exemplo:

[ Hoje ] [ Dia ] [ Semana ]

O padrão deve sempre ser:

Hoje

Não quero inicialmente:

mês;
ano;
agenda extremamente complexa;
calendário estilo Outlook completo.
25. Semana

A visualização semanal no desktop pode apresentar colunas compactas.

No celular, evitar tentar encaixar sete colunas minúsculas.

Para mobile, utilizar:

navegação horizontal;
seletor de dia;
swipe;
tabs compactas.

Exemplo:

Seg  Ter  Qua  Qui  Sex  Sáb
14   15   16   17   18   19
                         ●

E abaixo mostrar os horários daquele dia.

26. Página pública do profissional

Cada profissional deve possuir algo como:

daparahoje.com/joaobarber

A página pública precisa ser ainda mais simples que o painel administrativo.

Exemplo:

João Barber

Barbearia
São José do Rio Preto

Dá pra hoje?

Sim.

Próximo horário

14:30

Depois:

Horários disponíveis

14:30
15:00
16:30
17:00
27. Fluxo público de agendamento

O cliente não deve precisar criar conta.

Fluxo:

1. Escolher horário
2. Escolher serviço
3. Informar nome e telefone
4. Confirmar

Não criar etapas desnecessárias.

Sempre mostrar progresso discretamente.

Exemplo:

1 de 3
28. Confirmação

Seguir uma estética semelhante ao card de sucesso da referência.

Exemplo:

✓

Agendamento confirmado

Corte + Barba

Hoje às 16:30

João Barber

[ Concluir ]

Simples e centralizado.

29. Quando não existir horário hoje

Mostrar:

Dá pra hoje?

Hoje não temos mais horários.

Depois:

Próximo disponível

Amanhã
09:30

CTA:

Ver horários de amanhã

Isso reforça a identidade do produto.

30. Navegação desktop

Criar uma navegação extremamente limpa.

Pode utilizar sidebar compacta.

Exemplo:

Da Pra Hoje

Hoje
Agenda
Clientes
Serviços

Configurações

Nada além disso no MVP.

Evitar sidebar muito larga.

Algo entre:

200–240px

é suficiente.

31. Navegação mobile

No celular utilizar bottom navigation.

Exemplo:

Hoje
Agenda
Clientes
Mais

O botão de adicionar agendamento pode possuir destaque.

Por exemplo:

       +
Hoje Agenda Clientes Mais

Ou botão flutuante discreto quando fizer sentido.

Não esconder a ação principal dentro de menus difíceis de encontrar.

32. Desktop

No desktop, aproveitar melhor a largura.

Exemplo:

┌───────────────┬─────────────────────────────────────┐
│               │                                     │
│ Da Pra Hoje   │ Boa tarde, João                     │
│               │ Sábado, 19 de setembro              │
│ Hoje          │                                     │
│ Agenda        │ ┌─────────────────────────────────┐ │
│ Clientes      │ │ Próximo atendimento             │ │
│ Serviços      │ │ 14:30                           │ │
│               │ │ Matheus • Corte + Barba         │ │
│               │ └─────────────────────────────────┘ │
│ Configurações │                                     │
│               │ Dá pra hoje?                       │
│               │ 15:30  16:30  18:00               │
│               │                                     │
│               │ Agenda de hoje                     │
│               │ 09:00 Carlos       Corte           │
│               │ 10:00 Pedro        Corte + Barba   │
│               │ 11:30 Disponível   + Agendar       │
│               │                                     │
└───────────────┴─────────────────────────────────────┘

Não ocupar toda a largura com conteúdo esticado.

Utilizar:

max-width: 1200px;

ou valor semelhante quando apropriado.

33. Mobile

O mobile é prioridade absoluta.

Em telas pequenas:

nada pode ficar cortado;
nada pode ultrapassar horizontalmente;
textos não podem quebrar de forma estranha;
botões devem ser facilmente tocáveis;
informações importantes devem aparecer primeiro;
cards devem ocupar a largura disponível;
modais devem virar bottom sheets quando fizer sentido.

Padding lateral sugerido:

16px
34. Scroll

Não bloquear o scroll da aplicação.

Isso é extremamente importante.

Nunca criar:

body {
  overflow: hidden;
}

como solução global.

A página precisa possuir scroll vertical natural sempre que o conteúdo ultrapassar a viewport.

Evitar layouts dependentes de:

height: 100vh;

quando isso puder cortar conteúdo.

Preferir:

min-height: 100dvh;

e deixar o conteúdo crescer.

35. Responsividade

Criar e testar pelo menos nestas larguras:

320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px

Não permitir:

overflow horizontal
componentes cortados
botões fora da tela
modal maior que viewport
cards com largura fixa inadequada
textos escapando
36. Empty states

Toda página sem conteúdo deve possuir um estado vazio útil.

Exemplo Agenda:

Sua agenda está livre hoje.

Que tal adicionar seu primeiro atendimento?

[ Novo agendamento ]

Clientes:

Nenhum cliente ainda.

Os clientes adicionados aos agendamentos
aparecerão aqui.
37. Loading states

Evitar loaders gigantes.

Utilizar skeletons discretos.

Por exemplo:

████████████
██████

████████████████████
██████████

Manter o layout estável durante o carregamento.

38. Feedback de ações

Utilizar toast discreto.

Exemplos:

Agendamento criado.
Cliente atualizado.
Horário bloqueado.

Não utilizar alertas JavaScript nativos.

39. Microinterações

Adicionar animações extremamente sutis.

Exemplo:

hover: 120–180ms
drawer: 180–250ms
modal: fade + scale extremamente leve

Nada exagerado.

Evitar:

bounce;
animações longas;
elementos voando;
efeitos chamativos.
40. Acessibilidade

Garantir:

contraste suficiente;
labels reais;
navegação por teclado;
focus states;
aria-label quando necessário;
áreas clicáveis grandes no mobile;
HTML semântico.

Tamanho mínimo confortável para interação:

40–44px
41. Personalidade da marca

A comunicação deve parecer humana.

Utilizar frases como:

“Dá pra hoje?”

“Tem sim.”

“Você ainda tem 3 horários livres hoje.”

“Próximo atendimento em 40 minutos.”

“Agenda cheia por hoje.”

“Seu próximo horário livre é às 16:30.”

“Hoje está tranquilo.”

Evitar linguagem como:

Gerenciamento de disponibilidade operacional.

Preferir:

Seus horários de hoje.

42. Logo

Criar uma identidade simples baseada em:

Da Pra Hoje

ou

Dá pra hoje?

Pode existir um pequeno símbolo inspirado em:

horário;
disponibilidade;
relógio;
check;
calendário.

Porém o símbolo deve ser extremamente simples.

O wordmark deve funcionar sozinho.

43. O que NÃO quero

Não criar aparência de:

ERP;
painel administrativo antigo;
dashboard financeiro;
template Bootstrap;
dashboard SaaS genérico;
projeto gerado automaticamente por IA;
sistema empresarial complexo.

Evitar completamente:

dezenas de cards;
gráficos sem necessidade;
gradientes exagerados;
glassmorphism;
sombras fortes;
bordas excessivas;
excesso de cores;
menus enormes;
tabelas gigantes;
ícones decorativos;
informações duplicadas;
grandes áreas vazias;
widgets apenas para preencher espaço.
44. Referências conceituais

Utilizar como referência de qualidade:

Linear;
Notion;
Stripe;
Raycast;
interfaces modernas de aplicativos mobile.

Porém a composição visual deve se aproximar principalmente da Clean UI apresentada na imagem de referência:

fundo off-white;
cards brancos;
preto predominante;
tipografia forte;
pequenos elementos arredondados;
contraste alto nas ações;
informações resumidas;
componentes compactos;
interface leve.

Não copiar nenhuma dessas marcas diretamente.

O produto precisa possuir identidade própria.

45. Estrutura técnica

Organizar o projeto profissionalmente.

Separar:

components/
features/
pages ou routes/
hooks/
services/
lib/
types/
utils/
validations/

Separar:

UI;
regra de negócio;
acesso ao banco;
autenticação;
validação;
manipulação de datas;
disponibilidade;
agendamentos.

Não colocar regras complexas diretamente dentro dos componentes visuais.

46. Componentes reutilizáveis

Criar componentes como:

Button
IconButton
Input
Select
Textarea
Modal
Drawer
BottomSheet
Dialog
Badge
StatusBadge
Avatar
EmptyState
Skeleton
Toast
DatePicker
TimePicker
AppointmentItem
AvailableSlot
ServiceItem
ClientItem
PageHeader
SectionHeader
BottomNavigation
Sidebar

Manter consistência visual entre todas as telas.

47. Arquitetura da agenda

A disponibilidade deve considerar:

horário de funcionamento
-
horários bloqueados
-
horários ocupados
=
horários disponíveis

Evitar permitir dois agendamentos no mesmo período.

Considerar duração do serviço.

Exemplo:

Serviço:
14:00 → 15:00

Logo:

14:30 não pode aparecer disponível.
48. Datas e horários

Como o público inicial é brasileiro:

usar:

dd/mm/yyyy

14:30

R$ 60,00

Internamente, manter tratamento consistente de timezone e datas.

Evitar erros causados por UTC.

49. MVP

Priorizar:

autenticação;
cadastro do profissional/negócio;
serviços;
horário de funcionamento;
clientes;
agenda;
criar agendamento;
editar agendamento;
cancelar;
concluir;
bloquear horários;
disponibilidade;
página pública;
agendamento público;
“Dá pra hoje?”.

Não adicionar funcionalidades avançadas antes dessas estarem sólidas.

50. Não implementar agora

Não priorizar inicialmente:

estoque;
comissão;
folha de pagamento;
emissão fiscal;
marketplace;
programa de fidelidade complexo;
automação de marketing;
chatbot;
relatórios avançados;
analytics enormes;
múltiplos dashboards;
sistema financeiro completo;
dezenas de níveis de permissão.

Esses recursos podem existir futuramente.

51. Experiência final esperada

Quero que o Da Pra Hoje pareça um aplicativo que alguém realmente gostaria de manter aberto durante todo o expediente.

Ao abrir a aplicação, em no máximo alguns segundos o profissional precisa responder:

Quem é meu próximo cliente?

Que horas?

Qual serviço?

Quanto vou receber?

Tenho horário disponível hoje?

Qual é o próximo horário livre?

Tudo isso deve acontecer sem navegar por várias páginas.

52. Princípio central de UX

Antes de adicionar qualquer elemento, perguntar:

Isso ajuda o profissional a entender ou administrar sua agenda mais rápido?

Se não:

não adicionar.

53. Princípio visual central

Aplicar a seguinte regra em todas as telas:

Menos elementos, mais clareza.

A interface deve ser visualmente sofisticada não por possuir muitos efeitos, mas por possuir:

excelente tipografia;
excelente espaçamento;
excelente alinhamento;
excelente hierarquia;
excelente proporção;
excelente uso de branco e preto;
componentes cuidadosamente dimensionados.
54. Resultado esperado

O resultado final deve parecer uma mistura de:

aplicativo de agenda profissional + Clean UI editorial + experiência mobile extremamente simples.

Quero uma interface que visualmente transmita:

“É tão simples que eu consigo usar agora.”

E não:

“Preciso aprender como esse sistema funciona.”

O Da Pra Hoje deve ser rápido, compacto, elegante, responsivo e extremamente fácil de usar.

Mobile-first, mas excelente no desktop.

A tela Hoje e a função “Dá pra hoje?” devem ser os elementos centrais de toda a experiência.