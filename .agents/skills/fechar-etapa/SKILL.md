---
name: fechar-etapa
description: Encerra a etapa atual do ROADMAP com revisão e commit. Use somente quando o usuário digitar /fechar-etapa ou pedir explicitamente para finalizar a etapa.
---

# Fechar etapa

1. Rode `git status` e `git diff --stat` e resuma o que mudou.
2. Compare as mudanças com o PRD e as decisões. Aponte qualquer desvio.
3. Revise: erros de TypeScript (`npx tsc --noEmit`), console.log esquecido, segredos no código.
4. Confirme com o usuário que os critérios de "Pronto quando" foram testados no iPhone.
5. Atualize docs/ROADMAP.md (checkboxes e status ✅).
6. Se surgiu decisão nova, registre em docs/DECISOES.md.
7. Sugira a mensagem de commit (Conventional Commits) e os comandos git. Não faça push sem confirmação.