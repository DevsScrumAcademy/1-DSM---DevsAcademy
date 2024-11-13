# Fatec Jacareí - DSM 1º SEMESTRE #
# Equipe: DevsAcademy #
# Sobre o Projeto: #
# Tem como intuito o desenvolvimento de um projeto aplicando metodologias ágeis e seguindo todos os processos que envolvem tal método. A FATEC propôs aos alunos do 1° semestre de 2024 criar um produto cujo objetivo seja ensinar aos usuários sobre a metodologia Scrum e ao final do curso, a pessoa consegue emitir um certificado. #



# 👩‍💻 PRODUCT BACKLOG: 

<h2>REQUISITOS FUNCIONAIS</h2>
<table>
    <tr>
        <th>REQUISITO FUNCIONAL</th>
        <th>DESCRIÇÃO</th>
    </tr>
    <tr>
        <td>RF.01</td>
        <td>As páginas devem possuir um mecanismo de navegação comum (menu de navegação) que, ao ser clicado, remete o usuário à seção correspondente;</td>
    </tr>
    <tr>
        <td>RF.02</td>
        <td>O usuário deve ser capaz de se auto cadastrar, informando seu nome completo, e-mail e senha;</td>
    </tr>
    <tr>
        <td>RF.03</td>
        <td>O usuário deve ser capaz de efetuar autenticação utilizando e-mail do cadastro e senha;</td>
    </tr>
    <tr>
        <td>RF.04</td>
        <td>O sistema deve manter um cadastro de questões, com alternativas verdadeira ou falsa, referentes aos tópicos apresentados nas páginas do portal; </td>
    </tr>
    <tr>
        <td>RF.05</td>
        <td>Aos usuários logados, o sistema deve exibir 3 questões para cada tópico. As questões devem contemplar o tema abordado no tópico; </td>
    </tr>
    <tr>
        <td>RF.06</td>
        <td>O usuário não logado pode acessar o conteúdo das páginas (tópicos) do curso, mas não pode visualizar as questões;</td>
    </tr>
    <tr>
        <td>RF.07</td>
        <td>O usuário pode tentar responder as questões quantas vezes ele quiser até obter êxito; </td>
    </tr>
    <tr>
        <td>RF.08</td>
        <td>O sistema deve exibir as questões somente nos tópicos que o usuário não tenha sido aprovado. Para ser considerado aprovado no tópico é necessário acertar pelo menos 2 questões; </td>
    </tr>
    <tr>
        <td>RF.09</td>
        <td>O sistema deve ser capaz de emitir o certificado de conclusão para os usuários que foram aprovados em todos os tópicos;</td>
    </tr>
    <tr>
        <td>RF.10</td>
        <td>As questões devem ser cadastradas pelo administrador diretamente no SGBD PostgreSQL. </td>
    </tr>
    </tr>
</table>

# 👩‍💻 REQUISITOS NÃO FUNCIONAIS: 

<h2>Requisitos Não Funcionais:</h2>
<table>
    <tr>
        <th>REQUISITO NÃO FUNCIONAL</th>
        <th>DESCRIÇÃO</th>
    </tr>
    <tr>
        <td>RNF.01</td>
        <td>Os conteúdos devem ser distribuídos em páginas atendendo aos princípios de arquitetura de informação; </td>
    </tr>
    <tr>
        <td>RNF.02</td>
        <td>As páginas devem ser organizadas em uma sequência lógica para o aprendizado do Scrum com um mecanismo para o usuário navegar para a próxima página e página anterior; </td>
    </tr>
    <tr>
        <td>RNF.03</td>
        <td>O curso deve cobrir os conhecimentos necessários para o aprendizado do Scrum;</td>
    </tr>
    <tr>
        <td>RNF.04</td>
        <td>O curso deve seguir uma sequência lógica necessária para o aprendizado do Scrum; </td>
    </tr>
    <tr>
        <td>RNF.05</td>
        <td>As questões devem ser compatíveis com o conteúdo apresentado no tópico; </td>
    </tr>
    <tr>
        <td>RNF.06</td>
        <td>O visual deve ser responsivo.</td>
    </tr>
    </tr>
