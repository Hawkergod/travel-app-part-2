import "assets/css/style.css";

export const Modal = ({
  setOpenModal,
  onSubmitModal,
  item,
  guests,
  setGuests,
}) => {
  return (
    <div className="modal">
      <div className="trip-popup">
        <button
          className="trip-popup__close"
          onClick={() => setOpenModal(false)}
        >
          ×
        </button>
        <form
          className="trip-popup__form"
          autoComplete="off"
          onSubmit={(e) => onSubmitModal(e)}
        >
          <div className="trip-info">
            <h3 className="trip-info__title">{`${item.title}`}</h3>
            <div className="trip-info__content">
              <span className="trip-info__duration">
                <strong>{`${item.duration}`}</strong> days
              </span>
              <span className="trip-info__level">{`${item.level}`}</span>
            </div>
          </div>
          <label className="trip-popup__input input">
            <span className="input__heading">Date</span>
            <input
              name="date"
              type="date"
              min={`${new Date().toLocaleString()}`}
              required
            />
          </label>
          <label className="trip-popup__input input">
            <span className="input__heading">Number of guests</span>
            <input
              name="guests"
              type="number"
              min="1"
              max="10"
              defaultValue="1"
              // value="1"
              required
              onChange={(e) => setGuests(e.currentTarget.value)}
            />
          </label>
          <span className="trip-popup__total">
            Total:{` ${Number(guests) * item.price} $`}
            <output className="trip-popup__total-value">{`${item.price} $`}</output>
          </span>
          <button className="button" type="submit">
            Book a trip
          </button>
        </form>
      </div>
    </div>
  );
};
