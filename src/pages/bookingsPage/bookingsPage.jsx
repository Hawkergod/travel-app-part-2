import { useEffect, useState } from "react";
import "../../assets/css/style.css";
import bookingJSON from "../../data/bookings.json";

export const BookingsPage = () => {
  const [bookingsList, setBookingsList] = useState(bookingJSON);

  const delElement = (id) => {
    const newBookingList = bookingsList.filter((el) => el.id !== id);
    setBookingsList(newBookingList);
  };

  useEffect(() => {
    setBookingsList(
      bookingJSON.sort((a, b) => {
        return Date.parse(b.date) - Date.parse(a.date);
      })
    );
  }, []);

  return (
    <div className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        {bookingsList.map(({ id, trip, guests, date, totalPrice }) => {
          return (
            <li className="booking" key={`${id}`}>
              <h3 className="booking__title">{`${trip.title}`}</h3>
              <span className="booking__guests">{`${guests}`}</span>
              <span className="booking__date">{`${date}`}</span>
              <span className="booking__total">{`${totalPrice} $`}</span>
              <button
                className="booking__cancel"
                title="Cancel booking"
                onClick={() => delElement(id)}
              >
                <span className="visually-hidden">Cancel booking</span>×
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
