import React, { useState, useCallback } from 'react';

// Componente Hijo memorizado
const Boton = React.memo(({ alHacerClick, texto }) => {
  console.log(`Botón ${texto} renderizado`);
  return <button onClick={alHacerClick}>{texto}</button>;
});

export default function ContadorApp() {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  // Sin useCallback, esta función se recrea en cada renderizado
  const incrementar1 = () => setContador1(c => c + 1);

  // Con useCallback, la función se mantiene estable
  const incrementar2 = useCallback(() => {
    setContador2(c => c + 1);
  }, []); // Dependencias vacías: no cambia nunca

  return (
    <>
      <p>Contador 1: {contador1}</p>
      <p>Contador 2: {contador2}</p>
      {/* Botón 1 se renderiza de nuevo siempre */}
      <Boton alHacerClick={incrementar1} texto="Incrementar 1" />
      {/* Botón 2 se mantiene igual */}
      <Boton alHacerClick={incrementar2} texto="Incrementar 2" />
    </>
  );
}