</table>

# 📚 USER STORIES: 

<h2>USER STORIES</h2>
<table>
    <tr>
        <th>REQUISITO NÃO FUNCIONAL</th>
        <th>DESCRIÇÃO</th>
    </tr>
    <tr>
        <td>RF.01 e RNF.02</td>
        <td>Como usuário gostaria de navegar por um menu consistente que me levasse aonde eu clicasse e todas as páginas tivesse um caminho de volta para esse menu;</td>
    </tr>
    <tr>
        <td>RF.02</td>
        <td>Sendo usuário, gostaria de me cadastrar no site com nome, e-mail e senha para ser identificado no site, e salvar meu progresso no curso;</td>
    </tr>
    <tr>
        <td>RNF.03</td>
        <td>E, claro, gostaria de mais tarde poder usar o e-mail e senha para entrar na minha conta quando retornar ao site;</td>
    </tr>
    <tr>
        <td>RF.04 e RNF.05</td>
        <td>O site deve possuir questões para testar meu conhecimento no curso a fim de avaliar meu entendimento de scrum, na pagina relevante as questões;</td>
    </tr>
    <tr>
        <td>RF.05 e RF.06</td>
        <td>A pagina deve ser acessível a todos, mas somente mostrar as questões, e meu progresso, quando estiver logado no site;</td>
    </tr>
    <tr>
        <td>RF.07</td>
        <td>Á fim de simplificar o processo de avaliação, seria conveniente possuir a capacidade de tentar as questões novamente até acertar todas elas;</td>
    </tr>
     <tr>
        <td>RF.08</td>
        <td>Como o site só mostra as questões se eu estiver logado, então faz sentido ele não mostrar questões se eu já tiver sido aprovado em um tópico;</td>
    </tr>
     <tr>
        <td>RF.09</td>
        <td>Gostaria de como usuário do site poder ter algum comprovante do conhecimento adquirido através do curso, um certificado, quando for aprovado em todos os tópicos;</td>
    </tr>
     <tr>
        <td>RF.10</td>
        <td>Conforme o curso evoluir, a possibilidade de inserir novas questões para serem adicionadas ao curso via banco de dados seria bem útil;</td>
    </tr>
    </tr>
</table>




<h2>Equipe</h2>

<table>
    <tr>
        <th>Função</th>
        <th>Nome</th>
        <th>Github</th>
    </tr>
    <tr>
        <td>Scrum Master</td>
        <td>Stefan Souza Cruz</td>
        <td><a href=https://github.com/Stefan0212><img src="Images/github-logo.png" style="height:20px; width:20px;"></a></td>
    </tr>
    <tr>
        <td>Product Owner</td>
        <td>Filippe Gonçalves Marchezoni</td>
        <td><a href=https://github.com/FilippeGM><img src="Images/github-logo.png" style="height:20px; width:20px;"></a></td>
    </tr>
    <tr>
        <td>Developer</td>
        <td>Gustavo Reis</td>
        <td><a href=https://github.com/GustavoReis-xml><img src="Images/github-logo.png" style="height:20px; width:20px;"></a></td>
    </tr>
    <tr>
        <td>Developer</td>
        <td>Arthur Augusto Da Silva Cunha</td>
        <td><a href=https://github.com/ArthurAugusto10><img src="Images/github-logo.png" style="height:20px; width:20px;"></a></td>
    </tr>
    <tr>
        <td>Developer</td>
        <td>Anderson Fontes</td>
        <td><a href=https://github.com/Anderson-Fontes><img src="Images/github-logo.png" style="height:20px; width:20px;"></a></td>
    </tr>
    <tr>
        <td>Developer</td>
        <td>Aline Raquel Camargo</td>
        <td><a href=https://github.com/AlineRaquelC><img src="Images/github-logo.png" style="height:20px; width:20px;"></a></td>
    </tr>
    <tr>
        <td>Developer</td>
        <td>Isac Carvalho</td>
        <td><a href=https://github.com/IsacCarvalho2><img src="Images/github-logo.png" style="height:20px; width:20px;"></a></td>
    </tr>
    <tr>
        <td>Developer</td>
        <td>Rafael Shinji Tomokame</td>
        <td><a href=https://github.com/RafaelShinjiTomokame><img src="Images/github-logo.png" style="height:20px; width:20px;"></a></td>
    </tr>
    <tr>
        <td>Developer</td>
        <td>João Pedro</td>
        <td><a href=https://github.com/Shynj0><img src="Images/github-logo.png" style="height:20px; width:20px;"></a></td>
    </tr>
