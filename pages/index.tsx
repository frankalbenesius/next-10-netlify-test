import { formatDistanceStrict } from "date-fns";
import React from "react";

import Poster from "../components/Poster";
import useSquares from "../hooks/useSquares";

export default function IndexPage() {
  const squares = useSquares();
  const squaresClaimed: number = squares.filter((sq) => sq.content !== null)
    .length;

  const timeLeftStr = formatDistanceStrict(new Date(2021, 0, 1), new Date());
  return (
    <div>
      <main>
        <div>frank's 2020 poster</div>

        <hr />

        <div>time left: {timeLeftStr}</div>
        <div>
          squares claimed: {squaresClaimed}/{squares.length}
        </div>
        <div>invitations created: 23</div>

        <hr />

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
