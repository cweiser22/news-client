import React from "react";
import { Message } from "semantic-ui-react";

interface Props {
  message: string;
}

//displays an error message if there is one
export const ErrorMessage: React.FC<Props> = (props: Props) => {
  if (props.message) {
    return <Message error={true}>{props.message}</Message>;
  } else {
    //work-around, might refactor later
    return <React.Fragment />;
  }
};
