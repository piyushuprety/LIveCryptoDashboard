import "./navbar.css"
export const Navbar = (props) => {
  return (
    <nav id="navbar">
      <div className="text-2xl font-['Montserrat'] font-bold w-min">
        Dashboard
      </div>
      <div className="search_And_user">
        <div id="search">
          <input id="find" type="text" placeholder="Search..."></input>
          <img
            src="https://file.rendit.io/n/szOBzhIeuzQi4moBFPKx.svg"
            id="SearchIcon"
            alt="icon"
            className="mt-1 w-3 shrink-0"
          />
        </div>
        <div className="bell">
          <img
            src="https://file.rendit.io/n/aGztKFxwoEmCloTVIHqJ.svg"
            className="w-4 "
            alt="bell"
            id="bell"
          />
        </div>
        <div className="profile">
          <img src={props.userImg} className="w-8" alt="profile" id="profile" />
        </div>
      </div>
    </nav>
  );
}