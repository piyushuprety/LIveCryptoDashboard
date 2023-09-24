import { useState } from "react";
import { Dashboard } from "./Dashboard";
import { Modal } from "./Components/Modal";
import Signin from "./Signin";


function App() {
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal);
  };

  
  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    insta: '',
    email: '',
    you: '',
  });

   const [done, setDone] = useState(false);
   const showNewProfile = () => {
     setDone(!done);
   };

   const [islogged, setIslogged] = useState(false)
   const log = ()=>{
    setIslogged(!islogged)
   }

   const [userImg, setUserImg] = useState(
     'https://file.rendit.io/n/wz9eBza5DH425i3z4g9Z.svg'
   );
   const imgset = (imgUrl) =>{
      setUserImg(imgUrl);
   }

  return (
    <div className="App">
      {modal && (
        <Modal
          toggle={toggleModal}
          setData={setFormData}
          data={formData}
          showP={showNewProfile}
        />
      )}

      {islogged ? (
        <Dashboard
          toggle={toggleModal}
          done={done}
          formdata={formData}
          userImg={userImg}
        />
      ) : (
        <Signin log={log} img={imgset} />
      )}
    </div>
  );
}

export default App;
