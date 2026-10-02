# Minhas Finanças: como instalar no iPhone

Leva uns 5 minutos. Você vai precisar do computador só uma vez, para colocar o app no ar.

## 1. Leve seus dados (se já usou o app no Claude)

1. Abra o Minhas Finanças no Claude.
2. Role até o fim, em **Seus dados**, e toque em **Fazer backup**.
3. Salve o arquivo `.json` no iCloud Drive ou no app Arquivos.

## 2. Coloque o app no ar (no computador)

1. Descompacte o arquivo `minhas-financas.zip`. Vai aparecer uma pasta chamada `minhas-financas`.
2. Entre em **app.netlify.com/drop** e crie uma conta gratuita (pode entrar com o Google).
   Com conta, o site fica no ar para sempre. Sem conta, o Netlify apaga depois de pouco tempo.
3. Arraste a **pasta inteira** `minhas-financas` para a área indicada na página.
4. Em alguns segundos você recebe um link, algo como `https://nome-aleatorio.netlify.app`.
   Se quiser, troque o nome em **Site configuration → Change site name** (ex.: `geovane-financas`).

## 3. Instale no iPhone

1. Abra o link no **Safari** (precisa ser o Safari).
2. Toque no botão **Compartilhar** (quadrado com seta para cima).
3. Escolha **Adicionar à Tela de Início** e toque em **Adicionar**.
4. O ícone roxo aparece na tela de início. A partir daí, abra sempre por ele: tela cheia, sem barra do Safari.

## 4. Restaure seus dados

1. Abra o app pelo ícone.
2. Role até **Seus dados** → **Restaurar backup** e escolha o arquivo `.json` do passo 1.

## Bom saber

- **Seus dados ficam só neste iPhone.** Faça um backup de vez em quando (uma vez por mês já ajuda) e guarde no iCloud Drive.
- **Funciona sem internet** depois da primeira abertura.
- **Para atualizar o app** com alguma melhoria nova: peça para o Claude gerar a pasta de novo, entre no seu site no Netlify, aba **Deploys**, e arraste a pasta nova. Seus dados não são apagados.
- Não apague o app da tela de início sem fazer backup antes: apagar o ícone pode apagar os dados junto.
