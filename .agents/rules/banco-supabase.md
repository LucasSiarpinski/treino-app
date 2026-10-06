---
trigger: model_decision
description: Regras de banco de dados e Supabase. Use ao criar tabelas, migrações, consultas, políticas RLS, autenticação ou sincronização.
---

# Banco de dados (Supabase)

@../../docs/MODELO-DADOS.md

## Regras
- O modelo em docs/MODELO-DADOS.md é a referência. Mudanças nele exigem aprovação.
- Toda alteração de estrutura vira um arquivo de migração SQL versionado em supabase/migrations/.
- Toda tabela com user_id tem RLS ativado e política user_id = auth.uid().
- Nunca usar a service_role key no app. Somente a anon key, via .env.
- Exclusão de treino é lógica (deleted_at). Sessões nunca são apagadas em cascata.
- Snapshots (session_exercises, workout_name) são gravados no início da sessão e não seguem alterações posteriores.
- Datas em timestamptz (UTC); conversão para fuso local só na interface.

## Sessão em andamento
- Gravada primeiro no SQLite local; enviada ao Supabase ao finalizar.
- Em falha de rede, manter local e tentar novamente; nunca perder séries.