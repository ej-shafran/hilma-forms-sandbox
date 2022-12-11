import React from "react";
import {
  FormCheckbox,
  FormProvider,
  FormSubmitButton,
  FormTextInput,
  useAlert,
  useForm,
} from "@hilma/forms";
import * as yup from "yup";
import Stack from "@mui/material/Stack";

const textInputSchema = yup.object({
  textInput: yup
    .string()
    .required("תמלאו את האינפוט")
    .equals(["וואו!"], "תקלידו 'וואו!'"),

  rounded: yup.boolean(),
  maxLengthActive: yup.boolean(),
  isLoading: yup.boolean(),
});

type TextInputValues = yup.InferType<typeof textInputSchema>;

const TextInputForm: React.FC = () => {
  const { values } = useForm();
  const formValues = values as TextInputValues;

  return (
    <>
      <Stack flexDirection="row" alignItems="center" gap={3}>
        <FormTextInput
          name="textInput"
          label="אינפוט מסוג טקסט:"
          rounded={formValues.rounded}
          isLoading={formValues.isLoading}
          maxLength={formValues.maxLengthActive ? 50 : undefined}
        />
        <FormSubmitButton>הגש</FormSubmitButton>
      </Stack>

      <FormCheckbox name="rounded" label="מעוגל (Rounded)?" />
      <FormCheckbox name="maxLengthActive" label="אורך מקסימלי (Max Length)?" />
      <FormCheckbox name="isLoading" label="בטעינה (Loading)?" />
    </>
  );
};

const TextInputDemo: React.FC = () => {
  const showAlert = useAlert();

  return (
    <FormProvider
      initialValues={{
        textInput: "",

        rounded: false,
        maxLengthActive: false,
        isLoading: false,
      }}
      onSubmit={() => {
        showAlert("יפה מאוד!", "success");
      }}
      validationSchema={textInputSchema}
    >
      <TextInputForm />
    </FormProvider>
  );
};

export default TextInputDemo;
