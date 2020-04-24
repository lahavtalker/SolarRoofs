import React from "react";
import ReactDom from "react-dom";
import "./modal.css";

const Modal = (props) => {
  return ReactDom.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div>
        <div class="positioned">
          <div class="modal">
            <div class="modal-body">
              <h1>I am a modal</h1>
            </div>
          </div>
        </div>
        <div class="content">
          <h1>I am some content</h1>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
