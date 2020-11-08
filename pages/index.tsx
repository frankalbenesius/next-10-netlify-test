import { formatDistanceStrict } from "date-fns";
import React from "react";

import Poster from "../components/Poster";
import PosterInfo from "../components/PosterInfo";
import useSquares from "../hooks/useSquares";

export default function IndexPage() {
  const squares = useSquares();
  return (
    <div>
      <main>
        <PosterInfo squares={squares} />
        <Poster squares={squares} />
      </main>
      <style jsx>{`
        main {
          max-width: 34rem;
        }
      `}</style>
    </div>
  );
}