</table>


# SPRINT 1 

Na primeira sprint, nosso principal objetivo foi criar a parte visual do site utilizando a ferramenta Figma. Para alcançar esse objetivo, dividimos o grupo em duas equipes: uma focada na criação da página visual e outra no desenvolvimento do conteúdo dos módulos do curso e na organização da documentação no Trello e GitHub. O Scrum Master monitorou periodicamente o gráfico de burndown e, durante as reuniões diárias, verificou se alguma tarefa estava fora do prazo.




<h2>SPRINT BACKLOG</h2>
<table>
    <tr>
        <th>REFERENCIA</th>
        <th>REQUISITO DA SPRINT</th>
        <th>RESPONSAVEL</th>
        <th>CONCLUÍDA</th>
    </tr>
    <tr>
        <td>RNF.05</td>
        <td>Produzir as perguntas para o usuario</td>
        <td>Aline, Anderson, Isac</td>
        <td>✔</td>
    </tr>
    <tr>
        <td>RNF.01 ,RNF.02</td>
        <td>Produzir a parte visual do site</td>
        <td>João e Rafael</td>
        <td>✔</td>
    </tr>
    <tr>
        <td>RNF.03,RNF.04</td>
        <td>Conteudo de cada modulo</td>
        <td>Aline, Anderson, Isac</td>
        <td>✔</td>
    </tr>
    <tr>
        <td>RF.01</td>
        <td>Cada página deve interagir entre si.</td>
        <td>Gustavo e Arthur</td>
        <td>✔</td>
    </tr>
    </tr>
</table>

# BURNDOWN:



