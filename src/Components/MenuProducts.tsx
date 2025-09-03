import React from "react";
import ItemsCards from "./ItemsCards";
import image1 from "../assets/images/Americano.png";
import image2 from "../assets/images/Cortado.png";
import image3 from "../assets/images/Classic Latte.png";
import image4 from "../assets/images/Espresso Double.png";
import image5 from "../assets/images/Cappuccino.png";
import image6 from "../assets/images/Flat White.png";
import image7 from "../assets/images/French Press.png";
import image8 from "../assets/images/white-Mocha.png";

type Product = {
  imgSrc: string;
  title: string;
  price: string;
  showToggle: boolean;
  initialToggleState: boolean;
  badge: string;
};

const MenuProducts: React.FC = () => {
  const products: Product[] = [
    {
      imgSrc: image1,
      title: "Americano",
      price: "$3.00",
      showToggle: true,
      initialToggleState: true,
      badge: "Popular",
    },
    {
      imgSrc: image2,
      title: "Cortado",
      price: "$4.00",
      showToggle: true,
      initialToggleState: false,
      badge: "New",
    },
    {
      imgSrc: image3,
      title: "Latte",
      price: "$4.50",
      showToggle: true,
      initialToggleState: true,
      badge: "Hot Coffee",
    },
    {
      imgSrc: image4,
      title: "Espresso",
      price: "$3.00",
      showToggle: true,
      initialToggleState: true,
      badge: "Popular",
    },
    {
      imgSrc: image5,
      title: "Cappuccino",
      price: "$4.00",
      showToggle: true,
      initialToggleState: true,
      badge: "New",
    },
    {
      imgSrc: image6,
      title: "Flat White",
      price: "$4.50",
      showToggle: true,
      initialToggleState: true,
      badge: "Hot Coffee",
    },
    {
      imgSrc: image7,
      title: "French Press",
      price: "$4.00",
      showToggle: true,
      initialToggleState: true,
      badge: "New",
    },
    {
      imgSrc: image8,
      title: "Caramel",
      price: "$4.50",
      showToggle: true,
      initialToggleState: true,
      badge: "Hot Coffee",
    },
  ];

  return (
    <div className="w-full max-w-[721px]">
      {/* Small screens → show only 3 */}
      <div className="grid grid-cols-1 gap-6 md:hidden">
        {products
          .slice(0, 3)
          .map(
            (
              { imgSrc, title, price, showToggle, initialToggleState, badge },
              idx
            ) => (
              <ItemsCards
                key={idx}
                imgSrc={imgSrc}
                title={title}
                price={price}
                showToggle={showToggle}
                initialToggleState={initialToggleState}
                badge={badge}
              />
            )
          )}
      </div>

      {/* md and above → show all */}
      <div className="hidden md:grid grid-cols-2 gap-6">
        {products.map(
          (
            { imgSrc, title, price, showToggle, initialToggleState, badge },
            idx
          ) => (
            <ItemsCards
              key={idx}
              imgSrc={imgSrc}
              title={title}
              price={price}
              showToggle={showToggle}
              initialToggleState={initialToggleState}
              badge={badge}
            />
          )
        )}
      </div>
    </div>
  );
};

export default MenuProducts;
