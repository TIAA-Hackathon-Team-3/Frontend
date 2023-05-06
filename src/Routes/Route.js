import React from "react";
// import Home from "../Pages/Home/Home";

const Home = React.lazy(() => import("../Pages/Home/Home"));
const Register = React.lazy(()=> import("../Pages/Register/SignUp"));
const Login = React.lazy(()=> import("../Pages/Login/Login"));
const PostCreation = React.lazy(()=> import("../Pages/PostCreation/PostCreation"));
const PostPage = React.lazy(()=> import("../Pages/PostPage/PostPage"));


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
	},
	PostCreation:{
		path: "/PostCreation",
		name: "PostCreation",
		element: React.createElement(PostCreation,{}),
	},
	PostPage:{
		path: "/PostPage",
		name: "PostPage",
		element: React.createElement(PostPage,{}),
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
	components.Login,
	components.PostCreation,
	components.PostPage
];
export { rolesConfig, BasicRoutesConfig };