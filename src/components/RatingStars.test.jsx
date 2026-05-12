import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import RatingStars from "./RatingStars";

describe("RatingStars Component", () => {
  test("Renderizar 5 estrelas", () => {
    render(<RatingStars />);
    
    for (let i = 1; i <= 5; i++) {
      const star = screen.getByTestId(`star-${i}`);
      expect(star).toBeInTheDocument();
      expect(star.textContent).toBe("☆");
    }
  });

  test("Clicar na 3ª estrela e verificar nota 3/5", () => {
    render(<RatingStars />);
    
    const star3 = screen.getByTestId("star-3");
    fireEvent.click(star3);
    
    const ratingText = screen.getByTestId("rating-text");
    expect(ratingText.textContent).toBe("Sua nota: 3/5");
  });

  test("Clicar na mesma estrela novamente e zerar avaliação", () => {
    render(<RatingStars />);
    
    const star3 = screen.getByTestId("star-3");
    
    fireEvent.click(star3);
    expect(screen.getByTestId("rating-text").textContent).toBe("Sua nota: 3/5");
    
    fireEvent.click(star3);
    expect(screen.getByTestId("rating-text").textContent).toBe("Nenhuma avaliação");
  });

  test("Passar initialRating={4} e ver estrelas preenchidas corretamente", () => {
    render(<RatingStars initialRating={4} />);
    
    expect(screen.getByTestId("star-1").textContent).toBe("★");
    expect(screen.getByTestId("star-2").textContent).toBe("★");
    expect(screen.getByTestId("star-3").textContent).toBe("★");
    expect(screen.getByTestId("star-4").textContent).toBe("★");
    expect(screen.getByTestId("star-5").textContent).toBe("☆");
    expect(screen.getByTestId("rating-text").textContent).toBe("Sua nota: 4/5");
  });

  test("Hover: passar mouse na 4ª estrela e verificar preview visual", () => {
    render(<RatingStars />);
    
    const star4 = screen.getByTestId("star-4");
    
    fireEvent.mouseEnter(star4);
    
    expect(screen.getByTestId("star-1").textContent).toBe("★");
    expect(screen.getByTestId("star-2").textContent).toBe("★");
    expect(screen.getByTestId("star-3").textContent).toBe("★");
    expect(screen.getByTestId("star-4").textContent).toBe("★");
    expect(screen.getByTestId("star-5").textContent).toBe("☆");
    
    fireEvent.mouseLeave(star4);
  });
});
