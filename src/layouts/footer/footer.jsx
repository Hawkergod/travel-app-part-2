import "../../assets/css/style.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__text">
        from{" "}
        <a
          className="footer__link"
          href="https://binary-studio.com"
          target="_blank"
          rel="noreferrer"
        >
          binary studio
        </a>{" "}
        with
        <img
          className="footer__icon"
          src="./images/heart.svg"
          alt="heart icon"
        />
      </span>
    </footer>
  );
};
