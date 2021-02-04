import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import API from './utils/API'
import EmployeeContainer from "./components/EmployeeContainer"


function App() {
	return (
		<div className="header-el">
			<Header />
      		<Input />
			<EmployeeContainer />
		</div>
	);
}

export default App;
