import React, { FC } from "react";
import { Message } from "semantic-ui-react";

interface Props {
  errors: string[];
}

const ValidationErrors: FC<Props> = ({ errors }) => {
  return (
    <Message error>
      {errors && (
        <Message.List>
          {errors.map((err, index) => (
            <Message.Item key={index}>{err}</Message.Item>
          ))}
        </Message.List>
      )}
    </Message>
  );
};

export default ValidationErrors;
