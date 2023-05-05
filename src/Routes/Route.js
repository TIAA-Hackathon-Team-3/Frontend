import React from "react";

const Home = React.lazy(() => import("../Pages/Home/Home"));

const components = {
    Home: {
		path: "/",
		name: "home",
		element: <Home />,
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