import Image from "next/image";
import React from "react";

function ImageHolder({ src, alt, className }) {
  return (
    <div className={className}>
      <Image src={src} alt={alt} fill />
    </div>
  );
}

export default ImageHolder;
