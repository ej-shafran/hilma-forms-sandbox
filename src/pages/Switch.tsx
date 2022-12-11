import React from "react";
import {
  FormCheckbox,
  FormProvider,
  FormSubmitButton,
  FormSwitch,
  useAlert,
  useForm,
} from "@hilma/forms";
import * as yup from "yup";
import Stack from "@mui/material/Stack";

const switchSchema = yup.object({
  switch: yup.boolean().isTrue("תדליקו את המתג"),

  disabled: yup.boolean(),
});

type SwitchValues = yup.InferType<typeof switchSchema>;

const SwitchForm: React.FC = () => {
  const { values } = useForm();
  const formValues = values as SwitchValues;

  return (
    <>
      <Stack flexDirection="row" gap={3} alignItems="center">
        <FormSwitch name="switch" label="מתג" disabled={formValues.disabled} />
        <FormSubmitButton>הגש</FormSubmitButton>
      </Stack>

      <FormCheckbox name="disabled" label="כבוי (Disabled)?" />
    </>
  );
};

const SwitchDemo: React.FC = () => {
  const showAlert = useAlert();

  return (
    <FormProvider
      initialValues={{
        switch: false,

        disabled: false,
      }}
      onSubmit={() => {
        showAlert("יפה מאוד!", "success");
      }}
      validationSchema={switchSchema}
    >
      <SwitchForm />
    </FormProvider>
  );
};

export default SwitchDemo;
