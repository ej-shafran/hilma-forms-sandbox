import React from "react";
import {
  FormCheckbox,
  FormProvider,
  FormSelect,
  FormSubmitButton,
  useAlert,
  useForm,
} from "@hilma/forms";
import * as yup from "yup";
import Stack from "@mui/material/Stack";

const selectSchema = yup.object({
  select: yup.number().required("תבחרו אופציה").min(3, "תבחרו באופציה האחרונה"),

  rounded: yup.boolean(),
  noneOptionActive: yup.boolean(),
  disabled: yup.boolean(),
});

type SelectValues = yup.InferType<typeof selectSchema>;

const SelectForm: React.FC = () => {
  const { values } = useForm();
  const formValues = values as SelectValues;

  return (
    <>
      <Stack flexDirection="row" alignItems="center" gap={3}>
        <FormSelect
          name="select"
          options={Array(3)
            .fill(0)
            .map((_, i) => ({ value: i + 1, content: `אופציה  ${i + 1}` }))}
          label="סלקט:"
          rounded={formValues.rounded}
          noneOption={formValues.noneOptionActive ? "ריק" : undefined}
          disabled={formValues.disabled}
        />
        <FormSubmitButton>הגש</FormSubmitButton>
      </Stack>

      <FormCheckbox name="rounded" label="מעוגל (Rounded)?" />
      <FormCheckbox name="noneOptionActive" label="אופציה ריקה?" />
      <FormCheckbox name="disabled" label="כבוי (Disabled)?" />
    </>
  );
};

const SelectDemo: React.FC = () => {
  const showAlert = useAlert();

  return (
    <FormProvider
      initialValues={{
        select: 1,

        rounded: false,
        noneOptionActive: false,
      }}
      onSubmit={() => {
        showAlert("יפה מאוד!", "success");
      }}
      validationSchema={selectSchema}
    >
      <SelectForm />
    </FormProvider>
  );
};

export default SelectDemo;
