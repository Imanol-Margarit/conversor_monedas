# Respuestas

Nombre y apellidos: Imanol Margarit LLopus

Responde con tus palabras y cita fragmentos de tu propio código.

## 1. ¿Qué relación hay entre index.html, main.jsx y App.jsx?
Index carga main con el <script></script> y a su vez main con <App />.

## 2. ¿Qué es una prop? Ejemplo de tu proyecto (quién la envía y quién la recibe)
El prop es un dato que un componente padre pasa a su hijo como un atributo
el padre las envia con <SelectorMoneda etiqueta="De" valor={origen} onCambiar={setOrigen} />
y el hijo las recibe con "function SelectorMoneda({ etiqueta, valor, onCambiar })".

## 3. ¿Por qué cantidad usa useState y resultado no?
Porque la cantidad cambia por el usuario y react tiene que dibujarlas de nuevo "const [cantidad, setCantidad] = useState(100);"
y el resultado sale de otro dato "const resultado = cantidad / tasas[origen].tasa * tasas[destino].tasa;"

## 4. ¿Qué pasa si quitas Number() en el onChange del input? Pruébalo y explica
Sin Number() la cantidad se guarda como un texto, el resultado no canvia ya que al hacer la multiplicaion o division 
lo tranforma a numero. El problema esta que cualquier suma que se añada funcionara mal.

## 5. Añade la moneda MXN (peso mexicano, tasa 19.5). ¿Cuántos ficheros has tocado y por qué?
Solo tasas.json porque el codigo esta echo para que lea las monedas del json

## 6. Diferencia entre npm run dev y npm run build. ¿Qué hay dentro de dist/?
npm run dev arranca el codigo con recarga automatica
build genera la carpeta dist/ donde esta todo nuestro proyecto dentro de pocos ficheros
