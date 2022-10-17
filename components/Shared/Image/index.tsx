import React, { forwardRef } from "react";
import NextImage, {StaticImageData} from "next/image";

type ComponentProps = {
  src: string | StaticImageData;
  alt?: string;
  priority?: boolean;
  width: number;
  height: number;
  blurDataURL?: string;
  objectFit?: any | undefined;
  className?: string;
};

const Image = forwardRef(({
  src,
  alt,
  priority,
  width,
  height,
  blurDataURL,
  className,
  objectFit = "cover"
}: ComponentProps, ref) => {
  return (
    <NextImage
      className={className}
      objectFit={objectFit}
      priority={priority || false}
      alt={alt || ""}
      src={src}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={typeof src === "string" ? src : ("blurDataURL" in src && src?.blurDataURL) || ""}
    />
  );
});

Image.displayName = "Image";

export { Image };
