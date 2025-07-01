import { useState } from "react";
import CategoryModal from "../components/CategoryModal";

const Category = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [isEditing] = useState(false);
    const [selectedCategory] = useState<any>(null);

    return (
        <div>
            <CategoryModal
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

export default Category;
