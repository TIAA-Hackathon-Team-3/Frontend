import React from "react";
// import Home from "../Pages/Home/Home";

const Home = React.lazy(() => import("../Pages/Home/Home"));
const Register = React.lazy(()=> import("../Pages/Register/SignUp"));
const Login = React.lazy(()=> import("../Pages/Login/Login"));

const components = {
    Home: {
		path: "/",
		name: "home",
		element: React.createElement(Home, {}),
	},
	Register: {
		path: "/signup",
		name: "signup",
		element: React.createElement(Register,{}),
	},
	Login:{
		path: "/login",
		name: "login",
		element: React.createElement(Login,{}),
	}

}

const rolesConfig = {
	Admin: {
		routes: [
            
		],
	},
	user: {
		routes: [

        ],
	},
};
const BasicRoutesConfig = [
    components.Home,
	components.Register,
	components.Login
];
export { rolesConfig, BasicRoutesConfig };