import { Chip, Stack } from "@mui/material";
import { IPlan } from "../../../interfaces/strapi";
import { TBreakpoint } from "../../../interfaces/general";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

export interface IPlanSelectorProps {
  plans: IPlan[];
  selectedPlanIndex: number;
  breakpoint: TBreakpoint;
  onPlanClick: (id: number) => void;
}

export const PlanSelector = ({
  plans,
  selectedPlanIndex,
  onPlanClick,
  breakpoint,
}: IPlanSelectorProps) => {
  const allBreakpoints = useBreakpoint();

  return (
    <Stack
      direction={{ xs: "row", [breakpoint]: "column" }}
      sx={{ width: { xs: "100%", [breakpoint]: "10rem" }, overflow: "auto" }}
      spacing={1}
      justifyContent="center"
    >
      {plans.map((plan, index) => {
        const isSelected = index === selectedPlanIndex;

        return (
          <Chip
            key={plan.id}
            onClick={() => onPlanClick(index)}
            label={plan.Titulo}
            variant={isSelected ? "filled" : "outlined"}
            color={isSelected ? "primary" : "default"}
            size={allBreakpoints["sm"] ? "medium" : "small"}
          />
        );
      })}
    </Stack>
  );
};
