import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { LoadingImage } from "../../commons/Image/LoadingImage";

interface Props {
  slug: string;
  imageUrl?: string;
  name: string;
  status: string;
  description: string;
  location: string;
}

const sxImage = {
  position: "relative",
  width: "calc(100% + 32px)",
  ml: "-16px",
  aspectRatio: "1 / 1.45",
};

export const EnterpriseCard = ({
  slug,
  imageUrl,
  name,
  status,
  description,
  location,
}: Props) => {
  return (
    <Box className="embla__slide">
      <Link href="/portfolio/[slug]" as={`/portfolio/${slug}`} passHref>
        <a>
          <Box
            sx={{
              width: { xs: "80%", md: "100%" },
              height: "100%",
              backgroundImage: "linear-gradient(transparent 50%, #e4e2e7 50%)",
              p: 2,
              m: "auto",
            }}
          >
            <Box sx={sxImage}>
              <LoadingImage
                src={imageUrl ?? ""}
                alt={name}
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
              />
            </Box>
            <Stack
              sx={{ mt: 2 }}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                fontSize={13}
                fontWeight={600}
                sx={{ color: "secondary.main", textDecoration: "underline" }}
              >
                {name.toUpperCase()}
              </Typography>
              <Typography fontSize={10} fontWeight={600}>
                {status.toUpperCase()}
              </Typography>
            </Stack>
            <Stack sx={{ mt: 2, fontSize: 14 }} spacing={0.5}>
              <Typography>{location}</Typography>
              <Typography sx={{ whiteSpace: "pre-wrap" }}>
                {description}
              </Typography>
            </Stack>
          </Box>
        </a>
      </Link>
    </Box>
  );
};
