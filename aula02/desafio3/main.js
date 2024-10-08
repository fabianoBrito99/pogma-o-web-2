// 3. Vetor de alunos com nome, nota1, nota2, média e exibição das informações
let alunos = [
  { nome: 'João', nota1: 7.5, nota2: 8.0 },
  { nome: 'Maria', nota1: 7.0, nota2: 7.0 },
  { nome: 'Carlos', nota1: 6.0, nota2: 5.5 }
];

for (let i = 0; i < alunos.length; i++) {
  let media = (alunos[i].nota1 + alunos[i].nota2) / 2;

  if (media > 7.0) {
      console.log("Nome: " + alunos[i].nome + " - Média: " + media.toFixed(2) + " - Aluno Aprovado");
  } else if (media === 7.0) {
      console.log("Nome: " + alunos[i].nome + " - Média: " + media.toFixed(2) + " - Aluno em Recuperação");
  } else {
      console.log("Nome: " + alunos[i].nome + " - Média: " + media.toFixed(2) + " - Aluno Reprovado");
  }
}

let somaMedias = 0;
for (let i = 0; i < alunos.length; i++) {
  somaMedias += (alunos[i].nota1 + alunos[i].nota2) / 2;
}
let mediaGeral = somaMedias / alunos.length;
console.log("Média geral dos alunos: " + mediaGeral.toFixed(2));
