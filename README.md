# Crear el archivo README.md descargable
readme_path = "/mnt/data/README.md"

# Guardar el contenido del README.md en el archivo
with open(readme_path, "w") as file:
    file.write("""
# Gestión de Fondos - Frontend

Este proyecto es una aplicación de frontend para gestionar suscripciones y cancelaciones de fondos, mostrando un historial de transacciones y permitiendo a los usuarios interactuar con fondos financieros.

## Requisitos

- Node.js (versión >= 12)
- npm o yarn como gestor de paquetes

## Instalación

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/usuario/proyecto-gestion-fondos.git

   ## Instalación

2. Correr elproyecto en local:

   ```bash
   npm run dev

