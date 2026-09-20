Analise profundamente o estado ATUAL do repositório antes de realizar qualquer alteração:

https://github.com/kaueajure/daprahoje

IMPORTANTE:

Use como base o último commit disponível no `main`.

Não trabalhe baseado em versões antigas do projeto.

Antes de alterar qualquer coisa:

* leia o último commit;
* compare com o commit anterior;
* analise a implementação atual;
* leia os arquivos da landing;
* revise as rotas;
* revise os providers;
* revise SEO;
* revise metadata;
* revise página pública;
* revise os textos atualmente exibidos;
* revise os mocks;
* revise componentes compartilhados;
* revise o estado atual do produto.

O objetivo desta etapa NÃO é recriar a Home.

A Home atual está visualmente boa e estruturalmente muito melhor.

Quero realizar uma rodada FINAL de refinamento para:

**reduzir repetição, melhorar a comunicação, corrigir inconsistências restantes, melhorar SEO, acessibilidade e preparar a aplicação para a futura implementação de backend.**

---

# CONTEXTO DO PRODUTO

O produto se chama:

**Da Pra Hoje**

É uma agenda online simples voltada a profissionais autônomos e pequenos negócios que trabalham com horários marcados.

Exemplos:

* barbeiros;
* cabeleireiros;
* manicures;
* tatuadores;
* esteticistas;
* massagistas;
* designers de sobrancelha;
* personal trainers;
* fotógrafos;
* outros profissionais que trabalham com agendamento.

A principal ideia do produto é permitir que o profissional abra a agenda e entenda rapidamente:

* quem é o próximo cliente;
* quais horários estão ocupados;
* quais horários ainda estão livres;
* se ainda cabe um atendimento hoje.

O nome “Da Pra Hoje” nasce da pergunta que clientes fazem o tempo todo:

**“Dá pra hoje?”**

Essa pergunta é importante para a identidade do produto.

Porém ela NÃO deve aparecer repetidamente em praticamente todas as seções da Home.

A identidade deve ser forte sem se tornar repetitiva.

---

# 1. PROBLEMA PRINCIPAL DE COPY: REPETIÇÃO EXCESSIVA

Atualmente a página repete demais conceitos e frases como:

“Dá pra hoje?”

“Tem sim.”

“horários livres”

“agenda online”

“em segundos”

“cliente agenda”

“sem complicação”

“horário marcado”

Isso faz com que, depois de algumas seções, a landing comece a parecer que está dizendo a mesma coisa várias vezes.

Quero corrigir isso.

A página precisa funcionar como uma narrativa.

Cada seção deve responder uma pergunta diferente.

Por exemplo:

Hero:

**O que é o produto?**

Problema:

**Qual problema ele resolve?**

Diferencial:

**O que torna o Da Pra Hoje diferente?**

Como funciona:

**Como começo a usar?**

Produto:

**O que existe dentro do sistema?**

Página pública:

**Como funciona a experiência do cliente?**

Público:

**Para quem serve?**

Benefícios:

**O que muda no meu dia?**

Simplicidade:

**Por que usar isso em vez de um sistema complexo?**

CTA:

**Qual é o próximo passo?**

FAQ:

**Quais dúvidas ainda ficaram?**

Revise TODOS os textos da landing com essa lógica.

Não permitir que duas seções consecutivas tenham praticamente a mesma mensagem.

---

# 2. REDUZIR A REPETIÇÃO DE “DÁ PRA HOJE?”

“Dá pra hoje?” é uma assinatura importante da marca.

Não quero removê-la.

Porém ela deve aparecer nos momentos certos.

Ela não precisa aparecer:

* no Hero;
* no mock;
* na seção de diferencial;
* novamente em outra seção;
* no CTA;
* no footer;
* na imagem OG;

tudo de forma quase consecutiva.

Isso enfraquece o impacto da frase.

Use “Dá pra hoje?” de maneira estratégica.

Recomendação de distribuição:

### Hero

O Hero pode comunicar a proposta sem obrigatoriamente repetir literalmente “Dá pra hoje?” como frase principal.

Exemplo de direção:

**Sua agenda, simples de entender.**

ou:

**Veja seu dia. Encontre horários. Continue trabalhando.**

ou outra headline clara e forte.

A marca já se chama Da Pra Hoje.

Não é necessário repetir o nome/conceito três vezes na primeira dobra.

### Seção diferencial

Aqui SIM “Dá pra hoje?” pode ser o grande momento da marca.

Essa deve ser a principal seção responsável por explicar o conceito.

