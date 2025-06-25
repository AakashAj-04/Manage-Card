const Card = ({ card, onDelete, isFadingOut }) => {
  return (
    <div className={`card ${isFadingOut ? "fade-out" : ""}`}>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <p>
        <strong>Author:</strong> {card.author}
      </p>
      <p>
        <strong>Date:</strong> {card.date}
      </p>

      <div className="card-footer">
        <button onClick={() => onDelete(card.id)}>
          <img
            src="/icons/ico-delete.svg"
            alt="trash"
            className="delete-icon"
          />
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
