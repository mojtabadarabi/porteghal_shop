import React, { Suspense } from 'react';
import { Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";
import './App.css';
import { useLanguage } from './Providers/LangProvider/LangProvider';
import { routesDetector } from './Routes/renderRoutes';
import routes from "./Routes/Routes";
import ScrollToTop from './Helpers/ScollToTop'

function App() {
  const {dir} = useLanguage()
  return (
    <Suspense fallback={<p>Loading...</p>}>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={dir === 'rtl'}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      <div className="App" dir={dir}>
        <ScrollToTop/>
          <Routes>
            {routes.map((route)=> routesDetector(route))}
          </Routes>
      </div>

    </Suspense>
  );
}

export default App;
