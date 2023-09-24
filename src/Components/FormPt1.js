import { useState } from "react";

export const FormPt1 = (props) => {
    const [name , setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone , setPhone] = useState("") 

    const validatethis = () =>{
        if(name && email && phone){
            props.clickFunc()
            props.setData({...props.data,
                [`name`]:name,
                [`email`]:email,
                [`phone`]:phone
            })
        }
        else{
            alert("Fill all the answers")
        }
    }

  return (
    <div>
      <div className="selectionOfForm">
        <button>
          <div className="Form1-B">Basic</div>
        </button>
        <button>
          <div className="Form1-C">Contact</div>
        </button>
      </div>
      <div className="form">
        <label htmlFor="name"> Enter Name*</label>
        <input
          className="inside-form"
          id="name"
          type="text"
          value={name}
          placeholder="Eg. John Doe"
          onChange={(e) => {
            return setName(e.target.value);
          }}
        />

        <label htmlFor="email"> Enter Email*</label>
        <input
          className="inside-form"
          id="email"
          type="text"
          value={email}
          placeholder="Eg. John@xyz.com"
          onChange={(e) => {
            return setEmail(e.target.value);
          }}
        />

        <label htmlFor="phone"> Enter Phone*</label>
        <input
          className="inside-form"
          id="phone"
          type="text"
          value={phone}
          placeholder="Eg.  9123456789"
          onChange={(e) => {
            return setPhone(e.target.value);
          }}
        />
      </div>
      <button onClick={validatethis} className="btn-next">
        Next
      </button>
    </div>
  );
}