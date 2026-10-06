---
trigger: model_decision
description: Padrões de código do app Expo/React Native. Use ao criar ou editar telas, componentes, hooks, navegação ou arquivos TypeScript.
---

# Padrões de código

## Estrutura de pastas
- app/ — apenas rotas (Expo Router). Telas finas: chamam componentes e hooks.
- src/components/ — componentes visuais reutilizáveis
- src/features/<feature>/ — lógica por domínio (workouts, sessions, exercises, profile, dashboard)
- src/lib/ — clientes (supabase.ts, db local), utilitários
- src/types/ — tipos compartilhados

## TypeScript
- strict ativado; proibido `any` (use `unknown` e trate).
- Tipos do banco gerados pelo Supabase quando disponíveis.

## Componentes
- Somente componentes de função; nomes em PascalCase.
- Um componente por arquivo; arquivos com no máx. ~200 linhas.
- Textos da interface em português.

## Estilo
- StyleSheet do React Native; cores e espaçamentos centralizados em src/theme.ts.
- Respeitar a área segura (SafeAreaView) e o teclado em formulários.

## Dados
- Toda chamada ao Supabase com tratamento de erro e mensagem amigável.
- Cálculos de métricas em funções puras (fáceis de testar), nunca dentro da tela.

## Proibido
- Bibliotecas que exijam código nativo fora do Expo Go.
- console.log esquecido no código final.