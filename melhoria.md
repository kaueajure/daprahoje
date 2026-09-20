Analise profundamente o repositório atual do projeto:

https://github.com/kaueajure/daprahoje

Quero que você faça uma revisão técnica, visual, estrutural, de SEO, performance, acessibilidade e UX da nova página inicial do **Da Pra Hoje**.

IMPORTANTE:

A Home atual NÃO deve ser refeita do zero.

A estrutura visual, identidade, linguagem e conceito geral ficaram bons e devem ser preservados.

O objetivo deste trabalho é:

**refinar, corrigir, otimizar e profissionalizar a implementação atual.**

Antes de alterar qualquer arquivo, leia e entenda:

* `README.md`
* `Criação.md`
* `Inicio.md`
* `app/page.tsx`
* `app/layout.tsx`
* `app/globals.css`
* `app/robots.ts`
* `app/sitemap.ts`
* `next.config.mjs`
* `lib/site.ts`
* `lib/routes.ts`
* `lib/store.tsx`
* `components/logo.tsx`
* `components/app-shell.tsx`
* todos os arquivos dentro de `components/landing/`
* página pública em `app/[slug]/`
* painel em `app/painel/`
* componentes utilizados pela página pública e pelo painel

Entenda também como funciona atualmente:

* o painel;
* a agenda;
* o sistema de disponibilidade;
* os serviços;
* os clientes;
* os bloqueios;
* a página pública;
* o armazenamento em `localStorage`;
* a nova separação entre Home, painel e página pública.

Não faça alterações cegas.

Primeiro compreenda a arquitetura atual.

---

# 1. PRESERVAR O QUE JÁ ESTÁ BOM

A nova Home possui uma base visual e conceitual boa.

Preserve:

* identidade clean;
* fundo off-white;
* cards brancos;
* preto predominante;
* verde da marca usado de maneira pontual;
* tipografia Manrope;
* estilo minimalista;
* linguagem humana;
* estrutura da landing;
* conceito “Dá pra hoje?”;
* apresentação dos horários livres;
* comparação do problema antes/depois;
* seção “Como funciona”;
* demonstração do produto;
* página pública;
* público-alvo;
* benefícios;
* FAQ;
* CTA final;
* footer.

Não transforme a página em:

* landing page SaaS genérica;
* página cheia de gradientes;
* página cheia de ilustrações;
* página cheia de ícones;
* página corporativa;
* dashboard;
* página com elementos 3D;
* página com animações exageradas;
* template de startup.

O Da Pra Hoje precisa continuar parecendo:

**simples + direto + moderno + útil + acessível.**

---

# 2. PRESERVAR A NOVA ARQUITETURA DE ROTAS

A estrutura atual foi corretamente separada em:

Home:

`/`

Painel:

`/painel`

Agenda:

`/painel/agenda`

Clientes:

`/painel/clientes`

Serviços:

`/painel/servicos`

Configurações:

`/painel/configuracoes`

Mais:

`/painel/mais`

Página pública:

`/{slug}`

Preserve essa estrutura.

Preserve também os redirects das antigas rotas:

`/agenda`

`/clientes`

`/servicos`

`/configuracoes`

`/mais`

para suas respectivas URLs dentro de `/painel`.

Não volte o painel para `/`.

Não quebre páginas públicas.

Não quebre navegação interna.

---

# 3. CORRIGIR A PROMESSA DO PRODUTO ATUAL

Este é um ponto extremamente importante.

Atualmente o projeto utiliza:

`localStorage`

para armazenar:

* perfil;
* serviços;
* clientes;
* agendamentos;
* horários;
* bloqueios;
* configurações.

Isso significa que o sistema ainda NÃO possui persistência compartilhada entre dispositivos.

Exemplo:

Profissional abre o painel em um celular.

Cliente abre:

`daparahoje.com/joaobarber`

em outro celular.

Os dois dispositivos possuem `localStorage` diferentes.

Portanto o agendamento feito pelo cliente não chega realmente ao painel do profissional.

Enquanto não existir um backend/banco de dados, NÃO quero que a landing prometa uma sincronização real como se já estivesse funcionando em produção.

Analise todos os textos da Home e ajuste frases que possam criar uma promessa incorreta.

Por exemplo:

Hoje existe:

“Você recebe o agendamento no painel.”

Enquanto o sistema continuar local, substituir por algo relacionado à demonstração do fluxo.

Outra opção é apresentar o painel atual como:

**demonstração funcional do produto.**

Não esconda o funcionamento real.

Não invente backend.

Não adicione Supabase, Firebase ou outro banco neste trabalho, a menos que seja estritamente necessário para uma correção independente e claramente separada.

