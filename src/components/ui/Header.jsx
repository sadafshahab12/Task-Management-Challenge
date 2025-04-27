import { auth } from "../../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/TaskContext";

const Header = () => {
  const { userInfo, loading } = Context();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log("Logout Error", error);
    }
  };
  return (
    <div className="grid grid-cols-2 items-center px-10 py-2 bg-gray-100">
      <div>
        <input
          type="text"
          className="input w-full"
          placeholder="Search Task...."
        />
      </div>
      <div className="justify-items-end">
        {loading ? (
          <p>Loading...</p> // jab tak auth response nahi deta
        ) : userInfo ? (
          <div className="flex-center gap-6">
            <div className="flex-center gap-2">
              <p className="text-3xl font-black uppercase  bg-indigo-200 text-indigo-500 h-10 w-10 rounded-full flex-center justify-center">
                {userInfo.firstName.charAt(0)}
              </p>
              <p>
                {userInfo.firstName.charAt(0).toUpperCase() +
                  userInfo.firstName.slice(1).toLowerCase()}
              </p>
            </div>
            <button className="button w-auto" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <p>No User</p> // login nahi to No User
        )}
      </div>
    </div>
  );
};

export default Header;
