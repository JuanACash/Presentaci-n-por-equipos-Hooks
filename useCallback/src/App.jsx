import React, { useState, useCallback } from 'react';

const Boton = React.memo(({ alHacerClick, texto }) => {
  console.log(`Botón ${texto} renderizado`);
  return <button onClick={alHacerClick}>{texto}</button>;
});

export default function ContadorApp() {
  const [contador, setContador] = useState(0);

  const incrementar = useCallback(() => {
    setContador(c => c + 1);
  }, []);

  return (
    <>
      <p>Contador: {contador}</p>
      <Boton alHacerClick={incrementar} texto="Incrementar" />
    </>
  );
}