O foco aqui é melhorar a Home existente.

---

# 4. CORRIGIR OS CTAs

Atualmente existem botões como:

“Entrar”

e

“Começar agora”

mas ambos apontam para:

`/painel`

Isso gera confusão.

“Entrar” transmite a ideia de que já existe autenticação.

“Começar agora” transmite a ideia de cadastro.

Mas atualmente o projeto não possui um fluxo real de autenticação/cadastro.

Enquanto isso não existir, utilizar CTAs coerentes com o estado atual.

Sugestões:

* “Ver demonstração”
* “Testar o painel”
* “Explorar o sistema”
* “Conhecer o painel”

A escolha final deve respeitar a comunicação da marca.

No header desktop:

evitar dois botões diferentes levando exatamente para o mesmo lugar sem explicar a diferença.

No header mobile:

mesma regra.

No Hero:

CTA principal deve levar ao painel demonstrativo.

CTA secundário pode continuar apontando para:

`#como-funciona`

No CTA final:

evitar “Começar agora” caso não exista realmente onboarding.

Pode usar algo como:

**Testar o Da Pra Hoje**

ou:

**Ver o sistema funcionando**

Não criar `/entrar` ou `/cadastro` falsos.

---

# 5. MELHORAR O HERO

Preserve a estrutura geral atual.

Não descaracterize.

Porém refine a headline para explicar o produto ainda mais rapidamente.

Hoje existe:

“Da Pra Hoje”

“Dá pra hoje?”

A frase é boa para marca, mas um usuário que nunca viu o produto ainda precisa ler o parágrafo para entender que se trata de uma agenda.

Quero manter o conceito “Dá pra hoje?”, mas tornar a headline mais autoexplicativa.

Avalie opções conceituais como:

“Uma agenda que responde: dá pra hoje?”

“Veja em segundos se dá pra hoje.”

“Sua agenda sabe se dá pra hoje.”

Não copie obrigatoriamente essas frases.

Analise qual se encaixa melhor na identidade atual.

O Hero precisa comunicar nos primeiros segundos:

* que é uma agenda;
* para profissionais;
* para quem trabalha com horários marcados;
* que permite enxergar horários livres rapidamente.

Preserve o texto curto.

Não transforme o Hero em um bloco enorme.

---

# 6. NÃO ESCONDER O HERO COM JAVASCRIPT

Atualmente o Hero utiliza o componente:

`Reveal`

O componente inicia com:

`opacity: 0`

e:

`translateY`

Depois depende de:

* JavaScript;
* hidratação;
* `IntersectionObserver`;
* state React;
* transição.

Isso não é ideal para o principal conteúdo acima da dobra.

O conteúdo principal do Hero deve estar visível imediatamente no HTML renderizado.

Não aplicar Reveal no:

* logo principal do Hero;
* H1;
* texto principal;
* CTA principal;
* conteúdo mais importante acima da dobra.

Esses elementos devem renderizar imediatamente.

Se desejar manter alguma microanimação no Hero, ela deve ser feita sem atrasar significativamente a renderização do conteúdo principal.

Priorizar Core Web Vitals.

---

# 7. REDUZIR O EXCESSO DE REVEAL

O componente `Reveal` usa:

* `useState`;
* `useEffect`;
* `IntersectionObserver`.

Atualmente existem muitas instâncias.

Isso adiciona JavaScript desnecessário para uma landing que deveria ser extremamente leve.

Faça uma revisão de todas as utilizações.

Mantenha Reveal apenas onde realmente agrega valor.

Priorizar:

* Hero sem Reveal;
* títulos importantes renderizados imediatamente;
* animações apenas em elementos secundários;
* menos observers;
* menos hidratação.

Se possível, utilizar CSS simples para algumas animações.

Preservar:

`prefers-reduced-motion`.

---

# 8. SEPARAR O DATAPROVIDER DA LANDING

Atualmente o:

`DataProvider`

está dentro do:

`app/layout.tsx`

Isso significa que todas as páginas do projeto carregam o store.

Inclusive a Home.

Mas a landing NÃO utiliza:

* clientes;
* agendamentos;
* serviços;
* bloqueios;
* disponibilidade;
* perfil;
* localStorage.

Isso adiciona JavaScript desnecessário.

Refatore a arquitetura.

O layout raiz deve conter somente o que é verdadeiramente global:

* HTML;
* body;
* fonte;
* estilos;
* metadata compartilhada.

Remover o `DataProvider` do RootLayout.

Mover o provider para onde ele realmente é necessário.

Por exemplo:

`app/painel/layout.tsx`

