# Sistema de Gestión para AutoLavado Premium
### Proyecto de Backend - API RESTful

---

## Información del Proyecto

**Nombre del Proyecto:** AutoLavado Premium - Sistema de Gestión  
**Versión:** 1.0.0  
**Fecha de Desarrollo:** Diciembre 2025  
**Repositorio:** https://github.com/Axel-MR/optimus-auto-lavado.git

---

## Índice

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Objetivos del Sistema](#objetivos-del-sistema)
3. [Arquitectura Técnica](#arquitectura-técnica)
4. [Funcionalidades Implementadas](#funcionalidades-implementadas)
5. [Modelo de Datos](#modelo-de-datos)
6. [Seguridad y Autenticación](#seguridad-y-autenticación)
7. [Módulos del Sistema](#módulos-del-sistema)
8. [Infraestructura y Despliegue](#infraestructura-y-despliegue)
9. [Guía de Instalación](#guía-de-instalación)
10. [Pruebas y Validación](#pruebas-y-validación)
11. [Mantenimiento y Escalabilidad](#mantenimiento-y-escalabilidad)
12. [Anexos](#anexos)

---

## 1. Resumen Ejecutivo

El proyecto **AutoLavado Premium** es una solución integral de backend desarrollada para gestionar las operaciones de un negocio de autolavado profesional. El sistema proporciona una API RESTful completa que permite administrar servicios, promociones, planes de suscripción, reservas de clientes y contenido dinámico del sitio web.

### Características Principales

- **Sistema de autenticación robusto** con JWT (JSON Web Tokens)
- **Gestión completa de servicios** de autolavado
- **Sistema de promociones dinámicas** por día de la semana
- **Planes de suscripción** con diferentes niveles (Basic, Premium, Elite)
- **Gestión de contenido** para hero section y carousel
- **Sistema de reservas** y contacto con clientes
- **Base de datos en tiempo real** con Firebase Firestore

### Tecnologías Empleadas

| Categoría | Tecnología | Versión |
|-----------|------------|---------|
| Framework Backend | NestJS | 11.1.9 |
| Lenguaje | TypeScript | 5.9.3 |
| Base de Datos | Firebase Firestore | Cloud |
| Autenticación | JWT + Firebase Auth | - |
| Validación | class-validator | 0.14.3 |
| Seguridad | bcryptjs | 3.0.3 |

---

## 2. Objetivos del Sistema

### Objetivo General

Desarrollar un sistema backend escalable y seguro que permita la gestión integral de un negocio de autolavado, desde la administración de servicios hasta la interacción con clientes.

### Objetivos Específicos

1. **Automatizar la gestión de servicios** permitiendo crear, editar y eliminar servicios de autolavado de forma dinámica
2. **Implementar un sistema de promociones** que permita ofrecer descuentos específicos por día de la semana
3. **Facilitar la suscripción de clientes** mediante planes mensuales con diferentes características
4. **Gestionar el contenido del sitio web** de forma centralizada y eficiente
5. **Administrar reservas y contactos** de manera organizada con estados y seguimiento
6. **Garantizar la seguridad** mediante autenticación JWT y control de acceso basado en roles

---

## 3. Arquitectura Técnica

### Arquitectura General

El sistema implementa una arquitectura modular basada en el patrón MVC (Model-View-Controller) adaptado para APIs RESTful:

```
┌─────────────────────────────────────────┐
│         Cliente (Frontend/App)          │
└────────────────┬────────────────────────┘
                 │ HTTP/HTTPS
                 ▼
┌─────────────────────────────────────────┐
│          API Gateway (NestJS)           │
│  ┌───────────────────────────────────┐  │
│  │   Authentication Middleware       │  │
│  │   (JWT Verification)              │  │
│  └───────────────────────────────────┘  │
└────────────────┬────────────────────────┘
                 │
        ┌────────┴────────┐
        │                 │
        ▼                 ▼
┌──────────────┐   ┌──────────────┐
│ Controllers  │   │   Guards     │
│ (Endpoints)  │   │ (Security)   │
└──────┬───────┘   └──────────────┘
       │
       ▼
┌──────────────┐
│   Services   │
│ (Logic)      │
└──────┬───────┘
       │
       ▼
┌──────────────────────────────────┐
│    Firebase Firestore            │
│    (Cloud Database)              │
└──────────────────────────────────┘
```

### Estructura de Módulos

```
src/
├── app.module.ts                 # Módulo raíz
├── main.ts                       # Punto de entrada
├── common/                       # Recursos compartidos
│   ├── firebase/                 # Integración Firebase
│   └── guards/                   # Guards de seguridad
└── modules/                      # Módulos funcionales
    ├── auth/                     # Autenticación
    ├── users/                    # Gestión de usuarios
    ├── hero/                     # Hero section
    ├── carousel/                 # Carousel
    ├── services/                 # Servicios de lavado
    ├── plans/                    # Planes de suscripción
    ├── promotions/               # Promociones
    └── contact/                  # Contacto y reservas
```

### Patrones de Diseño Implementados

1. **Dependency Injection:** Gestión automática de dependencias por NestJS
2. **Repository Pattern:** Abstracción de acceso a datos mediante servicios
3. **DTO Pattern:** Validación y transformación de datos de entrada/salida
4. **Guard Pattern:** Protección de rutas mediante guards personalizados
5. **Singleton Pattern:** Instancia única de FirebaseService

---

## 4. Funcionalidades Implementadas

### 4.1 Sistema de Autenticación

- ✅ Registro de usuarios con roles (admin, user)
- ✅ Login con generación de JWT
- ✅ Validación de tokens en endpoints protegidos
- ✅ Encriptación de contraseñas con bcrypt
- ✅ Integración con Firebase Authentication

### 4.2 Gestión de Contenido

#### Hero Section
- ✅ Actualización dinámica de encabezado
- ✅ Gestión de título principal
- ✅ Edición de descripción
- ✅ Carga de imagen en Base64

#### Carousel
- ✅ CRUD completo de slides
- ✅ Ordenamiento personalizado
- ✅ Soporte para imágenes Base64
- ✅ Títulos y descripciones por slide

### 4.3 Gestión de Servicios

- ✅ Creación de servicios de autolavado
- ✅ Actualización de precios y descripciones
- ✅ Eliminación de servicios obsoletos
- ✅ Consulta pública de servicios disponibles
- ✅ Imágenes representativas por servicio

### 4.4 Sistema de Planes

- ✅ Planes de suscripción mensuales
- ✅ Características personalizables
- ✅ Etiquetas especiales (MOST POPULAR, etc.)
- ✅ Iconos y elementos visuales
- ✅ Planes destacados
- ✅ Texto personalizable en botones

### 4.5 Sistema de Promociones

- ✅ Promociones por día de la semana
- ✅ Descuentos en porcentaje
- ✅ Gestión de activación/desactivación
- ✅ Descripción de cada promoción
- ✅ CRUD completo protegido

### 4.6 Sistema de Contacto y Reservas

- ✅ Formulario de contacto público
- ✅ Sistema de reservas con servicios múltiples
- ✅ Gestión de estados (pendiente, confirmado, cancelado, completado)
- ✅ Selección de fecha y hora preferida
- ✅ Configuración de WhatsApp para contacto

---

## 5. Modelo de Datos

### Esquema de Base de Datos (Firestore)

#### Colección: users
```typescript
{
  id: string,
  email: string,
  passwordHash: string,
  displayName: string,
  role: 'admin' | 'user',
  createdAt: timestamp
}
```

#### Colección: hero
```typescript
{
  heading: string,
  title: string,
  description: string,
  imageBase64: string,
  updatedAt: timestamp
}
```

#### Colección: carousel
```typescript
{
  id: string,
  heading: string,
  title: string,
  description: string,
  imageBase64: string,
  order: number,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

#### Colección: services
```typescript
{
  id: string,
  name: string,
  description: string,
  price: number,
  imageBase64: string,
  createdAt: timestamp
}
```

#### Colección: plans
```typescript
{
  id: string,
  title: string,
  subtitle: string,
  price: number,
  priceInterval: string,
  description: string,
  features: string[],
  badge: string | null,
  icon: string | null,
  isHighlighted: boolean,
  buttonText: string,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

#### Colección: promotions
```typescript
{
  id: string,
  title: string,
  description: string,
  discountPercentage: number,
  createdAt: timestamp
}
```

#### Colección: bookings
```typescript
{
  id: string,
  name: string,
  email: string,
  phone: string,
  serviceIds: string[],
  preferredDate: string,
  preferredTime: string,
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed',
  createdAt: timestamp
}
```

#### Colección: contact-submissions
```typescript
{
  id: string,
  name: string,
  email: string,
  phone: string,
  message: string,
  createdAt: timestamp
}
```

#### Colección: config
```typescript
{
  whatsappNumber: string
}
```

---

## 6. Seguridad y Autenticación

### Estrategia de Seguridad

El sistema implementa múltiples capas de seguridad:

#### 6.1 Autenticación JWT

```typescript
// Flujo de autenticación
1. Usuario envía credenciales (email, password)
2. Backend valida con Firebase Auth
3. Si es válido, genera JWT con payload:
   {
     sub: userId,
     email: userEmail,
     role: userRole,
     iat: issuedAt,
     exp: expiresAt (7 días)
   }
4. Cliente almacena token
5. Cliente envía token en header Authorization: Bearer {token}
6. JwtAuthGuard valida token en cada request protegido
```

#### 6.2 Control de Acceso

| Endpoint | Método | Acceso |
|----------|--------|--------|
| /auth/login | POST | Público |
| /auth/register | POST | Protegido (Admin) |
| /hero | GET | Público |
| /hero | PATCH | Protegido (Admin) |
| /carousel | GET | Público |
| /carousel | POST/PATCH/DELETE | Protegido (Admin) |
| /services | GET | Público |
| /services | POST/PATCH/DELETE | Protegido (Admin) |
| /plans | GET | Público |
| /plans | POST/PATCH/DELETE | Protegido (Admin) |
| /promotions | GET | Público |
| /promotions | POST/PATCH/DELETE | Protegido (Admin) |
| /contact | POST | Público |
| /contact/booking | POST | Público |
| /contact/bookings | GET | Público |
| /contact/booking/:id/status | PATCH | Protegido (Admin) |

#### 6.3 Validación de Datos

Todos los endpoints implementan validación mediante DTOs (Data Transfer Objects) con decoradores de `class-validator`:

```typescript
export class CreateServiceDto {
  @IsString()
  name!: string;

  @IsNumber()
  @Min(0)
  price!: number;

  @IsString()
  @IsOptional()
  description?: string;
}
```

#### 6.4 Variables de Entorno Sensibles

Las credenciales y secretos se almacenan en archivo `.env` (no incluido en el repositorio):

```env
FIREBASE_PROJECT_ID=xxxxx
FIREBASE_CLIENT_EMAIL=xxxxx
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."
JWT_SECRET=xxxxx
WHATSAPP_NUMBER=+52xxxxxxxxxx
PORT=3000
```

---

## 7. Módulos del Sistema

### 7.1 Módulo de Autenticación (Auth)

**Responsabilidades:**
- Validar credenciales de usuarios
- Generar tokens JWT
- Registrar nuevos usuarios
- Integración con Firebase Authentication

**Endpoints:**
- `POST /auth/login` - Iniciar sesión
- `POST /auth/register` - Registrar usuario (protegido)

### 7.2 Módulo Hero

**Responsabilidades:**
- Gestionar contenido de la sección principal del sitio
- Almacenar imagen de fondo
- Actualizar encabezados y descripciones

**Endpoints:**
- `GET /hero` - Obtener contenido hero
- `PATCH /hero` - Actualizar hero (protegido)

### 7.3 Módulo Carousel

**Responsabilidades:**
- Administrar slides del carrusel
- Ordenar presentación de slides
- Gestionar imágenes y contenido de cada slide

**Endpoints:**
- `GET /carousel` - Listar slides ordenados
- `GET /carousel/:id` - Obtener slide específico
- `POST /carousel` - Crear slide (protegido)
- `PATCH /carousel/:id` - Actualizar slide (protegido)
- `DELETE /carousel/:id` - Eliminar slide (protegido)

### 7.4 Módulo Services

**Responsabilidades:**
- Catálogo de servicios de autolavado
- Gestión de precios
- Información detallada de cada servicio

**Endpoints:**
- `GET /services` - Listar servicios
- `GET /services/:id` - Obtener servicio
- `POST /services` - Crear servicio (protegido)
- `PATCH /services/:id` - Actualizar servicio (protegido)
- `DELETE /services/:id` - Eliminar servicio (protegido)

### 7.5 Módulo Plans

**Responsabilidades:**
- Planes de suscripción mensuales
- Características y beneficios
- Gestión de precios y destacados

**Endpoints:**
- `GET /plans` - Listar planes
- `GET /plans/:id` - Obtener plan
- `POST /plans` - Crear plan (protegido)
- `PATCH /plans/:id` - Actualizar plan (protegido)
- `DELETE /plans/:id` - Eliminar plan (protegido)

### 7.6 Módulo Promotions

**Responsabilidades:**
- Promociones semanales
- Descuentos por día
- Activación/desactivación de promociones

**Endpoints:**
- `GET /promotions` - Listar promociones
- `GET /promotions/:id` - Obtener promoción
- `POST /promotions` - Crear promoción (protegido)
- `PATCH /promotions/:id` - Actualizar promoción (protegido)
- `DELETE /promotions/:id` - Eliminar promoción (protegido)

### 7.7 Módulo Contact

**Responsabilidades:**
- Gestionar mensajes de contacto
- Administrar reservas de clientes
- Configurar información de contacto

**Endpoints:**
- `POST /contact` - Enviar mensaje
- `POST /contact/booking` - Crear reserva
- `GET /contact/submissions` - Listar mensajes
- `GET /contact/bookings` - Listar reservas
- `PATCH /contact/booking/:id/status` - Actualizar estado (protegido)
- `GET /contact/whatsapp` - Obtener WhatsApp
- `PATCH /contact/whatsapp` - Actualizar WhatsApp (protegido)

---

## 8. Infraestructura y Despliegue

### 8.1 Requisitos del Sistema

**Servidor:**
- Node.js v18.x o superior
- NPM v9.x o superior
- 512 MB RAM mínimo (recomendado 1 GB)
- 100 MB espacio en disco

**Base de Datos:**
- Cuenta de Firebase con Firestore habilitado
- Modo nativo Firestore (no Datastore)

**Red:**
- Puerto 3000 disponible (configurable)
- Acceso a internet para Firebase

### 8.2 Variables de Entorno

El sistema requiere las siguientes variables de entorno:

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| FIREBASE_PROJECT_ID | ID del proyecto Firebase | autolavado-prod |
| FIREBASE_CLIENT_EMAIL | Email de service account | firebase-adminsdk@... |
| FIREBASE_PRIVATE_KEY | Llave privada Firebase | -----BEGIN PRIVATE... |
| JWT_SECRET | Secreto para firmar JWT | mi-secreto-super-seguro |
| WHATSAPP_NUMBER | Número de WhatsApp | +52 123 456 7890 |
| PORT | Puerto del servidor | 3000 |

### 8.3 Proceso de Despliegue

#### Desarrollo Local

```bash
# 1. Clonar repositorio
git clone https://github.com/Axel-MR/optimus-auto-lavado.git

# 2. Navegar a backend
cd optimus-auto-lavado/backend

# 3. Instalar dependencias
npm install

# 4. Configurar variables de entorno
# Crear archivo .env con las variables necesarias

# 5. Compilar proyecto
npm run build

# 6. Iniciar servidor
npm run start:dev
```

#### Producción

```bash
# 1. Compilar para producción
npm run build

# 2. Iniciar en modo producción
npm run start:prod
```

### 8.4 Plataformas de Despliegue Recomendadas

| Plataforma | Ventajas | Configuración |
|------------|----------|---------------|
| **Heroku** | Fácil despliegue, escalado automático | Procfile + Config Vars |
| **Railway** | Deploy automático desde GitHub | Variables de entorno |
| **Render** | SSL gratis, despliegue continuo | Build Command: npm run build |
| **Google Cloud Run** | Integración nativa con Firebase | Dockerfile |
| **AWS Elastic Beanstalk** | Escalabilidad enterprise | .ebextensions |

---

## 9. Guía de Instalación

### Paso 1: Configuración de Firebase

1. Crear proyecto en [Firebase Console](https://console.firebase.google.com)
2. Habilitar Firestore Database
3. Crear Service Account:
   - Ir a Configuración del proyecto → Service accounts
   - Generar nueva clave privada
   - Guardar archivo JSON

### Paso 2: Configuración del Proyecto

```bash
# Clonar repositorio
git clone https://github.com/Axel-MR/optimus-auto-lavado.git
cd optimus-auto-lavado/backend

# Instalar dependencias
npm install
```

### Paso 3: Configurar Variables de Entorno

Crear archivo `backend/.env`:

```env
FIREBASE_PROJECT_ID=tu-proyecto-id
FIREBASE_CLIENT_EMAIL=firebase-adminsdk@tu-proyecto.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nTU_LLAVE_PRIVADA\n-----END PRIVATE KEY-----\n"
JWT_SECRET=tu-secreto-jwt-seguro
WHATSAPP_NUMBER=+52 123 456 7890
PORT=3000
```

### Paso 4: Compilar y Ejecutar

```bash
# Desarrollo
npm run start:dev

# Producción
npm run build
npm run start:prod
```

### Paso 5: Verificar Instalación

```bash
# Verificar que el servidor responde
curl http://localhost:3000/hero

# Debería retornar JSON con estructura hero
```

---

## 10. Pruebas y Validación

### 10.1 Datos Precargados

El sistema incluye datos de prueba ya configurados:

| Categoría | Cantidad | Descripción |
|-----------|----------|-------------|
| Usuarios | 1 | Admin: admin@autolavado.com |
| Servicios | 5 | Lavado Exterior, Interior, Detalle, Pulido, Test |
| Promociones | 7 | Una por cada día de la semana |
| Planes | 3 | Basic ($149), Premium ($299), Elite ($549) |
| Slides Carousel | 3 | Bienvenida, Promociones, Planes |
| Hero Section | 1 | Contenido principal configurado |

### 10.2 Pruebas de Endpoints

#### Autenticación

```bash
# Login
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@autolavado.com","password":"Admin123!"}'
```

#### Consultas Públicas

```bash
# Listar servicios
curl http://localhost:3000/services

# Obtener planes
curl http://localhost:3000/plans

# Ver promociones
curl http://localhost:3000/promotions
```

#### Operaciones Protegidas

```bash
# Crear servicio (requiere token)
curl -X POST http://localhost:3000/services \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer {TOKEN}" \
  -d '{"name":"Lavado Express","price":20,"description":"Lavado rápido"}'
```

### 10.3 Validación de Seguridad

✅ **Prueba 1:** Intentar acceder a endpoint protegido sin token
```bash
curl -X POST http://localhost:3000/services \
  -H "Content-Type: application/json" \
  -d '{"name":"Test"}'
# Resultado esperado: 401 Unauthorized
```

✅ **Prueba 2:** Intentar con token inválido
```bash
curl -X POST http://localhost:3000/services \
  -H "Authorization: Bearer token-invalido"
# Resultado esperado: 401 Unauthorized
```

✅ **Prueba 3:** Validación de datos
```bash
curl -X POST http://localhost:3000/services \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer {TOKEN}" \
  -d '{"name":"Test","price":"no-es-numero"}'
# Resultado esperado: 400 Bad Request
```

---

## 11. Mantenimiento y Escalabilidad

### 11.1 Monitoreo

El sistema debe monitorearse en:

- **Rendimiento de API:** Tiempos de respuesta
- **Base de datos:** Lecturas/escrituras en Firestore
- **Errores:** Logs de excepciones
- **Autenticación:** Intentos fallidos de login

### 11.2 Respaldos

**Firebase Firestore** proporciona:
- Backup automático diario
- Exportaciones programadas
- Punto de restauración

**Recomendación:** Configurar exports semanales a Cloud Storage

### 11.3 Escalabilidad

El sistema está diseñado para escalar:

#### Escalabilidad Horizontal
- Deploy de múltiples instancias detrás de un load balancer
- Firebase Firestore escala automáticamente

#### Escalabilidad Vertical
- Aumentar recursos de la instancia del servidor
- Optimización de queries a Firestore

#### Optimizaciones Futuras

1. **Caché con Redis:** Reducir lecturas a Firestore
2. **CDN para imágenes:** Migrar de Base64 a Cloud Storage + CDN
3. **Paginación:** Implementar límites en listados grandes
4. **Índices Firestore:** Para queries complejas
5. **Rate Limiting:** Prevenir abuso de API

### 11.4 Roadmap de Mejoras

| Prioridad | Mejora | Estimación |
|-----------|--------|------------|
| Alta | Migrar imágenes a Cloud Storage | 2 semanas |
| Alta | Implementar paginación | 1 semana |
| Media | Sistema de notificaciones email | 2 semanas |
| Media | Dashboard de administración | 4 semanas |
| Baja | Reportes y estadísticas | 3 semanas |
| Baja | Integración con pasarelas de pago | 4 semanas |

---

## 12. Anexos

### Anexo A: Estructura Completa del Proyecto

```
autoLavado/
├── backend/
│   ├── src/
│   │   ├── app.module.ts
│   │   ├── main.ts
│   │   ├── common/
│   │   │   ├── firebase/
│   │   │   │   ├── firebase.module.ts
│   │   │   │   └── firebase.service.ts
│   │   │   └── guards/
│   │   │       └── jwt-auth.guard.ts
│   │   └── modules/
│   │       ├── auth/
│   │       │   ├── auth.controller.ts
│   │       │   ├── auth.module.ts
│   │       │   ├── auth.service.ts
│   │       │   └── dto/
│   │       │       └── auth.dto.ts
│   │       ├── hero/
│   │       │   ├── hero.controller.ts
│   │       │   ├── hero.module.ts
│   │       │   ├── hero.service.ts
│   │       │   └── dto/
│   │       │       └── update-hero.dto.ts
│   │       ├── carousel/
│   │       │   ├── carousel.controller.ts
│   │       │   ├── carousel.module.ts
│   │       │   ├── carousel.service.ts
│   │       │   └── dto/
│   │       │       └── carousel.dto.ts
│   │       ├── services/
│   │       │   ├── services.controller.ts
│   │       │   ├── services.module.ts
│   │       │   ├── services.service.ts
│   │       │   └── dto/
│   │       │       └── services.dto.ts
│   │       ├── plans/
│   │       │   ├── plans.controller.ts
│   │       │   ├── plans.module.ts
│   │       │   ├── plans.service.ts
│   │       │   └── dto/
│   │       │       └── plan.dto.ts
│   │       ├── promotions/
│   │       │   ├── promotions.controller.ts
│   │       │   ├── promotions.module.ts
│   │       │   ├── promotions.service.ts
│   │       │   └── dto/
│   │       │       └── promotions.dto.ts
│   │       └── contact/
│   │           ├── contact.controller.ts
│   │           ├── contact.module.ts
│   │           ├── contact.service.ts
│   │           └── dto/
│   │               ├── contact.dto.ts
│   │               └── booking.dto.ts
│   ├── dist/                      # Compilado (no versionado)
│   ├── node_modules/              # Dependencias (no versionado)
│   ├── .env                       # Variables de entorno (no versionado)
│   ├── .gitignore
│   ├── .prettierrc
│   ├── eslint.config.mjs
│   ├── nest-cli.json
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   ├── tsconfig.build.json
│   ├── README.md
│   └── API_DOCUMENTATION.md
├── .gitignore
└── README.md
```

### Anexo B: Scripts NPM Disponibles

```json
{
  "scripts": {
    "build": "nest build",
    "start": "node dist/main.js",
    "start:dev": "nest start --watch",
    "lint": "eslint 'src/**/*.ts'"
  }
}
```

### Anexo C: Dependencias del Proyecto

#### Dependencias de Producción

```json
{
  "@nestjs/common": "^11.1.9",
  "@nestjs/config": "^4.0.2",
  "@nestjs/core": "^11.1.9",
  "@nestjs/passport": "^11.0.5",
  "@nestjs/platform-express": "^11.1.9",
  "bcryptjs": "^3.0.3",
  "class-transformer": "^0.5.1",
  "class-validator": "^0.14.3",
  "firebase-admin": "^13.6.0",
  "jsonwebtoken": "^9.0.3",
  "passport": "^0.7.0",
  "passport-jwt": "^4.0.1",
  "reflect-metadata": "^0.2.2",
  "rxjs": "^7.8.2"
}
```

#### Dependencias de Desarrollo

```json
{
  "@nestjs/cli": "^11.0.14",
  "@nestjs/schematics": "^11.0.9",
  "@nestjs/testing": "^11.1.9",
  "@types/bcryptjs": "^2.4.6",
  "@types/jsonwebtoken": "^9.0.10",
  "@types/node": "^25.0.1",
  "@types/passport-jwt": "^4.0.1",
  "eslint": "^9.39.1",
  "eslint-config-prettier": "^10.1.8",
  "prettier": "^3.7.4",
  "ts-node": "^10.9.2",
  "typescript": "^5.9.3"
}
```

### Anexo D: Códigos de Error

| Código | Descripción | Causa Común |
|--------|-------------|-------------|
| 400 | Bad Request | Datos de entrada inválidos |
| 401 | Unauthorized | Token ausente o inválido |
| 404 | Not Found | Recurso no existe |
| 500 | Internal Server Error | Error en el servidor |

### Anexo E: Contacto y Soporte

**Repositorio:** https://github.com/Axel-MR/optimus-auto-lavado.git  
**Documentación API:** `backend/API_DOCUMENTATION.md`

---

## Conclusiones

El sistema **AutoLavado Premium** representa una solución completa y escalable para la gestión de un negocio de autolavado. Implementa las mejores prácticas de desarrollo backend moderno, incluyendo:

✅ Arquitectura modular y mantenible  
✅ Seguridad robusta con JWT  
✅ Validación exhaustiva de datos  
✅ Base de datos en tiempo real  
✅ API RESTful bien documentada  
✅ Código limpio y tipado con TypeScript  

El proyecto está listo para ser consumido por aplicaciones frontend (web o móvil) y puede ser desplegado en múltiples plataformas cloud con configuración mínima.

---

**Fecha de última actualización:** 12 de Diciembre, 2025  
**Versión del documento:** 1.0.0
