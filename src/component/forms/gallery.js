import React, { useState } from "react";
import "../../App.css";

export const Gallery = () => {
  return (
    <>
      <h1 id="header">Product List (Demo)</h1>
      <div className="Nimage">
        <div className="items">
          <div className="a1">
            <div className="Phone"></div>
            <div className="Phdetails">
              <p id="pd1">
                Brand: <br />
                Model: <br />
                Price: <br />
                Color: <br />
                Storage: <br />
              </p>
            </div>
          </div>
          <div className="a2">
            <div className="Clothing"></div>
            <div className="Clothingdetails">
              <p id="pd1">
                Category: <br />
                Size: <br />
                Price: <br />
                Color: <br />
                Material: <br />
              </p>
            </div>
          </div>
        </div>
        <div className="items">
          <div className="b1">
            <div className="Shoes"></div>
            <div className="Shoesdetails">
              <p id="pd1">
                Category: <br />
                Brand: <br />
                Price: <br />
                Color: <br />
                Size: <br />
              </p>
            </div>
          </div>
          <div className="b2">
            <div className="Bag"></div>
            <div className="Bagdetails">
              <p id="pd1">
                Brand: <br />
                Material: <br />
                Price: <br />
                Color: <br />
                Storage: <br />
              </p>
            </div>
          </div>
        </div>
        <div className="items">
          <div className="c1">
            <div className="Grocery"></div>
            <div className="Grocerydetails">
              <p id="pd1">
                Category: <br />
                Product: <br />
                Price: <br />
                Weight: <br />
                Expiry: <br />
              </p>
            </div>
          </div>
          <div className="c2">
            <div className="Sports"></div>
            <div className="Sportsdetails">
              <p id="pd1">
                Type: <br />
                Material: <br />
                Price: <br />
                Color: <br />
                Warranty: <br />
              </p>
            </div>
          </div>
        </div>
        <div className="items">
          <div className="d1">
            <div className="Makeup"></div>
            <div className="Makeupdetails">
              <p id="pd1">
                Brand: <br />
                Gender: <br />
                Price: <br />
                Type: <br />
                Expiry: <br />
              </p>
            </div>
          </div>
          <div className="d2">
            <div className="Perfume"></div>
            <div className="Perfumedetails">
              <p id="pd1">
                Brand: <br />
                Gender: <br />
                Price: <br />
                Type: <br />
                Quantity: <br />
              </p>
            </div>
          </div>
        </div>
        <div className="items">
          <div className="e1">
            <div className="Laptop"></div>
            <div className="Laptopdetails">
              <p id="pd1">
                Brand: <br />
                Model: <br />
                Price: <br />
                Color: <br />
                Spec: <br />
              </p>
            </div>
          </div>
          <div className="e2">
            <div className="Bottel"></div>
            <div className="Botteldetails">
              <p id="pd1">
                Brand: <br />
                Material: <br />
                Price: <br />
                Color: <br />
                Capacity: <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
