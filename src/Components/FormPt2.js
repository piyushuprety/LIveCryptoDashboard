import { useState } from "react";

export const FormPt2 = (props) => {
    const [insta, setInsta] = useState('')
    const [you, setYou] = useState('')
    const sendData = () =>{
      props.toggle()
        props.setData({
          ...props.data,
          [`insta`]: insta,
          [`you`]: you,
        })
        props.showP();
    }
  return (
    <div>
      <div className="selectionOfForm">
        <button>
          <div className="Form2-B">Basic</div>
        </button>
        <button>
          <div className="Form2-C">Contact</div>
        </button>
      </div>
      <div className="form">
        <label htmlFor="insta"> Instagram Link (Optional)</label>
        <input
          className="inside-form"
          id="insta"
          type="text"
          value={insta}
          placeholder="Eg. ..instagram.com/username"
          onChange={(e) => {
            setInsta(e.target.value);
          }}
        />

        <label htmlFor="youtube"> Youtube Link (Optional)</label>
        <input
          className="inside-form"
          id="youtube"
          type="text"
          value={you}
          placeholder="Eg. ..youtebe/username"
          onChange={(e) => {
            setYou(e.target.value);
          }}
        />
      </div>
      <button onClick={sendData} className="btn-next">
        Done
      </button>
      <button onClick={props.clickFunc} className="btn-back">
        Back
      </button>
    </div>
  );
}