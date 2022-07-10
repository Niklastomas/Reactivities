import { useField } from "formik";
import React, { FC } from "react";
import { Form, Label, Select } from "semantic-ui-react";

interface Props {
  placeholder: string;
  name: string;
  options: { text: string; value: string }[];
  label?: string;
}

const SelectInput: FC<Props> = ({ placeholder, name, options, label }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <Select
        clearable
        options={options}
        value={field.value || null}
        onChange={(e, data) => helpers.setValue(data.value)}
        onBlur={() => helpers.setTouched(true)}
        placeholder={placeholder}
      />
      {meta.touched && meta.error && (
        <Label basic color="red">
          {meta.error}
        </Label>
      )}
    </Form.Field>
  );
};

export default SelectInput;
