# Desafio de Programação GoDev
 
## Instruções Download e Configuração
 
### Aplicações Necessárias
Para poder "baixar" o projeto é necessário ter o Git instalado no computador, caso não tenha acesse: https://git-scm.com/ e faça o download.
Além disso, para ser possível rodar o projeto é necessário ter o Visual Studio, com a carga de trabalho ASP.NET e desenvolvimento Web instalada, o Visual Studio Code, o Node.js, o SQL Server 2019 Express e o SQL Management Studio instalado em sua máquina.
<br>
Caso não tenha nenhum dessas aplicações, será necessário instalá-las:
<br>
Visual Studio: https://visualstudio.microsoft.com/pt-br/thank-you-downloading-visual-studio/?sku=Community&rel=16
<br>
Visual Studio Code: https://code.visualstudio.com/docs/?dv=win
<br>
Node.js: https://nodejs.org/en/
<br>
SQL Server 2019 Express: https://www.microsoft.com/pt-br/sql-server/sql-server-downloads
<br>
SQL Server Management Studio: https://docs.microsoft.com/pt-br/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15
<br>
Obs: Primeiro faça a instalação do SQL Server 2019 Express antes de realizar a instalação do SQL Server Management Studio.
 
 
### Clonando o projeto do GitHub
Após o download do Git e te todas as ferramentas citadas, no repositório: https://github.com/Esk-Borba/desafio-de-programacao-godev, que contem o front-end do projeto, clique em Code, após isso, clique na prancheta na aba HTTPS, que fica do lado do link.
Depois que clicar na prancheta, o link do repositório será copiado, com isso abra o seu terminal, no caso do Windows o cmd, navegue até uma pasta de sua preferência usando o comando "cd". Ao chegar em sua pasta de preferencia, digite no próprio cdm "git clone + ctrl+v", tendo que apresentar o seguinte comando na tela: git clone https://github.com/Esk-Borba/desafio-de-programacao-godev.git. Logo após aperte "Enter" e o projeto será baixado na pasta escolhida.
Após realizar esses procedimentos, para baixar o back-end do projeto, vá até o repositório: https://github.com/Esk-Borba/desafio-de-programacao-godev-back-end e realize os mesmos procedimentos descritos acima.
 
 
### Abrindo a pasta que contém o projeto front-end no Visual Studio Code
Abra o seu Visual Studio Code, vá até a pasta onde o projeto do front-end foi clonado, araste a pasta "desafio-de-programacao-godev" para dentro do Visual Studio Code, ou na tela inicial do Visual Studio Code selecione "Open Folder" e navegue até a pasta onde o projeto foi clonado. 
 
### Abrindo o projeto back-end
Vá até a pasta onde o projeto back-end foi clonado, entre na pasta "desafio-de-programacao-godev-back-end"
e abra o arquivo desafioProg.sln, onde o arquivo será aberto com o Visual Studio.
 
### Baixando dependências do projeto front-end
Abra o terminal do Visual Studio Code, indo até Terminal na parte superior da tela, ou apertando no teclado
" ctrl + ' ". Após isso, digite "cd + tab" e verifique se você está na pasta raiz do projeto, tendo que aparecer .\.git\ ou .\public\, caso apareça, apague o que está escrito e digite o comando "npm install", que será responsável por baixar todas as dependências necessárias para rodar o projeto front-end.
 
### Baixando pacotes NuGet do projeto back-end
Com o projeto back-end aberto no Visual Studio, vá até o Gerenciador de Soluções, podendo acessá-lo em Exibir no canto superior da tela ou diretamente em Gerenciador de Soluções no canto direito da tela. Após acessar o Gerenciador de Soluções, com o botão direito do mouse clique em desafioProg e vá até em Gerenciar Pacotes do NuGet.
Ao clicar com o botão esquerdo em Gerenciar Pacotes do NuGet, abrirá um tela no Visual Studio, nesta tela você irá selecionar Procurar
Ao clicar em Procurar, no campo de pesquisa digite:
EntityFramework, clique em instalar. Depois de finalizar a instalação do EntityFramework, vá novamente a aba de pesquisa e pesquise por Microsoft.AspNet.Cors, clique em instalar, e depois de finalizar a instalação do Microsoft.AspNet.Cors realize o mesmo procedimento mas dessa vez pesquisando por Microsoft.AspNet.WebApi.Cors.
 
