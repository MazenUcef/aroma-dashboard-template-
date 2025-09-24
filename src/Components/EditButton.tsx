import React from 'react'

interface Props {
  editMode: "navigate" | "inline";
}
const EditButton: React.FC<Props> = ({ editMode }) => {
  return (
    <button>
      {editMode === "navigate" ? "Edit (Navigate)" : "Edit (Inline)"}
    </button>
  )
}

export default EditButton