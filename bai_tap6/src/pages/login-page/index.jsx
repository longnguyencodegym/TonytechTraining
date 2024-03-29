import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import LogInForm from "../../components/log-in-form";
import { handleLoginUser } from "../../redux/actions/authUser.action";

import { ROUTER } from "../../config/routers";

const LogInPage = () => {
  const [isSuccess, setIsSuccess] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitGetUser = async (acc, pass) => {
    const res = await dispatch(handleLoginUser(acc, pass));
    if (res.error) {
      setIsSuccess(false);
    } else {
      navigate(ROUTER.home);
    }
  };
  return (
    <div className="flexc base-layout-cover">
      <LogInForm onSubmitGetUser={onSubmitGetUser} isSuccess={isSuccess} />
    </div>
  );
};
export default LogInPage;
