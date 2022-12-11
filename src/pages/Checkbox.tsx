import React from "react";
import {
  FormCheckbox,
  FormProvider,
  FormSubmitButton,
  useAlert,
  useForm,
} from "@hilma/forms";
import * as yup from "yup";
import Stack from "@mui/material/Stack";

const checkboxSchema = yup.object({
  checkbox: yup.boolean().isTrue("סמנו את הצ'קבוקס"),

  disabled: yup.boolean(),
});

type CheckboxValues = yup.InferType<typeof checkboxSchema>;

const CheckboxForm: React.FC = () => {
  const { values } = useForm();
  const formValues = values as CheckboxValues;
  return (
    <>
      <Stack flexDirection="row" alignItems="center" gap={3} mb={5}>
        <FormCheckbox
          name="checkbox"
          disabled={formValues.disabled}
          label="צ'קבוקס"
        />
        <FormSubmitButton>הגש</FormSubmitButton>
      </Stack>

      <FormCheckbox name="disabled" label="כבוי (Disabled)?" />
    </>
  );
};

const CheckboxDemo: React.FC = () => {
  const showAlert = useAlert();

  return (
    <FormProvider
      initialValues={{
        checkbox: false,
      }}
      onSubmit={() => {
        showAlert("יפה מאוד!", "success");
      }}
      validationSchema={checkboxSchema}
    >
      <CheckboxForm />
    </FormProvider>
  );
};

export default CheckboxDemo;
