import React from "react";
import Modal from "react-modal";

export default props => {
  const {
    title,
    isOpen,
    askToClose,
    onAfterOpen,
    onRequestClose,
    onChangeInput
  } = props;

  return (
    <Modal
      id="test"
      contentLabel="modalA"
      closeTimeoutMS={150}
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
    >
      <h1>{title}</h1>
      <button onClick={askToClose}>close</button>
      <div>I am a modal. Use the first input to change the modal's title.</div>
      <form>
        <input onChange={onChangeInput} />
        <input />
        <br />
        <button>Create Another List</button>
        <button>Create a New Goal</button>
        
    </Modal>
  );
};