### Criando o banco de dados
Abra o SQL Server Management Studio. Ao abrir, o programa pedirá para se conectar com o servidor, com isso clique em conectar. Depois de conectar, selecione Nova Consulta, que se localiza na parte superior da tela. Ao clicar em Nova Consulta, o programa será redirecionado para uma tela em branco. Nesta tela em branco, onde se é possível digitar, você irá colar o script do banco de dados que se encontra neste repositório: https://github.com/Esk-Borba/desafio-de-programacao-script-bd.git
Ao entrar no repositório que contém o script do banco, abra o arquivo onde se está escrito scriptBD, e copie ele por inteiro.
Depois de copiar todo o script do banco de dados, volte para o SQL Server Management Studio, em Nova Consulta e cole o script, após colar o script clique em Executar, que se encontra logo abaixo de Nova Consulta no parte superior da tela. Pronto o banco de dados será criado, e para ter certeza, vá até Pesquisador de Objetos na parte esquerda da tela, clique duas vezes em Bancos de Dados e veja se o banco de dados aparece na lista, tendo que ter como nome "desafio-prog"
 
 
### Acrescentando o banco de dados no projeto back-end
Abre o projeto back-end no Visual Studio, vá novamente até o Gerenciador de Soluções e procure por Models e abra a pasta clicando duas vezes sobre ela.
Essa pasta contém um arquivo chamado Model1.edmx. Clique com o botão direito sobre esse arquivo e vá até a opção excluir. Depois disso, na pasta Models, clique com o botão esquerdo, vá até Adicionar, Novo Item, Dados, ADO.NET Entity Data Model (obs: essa opção só irá aparecer se o pacote NuGet EntityFramework foi instalado anteriormente) e Adicionar. Após isso abrirá uma nova tela, selecione EF Designer from database e clique em avançar. Outra tela irá aparecer, nessa tela clique em New Connection. Na tela Propriedades da Conexão, no campo Nome do Servidor digite " .\SQLEXPRESS " Logo após isso, em Selecionar ou digitar nome do banco de dados selecione o banco de dados "desafio-prog" (obs: Ele só irá aparecer caso o processo de criar o banco de dados tenha sido feito anteriormente). Depois de selecionar, clique em Ok. Após isso, aparecerá novamente a tela onde foi clicado em New Connection. Nessa tela, selecione o campo abaixo de "Save connection settings in Web.Config as:" e digite "desafioProgEntities", selecione avançar, clique na checkbox correspondente a Tables e por fim clique em concluir. Após isso, espere com que o diagrama do banco de dados seja carregado para poder salvar as alterações clicando primeiramente em qualquer parte da tela, como no fundo do diagrama(parte preta) e depois clique nos dois discos que se encontram na parte superior da tela embaixo de Exibir.
 
### Rodando o projeto front-end
Abra o terminal do Visual Studio Code, indo até Terminal na parte superior da tela, ou apertando as teclas
" ctrl + ' ". Após isso, digite " cd + tab " e verifique se você está na pasta raiz do projeto, tendo que aparecer .\.git\ ou .\public\, caso apareça, apague o que está escrito e digite o comando "npm run serve", que será responsável por compilar o projeto front-end. Após os processos de carregamento, aparecerá que o projeto foi compilado com sucesso, com isso vá até o seu navegador de preferência e digite "http://localhost:8080/" ou no terminal do Visual Studio Code pressione a tecla CTRL e com o botão esquerdo do mouse clique em "http://localhost:8080/" (obs: a porta pode a vir mudar dependendo se alguma aplicação já está rodando na mesma porta em sua máquina) para conseguir ter acesso ao projeto em seu navegador.
 
### Rodando o projeto back-end
Abra o Visual Studio e clique em IIS Express(seta verde) na parte superior da tela e espere com que uma página Web seja carregada apresentando como título ASP.NET.
 
 
## Instruções de uso do projeto
Depois de realizar todos os processos acima, vá até seu navegador onde "http://localhost:8080/" está aberto, assim sendo possível visualizar a parte front-end do projeto.
Na parte superior da tela temos Cadastrar Participante, Cadastrar Salas de Evento, Cadastrar Espaço de Café, Pesquisar e Etapas.
 
