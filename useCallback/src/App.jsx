import React, { useState, useCallback } from 'react';

// Componente Hijo memorizado
const Boton = React.memo(({ alHacerClick, texto }) => {
  console.log(`Botón ${texto} renderizado`);
  return <button onClick={alHacerClick}>{texto}</button>;
});

export default function ContadorApp() {
  const [contador, setContador] = useState(0);

  // Con useCallback, la función se mantiene estable
  const incrementar = useCallback(() => {
    setContador(c => c + 1);
  }, []); // Dependencias vacías: no cambia nunca

  return (
    <>
      <p>Contador: {contador}</p>
      {/* Botón 2 se mantiene igual */}
      <Boton alHacerClick={incrementar} texto="Incrementar" />
    </>
  );
}