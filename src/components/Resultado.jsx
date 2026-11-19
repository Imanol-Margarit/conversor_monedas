// TODO: importa los datos de '../data/tasas.json'
import tasas from '../data/tasas.json'
// TODO: constante con los códigos de las criptomonedas
const codigos_c =['BTC','ETH'];
// Componente: muestra el resultado formateado.
// Props que recibe: cantidad, origen, destino, valor
// Debe mostrar algo como:  100 € = 108.00 $
// Decimales: 8 si el destino es una cripto, 2 en el resto.
function Resultado({ cantidad, origen, destino, valor }) {
  // TODO: decide cuántos decimales usar
  let decimales;
  if(codigos_c.includes(destino)){
    decimales = 8;
  }else{
    decimales = 2;
  }
  return (
    <p className="resultado">
      {/* TODO: cantidad + símbolo de origen = valor formateado + símbolo de destino */}
      {cantidad} {tasas[origen].simbolo} = <strong>{valor.toFixed(decimales)} {tasas[destino].simbolo}</strong>
    </p>
  )
}

export default Resultado
