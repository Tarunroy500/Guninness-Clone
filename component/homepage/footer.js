"use client";
import React, { useEffect, useState } from "react";

const footer = () => {
  const [index, setIndex] = useState(0);
  const [obj, setObj] = useState({
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  });
  const handleIndex = (i) => {
    index === i ? setIndex(0) : setIndex(i);
  };
  useEffect(() => {
    if (window.innerWidth > 786) {
      setObj({
        a: true,
        b: true,
        c: true,
        d: true,
      });
      setIndex(true);
    } else {
      setObj({
        a: 1,
        b: 2,
        c: 3,
        d: 4,
      });
      setIndex(0);
    }
  }, [window.innerWidth, window.innerHeight]);
  return (
    <footer>
      {obj && (
        <div className="foot-top">
          <div className="foot-items">
            <div className="foot-item head">
              <span>BEERS </span>
              <svg
                className="plus "
                onClick={() => handleIndex(1)}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                ></path>
              </svg>
            </div>
            {index === obj.a && (
              <div>
                <div className="foot-item">GUINNESS DRAUGHT</div>
                <div className="foot-item">GUINNESS 0.0</div>
                <div className="foot-item">GUINNESS HOP HOUSE 13</div>
                <div className="foot-item">GUINNESS FOREIGN EXTRA STOUT</div>
                <div className="foot-item">GUINNESS SMOOTH</div>
                <div className="foot-item">GUINNESS COLD BREW COFFEE BEER</div>
                <div className="foot-item">GUINNESS WEST INDIES PORTER</div>
                <div className="foot-item">GUINNESS ORIGINAL</div>
                <div className="foot-item">GUINNESS BALTIMORE BLONDE</div>
                <div className="foot-item">GUINNESS SPECIAL EXPORT</div>
                <div className="foot-item">GUINNESS CLEAR</div>
              </div>
            )}
          </div>
          <div className="foot-items">
            <div className="foot-item head">
              <span>OUR CRAFT</span>
              <svg
                className="plus "
                onClick={() => handleIndex(2)}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                ></path>
              </svg>
            </div>
            {index === obj.b && (
              <div>
                <div className="foot-item">THE STORY OF GUINNESS</div>
                <div className="foot-item">GUINNESS ADVERTISING</div>
                <div className="foot-item">THE STORY OF INNOVATION</div>
                <div className="foot-item">GUINNESS NITROSURGE</div>
                <div className="foot-item">GUINNESS MICRODRAUGHT</div>
                <div className="foot-item">REGENERATIVE FARMING</div>
                <div className="foot-item">HOMECOMING</div>
              </div>
            )}
          </div>
          <div className="foot-items">
            <div className="foot-item head">
              <span>EXPERIENCES</span>
              <svg
                className="plus "
                onClick={() => handleIndex(3)}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                ></path>
              </svg>
            </div>
            {index === obj.c && (
              <div>
                <div className="foot-item">GUINNESS STOREHOUSE</div>
                <div className="foot-item">GUINNESS AT HOME</div>
                <div className="foot-item">RECIPES AND PAIRINGS</div>
                <div className="foot-item">
                  GUINNESS OPEN GATE BREWERY DUBLIN
                </div>
                <div className="foot-item">
                  GUINNESS OPEN GATE BREWERY BALTIMORE
                </div>
              </div>
            )}
          </div>
          <div className="foot-items">
            <div className="foot-item head">
              <span>SHOP</span>
              <svg
                className="plus "
                onClick={() => handleIndex(4)}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                ></path>
              </svg>
            </div>
            {index === obj.d && (
              <div className="foot-item">BUY GUINNESS MERCHANDISE</div>
            )}
          </div>
          <div className="foot-items">
            <div className="foot-item head">
              <span>FAQ</span>
            </div>
            <div className="foot-item">SIGN-UP</div>
            <div className="foot-item">CONTACT US</div>
          </div>
          <div className="foot-items">
            <select className="dropdown" name="" id="">
              <option value="">Rest of the world</option>
              <option value="">United Kingdom</option>
              <option value="">Ireland</option>
              <option value="">United States of Amarica</option>
              <option value="">Africa</option>
              <option value="">Canada (English)</option>
              <option value="">Spain</option>
              <option value="">Malaysia</option>
              <option value="">Germany</option>
            </select>
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
              >
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </div>
          </div>
        </div>
      )}
      <hr />
      <div className="btm-cnt">
        <div className="img-cnt">
          <img
            className="img-1"
            src="https://www.guinness.com/footer/footer-logos-open-gate-brewery.svg?fm=avif&w=128&q=60"
            alt=""
          />
          <img
            className="img-2"
            src="https://www.guinness.com/footer/footer-logos-storehouse.svg?fm=avif&w=256&q=60"
            alt=""
          />
          <img
            className="img-2"
            src="https://www.guinness.com/footer/footer-logos-guinness-webstore.svg?fm=avif&w=256&q=60"
            alt=""
          />
        </div>
        <div className="foot-bottom">
          <div className="cnt">
            <div className="foot-btm">Conditions of Use</div>
            <div className="foot-btm">Diageo Privacy Centre</div>
            <div className="foot-btm">Community Guidelines</div>
            <div className="foot-btm">Accessibility</div>
            <div className="foot-btm">Privacy and Cookie Notice</div>
            <div className="foot-btm">Drink responsibly</div>
            <div className="foot-btm">DrinkIQ</div>
            <div className="foot-btm">theBar.com©</div>
            <div className="foot-btm">Guinness & Co 2024</div>
          </div>
          <span className="foot-right-btm">
            Please do not share with anyone under the legal purchase age for
            alcohol. Drink Responsibly.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default footer;
