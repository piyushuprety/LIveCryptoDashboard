import RegisterBox from "./Components/RegisterBox";


export default function Signin(props) {
  return (
    <div id="SignInRoot">
      <div
        id="LeftSide"
        className=" bg-[url(https://file.rendit.io/n/h5akCI6vaOT24qiua10m.svg)] w-screen h-screen bg-no-repeat   bg-blend-normal  flex flex-col gap-[237px] w-1/2  items-start px-20 py-16"
      >
        <div id="logo" className="font-poppins font-bold   leading-[122.687%] tracking-[0.0225rem] text-white mb-5">
          LOGO
        </div>

        <div id="name" className="text-6xl font-['Montserrat'] font-bold text-white ml-24 ">
          Board.
        </div>
        <div className="flex flex-row ml-16 gap-10 items-center mt-30">
          <img
            src="https://file.rendit.io/n/pwEPn3h0g6uLclOmRhn8.svg"
            className="w-8 shrink-0"
            alt="github"
          />
          <img
            src="https://file.rendit.io/n/1FUE4GAEpUgUZS2G4NqQ.svg"
            className="w-8 shrink-0"
            alt="twitter"
          />
          <img
            src="https://file.rendit.io/n/9f3dqFyHTpu9toXAnNYV.svg"
            id="Carbonlogolinkedin"
            alt="linkedin"
            className="self-start w-8 shrink-0"
          />
          <img
            src="https://file.rendit.io/n/KuXMxKTutNPB0grSubH6.svg"
            id="Carbonlogodiscord"
            alt="discord"
            className="self-start w-8 shrink-0"
          />
        </div>
      </div>

      <div
        id="RightSide"
        className="bg-[#f8faff] flex flex-row gap-24 items-center  ml-34 mr-28 mt-20 p-10"
      >
        <RegisterBox log={props.log} img={props.img}/>
      </div>
    </div>
  ); 
}