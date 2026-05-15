import Image from 'next/image';

/** Transparent logo at public/images/praelixtech-logo.png */
export const LOGO_SRC = '/images/praelixtech-logo.png';

/** Favicon / app icon at public/images/praelixtech-icon.png */
export const ICON_SRC = '/images/praelixtech-icon.png';

const DEFAULT_SIZE = { width: 210, height: 65 } as const;

type BrandLogoProps = {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export default function BrandLogo({
  className = 'h-12 w-auto object-contain',
  width,
  height,
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src={LOGO_SRC}
      alt="Praelix Technologies"
      width={width ?? DEFAULT_SIZE.width}
      height={height ?? DEFAULT_SIZE.height}
      className={`block ${className}`}
      priority={priority}
    />
  );
}
