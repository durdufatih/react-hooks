import { useEffect, useState } from "react";

function FunctionUseEffectComponent() {
  const [quote, setQuote] = useState("");
  const [image, setImage] = useState("");
  const [character, setCharacter] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      const data = await response.json();
      setQuote(data[0].quote);
      setImage(data[0].image);
      setCharacter(data[0].character);
    }
    fetchData()
  }, []);
  return (
    <div>
      <div>Function Use Effect </div>
      <div>Quote: {quote}</div>
      <div>character:{character}</div>
      <div>
        <img src={image} alt="Character" height={100} width={70}></img>
      </div>
    </div>
  );
}

export default FunctionUseEffectComponent;
