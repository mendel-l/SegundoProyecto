# SegundoProyecto

## ESTRUCTURA DEL PROYECTO
SegundoProyecto/
│
├── back/                # Carpeta para el back-end
│   ├── config/          # Configuración de la base de datos
│   ├── controllers/     # Controladores
│   ├── models/          # Modelos de base de datos (con Sequelize)
│   ├── routes/          # Definición de rutas
│   ├── services/        # Lógica de negocio
│   ├── app.js           # Archivo principal para configurar la aplicación
│   └── package.json     # Dependencias y scripts de npm para el back-end
│
└── front/               # Carpeta para el front-end
    ├── src/             # Código fuente de React.js
    ├── public/          # Recursos públicos (index.html, imágenes)
    └── package.json     # Dependencias y scripts de npm para el front-end

## GENERAMOS EL BACK-END

1.  Inicializar el proyecto Node.js:
- cd back
- npm init -y

2. Instalar las dependencias:
- npm install express sequelize mysql2

3. Creación de archivos y carpetas:
- creamos un archivo llamdo app.js
- creamos una carpeta llamda config
- dentro de config generamos el archivo database.js y dbConfig.js
- creamos una carpeta llamada models
- dentro de models generamos el archivo User.js
- creamos una carpeta llamada routes
- dentro de routes generamos el archivo userRoutes.js // este solo es de ejemplo
- creamos una carpeta llamada controllers
- dentro de controllers generamos el archivo userController.js // este solo es de ejemplo

4. Agregar script de inicio en package.json:
- Asegúrate de que el archivo package.json en back tenga el siguiente bloque en "scripts":

"scripts": {
  "start": "node app.js"
}


## GENERAMOS FRONT-END

1. Inicializar el proyecto React
- cd front
- npx create-react-app .

## GENERAMOS BASE DE DATOS
- la base de datos se llama "hola" // por el momento no tiene ninguna tabla

## Iniciar el Proyecto
1. back-end
- npm install
- npm start

2. front-end
- npm install
- npm start
