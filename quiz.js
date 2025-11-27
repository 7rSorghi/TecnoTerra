function corrigirQuiz() {
    const respostasCorretas = {
        questao1: "q1b",
        questao2: "q2c",
        questao3: "q3b",
        questao4: "q4a",
        questao5: "q5a",
        questao6: "q6c",
        questao7: "q7c"
    };

    let acertos = 0;

    Object.keys(respostasCorretas).forEach(questao => {
        const correta = respostasCorretas[questao];
        const marcada = document.querySelector(`input[name='${questao}']:checked`);
        const bloco = document.querySelector(`.questao input[name='${questao}']`).closest(".questao");

        bloco.querySelectorAll(".form-check-label").forEach(label => {
            label.style.color = "";
            label.style.fontWeight = "";
        });

        let mensagem = bloco.querySelector(".mensagem-resultado");
        if (!mensagem) {
            mensagem = document.createElement("p");
            mensagem.classList.add("mensagem-resultado", "mt-2", "fw-bold");
            bloco.appendChild(mensagem);
        }

        if (!marcada) {
            mensagem.textContent = "⛔ Você não respondeu esta pergunta.";
            mensagem.style.color = "orange";
            return;
        }

        const labelCorreta = document.querySelector(`label[for='${correta}']`);
        labelCorreta.style.color = "limegreen";
        labelCorreta.style.fontWeight = "bold";

        if (marcada.id === correta) {
            acertos++;
            mensagem.textContent = "✔ Você acertou!";
            mensagem.style.color = "limegreen";
        } else {
            const labelErrada = document.querySelector(`label[for='${marcada.id}']`);
            labelErrada.style.color = "red";
            labelErrada.style.fontWeight = "bold";

            mensagem.textContent = "❌ Você errou! Resposta correta marcada em verde.";
            mensagem.style.color = "red";
        }

        bloco.querySelectorAll("input[type='radio']").forEach(input => input.disabled = true);
    });

    alert(`Você acertou ${acertos} de 7 questões!`);
}