deve envolver o painel com:

`DataProvider`

e:

`AgendamentoFormProvider`

e demais providers necessários.

A página pública também precisa dos dados atuais.

Crie a solução mais limpa para que:

`/`

NÃO carregue DataProvider.

`/painel/*`

continue funcionando normalmente.

`/{slug}`

continue funcionando normalmente.

Não duplique lógica desnecessariamente.

Organize os providers de forma profissional.

---

# 9. TOASTER

Avalie se o:

`Toaster`

precisa estar no RootLayout.

Se ele for utilizado apenas dentro da aplicação/painel, mova-o para o layout adequado.

A Home não deve carregar componentes client-side globais desnecessariamente.

---

# 10. CORRIGIR HTML SEMÂNTICO EM “COMO FUNCIONA”

Existe atualmente uma estrutura como:

`<ol>`

contendo:

`<Reveal>`

que por sua vez renderiza:

`<div>`

e somente depois:

`<li>`.

Isso resulta em:

`ol > div > li`

Essa estrutura é semanticamente incorreta.

Dentro de `<ol>` e `<ul>`, os `<li>` devem ser filhos apropriados.

Refatore para algo semanticamente correto.

Por exemplo:

`ol > li > Reveal`

ou altere o Reveal para permitir semanticamente outro elemento através de `as`, se isso for apropriado.

Não manter:

`ol > div > li`

Garantir também que listas em outras áreas estejam corretas.

---

# 11. REVISAR TODA A SEMÂNTICA HTML

Faça uma revisão completa.

Garantir:

* apenas um H1 na página;
* H2 para seções principais;
* H3 para subdivisões;
* `<nav>` para navegação;
* `<main>` para conteúdo principal;
* `<header>`;
* `<footer>`;
* `<section>`;
* `<article>` quando apropriado;
* `<ol>` para processos ordenados;
* `<ul>` para listas;
* `<button>` para ações;
* `<a>`/`Link` para navegação.

Não utilizar `div` clicável quando existe um elemento semântico adequado.

---

# 12. CORRIGIR TITLE/METADATA

Analise:

`app/layout.tsx`

e:

`app/page.tsx`.

O layout possui um title template semelhante a:

`%s · Da Pra Hoje`

A Home atualmente define novamente:

`Da Pra Hoje — agenda online para quem trabalha com horário marcado`

Isso pode gerar:

`Da Pra Hoje — agenda online para quem trabalha com horário marcado · Da Pra Hoje`

Evitar repetição do nome da marca.

Utilizar algo equivalente a:

`Agenda online para quem trabalha com horário marcado`

como title da página.

O template deve complementar automaticamente.

Resultado desejado próximo de:

**Agenda online para quem trabalha com horário marcado · Da Pra Hoje**

ou outra versão ainda melhor para CTR e SEO.

Não fazer keyword stuffing.

---

# 13. MELHORAR META DESCRIPTION

A descrição atual é boa, mas revise.

Ela precisa explicar:

* agenda online;
* profissionais;
* horários livres;
* agendamento;
* simplicidade.

Algo próximo de:

“Organize atendimentos, veja horários disponíveis e facilite o agendamento dos seus clientes com uma agenda online simples para profissionais autônomos.”

Não precisa usar exatamente isso.

Mantenha tamanho apropriado.

Não transformar em sequência de palavras-chave.

---

# 14. META KEYWORDS

Atualmente existem:

`metadata.keywords`.

Como essa informação não é relevante para o Google moderno, avalie remover.

Não concentre SEO em meta keywords.

Concentre SEO em:

* title;
* description;
* headings;
* conteúdo útil;
* estrutura;
* internal linking;
* performance;
* semântica.

---

# 15. OPEN GRAPH

Atualmente o Open Graph utiliza:

`/brand/logo.png`

A logo horizontal NÃO deve ser utilizada como imagem principal de compartilhamento.

Criar uma imagem Open Graph específica.

Preferencialmente:

1200 × 630.

Ela deve possuir visual coerente com a marca.

Sugestão de composição:

Logo Da Pra Hoje.

Headline:

“Dá pra hoje?”

Subheadline pequena:

“Agenda online simples para quem trabalha com horário marcado.”

E uma pequena representação da interface.

Não exagerar.

Manter:

* off-white;
* preto;
* verde da marca;
* visual minimalista.

Utilizar corretamente no:

* Open Graph;
* Twitter Card.

Se for mais adequado, utilizar:

`opengraph-image.tsx`

do Next.js.

---

# 16. FAVICON

O projeto já possui arquivos específicos como:

