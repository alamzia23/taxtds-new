import React from "react";
import Search from "@material-ui/icons/Search";
import Person from "@material-ui/icons/Person";
import Help from "@material-ui/icons/Help";
import Lock from "@material-ui/icons/Lock";
import VpnKey from "@material-ui/icons/VpnKey";

import data from "./data";
import AuthModals from "../authModals";
import { TopLink, Input } from "./helper";

const Header = () => {
  const [modalShow, setModalShow] = React.useState<string>("");
  const setModalTrigger = () => {
    setModalShow("");
  };

  let user;
  return (
    <header className="w-screen">
      <div className="bg-accentOne p-[5px] md:p-[10px] flex flex-col md:flex-row justify-center items-center">
        <div className="flex-shrink flex flex-row mb-3 md:mb-0">
          <Input
            classes="flex-shrink max-w-[150px] mr-[8px] md:mr-[20px] md:max-w-[250px]"
            placeholder="Search State"
            name="state"
          />

          <div className="bg-lightBgOne rounded-sm pl-[5px] md:pl-[10px] mr-[8px] md:mr-[20px]">
            <Input
              classes="max-w-[150px] md:max-w-[250px]"
              placeholder="Search services"
              name="service"
            />
          </div>

          <button className="h-[30px] w-[40px] md:h-[40px] md:w-[60px] bg-accentTwo rounded-sm">
            <Search />
          </button>
        </div>

        <div className="ml-0 md:ml-[50px] md:mt-[10px] lg:ml-[30px] xl:ml-[200px] cursor-pointer flex gap-2">
          <TopLink
            name="Quotes"
            Icon={<Help />}
            callback={() => setModalShow("quotes")}
          />

          {user ? (
            <TopLink name="Profile" Icon={<Person />} callback={() => {}} />
          ) : (
            <>
              <TopLink
                name="Login"
                Icon={<VpnKey />}
                callback={() => setModalShow("login")}
              />
              <TopLink
                name="Signup"
                Icon={<Lock />}
                callback={() => setModalShow("signup")}
              />
            </>
          )}
        </div>
      </div>

      <div className="p-[8px] bg-accentTwo shadow-xl mb-[15px]">
        <ul className="list-none items-center flex-wrap flex flex-row justify-center">
          {data.map((thing) => (
            <li key={thing.id} className="mx-[10px]">
              <a
                className="font-semibold"
                href={`/professions?profession=${thing.urlSlug}`}
              >
                {thing.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center">
        <AuthModals trigger={modalShow} setTrigger={setModalTrigger} />
      </div>
    </header>
  );
};

export default Header;
