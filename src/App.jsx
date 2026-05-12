import RatingStars from "./components/RatingStars";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🎯 Desafio: Componente de Avaliação por Estrelas</h1>
      
      <div style={{ marginBottom: "40px", border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
        <h3>Exemplo 1: Sem avaliação inicial</h3>
        <RatingStars />
      </div>
      
      <div style={{ marginBottom: "40px", border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
        <h3>Exemplo 2: Com avaliação inicial 4 estrelas</h3>
        <RatingStars initialRating={4} />
      </div>
      
      <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
        <h3>Exemplo 3: Teste interativo</h3>
        <p>💡 Clique nas estrelas para avaliar! Clique na mesma estrela para remover.</p>
        <RatingStars />
      </div>
    </div>
  );
}

export default App;
