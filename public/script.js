const botao = document.getElementById("cadastrar");

botao.addEventListener("click", cadastrarAluno);

async function cadastrarAluno(){
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const curso = document.getElementById("curso").value;

    const resposta = await fetch("/alunos", {
        method:"POST", 
        headers:{
            "Content-Type": "application/json"
        },
    })
}