import React from "react";
import {
  FormCheckbox,
  FormProvider,
  FormRadioGroup,
  FormSelect,
  FormSubmitButton,
  FormSwitch,
  FormTextInput,
  FormToggleGroup,
  useAlert,
} from "@hilma/forms";
import * as yup from "yup";

const options = Array(4)
  .fill(0)
  .map((_, i) => ({
    value: i.toString(),
    content: `אופציה ${i + 1}`,
  }));

const FullForm: React.FC = () => {
  const showAlert = useAlert();

  return (
    <FormProvider
      initialValues={{
        textInput: "",
        select: "",
        checkbox: false,
        toggleGroup: "",
        switch: false,
        radioGroup: "",
      }}
      onSubmit={() => {
        showAlert("יפה מאוד!", "success");
      }}
    >
      <FormTextInput name="textInput" label="אינפוט מסוג טקסט:" />

      <FormSelect
        name="select"
        label="סלקט:"
        options={options}
        noneOption="ריק"
      />

      <FormCheckbox name="checkbox" label="צ'קבוקס" />

      <FormToggleGroup
        name="toggleGroup"
        rounded
        label="קבוצת טוגל:"
        options={options}
      />

      <FormSwitch name="switch" label="מתג" />

      <FormRadioGroup
        name="radioGroup"
        label="קבוצת כפתורי רדיו:"
        options={options}
      />

      <FormSubmitButton>הגש</FormSubmitButton>
    </FormProvider>
  );
};

export default FullForm;
