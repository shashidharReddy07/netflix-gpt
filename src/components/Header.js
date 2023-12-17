import { signOut } from "firebase/auth";
//import Signimg from "../components/Netflix-avatar.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/Error");
      });
  };
  return (
    <div className="absolute w-screen px-2 py-2 bg-gradient-to-b from-black z-30 h-20  justify-between flex">
      <img
        className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>

      {user && (
        <div className="flex">
          <img
            className=" w-10 h-10 rounded-full"
            src={user.photoURL}
            alt="UserIcon"
          />
          <button className=" text-white font-bold" onClick={handleSignOut}>
            sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
