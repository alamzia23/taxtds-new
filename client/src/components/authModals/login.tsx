import VpnKey from "@material-ui/icons/VpnKey";
import Person from "@material-ui/icons/Person";
import Lock from "@material-ui/icons/Lock";

import InputEl from "../atoms/Input";
import ButtonEl from "../atoms/Button";
import React from "react";

const Login = () => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginUser = () => {};

  return (
    <>
      <InputEl
        name="email"
        value={data.email}
        onChange={handleChange}
        Icon={<Person />}
        type="text"
        placeholder="Enter email"
      />
      <InputEl
        name="password"
        value={data.password}
        onChange={handleChange}
        Icon={<VpnKey />}
        type="password"
        placeholder="Enter password"
      />
      <div className="flex flex-col w-full">
        <ButtonEl Icon={<Lock />} label="Login" callback={loginUser} />
      </div>
    </>
  );
};

export default Login;
