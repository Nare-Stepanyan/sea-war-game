import React, { FC, useEffect } from "react";
import { socketProvider } from "../../providers/socket-provider";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { selectUser, setUser } from "../../store/user/userSlice";
import { useNavigate } from "react-router";
import Game from "../game";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector;
  const user = selector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {}, []);
  const handleLogout = () => {
    dispatch(setUser(null));
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <div className="top">
        <h2>Let's play {user?.userName} 🤗</h2>
        <button className="logout" onClick={handleLogout}>
          Log out
        </button>
      </div>
      <Game />
    </>
  );
};

export default Home;