* `icon.svg`;
* `icon-dark-32x32.png`;
* `icon-light-32x32.png`;
* `apple-icon.png`.

Atualmente o metadata utiliza:

`/brand/logo.png`

como icon/apple.

Isso deve ser corrigido.

Utilizar os arquivos próprios para favicon/app icon.

Não utilizar uma imagem horizontal de 960×413 como favicon.

Verifique também a melhor abordagem suportada pelo App Router do Next.

---

# 17. OTIMIZAR A LOGO

Atualmente:

`public/brand/logo.png`

possui aproximadamente 209 KB.

É uma imagem 960×413 exibida em tamanhos muito pequenos.

Avalie otimizar.

Preferir:

* SVG, se possível;
* ou PNG/WebP significativamente menor.

Não perder qualidade visual.

Não alterar o desenho da marca.

Apenas otimizar o asset.

---

# 18. REVISAR O COMPONENTE LOGO

O componente atualmente usa `<img>` e possui comentário desabilitando regra do Next.

Avalie usar:

`next/image`

caso seja apropriado.

Se o arquivo virar SVG e `<img>` continuar sendo a solução mais simples e performática, pode manter.

A prioridade é:

* performance;
* simplicidade;
* sem CLS;
* width/height corretos.

---

# 19. ROBOTS.TXT

Atualmente `robots.ts` bloqueia:

`/painel`

e o layout do painel também define:

`noindex`.

Isso é redundante e pode impedir crawlers de ler o próprio `noindex`.

Revise a estratégia.

Preferência:

não bloquear `/painel` no robots.txt.

Permitir crawling.

No layout do painel utilizar:

`robots: { index: false, follow: false }`

ou equivalente.

Assim mecanismos de busca conseguem acessar a página e entender que não deve ser indexada.

A Home deve continuar:

index, follow.

---

# 20. SITEMAP

Atualmente existe:

`lastModified: new Date()`

Isso faz parecer que a página mudou sempre.

Remover esse comportamento.

Somente utilizar `lastModified` se houver uma data real de alteração.

Caso não exista:

omitir.

Também pode remover:

`priority`

e:

`changeFrequency`

caso não tragam benefício real.

O sitemap deve ser simples e correto.

Por enquanto incluir somente páginas realmente indexáveis.

Não incluir painel.

---

# 21. PÁGINAS PÚBLICAS E SITEMAP

Atualmente as páginas públicas são dinâmicas por:

`/{slug}`.

Como os dados ainda estão em localStorage, NÃO tente gerar sitemap real de profissionais inexistentes no servidor.

Somente preparar a arquitetura para futuramente incluir páginas públicas reais quando existir banco de dados.

---

# 22. STRUCTURED DATA

Atualmente existem schemas:

* `WebApplication`;
* `Organization`;
* `FAQPage`.

Revise.

Manter apenas dados estruturados corretos e úteis.

Não inventar:

* preço;
* avaliações;
* usuários;
* planos;
* reviews;
* empresa registrada;
* informações inexistentes.

Cuidado com:

`price: "0"`

Se o produto ainda não possui política/pricing definido, não anunciar automaticamente como produto gratuito via schema.

Avalie remover `offers` por enquanto.

O schema deve representar a realidade atual.

---

# 23. FAQ SCHEMA

O FAQ visível deve continuar.

Ele é útil para UX e conteúdo.

Porém não criar expectativa de rich result.

Avalie se manter `FAQPage` ainda faz sentido.

Se não houver benefício claro, simplifique.

O FAQ visual deve continuar independentemente do schema.

---

# 24. MELHORAR O FAQ

Preserve as perguntas atuais boas.

Revise as respostas para que reflitam exatamente o estado real do produto.

Evitar afirmar funcionalidades que ainda não funcionam entre dispositivos.

Manter linguagem simples.

Pode incluir perguntas como:

“O Da Pra Hoje funciona no celular?”

“Para quais profissionais o Da Pra Hoje serve?”

“Preciso instalar algum aplicativo?”

“O cliente precisa criar conta?”

Mas não aumentar artificialmente apenas para SEO.

---

# 25. MENU MOBILE

Atualmente ao abrir o menu mobile:

`document.body.style.overflow = "hidden"`

Mas o menu não possui necessariamente scroll interno.

Em dispositivos com viewport baixa ou modo paisagem isso pode gerar conteúdo inacessível.

Corrigir.

O menu precisa:

* caber na viewport;
* permitir scroll se necessário;
* não cortar CTAs;
* respeitar safe area;
* funcionar em landscape.

Pode utilizar algo como:

`max-height: calc(100dvh - alturaDoHeader)`

e:

`overflow-y: auto`.

---

