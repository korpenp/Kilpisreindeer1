import Image from "next/image";
import type { CSSProperties } from "react";

type ImageCycleProps = {
  images: {
    primary: string;
    secondary: string;
    tertiary?: string;
  };
  alt: string;
  sizes: string;
  delay?: number;
  priority?: boolean;
};

export function ImageCycle({
  images,
  alt,
  sizes,
  delay = 0,
  priority = false,
}: ImageCycleProps) {
  const hasTertiaryImage = Boolean(images.tertiary);
  const style = {
    "--image-cycle-delay": `${-delay}s`,
  } as CSSProperties;

  return (
    <div className={`image-cycle${hasTertiaryImage ? " image-cycle-three" : ""}`} style={style}>
      <Image
        className="image-cycle-image image-cycle-image-primary"
        src={images.primary}
        alt={alt}
        fill
        unoptimized
        priority={priority}
        sizes={sizes}
      />
      <Image
        className="image-cycle-image image-cycle-image-secondary"
        src={images.secondary}
        alt=""
        fill
        unoptimized
        sizes={sizes}
      />
      {images.tertiary ? (
        <Image
          className="image-cycle-image image-cycle-image-tertiary"
          src={images.tertiary}
          alt=""
          fill
          unoptimized
          sizes={sizes}
        />
      ) : null}
    </div>
  );
}
