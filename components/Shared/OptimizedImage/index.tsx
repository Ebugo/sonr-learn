import React from "react";
import Image from "next/image";

type ComponentProps = {
  src: string;
  alt?: string;
  priority?: boolean;
  width: number;
  height: number;
  blurDataURL?: string;
  objectFit?: any | undefined;
  className?: string;
};

function OptimizedImage({
  src,
  alt,
  priority,
  width,
  height,
  blurDataURL,
  className,
  objectFit = "contain"
}: ComponentProps) {
  return (
    <Image
      className={className}
      objectFit={objectFit}
      priority={priority || false}
      alt={alt || ""}
      src={src}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={blurDataURL}
    />
  );
}

export { OptimizedImage };