# 26. MENU MOBILE E ACESSIBILIDADE

Ao abrir o menu:

* manter `aria-expanded`;
* manter `aria-controls`;
* fechar ao clicar em um item;
* fechar ao pressionar Escape;
* considerar foco adequado;
* evitar que elementos atrás sejam acessados de maneira confusa.

Não precisa criar uma modal complexa se não for necessário.

---

# 27. HEADER DESKTOP

Preserve o estilo atual.

Refine apenas:

* spacing;
* comportamento sticky;
* contraste após scroll;
* CTAs coerentes;
* hover;
* focus.

Não aumentar o header.

Continuar compacto.

---

# 28. MELHORAR A COPY DO PROBLEMA

Preserve a seção:

“O cliente pergunta. Você some na agenda.”

Ela combina muito com a marca.

Revise apenas algumas frases.

No bloco “Com o Da Pra Hoje”, não prometa funções que não estejam realmente funcionando entre dispositivos.

Por exemplo, substituir:

“Você só confirma e atende”

por algo mais fiel.

Possíveis conceitos:

“Você vê tudo em um só lugar.”

“Menos vai-e-volta no WhatsApp.”

“Veja rapidamente onde cabe mais um atendimento.”

Escolha a melhor versão.

---

# 29. PRESERVAR “DÁ PRA HOJE?”

Essa é uma das partes mais fortes.

Não remover.

Preservar:

“Dá pra hoje?”

“Tem sim.”

Horários disponíveis.

O verde da marca pode continuar aparecendo no “Tem sim.”

Evitar aumentar demais esse componente.

A simplicidade é parte do conceito.

---

# 30. REVISAR “COMO FUNCIONA”

Preservar o fluxo em quatro passos.

Porém as frases precisam refletir corretamente o funcionamento atual.

Enquanto não houver backend real, não dizer que compartilhamento do link sincroniza dados entre dispositivos como se fosse produção.

Pode apresentar o fluxo como parte da experiência planejada/demonstração, se necessário.

Não criar explicações longas.

---

# 31. REVISAR “O PRODUTO, DO JEITO QUE ELE É”

A frase pode passar a impressão de que os mocks são screenshots reais.

Os componentes atuais são representações estáticas.

Avalie mudar o título para:

“Veja como o Da Pra Hoje funciona”

ou:

“O essencial para organizar o dia”

ou outro equivalente.

Preserve os mocks atuais.

Eles estão visualmente alinhados ao sistema.

---

# 32. MELHORAR OS MOCKS

Não transformar mocks em telas gigantes.

Preserve:

* `MockHojeCard`;
* `MockAgendaLista`;
* `MockServicos`;
* `MockPublicoCard`.

Porém revise:

* responsividade;
* truncamento;
* contraste;
* tamanho de texto;
* consistência com o painel real;
* dados apresentados;
* estados.

Os mocks devem representar fielmente a UI real.

Não inventar telas inexistentes.

---

# 33. MOCK DA PÁGINA PÚBLICA

Preserve o conceito:

`daparahoje.com/joaobarber`

Mas não induza o visitante a acreditar que o domínio já está obrigatoriamente configurado em produção caso isso ainda não esteja correto.

Utilizar apenas se essa URL fizer sentido como branding.

---

# 34. SEÇÃO DE PÚBLICO-ALVO

Preserve o formato em chips.

Não substituir por 10 cards enormes.

Essa seção deve continuar leve.

Pode melhorar a copy ao redor para termos como:

* agenda para barbeiros;
* agenda para manicures;
* agenda para tatuadores;
* agenda para autônomos.

Mas de forma natural.

Não keyword stuffing.

---

# 35. BENEFÍCIOS

Preserve a abordagem focada em benefício.

Exemplo bom:

“Saiba exatamente quando cabe mais um cliente.”

Evitar transformar em títulos técnicos como:

“Gerenciamento de disponibilidade.”

Manter foco no problema humano.

---

# 36. POSICIONAMENTO “NÃO É ERP”

Preserve:

“Não é um ERP. É a agenda que você consegue usar.”

Essa seção resume bem o posicionamento.

Pode refiná-la visualmente.

Não adicionar muitos elementos.

Texto centralizado e forte é suficiente.

---

# 37. CTA FINAL

Preserve o conceito:

“E aí, dá pra hoje?”

É um bom fechamento.

Alterar apenas o botão caso “Começar agora” ainda não seja verdadeiro.

Enquanto não houver cadastro:

usar CTA de demonstração.

---

# 38. FOOTER

Preserve a simplicidade.

Adicionar apenas links reais.

Não adicionar:

