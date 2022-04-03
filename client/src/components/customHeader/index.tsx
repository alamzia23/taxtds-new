import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdExitToApp, MdHome } from "react-icons/md";

import { logout } from "../../redux/actions/auth.action";

interface IProps {
  greeting: string;
  subtitle?: string;
  person?: boolean;
}

const Header = ({ greeting, subtitle, person = true }: IProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <header className="w-[100%] bg-accentOne text-[white] h-[100px] flex items-center justify-between px-[10px] md:px-[30px] mb-[15px] shadow-xl">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl ">{greeting}</h1>
          {subtitle ? <p className="ml-4"> ~ {subtitle}</p> : null}
        </div>
        <div className="flex flex-col md:flex-row md:gap-5">
          {person ? (
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleLogout}
            >
              <MdExitToApp />
              <p className="font-semibold">Logout</p>
            </div>
          ) : null}
          <Link to="/">
            <div className="flex items-center gap-2 hover:text-lightHover">
              <MdHome />
              <p className="font-semibold">Home</p>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
