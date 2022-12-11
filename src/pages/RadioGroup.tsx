import React from "react";
import {
  FormProvider,
  FormRadioGroup,
  FormSelect,
  FormSubmitButton,
  useAlert,
  useForm,
} from "@hilma/forms";
import * as yup from "yup";
import Stack from "@mui/material/Stack";

const radioGroupSchema = yup.object({
  radioGroup: yup.string().oneOf(["0", "1"], "תבחרו באופציה 1 או 2"),

  disabledOption: yup.number().optional(),
});

type RadioGroupValues = yup.InferType<typeof radioGroupSchema>;

const RadioGroupForm: React.FC = () => {
  const { values } = useForm();
  const formValues = values as RadioGroupValues;

  return (
    <>
      <Stack flexDirection="row" gap={3} alignItems="center">
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
        <FormSubmitButton>הגש</FormSubmitButton>
      </Stack>

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
