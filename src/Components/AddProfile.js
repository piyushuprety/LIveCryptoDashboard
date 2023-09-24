import "./addProfile.css"
export const AddProfile = (props) => {
  return (
    <div id="Card">
      <div className="addProfile-content">
        <button onClick={props.toggle}>
          <div
            id="Ellipse"
            className="bg-[url(https://file.rendit.io/n/8U1kHtRfcOh3kymag6Op.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-center w-20 h-20 shrink-0 items-center"
          >
            <img
              src="https://file.rendit.io/n/Ip2iRP2N5dRoRkt9I0Qd.svg"
              id="Controls"
              alt=""
              className="w-10"
            />
          </div>
        </button>
        <div className="font-['Figtree'] font-semibold leading-[24px] text-[#858585]">
          Add Profile
        </div>
      </div>
    </div>
  );
}