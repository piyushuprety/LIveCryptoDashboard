import "./profileNew.css"
export const ProfileNew = (props) => {
    console.log("new Profile")
  return (
    <div id="Card-newP">
      <div className="Profile-content">
        <div className="text-2xl font-['Figtree'] font-semibold leading-[24px] w-max name-n">
          <p>{props.formdata.name}</p>
        </div>
        <div className="socialContact">
          <div className="socialLink">
            <button
              id="ButtonRoot"
              className="overflow-hidden bg-[#e9f9eb] flex flex-col w-6 h-6 items-start pl-1 py-1 rounded-[184px]"
            >
              <img
                src="https://file.rendit.io/n/xaKuAUsreK2PZrYCwYHP.svg"
                id="Svgvieweroutput"
                className="ml-px w-4"
                alt=""
              />
            </button>
            <p>{props.formdata.phone}</p>
          </div>
          <div className="socialLink">
            <button
              id="ButtonRoot"
              className="overflow-hidden bg-[#ffe9ec] flex flex-col w-6 h-6 items-center py-1 rounded-[164px]"
            >
              <img
                src="https://file.rendit.io/n/kDKbxlxDH5ry9V1a9MH8.svg"
                id="Logoinstagram"
                className="w-4"
                alt=""
              />
            </button>
            <p>{props.formdata.insta}</p>
          </div>
          <div className="socialLink">
            <button
              id="ButtonRoot"
              className="overflow-hidden bg-[#ebe6f9] flex flex-col w-6 items-center p-px rounded-[184px]"
            >
              <img
                src="https://file.rendit.io/n/aTGKtDOwHRQArgiQw1HP.svg"
                id="Mail"
                alt=""
                className="w-6"
              />
            </button>
            <p>{props.formdata.email}</p>
          </div>
          <div className="socialLink">
            <button
              id="ButtonRoot"
              className="overflow-hidden bg-[#ffe9e9] flex flex-col w-6 h-6 items-center py-1 rounded-[184px]"
            >
              <img
                src="https://file.rendit.io/n/ljAHO6ddAnVSZLX3siv4.svg"
                id="Logotwitter"
                className="w-4"
                alt=""
              />
            </button>
            <p>{props.formdata.you}</p>
          </div>
        </div>
      </div>
    </div>
  );
}