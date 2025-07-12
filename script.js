document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const taskForm = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");

    // Adiciona uma nova tarefa ao submeter o formulário
    taskForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o recarregamento da página
        addTask();
    });

    // Função para adicionar uma nova tarefa
    function addTask() {
        const taskText = taskInput.value.trim(); // Pega o valor e remove espaços em branco

        if (taskText !== "") { // Verifica se o input não está vazio
            const listItem = document.createElement("li");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.addEventListener("change", function () {
                // Remove a tarefa quando o checkbox é marcado
                if (checkbox.checked) {
                    listItem.remove();
                }
            });

            const span = document.createElement("span");
            span.textContent = taskText;

            listItem.appendChild(checkbox);
            listItem.appendChild(span);
            taskList.appendChild(listItem);

            taskInput.value = ""; // Limpa o input após adicionar a tarefa
            taskInput.focus(); // Coloca o foco de volta no input
        }
    }

    // Opcional: Ações extras ao carregar a página, se necessário
    // Por exemplo, você pode querer carregar tarefas salvas aqui.
});