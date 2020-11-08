import React from "react";
import { gridColumns, gridRows, squareSize } from "../contants";
import { ISquare } from "../types";

interface IProps {
  squares: ISquare[];
}

export default function Poster(props: IProps) {
  return (
    <div className="poster-wrapper">
      <div className="poster-header">
        <div className="poster-header-surprise">
          yes yes yes yes yes YES yes 🐐
        </div>
        things that didn't
        <br />
        suck about 2020
        <br />
        <span>(idk what the poster header should look like yet)</span>
      </div>
      {props.squares.map((square) => {
        const { x, y } = square.loc;
        const left = (100 / gridColumns) * x;
        const bottom = (84.375 / gridRows) * (gridRows - 1 - y);
        return (
          <div
            key={square.index}
            className="square-wrapper"
            style={{ left: left + "%", bottom: bottom + "%" }}
          >
            <div className="square-number">{square.index}</div>
          </div>
        );
      })}
      <style jsx>{`
        .poster-wrapper {
          position: relative;
          background: black;
          width: 100%;
          box-shadow: 10px 1vw 5px purple;
        }
        .poster-wrapper::after {
          content: " ";
          display: block;
          padding-top: ${(24 / 18) * 100}%;
        }
        .poster-header {
          color: white;
          padding: 0 6vw;
          font-size: min(6vw, 35px);
          overflow: none;
          backround: red;
          top: 3vw;
          left: 0;
          width: 100%;
          position: absolute;
          text-align: center;
        }
        .poster-header-surprise {
          font-size: 0.3em;
          position: absolute;
          width: 100%;
          top: calc(-100px + 6vw);
          text-align: center;
        }
        .poster-header span {
          display: block;
          font-size: 0.3em;
        }
        .square-wrapper {
          position: absolute;
          width: ${100 / gridColumns}%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgb(0, 0, 0);
          background: linear-gradient(
            142deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(153, 197, 242, 1) 100%
          );
        }
        .square-wrapper::after {
          content: " ";
          padding-top: 100%;
        }
        .square-number {
          font-size: 1.5rem;
          color: white;
        }
      `}</style>
    </div>
  );
}
