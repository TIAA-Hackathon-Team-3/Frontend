import { Suspense, useState } from 'react'
import Layout from './Components/Layout/Layout'
import { Navigate, Route, Routes } from 'react-router'
import { connect } from 'react-redux';
import { BasicRoutesConfig, rolesConfig } from './Routes/Route';
import { loginUser } from './Redux/Actions/AuthActions';

function App(props) {

  const { isAuthenticated, userRole, token } = props.AuthDetails;
  console.log(isAuthenticated,userRole,token)
  const loginToken = sessionStorage.getItem("loginToken") && sessionStorage.getItem("isAuthenticated") && sessionStorage.getItem("userRole")


  const storeDetails = async () => {
    await props.loginUser({
        ...props.AuthLogin,
        isAuthenticated: sessionStorage.getItem("loginToken"),
        userRole: sessionStorage.getItem("userRole"),
        token: sessionStorage.getItem("loginToken")
      })
  }


  if (loginToken) {
    storeDetails();
  }

  let routes;
  if (isAuthenticated || sessionStorage.getItem("isAuthenticated")) {
    if (userRole === "User" || sessionStorage.getItem("userRole") === "User") {
      routes = rolesConfig["User"];
    } else if (userRole === "Admin" || sessionStorage.getItem("userRole") === "Admin") {
      routes = rolesConfig["Admin"];
    }
  }

  return (
    <>
    <Suspense>
        <Routes>
        <Route element={<Layout/>}>
          {BasicRoutesConfig.map((route, key) => {            
            return <Route  key={key} {...route} /> ;
          })}
          </Route>
          {isAuthenticated || loginToken ? (
            <Route element={<Layout/>}>
              {routes.routes.map((route, key) => {
                return  <Route key={key} {...route} />;
              })}
            </Route>
          ) : (
            <Route path="/*" element={<Navigate to="/" replace />} />
          )}
        </Routes>
      </Suspense>    
    </>
  )
}

const mapStateToProps = (state) => ({ AuthDetails: state.AuthDetails });
const mapDispatchToProps = (dispact) => ({
  loginUser: (Details) => dispact(loginUser(Details)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
