function addTask(){
   let input = document.querySelector("input").value;
   let li = document.createElement("li");

// Define o HTML interno com o texto digitado e o ícone
li.innerHTML = input + ' <span onclick="removeTask(this)">❌</span>';

// Adiciona o elemento <li> dentro do <ul> (passa a variável, sem aspas)
document.querySelector("ul").appendChild(li);

// Limpa o texto dentro do campo <input> na tela
input.value = "";
}
function removeTask(li){
 
 li.parentElement.remove()
}