Exemplo:

**A resposta que você precisa durante o expediente**

e dentro do componente:

“Dá pra hoje?”

“Dá sim.”

### CTA final

Pode utilizar novamente:

**E aí, dá pra hoje?**

porque funciona bem como fechamento da página.

Portanto, idealmente a pergunta completa deve aparecer como grande elemento em aproximadamente **2 momentos principais**, não em praticamente toda a landing.

Pode aparecer ocasionalmente em conteúdo secundário, mas não de maneira excessiva.

---

# 3. TROCAR “TEM SIM” POR “DÁ SIM”

Esta alteração é obrigatória.

Em TODO o projeto onde o conceito estiver relacionado à pergunta:

“Dá pra hoje?”

a resposta positiva deve deixar de ser:

**“Tem sim.”**

e passar a ser:

**“Dá sim.”**

Isso combina muito mais com a identidade verbal da marca.

Pergunta:

**Dá pra hoje?**

Resposta:

**Dá sim.**

Fica muito mais memorável.

Faça uma busca no projeto inteiro por:

* `Tem sim`
* `Tem sim.`
* `tem sim`
* variações equivalentes

e substitua quando estiverem relacionadas a esse conceito.

Verifique principalmente:

* landing;
* mocks da landing;
* tela Hoje;
* página pública;
* Open Graph;
* exemplos;
* textos demonstrativos;
* documentação relevante caso represente a UI atual.

Não faça substituição burra em frases que possuam outro significado.

---

# 4. CRIAR UMA IDENTIDADE VERBAL MAIS CONSISTENTE

A marca pode trabalhar com um pequeno sistema de linguagem.

Pergunta:

**Dá pra hoje?**

Resposta positiva:

**Dá sim.**

Resposta negativa:

**Hoje não dá mais.**

ou:

**Hoje não temos mais horários.**

Analise qual versão combina mais com o restante da aplicação.

A ideia é fazer a linguagem parecer própria do Da Pra Hoje.

Outras possíveis mensagens:

**Ainda cabem 3 atendimentos hoje.**

**Seu próximo horário é às 14:30.**

**Você ainda tem 2 horários livres.**

**Dia cheio por aqui.**

Não force humor.

Não transforme tudo em slogan.

A linguagem deve continuar simples e funcional.

---

# 5. HERO — REDUZIR REPETIÇÃO E MELHORAR POSICIONAMENTO

Atualmente o Hero está muito ligado novamente ao conceito:

“Uma agenda que responde: dá pra hoje?”

Embora seja uma boa frase isoladamente, a pergunta volta a aparecer em vários outros pontos.

Quero uma headline que explique o produto sem gastar imediatamente a principal assinatura da marca.

Crie uma nova headline.

Ela deve comunicar:

* agenda;
* simplicidade;
* rotina do profissional;
* visão rápida do dia.

Direções possíveis:

**Sua agenda, sem complicação.**

**Organize seus horários sem perder tempo.**

**Sua agenda inteira, fácil de entender.**

**Veja seu dia. Organize seus horários. Continue atendendo.**

Não copie necessariamente essas frases.

Encontre a melhor solução.

Evite headlines genéricas de SaaS.

Não usar:

“Potencialize seu negócio.”

“Transforme sua produtividade.”

“Revolucione seus agendamentos.”

“Eleve sua gestão.”

A linguagem precisa continuar sendo Da Pra Hoje.

---

# 6. HERO — MANTER DEMONSTRAÇÃO CLARA

Enquanto não existir backend e autenticação reais, preservar a transparência.

Continuar deixando claro que o sistema atual é uma:

**demonstração.**

Porém não precisa repetir “demonstração” em todas as seções.

Pode existir:

badge:

**Demonstração disponível**

ou:

**Teste a demonstração**

no Hero.

Depois disso a página não precisa ficar lembrando o visitante a cada bloco.

---

# 7. HERO — SUBHEADLINE

A subheadline deve explicar o produto de forma curta.

Evitar repetir literalmente tudo que será mostrado nas próximas seções.

Objetivo:

aproximadamente 1–2 linhas no desktop.

Ela pode comunicar:

* organização do dia;
* atendimentos;
* horários livres.

Não precisa incluir:

* página pública;
* cliente agenda;
* todos os públicos;
* demonstração;
* todas as funcionalidades;

na mesma frase.

---

# 8. SEÇÃO “PROBLEMA”

Preserve:

**O cliente pergunta. Você some na agenda.**