* Termos;
* Privacidade;
* Empresa;
* Suporte;

se essas páginas ainda não existem.

Não criar links quebrados ou placeholders.

Quando essas páginas forem criadas, aí sim adicionar.

O footer não deve parecer maior do que o necessário.

---

# 39. SEO CONTEÚDO

A Home deve naturalmente utilizar termos como:

* agenda online;
* agenda online para profissionais;
* sistema de agendamento;
* agenda para autônomos;
* agenda para barbeiros;
* agenda para manicures;
* agendamento online.

Não repetir excessivamente.

Priorizar texto natural.

A primeira prioridade é o visitante.

A segunda é o buscador.

---

# 40. ESTRATÉGIA DE SEO FUTURA

Não tente fazer a Home ranquear para todas as profissões.

Prepare arquitetura para futuras páginas específicas, como:

`/agenda-para-barbeiros`

`/agenda-para-manicures`

`/agenda-para-tatuadores`

`/agenda-para-cabeleireiros`

`/agenda-para-esteticistas`

Mas NÃO crie todas essas páginas agora caso não exista conteúdo único suficiente.

Evitar páginas doorway ou conteúdo duplicado.

---

# 41. PERFORMANCE

Faça uma revisão de performance completa da Home.

Priorizar:

* menos JavaScript;
* menos componentes client;
* menos hydration;
* assets menores;
* HTML server-rendered;
* CSS simples;
* sem bibliotecas de animação pesadas.

Não instalar Framer Motion apenas para efeitos simples.

Não instalar bibliotecas adicionais sem necessidade.

---

# 42. SERVER COMPONENTS

A maioria da landing deve continuar Server Component.

Somente componentes que realmente precisam de interação devem possuir:

`"use client"`.

Exemplos que podem precisar:

* menu mobile;
* algumas animações;
* interações específicas.

O conteúdo das seções deve continuar renderizando no servidor.

---

# 43. CORE WEB VITALS

Priorizar:

LCP
CLS
INP

O Hero deve aparecer rapidamente.

Evitar layout shifts.

Imagens devem possuir dimensões.

Fontes devem ser carregadas corretamente.

Evitar JS bloqueando conteúdo.

---

# 44. FONTES

Manrope está coerente com o design.

Pode manter.

Garantir:

`display: swap`.

Evitar carregar pesos desnecessários.

---

# 45. ACESSIBILIDADE

Faça uma revisão completa.

Garantir:

* contraste;
* focus-visible;
* navegação por teclado;
* alt correto;
* aria-label somente quando necessário;
* landmarks;
* headings;
* listas;
* áreas de toque.

Tamanho mínimo confortável:

aproximadamente 40–44px para ações principais.

---

# 46. PREFERS-REDUCED-MOTION

Preserve e melhore o suporte a:

`prefers-reduced-motion`.

Nenhuma funcionalidade deve depender de animação.

---

# 47. CONTRASTE

Revisar especialmente:

`text-muted-foreground`

em:

* fundo off-white;
* cards;
* footer;
* CTA escuro.

Garantir boa leitura em telas móveis e monitores com brilho baixo.

---

# 48. SCROLL

Preservar scroll vertical natural.

Não aplicar:

`overflow: hidden`

globalmente.

Não utilizar layouts que cortem conteúdo.

Utilizar:

`min-height: 100dvh`

quando apropriado.

---

# 49. RESPONSIVIDADE

Testar conceitualmente e estruturalmente:

320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px

Verificar:

* Hero;
* header;
* menu;
* botões;
* mocks;
* chips;
* FAQ;
* CTA;
* footer.

Nenhum componente deve criar overflow horizontal.

---

# 50. SAFE AREAS MOBILE

Considerar:

`env(safe-area-inset-*)`

quando necessário.

Especialmente:

* menu;
* navegação fixa;
* elementos próximos ao rodapé.

---

# 51. NEXT.CONFIG

Atualmente existe:

`typescript.ignoreBuildErrors: true`

Remover isso.

Builds de produção não devem ignorar erros TypeScript.

Corrigir qualquer erro de tipo que surgir após a remoção.

O projeto deve conseguir executar:

`npm run build`

ou equivalente

sem ignorar erros.

---

# 52. IMAGES.UNOPTIMIZED

Atualmente existe:

`images: { unoptimized: true }`.

Avalie se isso ainda é necessário.

Se não for:

remover.

Utilizar corretamente otimização de imagens do Next quando aplicável.

Se existir uma razão técnica real para manter:

documentar.

---

# 53. HEADERS DE SEGURANÇA

Preserve:

`X-Content-Type-Options`

`Referrer-Policy`

