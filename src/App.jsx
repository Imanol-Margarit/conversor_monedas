// TODO (paso 4): importa el componente Conversor desde './components/Conversor'
import './App.css'
import Conversor from './components/Conversor'
import SelectorMoneda from './components/SelectorMoneda'

function App() {
  return (
    <main>
      <h1>Conversor de monedas y criptos</h1>
      {/* <SelectorMoneda etiqueta={"Moneda "} valor={"EUR"} onCambiar={()=>{}}/> */}
      {/* TODO (paso 4): sustitúyelo por <Conversor /> */}
      <Conversor etiqueta={"Moneda "} valor={"EUR"} onCambiar={()=>{}}/>
    </main>
  )
}

export default App
