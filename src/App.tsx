import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextInputDemo from "./pages/TextInput";
import SelectDemo from "./pages/Select";
import CheckboxDemo from "./pages/Checkbox";
import RadioGroupDemo from "./pages/RadioGroup";
import ToggleGroupDemo from "./pages/ToggleGroup";
import SwitchDemo from "./pages/Switch";
import FullForm from "./pages/FullForm";

const NLink: React.FC<{ to: string; children?: React.ReactNode }> = ({
  to,
  children,
}) => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate(to)}
      sx={(theme) => ({
        color: theme.palette.primary.contrastText,
        flex: 1,
      })}
    >
      {children}
    </Button>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar
          sx={{
            position: "relative",
          }}
        >
          <Stack
            flexDirection="row"
            sx={{
              height: 50,
            }}
          >
            <NLink to="full-form">Full Form</NLink>
            <NLink to="component/text-input">Text Input</NLink>
            <NLink to="component/select">Select</NLink>
            <NLink to="component/checkbox">Checkbox</NLink>
            <NLink to="component/radio-group">Radio Group</NLink>
            <NLink to="component/toggle-group">Toggle Group</NLink>
            <NLink to="component/switch">Switch</NLink>
          </Stack>
        </AppBar>

        <Routes>
          <Route path="full-form" element={<FullForm />} />

          <Route path="component">
            <Route path="text-input" element={<TextInputDemo />} />
            <Route path="select" element={<SelectDemo />} />
            <Route path="checkbox" element={<CheckboxDemo />} />
            <Route path="radio-group" element={<RadioGroupDemo />} />
            <Route path="toggle-group" element={<ToggleGroupDemo />} />
            <Route path="switch" element={<SwitchDemo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
