import React, { useState, useCallback } from 'react';

const Boton = React.memo(({ alHacerClick, texto }) => {
  console.log(`Botón ${texto} renderizado`);
  return <button onClick={alHacerClick}>{texto}</button>;
});

export default function ContadorApp() {
  const [contador, setContador] = useState(0);
  const [bool, setBool] = useState(false);

  const incrementar = useCallback(() => {
    setContador(c => c + 1);
  }, []);

  const incrementarMal = () => {
    setContador(c => c +1);
  }

  const cambiarBool = useCallback(() => {
    setBool(b => !b);
  }, [bool]);

  return (
    <>
      <p>Contador: {contador}</p>
      <p>Booleano: {bool.toString()}</p>

      <Boton alHacerClick={incrementar} texto="Incrementar" />
      <Boton alHacerClick={cambiarBool} texto="Cambiar valor" />
    </>
  );
}