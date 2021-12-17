import React from "react";

function Modal({ onClose, currentPhoto }) {
    const { name, category, description, index } = currentPhoto
    return (
        <div className="modalBackdrop">
            {/* Destructure props into currentPhoto in the Modal parameter */}
            <div className="modalContainer">
            <h3 className="modalTitle">{name}</h3>
                {/* destructure currentPhoto properties into constants to assign their values into the modal */}
                <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
                <p>{description}</p>
                <button onClick={onClose} type="button">
                    Close this modal
                </button>
            </div>
        </div>
    )
}

export default Modal