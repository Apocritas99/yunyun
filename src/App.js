
import './App.css';
import { useState } from 'react';
function App() {
  const [txt, setTxt] = useState('');
  return (
		<div className="App">
			<header className="App-header">
				<h1>{txt}</h1>
					<img src={process.env.PUBLIC_URL + '/logo.png'} className="App-logo" alt="logo" />
				<div className="container">
					<a
						onMouseOver={() => setTxt('DISFRUTA TU ESTADIA EN NUESTRO SERVIDOR')}
						onMouseOut={() => setTxt('')}
						href="https://discord.gg/GJAgFw6"
						className="btn effect04"
						data-sm-link-text="GRACIAS!!!"
					>
						<span>JOIN</span>
					</a>
				</div>
			</header>
		</div>
  );
}

export default App;
