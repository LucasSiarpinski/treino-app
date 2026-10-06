# Treino App — Regras do projeto

## Contexto
App mobile pessoal para planejar, executar e acompanhar treinos de musculação.
Desenvolvedor: iniciante em código, trabalhando sozinho com IA.
Explique sempre o "porquê" das mudanças, de forma simples.

## Documentação (fonte da verdade)
- docs/PRD.md — o que construir (requisitos e regras de negócio)
- docs/DECISOES.md — decisões já tomadas (não reabrir sem motivo)
- docs/MODELO-DADOS.md — tabelas e campos
- docs/ROADMAP.md — etapas e status atual
Leia os documentos relevantes antes de qualquer tarefa de produto.

## Stack (não mudar sem aprovação)
- Expo SDK 57 + Expo Router + TypeScript (strict)
- Supabase (Postgres + Auth por e-mail no MVP)
- expo-sqlite para a sessão em andamento (offline-first)
- Testes no iPhone via Expo Go. Computador: Linux (Ubuntu). Sem Mac.

## Regras de ouro
1. Um passo por vez. Ao terminar cada passo, diga exatamente como testar no iPhone.
2. Nunca altere decisões do PRD/DECISOES. Se discordar, pergunte antes.
3. Instale pacotes com `npx expo install`, nunca `npm install <pacote>`.
4. Nunca rode `npm audit fix --force`.
5. Use apenas bibliotecas compatíveis com o Expo Go.
6. Nunca apague arquivos nem altere o banco sem confirmação explícita.
7. Nunca coloque chaves ou segredos no código. Use .env (listado no .gitignore).
8. Responda em português. Código, nomes de arquivos, tabelas e variáveis em inglês.
9. Ao final de cada etapa, sugira a mensagem de commit (Conventional Commits).
10. Prefira a solução mais simples que atende ao requisito. Sem abstrações antecipadas.

## Ambiente
- A rede exige IPv4: NODE_OPTIONS="--dns-result-order=ipv4first" já está no ~/.bashrc.
- Se o celular não conectar ao servidor: `npx expo start --tunnel`.