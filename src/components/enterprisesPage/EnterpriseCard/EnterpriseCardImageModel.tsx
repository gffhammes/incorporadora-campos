import { Box } from "@mui/material";
import Image from "next/image";

export interface IEnterpriseCardImageModelProps {
  gridArea: string;
  src: string;
  alt: string;
}

export const EnterpriseCardImageModel = ({
  alt,
  gridArea,
  src,
}: IEnterpriseCardImageModelProps) => {
  if (!src) return null;

  return (
    <Box sx={{ gridArea, height: "100%", width: "100%", position: "relative" }}>
      <Image src={src} alt={alt} layout="fill" priority objectFit="cover" />
    </Box>
  );
};