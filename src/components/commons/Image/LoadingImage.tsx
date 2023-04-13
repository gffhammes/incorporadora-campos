import { Skeleton } from "@mui/material";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface ILoadingImageProps extends ImageProps {}

export const LoadingImage = (props: ILoadingImageProps) => {
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
