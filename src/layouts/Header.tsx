import { useNavigate } from "react-router";
import logo from "../assets/connections-logo.png";

function Header() {
  const navigate = useNavigate();
  const returnHome = () => {
    navigate("/")
  }

  //TODO: make header button a button
  return (
    <>
      <div className={"bg-white flex items-center fixed w-screen"}>
        <div onClick={returnHome} className="flex items-center hover:cursor-pointer" >
          <img src={logo} alt="Logo" className={"mx-2 h-6"} />
          <p
            className={
              "my-2 text-lg font-tile text-pretty text-gray-500 sm:text-xl/8"
            }
          >
            Connection Party
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
