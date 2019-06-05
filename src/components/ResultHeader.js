import React from "react";
const ResultHeader = () => {
  return (
    <>
      <h4 className="result-header">
        <span className="result-header__num">#</span>
        <span className="result-header__city">Nazwa miasta</span>
        <span className="result-header__temp">
          Średnia prognozowana temperatura
        </span>
        <span className="result-header__delete" />
      </h4>
    </>
  );
};

export default ResultHeader;
