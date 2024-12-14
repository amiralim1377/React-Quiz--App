import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="absolute inset-6     bg-gray-800 p-6   rounded-2xl shadow-3xl flex flex-col items-center justify-between   ">
      <Outlet />
    </div>
  );
}

export default AppLayout;
