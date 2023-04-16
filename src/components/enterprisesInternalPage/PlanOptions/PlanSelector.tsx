import { Chip, Stack } from "@mui/material";
import { IPlan } from "../../../interfaces/strapi";

export interface IPlanSelectorProps {
  plans: IPlan[];
  selectedPlanIndex: number;
  onPlanClick: (id: number) => void;
}

export const PlanSelector = ({
  plans,
  selectedPlanIndex,
  onPlanClick,
}: IPlanSelectorProps) => {
  return (
    <Stack sx={{ width: "10rem" }} spacing={1}>
      {plans.map((plan, index) => {
        const isSelected = index === selectedPlanIndex;

        return (
          <Chip
            key={plan.id}
            onClick={() => onPlanClick(index)}
            label={plan.Titulo}
            variant={isSelected ? "filled" : "outlined"}
            color={isSelected ? "primary" : "default"}
          />
        );
      })}
    </Stack>
  );
};