### Cadastro Salas de Evento
Primeiramente, para que seja possível realizar o cadastro de um participante, é necessário clicar em Cadastrar Salas de Evento. Ao clicar, você será redirecionado para a tela Cadastro Sala Evento, onde para realizar o cadastro de uma sala, será necessário preencher todos os campos, neste caso Nome da Sala de Evento e Lotação da Sala, e posteriormente clicar no botão Cadastrar Sala de Evento.
<br>
Observação:
<br>
Caso o cadastro da sala seja um sucesso, aparecerá uma mensagem informando: "Sala de Evento cadastrada com Sucesso!".
<br>
Caso algum dos campos não tenham sido preenchidos, aparecerá uma mensagem informando: "Por favor preencha todos os campos acima"
<br>
Caso o número máximo de salas, neste caso duas, foi excedido, aparecerá uma mensagem informando: "A quantidade limite de salas foi excedida".
 
### Cadastro Espaços de Café
Depois de cadastrar as duas salas necessárias, clique em voltar e você será redirecionado para a tela inicial. Na tela inicial clique em Cadastrar Espaço de Café. Ao clicar, você será redirecionado para a tela Cadastro Espaço Café, onde para realizar o cadastro de um espaço de café, será necessário preencher todos os campos, neste caso Nome do Café, Lotação do Café, e posteriormente clicar no botão Cadastrar Espaço Café.
<br>
Observação:
<br>
Caso o cadastro do espaço de café tenha sido um sucesso, aparecerá uma mensagem informando: Espaço Café cadastrado com Sucesso!.
<br>
Caso algum dos campos não tenham sido preenchidos, aparecerá uma mensagem informando: "Por favor preencha todos os campos acima".
<br>
Caso nenhuma sala tenha sido cadastrada, aparecerá uma mensagem informando: "É preciso realizar primeiramente o cadastro de duas salas antes de realizar o cadastro dos espaços de café".
<br>
Caso as duas salas tenham sido cadastradas, mas a lotação colocada no campo Lotação Espaço Café seja inferior à média da lotação das salas, aparecerá uma mensagem informando: "A lotação do espaço de café precisa ser igual ou superior a: média de lotação das salas".
<br>
Caso, já foram cadastrados dois espaços de café, que neste caso é o número máximo de espaços, aparecerá uma mensagem informando: "Quantidade limite de espaços de café foi excedida".
 
### Cadastro Participante
Depois de cadastrar as duas salas e os dois espaços de café, clique em Cadastrar Participante, onde você será redirecionado para a tela Cadastro Participante. Nessa tela será possível realizar o cadastro de um participante, contendo nele seu Nome, Sobrenome, Sala, e Espaço de Café.
<br>
Depois de preencher todos os campos, clique em cadastrar:
<br>
Caso o cadastro for realizado com sucesso, aparecerá uma mensagem informando o sucesso do cadastro.
<br>
Caso o cadastro for realizado com sucesso, mas a diferença de participantes entre as salas cadastradas for maior que 1, aparecerá uma mensagem informando que "Participante cadastrado com sucesso, e realocado para outra sala devido a motivos de segurança".
<br>
Caso a lotação dos espaços de café ou das salas tenham chegado ao limite máximo, aparecerá uma mensagem informando que "Não foi possível cadastrar o participante pois a lotação das salas ou dos espaços de café foram excedidas".
<br>
Caso a etapa 1 tenha sido finalizada na tela de etapas, aparecerá uma mensagem informando: "O cadastro de participantes foi desabilitado, pois a Etapa 1 foi finalizada."
 
 
### Tela de Pesquisa
Nesta tela, é possível realizar a pesquisa de um participante através de seu nome, ver qual participante estará em cada sala em cada etapa, selecionando a sala e a etapa desejada e ver qual participante estará em cada espaço de café em cada etapa, selecionando o espaço de café e a etapa desejada.
 
### Tela de Etapas
Nesta tela, é possível ver o andamento das duas etapas e realizar a finalização de cada etapa. 
Observação:
Ao finalizar a Etapa 1, clicando no botão Finalizar Etapa 1, o sistema irá fazer com que metade dos participantes troquem de sala na Etapa 2 do treinamento.
 
 

