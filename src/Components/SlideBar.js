import "./slidebar.css"
export const SlideBar = () => {
  return (
    <div className="sidebar">
      <div className="withLogo">
        <div className="Dashboard-logo">Board.</div>
        <div className="sections">
          <div className="Dash-option">
            <img
              src="https://file.rendit.io/n/HOz6SaJlWxahi4ZdoEHT.svg"
              alt="DashboardiconRoot"
              className="w-4"
            />
            <button>Dashboard</button>
          </div>

          <div className="Trans-option">
            <img
              src="https://file.rendit.io/n/jwUGCiTZi9Ot1yx5irPj.svg"
              alt="TransactioniconRoot"
              className="w-4"
            />
            <button>Transactions</button>
          </div>

          <div className="Sche-option">
            <img
              src="https://file.rendit.io/n/0xRP4Dx6y01yIQaE76JG.svg"
              alt="ScheduleiconRoot"
              className="w-5"
            />
            <button>Schedules</button>
          </div>

          <div className="User-option">
            <img
              src="https://file.rendit.io/n/jdzCYsgRIpAOdeNRkAgZ.svg"
              alt="UsericonRoot"
              className="w-4"
            />
            <button>Users</button>
          </div>

          <div className="Setting-option">
            <img
              src="https://file.rendit.io/n/sUXIJ9Q3E2uC7gYHnQ0m.svg"
              alt="SettingiconRoot"
              className="w-4"
            />
            <button>Settings</button>
          </div>
        </div>
      </div>
      <div className="withoutLogo">
        <button>
          <p className="help">Help</p>
        </button>
        <button>
          <p className="contact">Contant Us</p>
        </button>
      </div>
    </div>
  );
}