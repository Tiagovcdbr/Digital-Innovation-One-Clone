## Digital Innovation One clone

#### Para rodar o projeto faça um fork ou um gitclone mas caso não esteja familiarizado com o GitHub faça o download!!
#### Após isso rode no terminal de sua IDE npm install para instalar as dependências e após serem baixadas rode o projeto com o npm start que provavelmente será na porta 3000.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

=====================================================
#### Tutorial para instalar o EsLint no projeto e evitar os erros que podem aparecer na hora de codar.
#### Começando a instalação com o comando npx eslint --init
#### Após a execução do comando, o terminal fará perguntas sobre a configuração do ESLint.
#### Pergunta 1:
=====================================================
```
How would you like to use ESLint? (Use arrow keys)
Como gostaria de usar o ESLint? (Use as teclas direcionais)
Resposta 1
To check syntax, find problems, and enforce code style
Checar sintaxe, buscar problemas e forçar os padrão de código
Pergunta 2:
What type of modules does your project use?
Que tipo de módulos seu projeto usa?
Respostas 2:
JavaScript modules (import/export)
CommonJS (require/exports) Selecione essa opção
None of these Nenhum desses
A resposta que vamos deixar selecionada aqui é o CommnsJS (require/exports), mas é muito comum nos projetos backend com JavaScript a galera usar o sucrase, se esse for o seu caso você deve selecionar a opção JavaScript modules (import/export)
Pergunta 3:
Which framework does your project use?
Qual framework seu projeto usa?
Resposta 3:
None of these
Nenhum desses
Pergunta 4:
Does your project use TypeScript?
Seu projeto usa TypeScript?
Resposta 4:
Escreva N e em seguida aperte a tecla ENTER
Pergunta 5:
Where does your code run? (Press <space> to select, <a> to toggle all, <i> to invert selection)
Onde seu projeto é executado? (Aperte <space> para selecionar, <a> para selecionar tudo, <i> para inverter a seleção)
Resposta 5:
Deixe apenas a opção Node selecionada.
Pergunta 6:
How would you like to define a style for your project?
Como você gostaria de definir um padrão de código para o seu projeto?
Resposta 6:
Use a popular style guide
Usar um padrão de código popular
Pergunta 7:
Which style guide do you want to follow?
_Qual padrão de código você quer seguir?_
Resposta 7:
Airbnb (https://github.com/airbnb/javascript)
Pergunta 8:
What format do you want your config file to be in?
Qual formato você deseja o seu arquivo de configuração?
Resposta 8:
JSON
Pergunta 9:
Would you like to install them now with npm?
Você gostaria de instalá-los agora com npm?
Resposta 9:
Y.
=====================================================
```
=====================================================
#### Note que Agora se você abrir o seu arquivo index.js ou outro arquivo vai se deparar com algo não muito agradável, um código cheio de sublinhados vermelhos
Se parar o mouse sobre a const que está na linha 1, aparecerá uma breve descrição do erro que o ESLint achou em seu código, Esse erro é simples de arrumar, só precisamos adicionar uma linha em branco após o require do restify. Lembrar de fazer isso vai ser chato, muito chato, mas não se preocupe! É aqui que entra a magia do Prettier. Agora vamos partir para a configuração do Prettier que terá a responsabilidade de ler todas as configurações que colocarmos para o ESLint e realizar as alterações necessárias uma vez que salvamos os arquivos que estamos editando. Por favor, não faça essas correções manualmente, isso só fará você sofrer e em algum momento desligará o ESLint por raiva a ele. e isso atrapalha muito e se torna exaustivo....

#### Com as perguntas respondidas e as depências instaladas repare no arquivo package-lock.json delete ele e instale as dependências novamente agora com as extensões com o comando

=====================================================

#### npm i prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
#### ou
#### npm i prettier eslint-config-prettier eslint-plugin-prettier

=====================================================

### Repare que vai ser criado um arquivo com o nome de .eslintrc.js
### Abra esse arquivo e substitua tudo dentro do arquivo pré configurado por essa configuração:

![config eslint](https://user-images.githubusercontent.com/78483210/129104945-95082de3-5d46-45aa-92f9-db39cdb92460.png)

=====================================================

#### Após esses passos note que seu código vai estar arrumado e não apontando os erros pois o Prettier e o eslint estão trabalhando em conjunto, ma isso não impede do vscode identificar os erros que não tem como ser evitados mas com essa configuração vai facilitar muito na hora de você codar.
## Happy Hacking !!!

#### Algumas imagens do projeto
===============================

![1](https://user-images.githubusercontent.com/78483210/139282663-706d7124-a207-4653-9bec-c6a21f23912e.jpg)

===============================

![2](https://user-images.githubusercontent.com/78483210/139282666-2715e4dc-539d-40c0-8e88-93c18014f9f5.jpg)

===============================


![3](https://user-images.githubusercontent.com/78483210/139282672-2f1d6b3c-0ff3-436c-ac32-287d0ea6bef0.jpg)

#### Caso queira ver como ficou o projeto basta fazer um fork ou um clon do repositório, mas caso não esteja familiarizado com o GitHub faça um download do arquivo e aproveite.
#### Muito obrigado pela visita e bom aproveitamento /> 😄 😀


