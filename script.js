document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("input");
    const form = document.querySelector("form");
    const ul = document.querySelector("ul");
    let alternarClasse = true;

    // Adiciona nova tarefa
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        adicionarTarefa();
    });

    function adicionarTarefa() {
        if (input.value.trim() !== "") {
            const li = document.createElement("li");
            li.classList.add(alternarClasse ? "li1" : "li2");
            alternarClasse = !alternarClasse;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.addEventListener("change", function () {
                if (checkbox.checked) {
                    li.remove();
                }
            });

            const span = document.createElement("span");
            span.textContent = input.value;

            li.appendChild(checkbox);
            li.appendChild(span);
            ul.appendChild(li);

            input.value = "";
        }
    }

    // Seleciona o texto do input ao clicar no botão
    window.seletorDeTexto = function () {
        input.select();
    };
});
