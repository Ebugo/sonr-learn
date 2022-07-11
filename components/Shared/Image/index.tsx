import React from "react";
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

function Image({
  src,
  alt,
  priority,
  width,
  height,
  blurDataURL,
  className,
  objectFit = "cover"
}: ComponentProps) {
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
}

export { Image };
