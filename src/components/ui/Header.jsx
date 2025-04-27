import { Context } from "../../context/TaskContext";

const Header = () => {
  const { userInfo, loading } = Context();

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
          </div>
        ) : (
          <p>No User</p> // login nahi to No User
        )}
      </div>
    </div>
  );
};

export default Header;
