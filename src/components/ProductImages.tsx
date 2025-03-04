"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/79aa9961-2f59-414c-8b46-f713d88e3722/NIKE+JAM.png",
  },
  {
    id: 2,
    url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8769f2f3-3589-48c0-b56d-d5a65db43a26/NIKE+JAM.png",
  },
  {
    id: 3,
    url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c5f45a8b-20b3-4224-aec1-c986e50a7a64/NIKE+JAM.png",
  },
  {
    id: 4,
    url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7c99b1fe-b74f-430a-95a3-bcc67a695599/NIKE+JAM.png",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img,i) => (
          <div className="w-1/4 relative h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={()=>setIndex(i)}>
            <Image
              src={img.url}
              alt=""
              fill
              sizes="50vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
