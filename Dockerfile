# ---- STAGE 1: El Constructor (Builder) ----
# Usamos una imagen de Node para construir el proyecto
FROM node:18-alpine AS builder

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos package.json y package-lock.json
COPY package.json package-lock.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos todo el código fuente
COPY . .

# Construimos la aplicación para producción
# Esto creará la carpeta /app/dist/monitor-dashboard/browser
RUN npm run build


# ---- STAGE 2: El Servidor Final (Nginx) ----
# Usamos una imagen de Nginx súper ligera
FROM nginx:alpine

# Copiamos la configuración de Nginx que crearemos
# (El archivo de abajo, nginx.conf)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos los archivos construidos desde el "builder"
# al directorio web de Nginx
COPY --from=builder /app/dist/monitor-dashboard/browser /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80