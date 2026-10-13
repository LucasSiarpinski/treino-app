---
trigger: model_decision
description: Padrões visuais e de usabilidade do app. Use ao criar ou editar telas, componentes, cores, botões, formulários ou a tela de execução do treino.
---

# UI — pensada para uso na academia
Contexto: uso rápido, com uma mão, mão suada, entre séries.

## Tema
- Seguir o tema do iPhone (useColorScheme). O escuro é a prioridade de design.
- Cores somente via src/theme.ts. Proibido hex solto nos componentes.

| Token | Escuro | Claro |
|---|---|---|
| background | #101214 | #F6F7F4 |
| surface (cards) | #1D2226 | #FFFFFF |
| primary (fundo de ação) | #B8F34A | #B8F34A |
| onPrimary (texto sobre primary) | #101214 | #101214 |
| primaryText (texto/ícone de destaque) | #B8F34A | #3F6B00 |
| text | #F4F6F2 | #101214 |
| textSecondary | #B4BEC3 | #5B666C |

## Uso da cor de destaque
- Verde-lima só em: "Iniciar treino", cronômetro ativo, ✓ de série concluída, barras de progresso e PRs.
- Todo o resto neutro. No máximo 1 ação primária por tela.
- Nunca texto lima sobre fundo claro; no claro use primaryText.

## Toque
- Área mínima de toque: 48×48 (pt/dp). Use hitSlop quando o visual for menor.
- Ações principais da execução ("Concluir série", "Próximo exercício", "Finalizar"): altura 56–64.
- Espaço mínimo de 8 entre ações vizinhas. Ações destrutivas longe das principais.
- Ações principais na metade inferior da tela (alcance do polegar).

## Entrada de dados na execução
- Carga: keyboardType="decimal-pad", aceitar vírgula e ponto (12,5 = 12.5).
- Reps: keyboardType="number-pad", só inteiros.
- Botões − / + ao lado dos campos: carga ±2,5 kg; reps ±1. Nunca abaixo de 0.
- Pré-preencher com a sugestão da última sessão (RF18) em cinza; um toque confirma.
- O teclado nunca pode cobrir o campo ativo nem o botão de concluir.

## Execução e tela
- O cronômetro é sempre calculado por (agora − started_at); nunca por contador acumulado.
- Opção no Perfil "Manter tela acesa durante o treino" (expo-keep-awake), desligada por padrão.

## Acessibilidade
- Textos respeitam o tamanho de fonte do sistema.
- Números da execução (carga, reps, tempo) grandes e com fonte tabular.
- Todo botão só com ícone tem accessibilityLabel em português.
