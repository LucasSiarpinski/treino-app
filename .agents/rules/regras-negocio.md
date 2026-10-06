---
trigger: model_decision
description: Regras de negócio de treinos, sessões, séries, volume, PRs, sequência e Dashboard. Use ao implementar execução, finalização, histórico ou métricas.
---

# Regras de negócio

Referência completa: @../../docs/PRD.md (seções "Regras de negócio" e "Métricas").

## Invariantes críticos (nunca violar)
- RN01 Uma sessão in_progress por usuário.
- RN02 Sem novos exercícios durante a execução.
- RN03 Série realizada = is_done true. Série sem ✓ nunca vira 0×0.
- RN05 Histórico nunca muda quando o treino é editado.
- RN06 A sessão nunca é finalizada automaticamente.
- RN12 Exercícios de peso corporal ficam fora do volume em kg.
- RN13 Primeira ocorrência de um exercício = marca inicial, não PR.

## Ao implementar métricas
- Semana = segunda a domingo.
- Considerar apenas sessões finished com ≥1 série ✓.
- Ao editar/excluir sessão: recalcular cache da sessão e PRs do exercício.