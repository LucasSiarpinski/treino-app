---
name: migracao-banco
description: Cria ou altera tabelas, colunas, índices e políticas RLS no Supabase. Use quando a tarefa envolver mudança de estrutura do banco de dados.
---

# Migração de banco

1. Verifique se a mudança está em docs/MODELO-DADOS.md. Se não estiver, PARE e peça aprovação.
2. Escreva o SQL em supabase/migrations/<timestamp>_<descricao>.sql.
3. Inclua RLS e políticas para toda tabela com user_id.
4. Mostre o SQL e explique em linguagem simples o que ele faz.
5. Aguarde confirmação antes de aplicar.
6. Após aplicar, atualize docs/MODELO-DADOS.md e os tipos TypeScript.
7. Nunca rode comandos que apaguem dados (DROP, TRUNCATE, DELETE) sem confirmação explícita.