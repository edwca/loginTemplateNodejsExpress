const { exec } = require('child_process');

function runCommand(command, description) {
    return new Promise((resolve, reject) => {
        console.log(`Ejecutando: ${description}...`);
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${stderr}`);
                reject(error);
            } else {
                resolve(stdout.trim());
            }
        });
    });
}

async function removeAllContainers() {
    try {
        // Obtener todos los contenedores (activos y detenidos)
        const containers = await runCommand('docker ps -aq', 'Obteniendo todos los contenedores');

        if (containers) {
            // Detener contenedores activos (si hay)
            await runCommand(`docker stop ${containers}`, 'Deteniendo todos los contenedores');
            // Eliminar todos los contenedores
            await runCommand(`docker rm ${containers}`, 'Eliminando todos los contenedores');
        } else {
            console.log('No hay contenedores para eliminar.');
        }
    } catch (error) {
        console.error('Error al eliminar contenedores:', error);
    }
}

async function removeAllImages() {
    try {
        const images = await runCommand('docker images -q', 'Obteniendo imágenes');

        if (images) {
            // Forzar la eliminación de todas las imágenes
            await runCommand(`docker rmi -f ${images}`, 'Eliminando todas las imágenes (forzadamente)');
        } else {
            console.log('No hay imágenes para eliminar.');
        }
    } catch (error) {
        console.error('Error al eliminar imágenes:', error);
    }
}

async function cleanDocker() {
    try {
        await removeAllContainers();
        await removeAllImages();
        console.log('¡Limpieza completada!');
    } catch (error) {
        console.error('Hubo un error durante la limpieza:', error);
    }
}

cleanDocker();
