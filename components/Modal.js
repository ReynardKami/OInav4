import React, { useState } from "react";
import Image from "next/image";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>Modal</div>
      {showModal ? (
        <div className="box">
          <p>this should show a modal with text</p>
          <button onClick={() => setShowModal(false)}>Close modal</button>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
