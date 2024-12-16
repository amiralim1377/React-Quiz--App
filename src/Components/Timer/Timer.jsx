import { useNavigate } from "react-router-dom";
import { useTimer } from "react-timer-hook";

function Timer() {
  const navigate = useNavigate();
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 180);
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      alert("Time is up"), navigate("/result");
    },
  });

  return (
    <div className="w-full rounded-md bg-accentBlue p-2 font-sans font-semibold text-black dark:border dark:border-white dark:bg-darkBlue2 dark:text-white">
      <span>{minutes}</span>:
      <span>
        {seconds < 10 ? "0" : ""}
        {seconds}
      </span>
    </div>
  );
}

export default Timer;
