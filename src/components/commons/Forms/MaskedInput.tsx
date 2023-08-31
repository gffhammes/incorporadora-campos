import { ComponentType, forwardRef } from "react";
import { IMaskInput } from "react-imask";
import { AnyMaskedOptions, MaskElement } from "imask";

import { IMaskInputProps, ReactElement } from "react-imask/dist/mixin";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

type IMaskProps = IMaskInputProps<
  AnyMaskedOptions,
  false,
  string,
  MaskElement | HTMLTextAreaElement | HTMLInputElement
>;

export const MaskedInput = forwardRef<
  ReactElement,
  ComponentType<IMaskProps & CustomProps>
>(function TextMaskCustom(props, ref) {
  return (
    <IMaskInput
      {...props}
      mask="(00) 00000-0000"
      inputRef={ref}
      onAccept={(value: any) =>
        props.defaultProps?.onChange?.({ target: { name: props.name, value } })
      }
      overwrite
    />
  );
});
