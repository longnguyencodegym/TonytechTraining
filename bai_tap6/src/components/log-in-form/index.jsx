import React from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../config/routers";
import Loading from "../loading";

const LogInForm = (props) => {
  const navigate = useNavigate();

  const [isSuccess, setIsSuccess] = useState(true);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [loginUser, setLoginUser] = useState({
    account: "",
    pass: "",
  });
  const setLoginingUser = (id, name) => {
    window.localStorage.clear();
    window.localStorage.setItem("id", id);
    window.localStorage.setItem("name", name);
  };

  const loginToUser = async (e) => {
    e.preventDefault();
    setLoadingStatus(true);
    const users = await props.onSubmitGetUser();
    const user = users.find(
      (user) =>
        user.account === loginUser.account && user.pass === loginUser.pass
    );
    if (user) {
      setLoginingUser(user.id, user.name);
      navigate(ROUTER.home);
    } else {
      setIsSuccess(false);
    }
    setLoadingStatus(false);
  };

  return (
    <form action="#" onSubmit={loginToUser}>
      <div className="flexc flex-cen login-com">
        {loadingStatus === true && <Loading />}
        <h3>Đăng nhập vào TonyBook</h3>
        <div className="flexr flex-cen login-com-row">
          <div>
            <FaUserAlt fill="#001858" />
          </div>
          <input
            autoComplete="username"
            value={loginUser.account}
            type="text"
            id="inputName"
            placeholder="Tên người dùng"
            onChange={(e) =>
              setLoginUser({ ...loginUser, account: e.target.value })
            }
          />
        </div>
        <div className="flexr flex-cen login-com-row">
          <div>
            <FaLock fill="#001858" />
          </div>
          <input
            autoComplete="current-password"
            value={loginUser.pass}
            type="password"
            id="inputPass"
            placeholder="Mật khẩu"
            onChange={(e) =>
              setLoginUser({ ...loginUser, pass: e.target.value })
            }
          />
        </div>
        <div>
          <button className="btn login-com-btn" onClick={loginToUser}>
            Đăng nhập
          </button>
        </div>
        <p hidden={isSuccess} className="alert-color">
          Tên đăng nhập và mật khẩu không khớp
        </p>
        <div className="flexr flex-bet login-com-bot">
          <p>Quên mật khẩu</p>
          <p className="remove-link">
            <Link to={ROUTER.userRegister}>Tạo tài khoản</Link>
          </p>
        </div>
      </div>
    </form>
  );
};
export default LogInForm;
