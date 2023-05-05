import React from "react";
// import Home from "../Pages/Home/Home";

const Home = React.lazy(() => import("../Pages/Home/Home"));

const components = {
    Home: {
		path: "/",
		name: "home",
		element: React.createElement(Home, {}),
	},
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
    components.Home
];
export { rolesConfig, BasicRoutesConfig };