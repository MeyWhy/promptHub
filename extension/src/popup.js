const saveBtn = document.getElementById("saveBtn");
const promptInput = document.getElementById("promptInput");
const promptList = document.getElementById("promptList");

function loadPrompts() {
  const prompts = JSON.parse(localStorage.getItem("prompts") || "[]");
  promptList.innerHTML = "";

  prompts.forEach((prompt, index) => {
    const li = document.createElement("li");
    li.className = "bg-white p-2 rounded shadow flex justify-between items-center";

    const span = document.createElement("span");
    span.className = "flex-1 mr-2";
    span.textContent = prompt;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "text-red-500 hover:text-red-700 font-bold";
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", () => {
      deletePrompt(index);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    promptList.appendChild(li);
  });
}

function savePrompt() {
  const prompt = promptInput.value.trim();
  if (prompt === "") return;

  const prompts = JSON.parse(localStorage.getItem("prompts") || "[]");
  prompts.push(prompt);
  localStorage.setItem("prompts", JSON.stringify(prompts));
  promptInput.value = "";
  loadPrompts();
}

function deletePrompt(index) {
  const prompts = JSON.parse(localStorage.getItem("prompts") || "[]");
  prompts.splice(index, 1);
  localStorage.setItem("prompts", JSON.stringify(prompts));
  loadPrompts();
}

saveBtn.addEventListener("click", savePrompt);
document.addEventListener("DOMContentLoaded", loadPrompts);
