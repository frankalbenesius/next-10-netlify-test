import { formatDistanceStrict } from "date-fns";
import React from "react";

export default function PosterInfo(props) {
  const squaresClaimed: number = props.squares.filter(
    (sq) => sq.content !== null
  ).length;
  const timeLeftStr = formatDistanceStrict(new Date(2021, 0, 1), new Date());
  return (
    <div>
      <div>frank's 2020 poster</div>
      <hr />
      <div>time left: {timeLeftStr}</div>
      <div>
        squares claimed: {squaresClaimed}/{props.squares.length}
      </div>
      <div>invitations created: 23</div>
      <hr />
    </div>
  );
}
