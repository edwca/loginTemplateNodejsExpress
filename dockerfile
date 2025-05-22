FROM node

# Copiar todo el código al contenedor
COPY . /app

# Establecer el directorio de trabajo
WORKDIR /app

# Instalar las dependencias
RUN npm install

# Exponer el puerto
EXPOSE 3000

# Comando para ejecutar el script de inicio
ENTRYPOINT ["sh", "/app/executable.sh"]
