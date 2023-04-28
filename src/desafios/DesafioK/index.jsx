// O valor do contador não é alterado na tela quando o botão é clicado. Como resolver?

function Contador() {
    let contador = 0;
  
    function handleClick() {
      contador = contador + 1;
    }
  
    return (
      <button onClick={handleClick}>
        Você me clicou {contador} vezes
      </button>
    );
  }
  
  export default Contador;