import { Skeleton } from "@mui/material";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export const LoadingImage = (props: ImageProps) => {
  const [loading, setLoading] = useState(true);

  const handleOnLoad = () => setLoading(false);

  return (
    <>
      {loading && (
        <Skeleton
          variant="rectangular"
          height="100%"
          width="100%"
          animation="wave"
        />
      )}

      <Image {...props} alt={props.alt ?? ""} onLoad={handleOnLoad} />
    </>
  );
};