Essa headline combina muito bem com a marca.

A seção deve permanecer centrada no problema real:

* WhatsApp;
* procurar horários;
* calcular duração;
* responder manualmente;
* interromper atendimento.

Não repetir novamente:

“Dá pra hoje?”

como headline grande aqui.

A mensagem do cliente:

“Tem horário hoje?”

já contextualiza suficientemente o problema.

---

# 9. BLOCO “COM O DA PRA HOJE”

Hoje existem frases como:

* abrir o painel;
* horários livres;
* menos WhatsApp;
* saber onde cabe cliente.

Preserve o conceito.

Mas revise para evitar dizer novamente exatamente as mesmas coisas que Hero e benefícios.

Pode ficar algo mais operacional:

**Com o Da Pra Hoje**

* Veja o dia em uma única tela
* Identifique espaços disponíveis
* Organize bloqueios e atendimentos
* Responda clientes sem fazer conta de cabeça

Isso diferencia melhor a seção.

---

# 10. SEÇÃO DO DIFERENCIAL

Esta deve ser a principal seção da identidade “Dá pra hoje?”.

Concentre aqui o momento mais marcante.

Pode utilizar algo como:

Eyebrow:

**O diferencial**

Título:

**Saiba se ainda cabe mais um atendimento**

Texto:

Explique que disponibilidade é calculada considerando:

* horário de funcionamento;
* atendimentos existentes;
* bloqueios;
* duração do serviço.

Depois mostrar o card:

**Dá pra hoje?**

**Dá sim.**

3 horários disponíveis

14:30
16:00
17:30

Essa deve ser a principal demonstração visual do conceito.

Não repetir exatamente esse mesmo card em outros pontos da Home.

---

# 11. MOCK DO HERO

Atualmente `MockHojeCard` também contém o bloco:

“Dá pra hoje?”

“Tem sim”

e horários.

Isso cria repetição porque logo depois existe uma seção especificamente dedicada a isso.

Refatore.

O mock principal do Hero deve mostrar outras partes importantes do produto:

* próximo atendimento;
* resumo do dia;
* quantidade de atendimentos;
* horários disponíveis;
* faturamento previsto;
* pequena timeline.

Mas NÃO precisa reproduzir novamente o mesmo grande bloco “Dá pra hoje?” que será mostrado na seção diferencial.

Pode existir uma informação compacta de disponibilidade, mas sem repetir visualmente a mesma composição.

Exemplo:

Resumo:

4 atendimentos
3 horários livres
R$ 280 previstos

Próximo atendimento:

14:00
Carlos Mendes
Corte + barba

Isso já comunica bastante.

---

# 12. MOCKS NÃO DEVEM REPETIR ENTRE SI

Faça uma revisão de:

`MockHojeCard`

`MockAgendaLista`

`MockServicos`

`MockPublicoCard`

Cada um deve ensinar algo diferente.

### MockHojeCard

Foco:

**visão geral do dia.**

### MockAgendaLista

Foco:

**ordem dos horários, ocupados, livres e bloqueados.**

### MockServicos

Foco:

**duração e preço.**

### MockPublicoCard

Foco:

**experiência do cliente.**

Evitar colocar “Dá pra hoje?” em todos eles.

---

# 13. MOCK DA PÁGINA PÚBLICA

O Mock da página pública não precisa repetir:

“Dá pra hoje?”

Pode apresentar diretamente:

**Escolha um horário**

Hoje, 20 de setembro

14:30
16:00
17:30

Depois:

**Escolha o serviço**

Corte
Barba
Corte + barba

Isso deixa a página mais realista e diminui a repetição do slogan.

---

# 14. SEÇÃO “COMO FUNCIONA”

Preservar os quatro passos.

Porém revisar o texto.

Não repetir excessivamente:

* “horários disponíveis”;
* “agenda”;
* “Dá pra hoje”.

Cada passo deve ter uma função específica.

Sugestão conceitual:

### 1. Configure seu trabalho

Cadastre seus serviços, duração, valores e horário de atendimento.

### 2. Organize seu dia

Adicione atendimentos e bloqueie períodos quando precisar.

### 3. Prepare sua página

Veja como seus clientes poderão escolher serviço e horário.

### 4. Trabalhe com mais clareza

Abra o painel e entenda rapidamente como está o dia.

Enquanto for demonstração local, cuidado ao prometer compartilhamento real entre dispositivos.

---

# 15. SEÇÃO DO PRODUTO

Manter:

**Veja como o Da Pra Hoje funciona**

