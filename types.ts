import { squareSize } from "./contants";

export interface ISquare {
  index: number;
  size: typeof squareSize;
  pos: {
    // px
    x: number;
    y: number;
  };
  loc: {
    // x,y coord
    x: number;
    y: number;
  };
  content: null | {
    imgUrl: string;
    invitationId: string;
  };
}

export interface IInvitation {
  id: string;
  name: string; // participant's name
  createdOn: Date;
}
