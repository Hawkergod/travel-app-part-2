import "../../assets/css/style.css";
import travelListJSON from "../../data/trips.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Modal } from "components/modal";

export const TripPage = () => {
  const urlId = useParams();
  const [item, setItem] = useState({
    id: "",
    title: "",
    description: "",
    level: "",
    duration: 0,
    price: 0,
    image: "",
    createdAt: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const [guests, setGuests] = useState("");

  useEffect(() => {
    const temp = travelListJSON.find(({ id }) => id === String(urlId.tripId));
    console.log(urlId);

    if (temp) setItem(temp);
  }, [urlId]);

  const onSubmitModal = (e) => {
    e.preventDefault();
    setOpenModal(false);
  };

  return (
    <>
      <div className="trip-page">
        <h1 className="visually-hidden">Travel App</h1>
        <div className="trip">
          <img src={`${item.image}`} className="trip__img" alt="trip" />
          <div className="trip__content">
            <div className="trip-info">
              <h3 className="trip-info__title">{`${item.title}`}</h3>
              <div className="trip-info__content">
                <span className="trip-info__duration">
                  <strong>{`${item.duration}`}</strong> days
                </span>
                <span className="trip-info__level">{`${item.level}`}</span>
              </div>
            </div>
            <div className="trip__description">{`${item.description}`}</div>
            <div className="trip-price">
              <span>Price</span>
              <strong className="trip-price__value">{`${item.price} $`}</strong>
            </div>
            <button
              className="trip__button button"
              type="button"
              onClick={() => setOpenModal(true)}
            >
              Book a trip
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          onSubmitModal={onSubmitModal}
          item={item}
          guests={guests}
          setGuests={setGuests}
        />
        // <div className="modal">
        //   <div className="trip-popup">
        //     <button
        //       className="trip-popup__close"
        //       onClick={() => setOpenModal(false)}
        //     >
        //       ×
        //     </button>
        //     <form
        //       className="trip-popup__form"
        //       autoComplete="off"
        //       onSubmit={(e) => onSubmitModal(e)}
        //     >
        //       <div className="trip-info">
        //         <h3 className="trip-info__title">{`${item.title}`}</h3>
        //         <div className="trip-info__content">
        //           <span className="trip-info__duration">
        //             <strong>{`${item.duration}`}</strong> days
        //           </span>
        //           <span className="trip-info__level">{`${item.level}`}</span>
        //         </div>
        //       </div>
        //       <label className="trip-popup__input input">
        //         <span className="input__heading">Date</span>
        //         <input
        //           name="date"
        //           type="date"
        //           min={`${new Date().toLocaleString()}`}
        //           required
        //         />
        //       </label>
        //       <label className="trip-popup__input input">
        //         <span className="input__heading">Number of guests</span>
        //         <input
        //           name="guests"
        //           type="number"
        //           min="1"
        //           max="10"
        //           defaultValue="1"
        //           // value="1"
        //           required
        //           onChange={(e) => setGuests(e.currentTarget.value)}
        //         />
        //       </label>
        //       <span className="trip-popup__total">
        //         Total:{` ${Number(guests) * item.price} $`}
        //         <output className="trip-popup__total-value">{`${item.price} $`}</output>
        //       </span>
        //       <button className="button" type="submit">
        //         Book a trip
        //       </button>
        //     </form>
        //   </div>
        // </div>
      )}
    </>
  );
};
