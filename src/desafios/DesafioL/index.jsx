// A informação digitada no input deve aparecer no parágrafo abaixo, complementando a frase "Você digitou:".
// Para isso, será necessário armazenar o valor do input no estado do componente, e toda vez que o valor do input mudar, esse valor deverá ser setado novamente.
// O valor inicial do input deverá ser "Olá"
// Além disso, o botão resetar, quando clicado, deverá mostrar o input com seu valor inicial "Olá"

function MeuInput() {

  return (
    <>
      <input type="text" />
      <p>Você digitou:</p>
      <button>
        Resetar
      </button>
    </>
  );
}

export default MeuInput;