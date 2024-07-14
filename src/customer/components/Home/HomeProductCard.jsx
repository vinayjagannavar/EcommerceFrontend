import React from "react";

// import { useNavigate } from "react-router-dom";

const HomeProductCard = ({ product }) => {
//   const navigate = useNavigate();

  return (
    <div
    //   onClick={() => navigate(`/men/clothing/mens_kurta`)}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3"
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </div>

      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">
          {product?.brand || product?.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">{product?.title}</p>
      </div>
    </div>
  );
};

export default HomeProductCard;



/*
 * Tailwind CSS Classes Breakdown:
 *
 * Outer `div` (Card Container):
 * - `cursor-pointer`: Changes the cursor to a pointer when hovering over the card.
 * - `flex`: Applies Flexbox layout.
 * - `flex-col`: Arranges Flexbox items in a column.
 * - `items-center`: Centers items along the cross-axis (horizontally).
 * - `bg-white`: Sets the background color to white.
 * - `rounded-lg`: Applies large rounded corners to the card.
 * - `shadow-lg`: Adds a large shadow for depth.
 * - `overflow-hidden`: Ensures content inside the card doesn't overflow.
 * - `w-[15rem]`: Sets a fixed width of 15 rem units.
 * - `mx-3`: Adds horizontal margins of 3 units on both sides.
 *
 * Inner `div` (Image Container):
 * - `h-[13rem]`: Sets a fixed height of 13 rem units.
 * - `w-[10rem]`: Sets a fixed width of 10 rem units.
 *
 * `img` (Image):
 * - `object-cover`: Ensures the image covers the container while maintaining its aspect ratio.
 * - `object-top`: Aligns the image to the top of the container.
 * - `w-full`: Sets the width to 100% of the parent container.
 * - `h-full`: Sets the height to 100% of the parent container.
 *
 * Inner `div` (Text Container):
 * - `p-4`: Adds padding of 4 units on all sides.
 *
 * `h3` (Title):
 * - `text-lg`: Sets the font size to large.
 * - `font-medium`: Applies medium font weight.
 * - `text-gray-900`: Sets the text color to a dark gray.
 *
 * `p` (Description):
 * - `mt-2`: Adds a top margin of 2 units.
 * - `text-sm`: Sets the font size to small.
 * - `text-gray-500`: Sets the text color to a medium gray.
 */