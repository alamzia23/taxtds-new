import React from "react";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loadUser } from "./redux/actions/auth.action";
import Main from "./pages/Main";
import ServiceDetail from "./pages/ServiceDetail";
import NotFound from "./pages/NotFound";

import User from "./pages/user";
import CreateService from "./pages/user/create";
import EditService from "./pages/user/edit";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="flex flex-col items-center justify-center">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          transition={Bounce}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user" element={<User />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/service/create" element={<CreateService />} />
          <Route path="/service/:id/edit" element={<EditService />} />
          {/* <Route path="/admin/listed-rofessions" element={} />
          <Route path="/admin/list-services-names" element={} />
          <Route path="/admin/listed-services" element={} />
          <Route path="/admin/listed-users" element={} /> */}
          <Route
            path="/admin"
            element={<Navigate to="/admin/listed-services" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
