import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header row">
      <div className="col-sm-12">
        <div className="header-tooltip">
          <h1 className="header-title">
            <strong>Planer Samochodowy</strong>
          </h1>
          <p>
            Jesteś z tych osób, które uwielbiają swój samochód? Zaplanuj przy
            nim prace
          </p>
          <div>
            <Link to={"/list"}>Skonfiguruj listę</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
