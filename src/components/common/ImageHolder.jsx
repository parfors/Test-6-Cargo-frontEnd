import Image from "next/image";
import React from "react";

function ImageHolder({ src, alt, className, sizes, priority }) {
  return (
    <div className={className}>
      <Image priority={priority} sizes={sizes} src={src} alt={alt} fill />
    </div>
  );
}

export default ImageHolder;
