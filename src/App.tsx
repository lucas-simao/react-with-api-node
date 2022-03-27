import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [teste, setTeste] = useState([]);

	const requestApi = async () => {
		const response = await fetch("http://localhost:3001/names");
		const resposta = await response.json();
		setTeste(resposta);
	};

	useEffect(() => {
		requestApi();
	}, [JSON.stringify(teste)]);

	return (
		<div className="App">
			<div>
				{teste.map((item, index) => {
					return <div key={index}>{item}</div>;
				})}
			</div>
		</div>
	);
}

export default App;
