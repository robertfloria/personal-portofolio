import * as React from 'react';

const NextImage = (props: any) => {
  // Render a normal img for tests to avoid Next.js optimizations
  // Support `fill` prop by mapping to style
  const { src, alt, width, height, style, fill, ...rest } = props;

  const imgStyle = { ...(style || {}) } as React.CSSProperties;
  if (fill) {
    imgStyle.width = '100%';
    imgStyle.height = '100%';
    imgStyle.objectFit = imgStyle.objectFit || 'cover';
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={typeof src === 'string' ? src : src?.src || ''}
      alt={alt}
      width={width}
      height={height}
      style={imgStyle}
      {...rest}
    />
  );
};

export default NextImage;
