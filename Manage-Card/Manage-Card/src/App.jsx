import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [cards, setCards] = useState([]);
  const [fadingIds, setFadingIds] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/cards").then((res) => setCards(res.data));
  }, []);

  const deleteCard = async (id) => {
    setFadingIds((prev) => [...prev, id]);
    console.log("Deleting ID:", id, typeof id);

    setTimeout(() => {
      setCards((prev) => prev.filter((card) => card.id !== id));
      setFadingIds((prev) => prev.filter((fadeId) => fadeId !== id));
    }, 200);

    try {
      await axios.delete(`http://localhost:3001/cards/${id}`);
    } catch (err) {
      console.error("Failed to delete from API:", err);
    }
  };

  const addCard = async () => {
    const newCard = {
      title: "New Card",
      description: "Generated dynamically",
      author: "You",
      date: new Date().toISOString().split("T")[0],
    };
    const res = await axios.post("http://localhost:3001/cards", newCard);
    setCards((prev) => [...prev, res.data]);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="title">Generate Card</div>
        <button onClick={addCard} className="add-button">
          <img src="/icons/ico-plus.svg" alt="add" className="add-icon" />
          <span>Add Card</span>
        </button>
      </div>

      <div className="scrollable-content">
        <div className="card-grid">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              onDelete={deleteCard}
              isFadingOut={fadingIds.includes(card.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
