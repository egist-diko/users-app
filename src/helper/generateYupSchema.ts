import * as Yup from 'yup';

export interface SchemaConfig {
  type: 'string';
  required: boolean;
  min?: number;
  max?: number;
  email?: boolean;
}

function generateYupSchema(
  schemaConfig: Record<string, SchemaConfig>
): Yup.ObjectSchema<any> {
  const schema: Record<string, Yup.StringSchema> = {};

  for (const [key, value] of Object.entries(schemaConfig)) {
    schema[key] = Yup.string();
    if (value.required) {
      schema[key] = schema[key].required('This field is required');
    }
    if (value.min) {
      schema[key] = schema[key].min(
        value.min,
        `Minimum length is ${value.min}`
      );
    }
    if (value.max) {
      schema[key] = schema[key].max(
        value.max,
        `Maximum length is ${value.max}`
      );
    }
    if (value.email) {
      schema[key] = schema[key].email('Invalid email format');
    }
  }

  return Yup.object().shape(schema);
}

export default generateYupSchema;
