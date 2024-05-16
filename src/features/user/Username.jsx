import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

function Username() {
  const username = useSelector((state) => state.user.username);
  if (!username) return null;
  return <div className="hidden text-sm font-bold md:block ">{username}</div>;
}

export default Username;
