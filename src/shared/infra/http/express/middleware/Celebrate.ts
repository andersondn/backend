import {
  celebrate,
  CelebrateOptions,
  Modes,
  SchemaOptions,
  Joi,
  Segments,
} from "celebrate";
import { ValidationOptions } from "joi";

function validation(
  schema: SchemaOptions,
  validationOptions?: ValidationOptions,
  opts?: CelebrateOptions
) {
  return celebrate(
    schema,
    {
      abortEarly: false,
      messages: {
        "any.required": 'O campo "{{#label}} " é obrigatório',
      },

      ...validationOptions,
    },

    {
      mode: Modes.FULL,
      ...opts,
    }
  );
}
export { validation, Joi, Segments };
