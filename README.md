# Testing de Formulario React con Jest y Enzyme

Este proyecto contiene pruebas unitarias para un componente de formulario simple hecho en React 16. Los tests verifican la correcta interacción con los inputs y la lógica del submit usando **Jest** y **Enzyme**. Además, incluye configuración para correr el proyecto con **Vite** y realizar pruebas con Jest sin conflictos.

---

## Instalación

1. Clonar el repositorio  
```bash
git clone https://github.com/daniel-gagliano/enzyme_test
```

2. Instalar dependencias  
```bash
npm install
```

---

## Uso

### Levantar servidor de desarrollo para ver el formulario en el navegador

```bash
npm run dev
```

Esto iniciará Vite y podrás abrir la aplicación en el navegador en la URL que indique (normalmente `http://localhost:5173`).

---

### Ejecutar tests automáticos

```bash
npm test
```

Esto correrá Jest, que ejecutará las pruebas definidas para el componente `Form`.

---

## Detalles del proyecto

- El componente `Form` tiene inputs para nombre, email, edad y mensaje.  
- Se valida que todos los campos estén completos para mostrar un mensaje de agradecimiento.  
- Se implementaron tests que verifican:  
  - No mostrar mensaje si falta completar algún campo  
  - Mostrar mensaje correcto luego del submit con datos completos  
  - Poder escribir en cada input (nombre, email, edad, mensaje)  

---

## Configuración importante

- Para evitar conflictos entre Jest y Vite, **no se usa `"type": "module"` en `package.json`**.  
- El archivo de configuración de Vite está en formato ESM y renombrado a `vite.config.mjs` para que Node lo reconozca correctamente.  
- Jest está configurado para usar Babel para transformar JSX y ESNext.  
- La configuración de Jest está en `jest.config.js` y el setup de Enzyme en `src/setupTests.js`.

---

## Tecnologías usadas

- React 16  
- Vite para bundling y desarrollo  
- Jest para testing  
- Enzyme para renderizado y simulación de eventos en tests  
- Babel para transformar JSX y ES6+  
