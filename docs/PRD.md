# PRD — MVP App de Treinos (Musculação)

## Visão
Planejar, executar e acompanhar treinos de musculação.
Princípio central: PLANEJAMENTO ≠ EXECUÇÃO. O plano é referência; o sistema registra o que realmente aconteceu.

## Escopo
MVP: conta/perfil, CRUD de treinos com status, catálogo de exercícios, execução com cronômetro, histórico editável, Dashboard semanal/mensal, evolução por exercício, PRs.
Fora do MVP: corrida/GPS, funcional, calorias (V2), gaps automáticos (V2), linha do tempo (V3), perfil público (V3), login Google/Apple (antes de publicar nas lojas).

## Navegação
Abas inferiores: Dashboard | Treinos (Meus treinos · Iniciar) | Perfil

## Jornada principal
Criar conta → onboarding → Dashboard vazio (CTA "Criar meu primeiro treino") → criar treino → Iniciar → registrar séries → Finalizar → resumo → Dashboard atualizado.

## Requisitos funcionais
### Conta e perfil
- RF01 Login por e-mail (MVP pessoal).
- RF02 Onboarding: nome (obrigatório), peso, altura, objetivo (opcionais). Pode pular.
- RF03 Peso guardado como histórico com data.
- RF04 Preferência de duração máxima da sessão (padrão 120 min).
- RF05 Meta semanal de treinos (padrão 1), guardada com histórico.

### Treinos
- RF06 Criar, ver, editar, excluir e duplicar treinos.
- RF07 Status: draft, available, archived. Ao salvar, "available" vem marcado.
- RF08 A aba Iniciar lista apenas treinos "available".
- RF09 Adicionar (seleção múltipla), editar, remover e reordenar exercícios.
- RF10 Prescrição: séries, reps mín./máx., carga de referência (opcional), observação.

### Catálogo
- RF11 Catálogo base importado da wger e curado em PT-BR (~100–150 exercícios).
- RF12 Busca por nome, filtro pelos 11 grupos musculares, seção "Recentes".
- RF13 Usuário cria exercício: nome, grupo muscular, flag "peso corporal". Privado.

### Execução
- RF14 Iniciar cria sessão, tira snapshot do plano e inicia o cronômetro.
- RF15 Registrar carga e reps por série e marcar ✓.
- RF16 Adicionar série extra; deixar série em branco.
- RF17 Navegar entre exercícios em qualquer ordem.
- RF18 Sugestão em cinza com carga/reps da última sessão (a partir do 2º treino).
- RF19 Finalizar a qualquer momento, com confirmação e resumo.
- RF20 Banner "Treino em andamento" em todo o app enquanto houver sessão aberta.
- RF21 Sessão em andamento salva localmente (SQLite) e sincronizada ao finalizar.

### Histórico e Dashboard
- RF22 Listar sessões finalizadas e editá-las (recalcula métricas e PRs).
- RF23 Dashboard: treinos, tempo, volume, sequência, grupos musculares, PRs, últimos treinos. Período: semana (padrão) ou mês.
- RF24 Tela de evolução por exercício: gráfico + lista de sessões.

## Regras de negócio
- RN01 Uma sessão em andamento por usuário.
- RN02 Não é possível adicionar exercício novo durante a execução.
- RN03 Série só conta como realizada com ✓. Sem ✓ = "não realizada (—)", nunca 0×0.
- RN04 Séries além das planejadas são marcadas como extra.
- RN05 A sessão guarda snapshot do plano; editar/excluir o treino não altera o histórico.
- RN06 Duração = finished_at − started_at. A sessão nunca fecha sozinha.
- RN07 Passou do limite do perfil: notificação local; ao finalizar, perguntar o horário real (sugestão: horário da última série ✓).
- RN08 Sessão sem nenhuma série ✓ pode ser descartada e não conta.
- RN09 Carga do plano é só referência; vale a carga registrada.
- RN10 Cada variação é um exercício separado (ex.: "Supino reto (barra)" ≠ "Supino reto (halter)").
- RN11 Cada exercício tem 1 grupo muscular principal.
- RN12 Peso corporal: fora do volume em kg; evolui por reps; carga extra opcional.
- RN13 Primeira sessão com um exercício gera "marca inicial", não PR.
- RN14 Exercícios do usuário são privados.
- RN15 Sequência: semanas seguidas atingindo a meta vigente naquela semana. Alterar a meta afeta a semana atual e as futuras; semanas encerradas não são recalculadas.

## Métricas
- Semana: segunda a domingo.
- Treino contabilizado: sessão finalizada com ≥1 série ✓.
- Volume: Σ carga × reps (séries ✓ de exercícios com carga).
- Grupo muscular: +1 por sessão com ≥1 série ✓ do grupo. Grupos com 0 aparecem.
- PR com carga: maior carga com ≥1 rep. PR peso corporal: mais reps em uma série.
- Comparativo: semana atual vs. anterior, até o mesmo dia da semana.

## Grupos musculares (11)
Peito, Costas, Ombro, Bíceps, Tríceps, Antebraço, Abdômen, Quadríceps, Posterior de coxa, Glúteo, Panturrilha.