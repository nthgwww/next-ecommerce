"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="w-max absolute top-12 right-0 flex flex-col gap-6 z-20 p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
        <h2 className="text-xl text-bold">Shopping Cart</h2>
        {/* //LIST */}
        <div className="flex flex-col gap-8">
          {/* ITEM */}
          <div className="flex gap-4">
            <Image
              src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/f5c33cc0-c240-4cd4-8437-1a58b2d3d6a1/WMNS+NIKE+COURT+LEGACY+LIFT.png"
              alt=""
              width={72}
              height={96}
              className="object-cover rounded-md"
            />
            <div className="flex flex-col justify-between w-full">
              {/* TOP */}
              <div>
                {/* TITLE */}
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* DESC */}
                <div className="text-sm text-gray-500">available</div>
              </div>

              {/* BOTTOM */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty. 2</span>
                <span className="text-red-900">Remove</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Image
              src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/f5c33cc0-c240-4cd4-8437-1a58b2d3d6a1/WMNS+NIKE+COURT+LEGACY+LIFT.png"
              alt=""
              width={72}
              height={96}
              className="object-cover rounded-md"
            />
            <div className="flex flex-col justify-between w-full">
              {/* TOP */}
              <div>
                {/* TITLE */}
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* DESC */}
                <div className="text-sm text-gray-500">available</div>
              </div>

              {/* BOTTOM */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty. 2</span>
                <span className="text-red-900">Remove</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="">
            <div className="flex items-center justify-between font-semibold">
                <span className="">Subtotal</span>
                <span className="">$49</span>
            </div>
            <p className="text-gray-600 text-sm mt-2 mb-4">
                Shipping and taxes calculated at checkout 
            </p>
            <div className="flex justify-between text-sm">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                <button className="rounded-md py-3 px-4 bg-slate-800 text-white">Checkout</button>
            </div>
        </div>
      </>)}
    </div>

  );
};

export default CartModal;
