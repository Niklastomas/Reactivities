import React, { FC } from "react";
import { Message } from "semantic-ui-react";

interface Props {
  errors: any;
}

const ValidationErrors: FC<Props> = ({ errors }) => {
  console.log(errors);
  
  return (
    <Message error>
      {errors && (
        <Message.List>
          {errors.map((err: any, index: number) => (
            <Message.Item key={index}>{err}</Message.Item>
          ))}
        </Message.List>
      )}
    </Message>
  );
};

export default ValidationErrors;
