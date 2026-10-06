---
trigger: always_on
---

# Git e segurança
- Antes de começar uma tarefa, verifique com `git status` se há mudanças não salvas. Se houver, avise e sugira um commit antes.
- Nunca execute `git commit`, `git push`, `git reset` ou `git checkout` que descarte mudanças sem confirmação explícita.
- Nunca faça commit de .env, chaves, tokens ou senhas. Confirme que .env está no .gitignore.
- Mensagens de commit no padrão Conventional Commits (feat, fix, docs, refactor, chore).
- Commits pequenos: uma mudança lógica por commit.
