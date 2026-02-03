import React from "react";

/* Contexts */
let PriceContext = React.createContext(0);
let DiscountContext = React.createContext(0);

function App() {
  return (
    <div>
      <h2>Context API Demo</h2>

      <PriceContext.Provider value={4000}>
        <DiscountContext.Provider value={30}>
          <PriceComp />
          <DiscountComp />
          <AppComp />
        </DiscountContext.Provider>
      </PriceContext.Provider>
    </div>
  );
}

/* PriceComp */
function PriceComp() {
  return (
    <div>
      <h3>PriceComp</h3>
      <PriceContext.Consumer>
        {(price) => <p>prodPrice = {price}</p>}
      </PriceContext.Consumer>
    </div>
  );
}

/* DiscountComp */
function DiscountComp() {
  return (
    <div>
      <h3>DiscountComp</h3>
      <DiscountContext.Consumer>
        {(disc) => <p>disc = {disc}%</p>}
      </DiscountContext.Consumer>
    </div>
  );
}

/* AppComp */
function AppComp() {
  return (
    <div>
      <h3>AppComp</h3>

      <PriceContext.Consumer>
        {(price) => (
          <DiscountContext.Consumer>
            {(disc) => {
              const discountAmount = (price * disc) / 100;
              const finalPrice = price - discountAmount;

              return (
                <>
                  <p>Actual Price : {price}</p>
                  <p>Discount Given : {discountAmount}</p>
                  <p>Discounted Price : {finalPrice}</p>
                </>
              );
            }}
          </DiscountContext.Consumer>
        )}
      </PriceContext.Consumer>
    </div>
  );
}

export default App;