ou encontrar uma pequena melhoria se necessário.

Não repetir a mesma proposta em todos os subtítulos.

Hoje:

mostrar visão geral.

Agenda:

mostrar organização temporal.

Serviços e clientes:

mostrar informações necessárias ao atendimento.

Pode considerar separar “Serviços e clientes” visualmente caso o mock mostre apenas serviços.

Não dizer “clientes” se nenhuma informação sobre cliente estiver representada no mock.

---

# 16. SEÇÃO DA PÁGINA PÚBLICA

Esta seção ainda precisa ficar completamente coerente com o estado atual do produto.

Hoje ainda não existe sincronização real entre navegador do cliente e painel do profissional.

Portanto evitar headline que possa ser interpretada como uma funcionalidade pronta para produção.

Atualmente:

**Seu link. O cliente agenda.**

Refine.

Possíveis direções:

**Veja como seus clientes poderão agendar**

ou:

**Uma página simples para escolher horário e serviço**

ou:

**O agendamento do ponto de vista do cliente**

Não precisa usar literalmente essas opções.

Objetivo:

mostrar a experiência sem fazer promessa tecnicamente falsa.

Inclua uma nota discreta e clara:

**Na demonstração, o fluxo funciona com dados locais no mesmo navegador.**

Não repetir essa explicação em cinco pontos.

Uma vez nessa seção e uma vez no FAQ é suficiente.

---

# 17. BENEFÍCIOS — ELIMINAR REPETIÇÃO

Hoje alguns benefícios repetem exatamente mensagens já apresentadas.

Revise os quatro cards.

Eles devem focar em CONSEQUÊNCIAS positivas.

Exemplos de direções:

### Menos tempo conferindo horários

Encontre espaços disponíveis sem revisar o dia inteiro manualmente.

### Menos interrupção durante o atendimento

Consulte o que precisa rapidamente e volte ao trabalho.

### Mais clareza na rotina

Veja atendimentos, espaços livres e bloqueios no mesmo lugar.

### Simples no celular

Uma interface pensada para usar entre um cliente e outro.

Perceba:

não é necessário repetir “cliente agenda” novamente.

---

# 18. SEÇÃO “NÃO É UM ERP”

Preserve:

**Não é um ERP. É a agenda que você consegue usar.**

Essa headline continua muito boa.

Porém revise o parágrafo para não repetir novamente:

* simples;
* sem complicação;
* poucos menus;

exatamente nas mesmas palavras de outras seções.

Pode reforçar:

* foco;
* velocidade;
* somente o necessário.

---

# 19. CTA FINAL

Preservar:

**E aí, dá pra hoje?**

Aqui a repetição é intencional e funciona como fechamento.

Botão:

**Testar demonstração**

Pode permanecer.

Texto abaixo/ao lado não precisa explicar novamente toda a proposta.

Algo curto.

Exemplo:

**Abra o painel e explore o fluxo completo.**

Isso é suficiente.

---

# 20. OPEN GRAPH — TROCAR “TEM SIM”

Na imagem Open Graph atual existe:

**Tem sim · horários livres na hora**

Alterar obrigatoriamente.

Primeiro:

**Tem sim** → **Dá sim**

Além disso, “horários livres na hora” possui uma leitura um pouco estranha.

Sugestões:

**Dá sim · veja seus horários em segundos**

ou:

**Dá sim · 3 horários disponíveis**

ou simplesmente:

**Dá sim.**

Analise a composição.

Não sobrecarregar a imagem.

---

# 21. OPEN GRAPH — UTILIZAR A LOGO REAL

Atualmente a imagem OG cria uma representação:

`DPH`

dentro de um quadrado preto.

Não quero uma segunda identidade visual.

Utilize o monograma real da marca, já presente nos assets do projeto.

A Open Graph deve ser coerente com:

* favicon;
* header;
* painel;
* identidade atual.

Não inventar outro símbolo.

Se tecnicamente carregar a logo dentro de `ImageResponse` for inconveniente, implemente da maneira correta suportada pelo Next/edge runtime.

Não recriar manualmente a marca com texto.

---

# 22. PÁGINAS `/{slug}` — NOINDEX ENQUANTO FOREM DEMO

Este item é obrigatório.

Atualmente:

`app/[slug]/page.tsx`

depende de `localStorage`.

O servidor não possui banco de dados capaz de confirmar se um profissional realmente existe.

Portanto as páginas públicas ainda NÃO devem ser indexadas pelo Google.

