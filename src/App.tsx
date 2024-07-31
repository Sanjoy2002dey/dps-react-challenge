
import { useEffect, useState } from 'react';
import './App.css';
import dpsLogo from './assets/DPS.svg';
import "./SearchBar.css";
import SearchBar from "./SearchBar.jsx";

function App() {
	const [users, setUsers] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCity, setSelectedCity] = useState('');
	const [highlightOldest, setHighlightOldest] = useState(false);

	useEffect(() => {
		fetch('https://dummyjson.com/users')
			.then((response) => response.json())
			.then((data) => setUsers(data.users));
	}, []);
	console.log(users);
	return (
		<>
			<div>
				<a href="https://www.digitalproductschool.io/" target="_blank">
					<img src={dpsLogo} className="logo" alt="DPS logo" />
				</a>
				<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedCity={selectedCity} setSelectedCity={setSelectedCity} highlightOldest={highlightOldest} setHighlightOldest={setHighlightOldest} users={users} />
			</div>
			<div className="home-card">
				{/* <UserTable users={users} /> */}
			</div>
		</>
	);
}

export default App;