import react from "react";

function Modal({ currentPhoto }) {
    const { name, category, description, index } = currentPhoto
    return (
        <div className="modalBackdrop">
            {/* Destructure props into currentPhoto in the Modal parameter */}
            <div className="modalContainer">
                <h3 className="modalTitle">Photo Name</h3>
                <img alt="current category" />
                <p>
                    Photo description
                </p>
                <button type="button">
                    Close this modal
                </button>
            </div>
        </div>
    )
}

export default Modal