Adicionar metadata no layout de `[slug]`:

* `index: false`
* `follow: false`

Enquanto o sistema continuar local.

Não bloquear via robots.txt.

O crawler pode acessar e ler o `noindex`.

---

# 23. FUTURA IMPLEMENTAÇÃO DE SLUG

Não implementar backend agora.

Mas deixar a estrutura preparada para o futuro.

Quando existir persistência no servidor:

`/{slug}`

deverá:

1. buscar o profissional;
2. retornar página real caso exista;
3. gerar metadata específica;
4. permitir indexação se apropriado;
5. retornar `notFound()` se o slug não existir.

Hoje não é para implementar isso.

Apenas não criar arquitetura que dificulte esse futuro.

---

# 24. SOFT 404

Atualmente um slug inexistente pode renderizar uma tela:

“Página não encontrada”

sem necessariamente responder com HTTP 404 real.

Enquanto tudo for local, mantenha as páginas fora do índice.

Documente tecnicamente essa limitação se necessário.

Quando houver backend, utilizar `notFound()` do Next.

---

# 25. MANROPE — USAR FONTE VARIÁVEL

Atualmente existe:

`weight: ["400", "500", "600"]`

no carregamento de Manrope.

Como Manrope possui versão variável, prefira utilizar o arquivo variável.

Remover a definição explícita de pesos se a configuração do Next utilizada no projeto suportar corretamente a fonte variável.

Manter:

* `subsets`;
* `display: "swap"`;
* `variable`.

Evitar carregar arquivos estáticos separados desnecessariamente.

Confirme a implementação com a documentação da versão do Next instalada no projeto.

---

# 26. LOGO — CORRIGIR ACESSIBILIDADE DUPLICADA

Atualmente existe potencial duplicação:

`LogoMark`

possui:

`alt="Da Pra Hoje"`

e o componente:

`Logo`

também adiciona:

`<span className="sr-only">Da Pra Hoje</span>`

Isso pode fazer leitores de tela anunciarem a marca duas vezes.

Corrigir.

Uma opção:

`LogoMark` aceitar:

`decorative?: boolean`

Quando utilizado dentro de um componente que já possui nome acessível:

`alt=""`

Quando utilizado sozinho:

`alt="Da Pra Hoje"`

Outra opção válida pode ser adotada.

O importante é não duplicar o nome acessível.

---

# 27. LOGO DENTRO DE LINK

Nos locais onde já existe:

`aria-label="Da Pra Hoje"`

no `<Link>` pai,

a imagem interna pode ser decorativa.

Evitar:

Link:

“Da Pra Hoje”

*

imagem:

“Da Pra Hoje”

sendo anunciado duas vezes.

Revise:

* header;
* footer;
* sidebar;
* página pública;
* outros usos.

---

# 28. REVISAR TODAS AS OCORRÊNCIAS DE “TEM SIM”

Faça busca global no repositório.

Quero ter certeza de que não reste:

“Tem sim”

como resposta para “Dá pra hoje?”.

Substituir por:

**Dá sim**

nos lugares apropriados.

Verificar:

* `components/landing/`;
* `components/hoje-view.tsx`;
* `components/publico-view.tsx`;
* mocks;
* Open Graph;
* documentação de UI;
* exemplos.

---

# 29. TELA HOJE DO PAINEL

Na funcionalidade real da tela Hoje, revisar a resposta do bloco:

**Dá pra hoje?**

Se existem horários:

utilizar:

**Dá sim.**

Exemplo:

**Dá sim. 3 horários disponíveis.**

Se não existem:

utilizar linguagem coerente.

Exemplo:

**Hoje não dá mais.**

ou:

**Hoje não temos mais horários.**

Escolha a versão mais natural e consistente.

Evitar linguagem engraçadinha demais.

---

# 30. PÁGINA PÚBLICA

Também revisar o texto.

Hoje pode existir algo como:

**Dá pra hoje?**

**Sim.**

Considere utilizar:

**Dá pra hoje?**

**Dá sim.**

Mas só se a presença dessa pergunta fizer sentido na página pública.

Como estamos reduzindo a repetição global, avalie se a página pública precisa mesmo repetir o conceito.

Ela poderia simplesmente mostrar:

**Horários disponíveis hoje**

e deixar “Dá pra hoje?” concentrado no painel e na landing.

Escolha a solução que resulte em melhor UX.

---

# 31. NÃO TRANSFORMAR TODA FRASE EM BRANDING

Esse ponto é importante.

Mesmo com a identidade verbal:

