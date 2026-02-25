import React from "react";

const Hijo = React.memo(({ onIncrementar }) => {
  console.log("Renderizando Hijo");

  return (
    <div>
      <button onClick={onIncrementar}>
        Incrementar desde Hijo
      </button>
    </div>
  );
});

export default Hijo;