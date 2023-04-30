import { Box, Chip } from "@mui/material";
import { Carousel } from "../../commons/Carousel/Carousel";
import { IPlan } from "../../../interfaces/strapi";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { useState } from "react";

export interface IMobilePlanSelectorProps {
  plans: IPlan[];
  selectedPlanIndex: number;
  onPlanClick: (id: number) => void;
}

export const MobilePlanSelector = ({
  plans,
  selectedPlanIndex,
  onPlanClick,
}: IMobilePlanSelectorProps) => {
  const [showGradientCover, setShowGradientCover] = useState(true);
  const allBreakpoints = useBreakpoint();

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <Carousel
        slides={plans.map((plan, index) => {
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
        options={{
          align: "start",
          containScroll: "trimSnaps",
        }}
        slideFlex={"0 0 min-content"}
        spacing={1}
        onIndexChange={({ curentIndex, indexesQuantity }) => {
          const isLastSlide = curentIndex === indexesQuantity;

          setShowGradientCover(!isLastSlide);
        }}
      />

      {showGradientCover && (
        <Box
          sx={{
            height: "110%",
            width: "5rem",
            background: "linear-gradient(90deg, rgba(255, 255, 255, 0), #fff)",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            position: "absolute",
          }}
        />
      )}
    </Box>
  );
};
