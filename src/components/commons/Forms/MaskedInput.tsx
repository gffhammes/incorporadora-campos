import { forwardRef } from "react";
import { IMaskInput } from "react-imask";
import { ReactElement } from "react-imask/dist/mixin";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export const MaskedInput = forwardRef<ReactElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <IMaskInput
        {...other}
        mask="(00) 00000-0000"
        inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);
