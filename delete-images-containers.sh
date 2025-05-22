#!/bin/bash

# Detener todos los contenedores activos
docker stop $(docker ps -q)

# Eliminar todos los contenedores
docker rm $(docker ps -aq)

# Eliminar todas las imágenes no utilizadas
docker rmi $(docker images -q)
