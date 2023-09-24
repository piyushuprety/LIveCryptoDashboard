import { useState } from "react";
import { FormPt1 } from "./FormPt1";
import { FormPt2 } from "./FormPt2";
import "./modal.css"

export const Modal = (props) => {
  const [pt1, setPt1] = useState(true);
  const changePt = () =>{
    setPt1(!pt1)
  }
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <div
          id="TitleRoot"
          className="text-xl font-['Figtree'] font-semibold leading-[32px] text-[#231f20] w-full"
        >
          Add New Profile
        </div>
        {pt1 ? (
          <FormPt1
            clickFunc={changePt}
            setData={props.setData}
            data={props.data}
          />
        ) : (
          <FormPt2
            clickFunc={changePt}
            toggle={props.toggle}
            setData={props.setData}
            data={props.data}
            showP={props.showP}
          />
        )}
        <button className="close-modal" onClick={props.toggle}>
          <img
            src="https://file.rendit.io/n/X5nEvT2lzD0MmuHKAf07.svg"
            id="IconRoot"
            alt=""
            className="w-6"
          />
        </button>
      </div>
    </div>
  );
}