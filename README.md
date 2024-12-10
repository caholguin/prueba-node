### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/caholguin/prueba-node
    ```
2.  **Navega al directorio del proyecto:**
    ```bash
    cd tu-proyecto
    ```
3.  **Instala las dependencias:**
    ```bash
    npm install  # o bun install
    ```


1.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev  # o bun run dev
    ```


# Endpoints Documentación

Este documento describe los puntos finales disponibles para la API.

## Usuarios

* **GET /api/users:** Recupera una lista de todos los usuarios.
* **GET /api/users/{id}:** Recupera un usuario específico por ID.
* **POST /api/users:** Crea un nuevo usuario.
    * **Request Body:**
        ```json
        {
          "name": "John Doe",
          "email": "JohnDoe@gmail.com"
        }
        ```
* **PUT /api/users/{id}:** Actualiza un usuario existente.
    * **Request Body:**
        ```json
        {
          "name": "Updated Name",
          "email": "JohnDoe@gmail.com" 
        }
        ```
* **DELETE /api/users/{id}:** Elimina un usuario específico por ID.

## Companies

* **GET /api/companies:** Recupera una lista de todas las empresas.
* **GET /api/companies/{id}:** Recupera una empresa específica por ID.
* **POST /api/companies:** Crea una nueva empresa.
    * **Request Body:**
        ```json
        {
          "name": "Company Name",
          "nit": "123456789" 
        }
        ```
* **PUT /api/companies/{id}:** Actualiza una empresa existente.
    * **Request Body:**
        ```json
        {
          "name": "Updated Company Name",
          "nit": "987654321" 
        }
        ```
* **DELETE /api/companies/{id}:** Elimina una empresa específica por ID.

## Roles

* **GET /api/roles:** Recupera una lista de todos los roles.
* **GET /api/roles/{id}:** Recupera un rol específico por ID.
* **POST /api/roles:** Crea un nuevo rol.
    * **Request Body:**
        ```json
        {
          "name": "Role Name",
          "description": "Role Description"
        }
        ```
* **PUT /api/roles/{id}:** Actualiza un rol existente.
    * **Request Body:**
        ```json
        {
          "name": "Updated Role Name",
          "description": "Updated Role Description"
        }
        ```
* **DELETE /api/roles/{id}:** Elimina un rol específico por ID.

## User-Company Relationships

* **POST /api/userCompany:** Asocia un usuario a una empresa y le asigna un rol.
    * **Request Body:**
        ```json
        {
          "user_id": 1, 
          "company_id": 1,
          "role_id": 1
        }
        ```

## Sales Points

* **POST /api/salesPoint:** Crea un nuevo punto de venta
    * **Request Body:**
        ```json
        {
          "name": "Sales Point Name",
          "address": "Sales Point Address"
        }
        ```

## Company-Sales Point Relationships

* **POST /api/company-sales-points:** Asocia una empresa con un punto de venta.
    * **Request Body:**
        ```json
        {
          "company_id": 1,
          "sales_point_id": 1
        }
        ```

**Note:**

* Este es un ejemplo básico y es posible que deba ajustarse según los requisitos específicos de su API.
* Reemplace los marcadores de posición como `http://localhost:8000` con la URL base real de su API.