![Anotação 2024-10-03 221449](https://github.com/user-attachments/assets/d46c0520-2059-42d3-b134-3fe9f58cb997)
<h2>Sprint 2</h2>
<img src="Images/Screenshot 2024-11-01 at 18-44-33 Burndown for Trello - free scrum agile burndown time-estimates online web-app for Trello.png">


# SPRINT 2 

Nessa sprint focamos em transformar aquilo que foi apresentado no modelo para o cliente em código, nos trabalhamos com a parte de estilização usando o CSS e o HTML para colocar o conteúdo de cada página fazendo toda a parte do código e organizando para passar para cada membro do time para iniciar suas tarefas. Além disso, buscamos adiantar algumas atividades para não ficarmos sobrecarregados para a proxima sprint. Sobre tudo, respeitando e priorizando as atividades que a gente levantou para essa sprint.


<h2>SPRINT BACKLOG</h2>
<table>
    <tr>
        <th>REFERENCIA</th>
        <th>REQUISITO DA SPRINT</th>
        <th>RESPONSAVEL</th>
        <th>CONCLUÍDA</th>
    </tr>
    <tr>
        <td>RF.05</td>
        <td>Questionario</td>
        <td>Anderson, Gustavo</td>
        <td>✔</td>
    </tr>
    <tr>
        <td>RNF.02</td>
        <td>Pegar todo o conteudo apresentado e passar para o CSS e HTML/Modulo 3 e 4</td>
        <td>João e Rafael</td>
        <td>✔</td>
    </tr>
    <tr>
        <td>RNF.02</td>
        <td>Pegar todo o conteudo apresentado e passar para o CSS e HTML/Modulo 1 e 2</td>
        <td>Anderson, Gustavo</td>
        <td>✔</td>
    </tr>
    <tr>
        <td>RF.02</td>
        <td>Passar para O CSS e o HTML</td>
        <td>Filippe</td>
        <td>✔</td>
    </tr>
    </tr>
</table>

# SPRINT RETROSPECTIVE:

Nessa segunda sprint a gente buscou adiantar algumas tarefas que são mais difíceis para algumas pessoas do grupo que tem mais facilidade com certos assuntos e delegar alguns membros para estudar tarefas futuras que a gente vai deixar para a próxima sprint. Percebemos que pecamos em certos pontos do processo como a falta de priorizar as tarefas passadas para cada pessoa, além disso, ficamos sem um membro do grupo que tirou um atestado de licença a maternidade.  A gente decidiu nesse momento que a pessoa está vivendo de não passar as tarefas, pois é necessário focar o seu tempo na maternidade e como um grupo entendemos que é muito importe esse tempo.

# SPRINT 3

<!---------- colocar as infos da sprint --------------->

<h2>SPRINT BACKLOG</h2>
<table>
    <tr>
        <th>REFERENCIA</th>
        <th>REQUISITO DA SPRINT</th>
        <th>RESPONSAVEL</th>
        <th>CONCLUÍDA</th>
    </tr>
    <tr>
        <td>RF.01,RNF.01,RNF.02</td>
        <td>Questionario</td>
        <td>Anderson, Gustavo</td>
        <td>✔</td>
    </tr>
    <tr>
        <td>RF.02</td>
        <td>Pegar todo o conteudo apresentado e passar para o CSS e HTML/Modulo 3 e 4</td>
        <td>João e Rafael</td>
        <td>✔</td>
    </tr>
    <tr>
        <td>RF.03</td>
        <td>Pegar todo o conteudo apresentado e passar para o CSS e HTML/Modulo 1 e 2</td>
        <td>Anderson, Gustavo</td>
        <td>✔</td>
    </tr>
    <tr>
        <td>RF.04</td>
        <td>Passar para O CSS e o HTML</td>
        <td>Filippe</td>
        <td>✔</td>
    </tr>
    <tr>
        <td>RF.05</td>
        <td>Passar para O CSS e o HTML</td>
        <td>Filippe</td>
        <td>✔</td>
    </tr>
    <tr>
        <td>RF.06</td>
        <td>Passar para O CSS e o HTML</td>
        <td>Filippe</td>
        <td>✔</td>
    </tr>
    <tr>
        <td>RF.07</td>
        <td>Passar para O CSS e o HTML</td>
        <td>Filippe</td>
        <td>✔</td>
    </tr>
    <tr>
        <td>RF.08</td>
        <td>Passar para O CSS e o HTML</td>
        <td>Filippe</td>
        <td>✔</td>
    </tr>
    <tr>
        <td>RF.09</td>
        <td>Passar para O CSS e o HTML</td>
        <td>Filippe</td>
        <td>✔</td>
    </tr>
    <tr>
        <td>RF.10</td>
        <td>Passar para O CSS e o HTML</td>
        <td>Filippe</td>
        <td>✔</td>
    </tr>
     <tr>
        <td>RNF.03</td>
        <td>aaaas</td>
        <td>Filippe</td>
        <td>✔</td>
    </tr>
    <tr>
        <td>RNF.04</td>
        <td>aaaaa</td>
        <td>Filippe</td>
        <td>✔</td>
    </tr>
    <tr>
        <td>RNF.05</td>
        <td>aaaaa</td>
        <td>Filippe</td>
        <td>✔</td>
    </tr>
    <tr>
        <td>RNF.06</td>
        <td>aaaaa</td>
        <td>Filippe</td>
        <td>✔</td>
    </tr>
    </tr>
</table>

<!--precisa terminar de arrumar-->




