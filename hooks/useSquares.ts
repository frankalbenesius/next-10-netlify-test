import { useEffect, useState } from "react";
import {
  gridColumns,
  gridRows,
  headerHeight,
  margin,
  squareSize,
} from "../contants";
import { db } from "../firebase";
import { ISquare } from "../types";

export default function useSquares() {
  const [squares, setSquares] = useState<ISquare[]>([]);

  useEffect(() => {
    initializeSquaresIfNeeded();
    const unsubscribe = db.collection("squares").onSnapshot((querySnapshot) => {
      let squares: any[] = [];
      querySnapshot.forEach(function (doc) {
        squares.push(doc.data());
      });
      setSquares(squares);
    });
    return unsubscribe;
  }, []);

  return squares;
}

function initializeSquaresIfNeeded() {
  db.collection("squares")
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot.size < 1) {
        const initialSquares = createInitialSquares();
        const batch = db.batch();
        initialSquares.forEach((sq) => {
          const ref = db.collection("squares").doc(sq.index.toString());
          batch.set(ref, sq);
        });
        batch.commit();
      }
    });
}

function createInitialSquares() {
  let initialSquares: ISquare[] = [];
  for (let y = 0; y < gridRows; y++) {
    for (let x = 0; x < gridColumns; x++) {
      const square: ISquare = {
        index: y * gridColumns + x + 1,
        size: squareSize,
        loc: {
          x,
          y,
        },
        pos: {
          x: x * squareSize + margin,
          y: y * squareSize + headerHeight + margin,
        },
        content: null,
      };
      initialSquares.push(square);
    }
  }
  return initialSquares;
}
