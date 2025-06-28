import { useState } from "react";
import ProductModal from "../components/ProductModal";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isEditing] = useState(false);
  const [selectedCategory] = useState<any>(null);

  return (
    <div>
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data) => {
          console.log(data);
          setIsModalOpen(false);
        }}
        isEditMode={isEditing}
        initialData={isEditing ? selectedCategory : undefined}
      />
    </div>
  );
};

export default Products;