“Dá pra hoje?”

“Dá sim.”

não quero que todos os textos tentem ser criativos.

A maioria da UI deve continuar extremamente funcional.

Exemplo:

bom:

**Próximo atendimento**

bom:

**Horários disponíveis**

bom:

**Bloquear horário**

bom:

**Novo agendamento**

Não transformar tudo em:

“Quem vem agora?”

“Quando dá?”

“Bora organizar?”

etc.

Marca forte também exige saber quando não usar branding.

---

# 32. REVISAR REPETIÇÃO DE “EM SEGUNDOS”

A expressão aparece algumas vezes.

Use uma única vez ou poucas vezes.

Alternativas:

* rapidamente;
* num piscar de olhos;
* de imediato;
* assim que abrir o painel;
* sem procurar.

Mas não substituir todas por sinônimos artificialmente.

Às vezes basta remover.

---

# 33. REVISAR REPETIÇÃO DE “SEM COMPLICAÇÃO”

A frase pertence à identidade original.

Pode permanecer em metadata/tagline ou em uma seção.

Não precisa ser repetida constantemente na Home.

---

# 34. REVISAR “AGENDA ONLINE”

“Agenda online” é importante para SEO.

Não remover completamente.

Mas não precisa aparecer em toda seção.

Priorizar em:

* title;
* description;
* H1 ou texto inicial;
* seção de público;
* FAQ;
* footer.

Isso já fornece contexto suficiente.

---

# 35. SEO — MANTER O QUE FOI CORRIGIDO

Não reverter as melhorias recentes.

Preservar:

* title sem duplicação;
* canonical;
* description;
* metadataBase;
* favicon correto;
* Open Graph;
* Twitter image;
* sitemap simples;
* robots;
* `noindex` do painel;
* ausência de meta keywords;
* schema conservador.

---

# 36. STRUCTURED DATA

Manter somente dados verdadeiros.

Atualmente `WebApplication` é suficiente.

Não adicionar:

* preço;
* avaliações;
* número de usuários;
* Organization com dados inexistentes;
* ofertas;
* review;
* aggregateRating.

---

# 37. SITEMAP

Manter somente a Home enquanto não existir conteúdo público persistido em servidor.

Não adicionar páginas `/{slug}` locais.

---

# 38. ROBOTS

Não bloquear `/painel` em `robots.txt`.

Continuar usando `noindex` via metadata.

Adicionar também `noindex` às páginas dinâmicas públicas de demonstração.

---

# 39. PERFORMANCE

Preservar as melhorias recentes:

* landing sem DataProvider;
* sem Reveal;
* sem IntersectionObserver em todas as seções;
* Server Components;
* logo WebP;
* HTML renderizado imediatamente.

Não reintroduzir animações client-side desnecessárias.

---

# 40. NÃO REINTRODUZIR FRAMER MOTION

Não instalar biblioteca de animação.

A Home não precisa.

---

# 41. LOGO WEBP

Preservar:

`logo.webp`

como fonte preferencial.

Manter fallback PNG.

Verificar se:

* dimensões;
* aspect ratio;
* width;
* height;

estão corretos.

---

# 42. OPEN GRAPH E ASSETS

Certificar que a geração da imagem não dependa de asset que não consiga ser carregado corretamente pelo runtime.

Testar a rota gerada da Open Graph.

A imagem precisa funcionar em produção.

---

# 43. MENU MOBILE

Preservar as melhorias:

* Escape fecha;
* foco volta para botão;
* `max-height`;
* scroll interno;
* safe area;
* `aria-expanded`;
* `aria-controls`.

Não piorar esse comportamento.

---

# 44. ACESSIBILIDADE DO MENU

Não é necessário implementar focus trap complexo neste momento, desde que o comportamento de disclosure continue compreensível.

Mas revise Tab/Shift+Tab.

Certificar que nenhum elemento fique inacessível.

---

# 45. CONTRASTE

Preservar o novo:

`--muted-foreground: #5c5c58`

ou melhorar somente se necessário.

Não voltar para cinza claro demais.

---

# 46. DOCUMENTAÇÃO NA RAIZ

Atualmente existem arquivos grandes como:

* `Criação.md`;
* `Inicio.md`;
* `melhoria.md`.

Organizar caso faça sentido.

Sugestão:

`docs/`

ou:

`docs/prompts/`

Exemplo:

`docs/criacao.md`

`docs/landing-inicial.md`

`docs/melhorias-home.md`

IMPORTANTE:

