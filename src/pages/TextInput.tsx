import React from "react";
import { FormCheckbox, FormProvider, FormTextInput, useAlert, useForm } from "@hilma/forms";
import * as yup from "yup";

const textInputSchema = yup.object({
  textInput: yup.string().equals(["וואו!"], "תקלידו 'וואו!' כדי שלא יהיה Error"),

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
      <FormTextInput
        name="textInput"
        label="אינפוט מסוג טקסט:"
        rounded={formValues.rounded}
        isLoading={formValues.isLoading}
        maxLength={formValues.maxLengthActive ? 50 : undefined}
      />

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
        showAlert("הדמו הזה הוא רק למראה", "warning");
      }}
      validationSchema={textInputSchema}
    >
      <TextInputForm />
    </FormProvider>
  );
};

export default TextInputDemo;
