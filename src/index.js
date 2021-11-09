import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import TestApp from "./components/TestApp";
import NameListProps from "./components/props-example/NameListProps";
import MenuList from "./components/props-example/MenuList";
import Car from "./components/state-example/Car";
import Counter from "./components/events-examples/Counter";
import Person from "./components/events-examples/Person";
import NewPerson from "./components/events-examples/NewPerson";


const myNames = ["Daryl Dixon", "Rick Grymes", "Meggy Greene"];

const menus = [
    {name: 'Home', path:'/home'},
    {name: 'Register', path:'/register'},
    {name: 'About us', path:'/about'}
];

ReactDOM.render(<Person/>, document.getElementById("main"));