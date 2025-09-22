import { useState } from 'react' //hook/ancora para as features do próprio react
import reactLogo from './assets/react.svg' // ./ e o / são caminhos locais;
import viteLogo from '/vite.svg'
import './App.css' //import básico, ref para quando foi exportado

function App2() { //definindo o nome e estrutura do APP()
  // todas as funções TEM que usar letra maiúscula no início
  const [count, setCount] = useState(0)

  return (
    <> {/* fragmento/ TAG vazia */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App //faz com que o componente seja 'visto' por todo o React
