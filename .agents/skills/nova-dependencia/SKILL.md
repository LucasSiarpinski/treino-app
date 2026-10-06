---
name: nova-dependencia
description: Avalia e instala uma nova biblioteca no projeto. Use sempre que for necessário adicionar um pacote npm.
---

# Nova dependência

1. Explique por que a biblioteca é necessária e se dá para resolver sem ela.
2. Verifique a compatibilidade com Expo SDK 57 e com o Expo Go.
3. Prefira bibliotecas mantidas pelo Expo (expo-*).
4. Instale com `npx expo install <pacote>`.
5. Rode `npx expo-doctor` e relate o resultado.
6. Nunca rode `npm audit fix --force`.