`Permissions-Policy`

Revise se estão corretos.

Não remover sem razão.

---

# 54. ROTAS RESERVADAS

Preserve:

`SLUGS_RESERVADOS`.

Garanta que páginas como:

`/painel`

`/agenda`

`/clientes`

`/servicos`

etc.

não possam virar slug público.

Revise se faltam segmentos reservados.

Por exemplo:

* robots.txt;
* sitemap.xml;
* favicon;
* assets;
* futuras páginas institucionais.

Adicionar somente quando fizer sentido.

---

# 55. PÁGINA PÚBLICA

Embora o foco seja a Home, revise a integração da página pública após a mudança de rotas.

Garantir que:

`/{slug}`

continue funcionando.

Mas não mascarar o problema atual de `localStorage`.

Não criar falsa persistência.

---

# 56. ESTADO DEMONSTRATIVO

Como o projeto utiliza dados de exemplo:

João Barber.

Carlos Mendes.

Serviços.

Agendamentos.

Considere formalizar isso como um:

**modo de demonstração.**

Isso pode melhorar muito a coerência do produto enquanto não existe backend.

A Home poderia dizer:

“Testar demonstração”

e abrir `/painel`.

Isso explica por que existem dados pré-carregados.

---

# 57. NÃO IMPLEMENTAR BACKEND NESTA ETAPA

Não transformar essa revisão em uma reescrita completa do produto.

Não adicionar agora:

* autenticação complexa;
* banco;
* pagamentos;
* emails;
* SMS;
* marketplace;
* analytics pesado.

Esses recursos pertencem a uma próxima etapa.

Neste trabalho:

polir Home + arquitetura + SEO + performance + coerência do produto demonstrativo.

---

# 58. PREPARAR PARA BACKEND FUTURO

Embora não seja para implementar agora, evite decisões que dificultem uma migração futura para banco.

O objetivo futuro será substituir o `localStorage` por persistência real sem precisar refazer a Home.

---

# 59. NÃO INVENTAR FUNCIONALIDADES

Nenhum texto da Home deve mencionar como existente algo que o produto ainda não possui.

Não inventar:

* notificações;
* confirmação automática;
* WhatsApp integrado;
* SMS;
* lembretes;
* pagamentos;
* sincronização;
* múltiplos funcionários;
* analytics;
* IA.

---

# 60. NÃO INVENTAR PROVA SOCIAL

Continuar sem:

* depoimentos falsos;
* número de usuários;
* ratings;
* empresas fictícias;
* porcentagens;
* estatísticas não comprovadas.

Isso foi uma boa escolha atual.

Preservar.

---

# 61. ORGANIZAÇÃO DE COMPONENTES

Manter componentes da landing dentro de:

`components/landing/`.

Evitar que:

`sections.tsx`

continue crescendo indefinidamente.

Se fizer sentido, separar em:

`hero.tsx`

`problem-section.tsx`

`how-it-works.tsx`

`product-demo.tsx`

`public-page-section.tsx`

`audience-section.tsx`

`benefits-section.tsx`

`faq.tsx`

`cta.tsx`

`footer.tsx`

Não separar apenas por separar.

Faça isso somente se melhorar legibilidade/manutenção.

---

# 62. DADOS ESTÁTICOS

Arrays como:

* categorias;
* passos;
* benefícios;
* FAQ;

podem ser movidos para arquivos próprios caso facilite manutenção.

Evitar excesso de abstração.

---

# 63. REUTILIZAÇÃO

Não duplicar:

* URLs;
* nome do produto;
* domínio;
* rotas.

Continuar utilizando:

`SITE_URL`

`SITE_NAME`

`SITE_DESCRIPTION`

`rotasPainel`

e constantes equivalentes.

---

# 64. CONSISTÊNCIA DO DOMÍNIO

Todas as referências a:

`daparahoje.com`

devem vir preferencialmente de uma fonte única.

Não espalhar domínio hardcoded em dezenas de componentes.

Utilizar `SITE_URL` ou constante apropriada quando possível.

---

# 65. COPY MOBILE

Revisar todas as headlines em 320–390px.

Evitar:

* linhas com uma palavra isolada;
* títulos gigantes;
* frases quebrando de maneira estranha.

Utilizar `text-balance` quando fizer sentido.

---

# 66. BOTÕES

Preservar o sistema atual de Buttons.

Não criar estilos diferentes aleatoriamente.

Ações principais:

preto.

Ações secundárias:

cinza claro.

Verde da marca:

preferencialmente destaque de status/marca, não CTA principal em toda a página.

---

# 67. MICROINTERAÇÕES

Manter:

