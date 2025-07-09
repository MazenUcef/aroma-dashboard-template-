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

interface ItemsCardsProps {
  products: Product[];
}
const MenuProducts: React.FC<ItemsCardsProps> = () => {
  const products = [
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
      title: "caramel",
      price: "$4.50",
      showToggle: true,
      initialToggleState: true,
      badge: "Hot Coffee",
    },
  ];
  return (
    <div className="flex flex-wrap gap-6 justify-start items-start w-[721px] ">
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
  );
};

export default MenuProducts;