Antes de mover, verifique se algum arquivo ou agente depende dessas rotas.

Não mover se isso causar problema.

Esse item é opcional e de organização.

---

# 47. NÃO ALTERAR AGENTS.MD SEM NECESSIDADE

O `AGENTS.md` foi gerado para orientar agentes sobre a versão atual do Next.

Não remover sem razão.

Consultar as regras ali antes de modificar comportamentos específicos do framework.

---

# 48. NÃO ALTERAR CLAUDE.MD SEM NECESSIDADE

Pode permanecer apontando para `AGENTS.md`.

Não faz parte da experiência do produto.

---

# 49. COMPONENTES DA LANDING

`sections.tsx` está grande, porém simples.

Não quebrar automaticamente em 10 arquivos.

Só dividir caso realmente melhore manutenção.

Não criar arquitetura excessivamente abstrata.

---

# 50. CONTEÚDO ESTÁTICO

Preservar a extração para:

`lib/landing-content.ts`

É uma boa organização.

Manter:

* passos;
* categorias;
* benefícios;
* FAQ.

---

# 51. CENTRALIZAÇÃO DE STRINGS DE MARCA

Preservar:

`SITE_NAME`

`SITE_URL`

`SITE_HOST`

`SITE_DESCRIPTION`

`SITE_HOME_TITLE`

`CTA_DEMO_LABEL`

Não hardcodar:

`daparahoje.com`

em diversos arquivos.

---

# 52. CRIAR CONSTANTE PARA RESPOSTA DA MARCA SE FIZER SENTIDO

Como:

**Dá sim.**

será uma assinatura recorrente, avalie criar algo como:

`BRAND_POSITIVE_ANSWER`

ou equivalente.

Somente se realmente houver múltiplos usos.

Não criar constante para cada frase da aplicação.

---

# 53. RESPONSIVIDADE

Após as alterações de copy, revisar novamente:

320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px

Principalmente:

* novo H1;
* texto do Hero;
* CTA;
* mock principal;
* cards;
* horários;
* chips;
* footer.

Mudanças de texto podem alterar quebras de linha.

---

# 54. MOBILE FIRST

A maioria do público pode utilizar o site pelo celular.

Priorizar leitura no mobile.

Não criar headline com:

5–6 linhas em 320px.

Não criar botão com texto muito grande.

Não criar cards excessivamente altos.

---

# 55. TESTAR A NARRATIVA COMPLETA

Depois das mudanças, leia apenas as headlines da Home em sequência.

Elas devem contar uma história.

Algo conceitualmente próximo de:

**Sua agenda, simples de entender.**

↓

**O cliente pergunta. Você some na agenda.**

↓

**Saiba se ainda cabe mais um atendimento.**

↓

**Como funciona**

↓

**Veja como o Da Pra Hoje funciona**

↓

**Uma página simples para seus clientes escolherem horário**

↓

**Feito para quem vive de horário marcado**

↓

**Benefícios que importam durante o expediente**

↓

**Não é um ERP. É a agenda que você consegue usar.**

↓

**E aí, dá pra hoje?**

Isso é apenas uma referência de narrativa.

Não precisa copiar literalmente.

O ponto principal:

**cada headline deve adicionar uma ideia nova.**

---

# 56. LEIA A PÁGINA SEM OS MOCKS

Faça um teste mental:

se todos os mocks fossem removidos, o texto sozinho explicaria o produto?

Se não:

melhorar a copy.

---

# 57. LEIA A PÁGINA SEM OS TEXTOS

Depois faça o oposto.

Os mocks sozinhos mostram partes diferentes do produto?

Se todos parecem o mesmo card com:

“Dá pra hoje?”

“Dá sim”

“14:30 16:00 17:30”

há repetição visual.

Corrigir.

---

# 58. NÃO PERDER A IDENTIDADE

Ao reduzir repetição, não remover completamente a personalidade.

O resultado não deve virar:

“Software de gestão de agendamentos profissionais.”

A marca continua sendo:

**Da Pra Hoje.**

---

# 59. NÃO INVENTAR NOVAS FUNCIONALIDADES

Continuar sem afirmar que existem:

* SMS;
* WhatsApp integrado;
* pagamentos;
* notificações;
* lembretes;
* sincronização;
* autenticação;
* equipes;
* múltiplos funcionários;
* financeiro completo;
* IA.

---

# 60. NÃO CRIAR PROVA SOCIAL FALSA

Não adicionar:

* número de usuários;
* avaliações;
* estrelas;
* depoimentos;
* logos de clientes;
* crescimento percentual.

