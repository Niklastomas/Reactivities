import { useField } from "formik";
import React from "react";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import { Form, Label } from "semantic-ui-react";


const DateInput = (props: Partial<ReactDatePickerProps>) => {
  const [field, meta, helpers] = useField(props.name!);
  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <ReactDatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(value) => helpers.setValue(value)}
      />
      {meta.touched && meta.error && (
        <Label basic color="red">
          {meta.error}
        </Label>
      )}
    </Form.Field>
  );
};

export default DateInput;
