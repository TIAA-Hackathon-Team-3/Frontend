import React from "react";
// import Home from "../Pages/Home/Home";

const Home = React.lazy(() => import("../Pages/Home/Home"));
const Register = React.lazy(()=> import("../Components/Register/SignUp"));

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
	components.Register
];
export { rolesConfig, BasicRoutesConfig };