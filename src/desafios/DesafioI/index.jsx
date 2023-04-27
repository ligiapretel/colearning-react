// Existe alguma estrutura sendo repetida no componente Galeria? Transforme em outro componente e escolha quais props passar para ele

function Galeria() {
    return (
        <div>
        <h1>Cientistas Notáveis</h1>
        <section>
          <h2>Maria Sklodowska-Curie</h2>
          <ul>
            <li>
              <b>Profissão: </b> 
              física e química
            </li>
            <li>
              <b>Prêmios: </b> 
              (Prêmio Nobel de Física, Prêmio Nobel de Química, Medalha Davy, Medalha Matteucci)
            </li>
            <li>
              <b>Descobriu: </b>
              polônio (elemento)
            </li>
          </ul>
        </section>
        <section>
          <h2>Katsuko Saruhashi</h2>
          <ul>
            <li>
              <b>Profissão: </b> 
              geoquímica
            </li>
            <li>
              <b>Prêmios: </b> 
              (Prêmio Miyake de geoquímica, Prêmio Tanaka)
            </li>
            <li>
              <b>Descobriu: </b>
              um método para medir o dióxido de carbono na água do mar
            </li>
          </ul>
        </section>
      </div>
    );
  }

export default Galeria;  