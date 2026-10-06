---
name: revisar
description: Revisa o código alterado sem modificar nada. Use somente quando o usuário digitar /revisar ou pedir uma revisão.
---

# Revisar (somente leitura)
NÃO edite nenhum arquivo nesta skill.
1. Rode `git diff` e analise apenas o que mudou.
2. Verifique: regras de negócio (RN01–RN15), padrões de .agents/rules/, uso de `any`, console.log, segredos no código, telas sem estado de carregando/erro.
3. Classifique cada ponto como 🔴 crítico, 🟡 melhoria ou 🟢 ok.
4. Para cada 🔴, explique o problema e sugira a correção, sem aplicar.
5. Termine com um veredito: pode commitar ou precisa corrigir antes.
