import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="shadow-3xl absolute inset-6 flex flex-col items-center justify-between rounded-2xl bg-gray-100 p-6 dark:border dark:border-white dark:bg-darkBlue2">
      <Outlet />
    </div>
  );
}

export default AppLayout;