120–250ms aproximadamente.

Evitar:

* bounce;
* elastic;
* parallax;
* scale exagerado;
* efeitos de mouse complexos.

Hover deve ser sutil.

---

# 68. FAQ INTERACTION

O `<details>` atual é uma boa solução.

Preserve.

Melhore:

* foco;
* área clicável;
* animação apenas se simples;
* ícone +/−;
* acessibilidade.

Não instalar accordion library desnecessariamente.

---

# 69. TESTES VISUAIS

Após alterar, revise toda a Home como usuário.

Percorra na ordem:

Header
Hero
Problema
Dá Pra Hoje
Como funciona
Produto
Página pública
Público
Benefícios
Simplicidade
CTA
FAQ
Footer

Verifique se a narrativa continua natural.

---

# 70. EVITAR REPETIÇÃO

Alguns conceitos aparecem várias vezes:

* horários livres;
* cliente agenda;
* simplicidade;
* sem complicação.

Isso é esperado, mas revise para evitar sensação de repetição.

Cada seção deve avançar a história.

---

# 71. NÃO AUMENTAR DESNECESSARIAMENTE A PÁGINA

A landing já possui bastante conteúdo.

Não adicionar 10 novas seções.

A prioridade é melhorar o que já existe.

Se alguma seção estiver redundante, simplifique.

---

# 72. RESULTADO VISUAL ESPERADO

A página deve parecer profissional no nível de:

Linear
Notion
Vercel
Raycast
Stripe

em termos de:

* cuidado;
* alinhamento;
* espaçamento;
* tipografia;
* polimento.

Porém NÃO copiar o visual dessas marcas.

O resultado precisa continuar parecendo Da Pra Hoje.

---

# 73. RESULTADO DE UX ESPERADO

Nos primeiros 5 segundos, o usuário precisa entender:

“O Da Pra Hoje é uma agenda online.”

Depois:

“Foi feita para autônomos que trabalham com horários.”

Depois:

“Ela me mostra se ainda cabe cliente hoje.”

Depois:

“É simples.”

---

# 74. RESULTADO DE PERFORMANCE ESPERADO

A Home deve depender de pouco JavaScript.

Evitar que a página inteira vire client component.

O HTML principal precisa aparecer imediatamente.

Nenhuma animação deve atrasar o Hero.

---

# 75. RESULTADO DE SEO ESPERADO

A Home deve possuir:

* title correto;
* description;
* canonical;
* Open Graph;
* Twitter metadata;
* favicon correto;
* robots adequado;
* sitemap adequado;
* semantic HTML;
* headings;
* conteúdo útil;
* boa performance.

Sem:

* keyword stuffing;
* SEO artificial;
* metadata inútil;
* schema enganoso.

---

# 76. VERIFICAÇÃO FINAL

Após realizar as alterações:

Execute e corrija:

* TypeScript;
* lint se existir;
* build de produção.

O projeto deve compilar sem:

`ignoreBuildErrors`.

Revisar console para:

* hydration warnings;
* React warnings;
* erros;
* links quebrados.

---

# 77. NÃO QUEBRAR O PAINEL

Depois das mudanças, verificar:

`/painel`

`/painel/agenda`

`/painel/clientes`

`/painel/servicos`

`/painel/configuracoes`

`/painel/mais`

Verificar também:

`/joaobarber`

A Home não pode ser melhorada às custas do restante do sistema.

---

# 78. CRITÉRIO FINAL

Antes de manter qualquer alteração, pergunte:

**Isso deixa o Da Pra Hoje mais claro, rápido, confiável ou fácil de usar?**

Se não:

não adicionar.

Para a landing:

**Isso ajuda o visitante a entender o produto ou confiar nele?**

Se não:

não adicionar.

---

# OBJETIVO FINAL

Quero manter a Home atual, porque a direção visual e conceitual ficou boa.

Porém quero que ela saia de:

**“uma landing bonita de um protótipo”**

para:

**“uma landing profissional, tecnicamente correta e preparada para um produto real.”**

A prioridade desta revisão é:

1. corrigir promessas incompatíveis com o estado atual do sistema;
2. tornar CTAs coerentes;
3. melhorar Hero;
4. melhorar performance;
5. remover JavaScript desnecessário;
6. separar providers;
7. corrigir semântica HTML;
8. corrigir metadata;
9. corrigir SEO técnico;
10. melhorar favicon e Open Graph;
11. melhorar mobile;
12. preservar completamente a identidade do Da Pra Hoje.

Não refaça a aplicação.

Não descaracterize a Home.

Faça uma evolução cuidadosa, técnica e profissional sobre o que já existe.
