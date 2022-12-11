import React from "react";
import {
  FormProvider,
  FormRadioGroup,
  FormSelect,
  useAlert,
  useForm,
} from "@hilma/forms";
import * as yup from "yup";

const radioGroupSchema = yup.object({
  radioGroup: yup.string(),

  disabledOption: yup.number().optional(),
});

type RadioGroupValues = yup.InferType<typeof radioGroupSchema>;

const RadioGroupForm: React.FC = () => {
  const { values } = useForm();
  const formValues = values as RadioGroupValues;

  return (
    <>
      <FormRadioGroup
        name="radioGroup"
        label="קבוצת רדיו"
        options={Array(4)
          .fill(0)
          .map((_, i) => ({
            value: i.toString(),
            content: `אופציה ${i + 1}`,
            disabled: formValues.disabledOption === i,
          }))}
      />

      <FormSelect
        name="disabledOption"
        label="אופציה כבויה"
        noneOption="ריק"
        options={Array(4)
          .fill(0)
          .map((_, i) => ({
            value: i,
            content: `אופציה ${i + 1} כבויה`,
          }))}
      />
    </>
  );
};

const RadioGroupDemo: React.FC = () => {
  const showAlert = useAlert();

  return (
    <FormProvider
      initialValues={{
        radioGroup: "0",

        disabledOption: "",
      }}
      onSubmit={() => {
        showAlert("יפה מאוד!", "success");
      }}
      validationSchema={radioGroupSchema}
    >
      <RadioGroupForm />
    </FormProvider>
  );
};

export default RadioGroupDemo;