---

# 61. BUILD

Após todas as correções:

executar:

`npm run build`

O build precisa funcionar sem:

`ignoreBuildErrors`.

Corrigir qualquer erro.

---

# 62. TYPESCRIPT

Executar checagem de tipos adequada ao projeto.

A implementação customizada de `cva` foi modificada recentemente.

Não quebrar:

`VariantProps`

`buttonVariants`

ou componentes UI.

---

# 63. TESTAR ROTAS

Verificar:

`/`

`/painel`

`/painel/agenda`

`/painel/clientes`

`/painel/servicos`

`/painel/configuracoes`

`/painel/mais`

`/joaobarber`

`/qualquer-slug-inexistente`

Verificar metadata/noindex também.

---

# 64. TESTAR REDIRECTS

Preservar:

`/agenda` → `/painel/agenda`

`/clientes` → `/painel/clientes`

`/servicos` → `/painel/servicos`

`/configuracoes` → `/painel/configuracoes`

`/mais` → `/painel/mais`

---

# 65. TESTAR METADATA

Verificar HTML final da Home.

Confirmar:

title esperado:

**Agenda online para quem trabalha com horário marcado · Da Pra Hoje**

description correta.

canonical correto.

Open Graph correto.

Twitter image correta.

favicon correto.

---

# 66. TESTAR OPEN GRAPH

Acessar a rota gerada da imagem.

Confirmar:

* 1200×630;
* logo real;
* texto sem corte;
* “Dá sim” quando utilizado;
* contraste;
* acentos;
* layout correto.

---

# 67. RESULTADO ESPERADO DA COPY

A Home deve deixar de parecer:

“Dá pra hoje?”

“Tem sim”

“Dá pra hoje?”

“Tem sim”

“Dá pra hoje?”

“Tem sim”

ao longo da página.

Quero que o conceito apareça como um **momento de marca**, e não como uma frase repetida até perder força.

---

# 68. REGRA DE REPETIÇÃO

Antes de finalizar, faça uma busca textual nas seções da landing.

Conte ocorrências de:

“Dá pra hoje?”

“Dá sim”

“agenda online”

“horários livres”

“em segundos”

“demonstração”

“sem complicação”

Analise manualmente.

Não existe número mágico.

Mas se uma expressão estiver aparecendo em quase todas as seções, reescreva.

---

# 69. REGRA DE BRANDING

“Dá pra hoje?” deve ser especial.

“Dá sim.” deve ser a resposta característica.

Não desperdiçar essas frases.

---

# 70. PRIORIDADE FINAL DAS ALTERAÇÕES

Prioridade 1:

**reduzir repetição de copy e mocks.**

Prioridade 2:

**substituir “Tem sim” por “Dá sim”.**

Prioridade 3:

**refinar Hero.**

Prioridade 4:

**corrigir comunicação da página pública/demo.**

Prioridade 5:

**noindex em `/{slug}` enquanto não existe backend.**

Prioridade 6:

**usar logo real no Open Graph.**

Prioridade 7:

**corrigir configuração da Manrope variável.**

Prioridade 8:

**corrigir acessibilidade da logo.**

Prioridade 9:

**revisar organização da documentação.**

Prioridade 10:

**build, TypeScript e regressões.**

---

# RESULTADO FINAL ESPERADO

Quero uma Home que pareça mais madura.

Hoje a base visual está boa.

Não quero redesenhar.

Quero melhorar principalmente o ritmo da comunicação.

O visitante não deve sentir que está lendo a mesma frase repetida em vários formatos.

A Home deve começar explicando o produto.

Depois mostrar o problema.

Depois apresentar o diferencial.

Depois mostrar como funciona.

Depois demonstrar as partes do sistema.

Depois explicar a experiência do cliente.

Depois mostrar para quem serve.

Depois mostrar benefícios.

Depois reforçar simplicidade.

E somente no final voltar para a identidade principal:

**E aí, dá pra hoje?**

A assinatura positiva oficial da marca passa a ser:

# Dá sim.

Não utilizar mais:

# Tem sim.

para responder à pergunta “Dá pra hoje?”.

Preserve tudo que já ficou tecnicamente correto no último commit.

Não reescreva a aplicação.

Não recrie a landing.

Não faça mudanças cosméticas aleatórias.

Faça uma rodada cuidadosa e específica de refinamento da Home atual, reduzindo redundância, aumentando clareza e mantendo a identidade do Da Pra Hoje.
