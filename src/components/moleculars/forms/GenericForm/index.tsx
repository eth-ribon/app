import React, { FormEventHandler, useEffect } from "react";
import theme from "styles/theme";
import Button, { onClickType } from "components/atomics/Button";
import { useForm } from "hooks/useForm";
import * as S from "./styles";

export type FieldProps = {
  name: string;
  id: string;
  type: string;
  placeholder: string;
  required: boolean;
};

export type Props = {
  primaryButtonText?: string | null;
  primaryButtonTextColor?: string;
  primaryButtonColor?: string;
  primaryButtonBorderColor?: string;
  primaryButtonCallback?: onClickType;
  primaryButtonDisabled?: boolean;
  formFields: FieldProps[];
  initialState: Record<any, any>;
  onFormSubmit: (values: Record<any, any>) => void;
  onValuesChange?: (values: Record<any, any>) => void;
};

function GenericForm({
  primaryButtonText = null,
  primaryButtonTextColor = "white",
  primaryButtonColor = theme.colors.ribonBlue,
  primaryButtonBorderColor,
  primaryButtonDisabled,
  primaryButtonCallback = () => {},
  formFields,
  initialState,
  onFormSubmit,
  onValuesChange,
}: Props): JSX.Element {
  // eslint-disable-next-line no-use-before-define
  const [onChange, onSubmit, values] = useForm(handleOnSubmit, initialState);

  useEffect(() => {
    if (onValuesChange) onValuesChange(values);
  }, [values]);

  function handleOnSubmit() {
    onFormSubmit(values);
  }

  return (
    <form onSubmit={onSubmit as FormEventHandler<HTMLFormElement>}>
      <S.FormContainer>
        {formFields.map((field) => (
          <S.Input
            key={field.id}
            name={field.name}
            id={field.id}
            type={field.type}
            placeholder={field.placeholder}
            onChange={onChange as any}
            required={field.required}
          />
        ))}

        {primaryButtonText && (
          <Button
            text={primaryButtonText}
            textColor={primaryButtonTextColor}
            backgroundColor={primaryButtonColor}
            borderColor={primaryButtonBorderColor}
            onClick={primaryButtonCallback}
            type="submit"
            disabled={primaryButtonDisabled}
          />
        )}
      </S.FormContainer>
    </form>
  );
}

export default GenericForm;
