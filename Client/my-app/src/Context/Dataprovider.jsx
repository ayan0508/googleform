import { createContext, useContext, useState } from 'react';

const FormDataContext = createContext();

export function useFormData() {
  return useContext(FormDataContext);
}

export function FormDataProvider({ children }) {
  const [Form, setForm] = useState({});

    const updateForm = (fieldName, fieldValue) => {
        setForm({ ...Form, [fieldName]: fieldValue });
    };
    const resetForm = () => {
        setForm({});
      };

  return (
    <FormDataContext.Provider value={{ Form, updateForm,resetForm }}>
      {children}
    </FormDataContext.Provider>
  );
  }