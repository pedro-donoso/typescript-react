### https://react-typescript-lista-tareas.netlify.app/

![funka](https://github.com/user-attachments/assets/b9ecb7dd-8ac2-431e-8dd9-dd10469ef243)

### 1. Creo proyecto con Vite y agrego nombre:

```
create vite@latest
```

### 2. Seleccion React y TypeScript + SWC:

![tareas](https://github.com/user-attachments/assets/588026f8-9163-4236-bf4a-89967cc04213)

#### Ingreso a la carpeta del proyecto y abro VSC

### 3. Elimino archivos innecesarios e instalo npm para errores:

```
npm install
```

### 4. Creo carpeta components y componente TodoApp.tsx:

![componente](https://github.com/user-attachments/assets/139470c2-86fd-448d-8661-94ba4f612948)

### 5. Desde main.tsx llamo al componente TodoApp.tsx:

![llamada](https://github.com/user-attachments/assets/6766c8bd-f979-4bc0-9de2-edfc415e3909)

### 6. Desde index.html llamo al modulo main.tsx:

![index](https://github.com/user-attachments/assets/1d87afa5-46a6-4f3b-b795-472b242f2f69)

### 7. Ejecuto la aplicación:

```
npm run dev
```
![dev](https://github.com/user-attachments/assets/9a8281c0-85f2-45eb-9075-af8b059f300f)

### 8. Instalo Tailwind y creo archivos de configuración:

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
### 9. Agrego contenido a tailwind.config.js:

![configuracion](https://github.com/user-attachments/assets/80814412-bd7f-4243-a42f-286577850722)

### 10. En src creo archivo index.css y agrego directivas:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 11. Importo archivo index.css al archivo principal main.tsx:

![main](https://github.com/user-attachments/assets/52f9ccae-0333-40c7-87cb-35bf527420e6)

### 12. Agrego estilos Tailwind al componente TodoApp.tsx:

![todoapp](https://github.com/user-attachments/assets/75a14f00-cbcb-4817-925b-facf4e781b92)

### 13. Corro la Aplicacion para ver los estilos:

```
npm run dev
```
### Al finalizar el proyecto:

```
npm run build
```

#### Para generar la carpeta dist

![dist](https://github.com/user-attachments/assets/4b35838b-a342-4195-b8f1-9ff098684409)
