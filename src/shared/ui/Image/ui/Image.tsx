import React, { FC } from "react";

interface ImageProps {
  className?: string;
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  srcset?: {
    pathToImage: string;
    width: string;
  }[];
  lazy?: boolean;
}

export const Image: FC<ImageProps> = React.memo(function Image({
  src,
  alt = "",
  className = "",
  height = "",
  srcset = [],
  width = "",
  lazy = false,
}: ImageProps) {
  const joinSrcset = React.useMemo(() => {
    return srcset.reduce((acc, value, index, array) => {
      const { pathToImage, width } = value;
      if (index === array.length - 1) {
        return (acc += `${pathToImage} ${width}`);
      }
      return (acc += `${pathToImage} ${width}, `);
    }, "");
  }, [srcset]);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      height={height}
      width={width}
      srcSet={joinSrcset}
      loading={lazy ? "lazy" : undefined}
    />
  );
});
