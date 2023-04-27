function Bio() {

    const perfil = {
        nome: 'Manuela Alves',
        habilidades: {
          frontend: 'React, React Native',
          backend: 'PHP, Java'
        }
      };

    return (
      <div>
        <h1>{perfil} | Bio</h1>
        <ul>
          <li>Escritora do Livro ABC da Programação</li>
          <li>Ganhadora do Prêmio de Inovação da NASA</li>
          <li>Voluntária no Projeto 'Mais por Elas'</li>
        </ul>
      </div>
    );
}

export default Bio;  