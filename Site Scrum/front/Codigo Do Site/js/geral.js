var tentativaErrada = false;
      var tempoEspera = 1 * 15 * 1000; // 1 minuto em milissegundos
      var tempoRestante = tempoEspera; // Inicializa o tempo restante com 1 minuto
      var tempoBloqueio = null;

      function verificarRespostas() {
          var acertos = 0;

          // Verificando as respostas
          var respostaQ1 = document.querySelector('input[name="quest1"]:checked');
          var respostaQ2 = document.querySelector('input[name="quest2"]:checked');
          var respostaQ3 = document.querySelector('input[name="quest3"]:checked');

          // Se o usuário respondeu corretamente, aumenta a contagem de acertos
          if (respostaQ1 && respostaQ1.value === "1") acertos++;
          if (respostaQ2 && respostaQ2.value === "1") acertos++;
          if (respostaQ3 && respostaQ3.value === "1") acertos++;

          // Exibe o resultado
          var resultado = document.getElementById('resultado');
          if (acertos >= 2) {
              resultado.textContent = "Você passou no questionário! Acertos: " + acertos;

              // Habilitar o botão "Enviar"
              document.getElementById('enviarButton').disabled = false;
          } else {
              resultado.textContent = "Você não passou. Acertos: " + acertos;

              // Desabilitar o botão "Enviar"
              document.getElementById('enviarButton').disabled = true;
              tentativaErrada = true;
              bloquearTentativas();
          }
      }

      function bloquearTentativas() {
          // Desabilitar o botão "Corrigir"
          document.getElementById('corrigirButton').disabled = true;

          // Iniciar o temporizador
          tempoRestante = tempoEspera;
          atualizarTimer();

          // Configurar o tempo de bloqueio
          tempoBloqueio = setInterval(function() {
              tempoRestante -= 1000; // Decrementa 1 segundo

              if (tempoRestante <= 0) {
                  clearInterval(tempoBloqueio); // Para o temporizador quando o tempo acaba
                  document.getElementById('corrigirButton').disabled = false;
                  tentativaErrada = false;
              } else {
                  atualizarTimer();
              }
          }, 1000);
      }

      function atualizarTimer() {
          var minutos = Math.floor(tempoRestante / 60000); // Extrai os minutos
          var segundos = Math.floor((tempoRestante % 60000) / 1000); // Extrai os segundos
          document.getElementById('timer').textContent = "Aguarde: " + minutos + "m " + segundos + "s";
      }

      function enviarFormulario() {
          alert("Formulário enviado!");
          // Aqui você pode implementar o envio do formulário real, como uma requisição para o servidor
      }