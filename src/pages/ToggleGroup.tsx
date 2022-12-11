import React from "react";
import {
  FormCheckbox,
  FormProvider,
  FormSubmitButton,
  FormToggleGroup,
  useAlert,
  useForm,
} from "@hilma/forms";
import * as yup from "yup";
import Stack from "@mui/material/Stack";

const toggleGroupSchema = yup.object({
  toggleGroup: yup.string().oneOf(["apple"], "תבחרו בתפוח"),

  rounded: yup.boolean(),
});

type ToggleGroupValues = yup.InferType<typeof toggleGroupSchema>;

const ToggleGroupForm: React.FC = () => {
  const { values } = useForm();
  const formValues = values as ToggleGroupValues;

  return (
    <>
      <Stack flexDirection="row" gap={3} alignItems="center">
        <FormToggleGroup
          name="toggleGroup"
          label="קבוצת טוגל"
          options={[
            { value: "apple", content: "תפוח" },
            { value: "banana", content: "בננה" },
            { value: "pear", content: "אגס" },
          ]}
          rounded={formValues.rounded}
        />
        <FormSubmitButton>הגש</FormSubmitButton>
      </Stack>

      <FormCheckbox name="rounded" label="מעוגל (Rounded)?" />
    </>
  );
};

const ToggleGroupDemo: React.FC = () => {
  const showAlert = useAlert();

  return (
    <FormProvider
      initialValues={{
        toggleGroup: "apple",

        rounded: true,
      }}
      onSubmit={() => {
        showAlert("יפה מאוד!", "success");
      }}
      validationSchema={toggleGroupSchema}
    >
      <ToggleGroupForm />
    </FormProvider>
  );
};

export default ToggleGroupDemo;
