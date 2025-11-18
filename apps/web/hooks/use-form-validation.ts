import { useState, useCallback } from 'react';
import { z } from 'zod';

interface UseFormValidationOptions<T> {
  schema: z.ZodSchema<T>;
  initialValues: T;
}

interface ValidationErrors {
  [key: string]: string;
}

/**
 * Custom hook for form validation using Zod schemas
 * Provides real-time validation and error handling
 */
export function useFormValidation<T extends Record<string, unknown>>({
  schema,
  initialValues,
}: UseFormValidationOptions<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());

  const validateField = useCallback(
    (name: string, value: unknown) => {
      try {
        const fieldSchema = (schema as z.ZodObject<Record<string, z.ZodTypeAny>>).shape[name];
        if (fieldSchema) {
          fieldSchema.parse(value);
          setErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors[name];
            return newErrors;
          });
          return true;
        }
        return true;
      } catch (error) {
        if (error instanceof z.ZodError) {
          setErrors((prev) => ({
            ...prev,
            [name]: error.issues[0]?.message || 'Invalid value',
          }));
          return false;
        }
        return false;
      }
    },
    [schema],
  );

  const validateAll = useCallback(() => {
    try {
      schema.parse(values);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: ValidationErrors = {};
        error.issues.forEach((issue) => {
          const path = issue.path.join('.');
          newErrors[path] = issue.message;
        });
        setErrors(newErrors);
        return false;
      }
      return false;
    }
  }, [schema, values]);

  const handleChange = useCallback(
    (name: string, value: unknown) => {
      setValues((prev) => ({ ...prev, [name]: value }));

      // Validate field if it has been touched
      if (touched.has(name)) {
        validateField(name, value);
      }
    },
    [touched, validateField],
  );

  const handleBlur = useCallback(
    (name: string) => {
      setTouched((prev) => new Set(prev).add(name));
      validateField(name, values[name]);
    },
    [values, validateField],
  );

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched(new Set());
  }, [initialValues]);

  return {
    values,
    errors,
    touched: touched.has.bind(touched),
    handleChange,
    handleBlur,
    validateAll,
    resetForm,
    setValues,
  };
}
