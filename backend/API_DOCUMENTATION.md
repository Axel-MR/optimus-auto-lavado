# 🚗 AutoLavado - Documentación API Backend

## 📋 Tabla de Contenidos
- [Información General](#información-general)
- [Autenticación](#autenticación)
- [Endpoints](#endpoints)
  - [Auth](#auth)
  - [Hero Section](#hero-section)
  - [Carousel](#carousel)
  - [Services](#services)
  - [Plans](#plans)
  - [Promotions](#promotions)
  - [Contact](#contact)
- [Modelos de Datos](#modelos-de-datos)
- [Códigos de Estado](#códigos-de-estado)
- [Ejemplos de Uso](#ejemplos-de-uso)

---

## 📌 Información General

**Base URL:** `http://localhost:3000`

**Tecnologías:**
- NestJS v11
- Firebase Firestore
- JWT Authentication
- TypeScript

**Formato de respuesta:** JSON

**Autenticación:** Bearer Token (JWT) para endpoints protegidos

---

## 🔐 Autenticación

### Credenciales Admin
```
Email: admin@autolavado.com
Password: Admin123!
```

### Login
**POST** `/auth/login`

**Body:**
```json
{
  "email": "admin@autolavado.com",
  "password": "Admin123!"
}
```

**Respuesta:**
```json
{
  "id": "JJUMMQCbquKVyKRRBt9y",
  "email": "admin@autolavado.com",
  "displayName": "Administrador",
  "role": "admin",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Registro (Protegido)
**POST** `/auth/register`

**Headers:**
```
Authorization: Bearer {token}
```

**Body:**
```json
{
  "email": "nuevo@ejemplo.com",
  "password": "Password123!",
  "displayName": "Nombre Usuario",
  "role": "user"
}
```

---

## 🎯 Endpoints

### Hero Section

La sección Hero es un singleton (un solo documento) que representa la sección principal del sitio.

#### Obtener Hero
**GET** `/hero`

**Público** ✅

**Respuesta:**
```json
{
  "heading": "TU AUTO MERECE LO MEJOR",
  "title": "AutoLavado Premium - El Mejor Servicio",
  "description": "Cuidamos tu vehículo con productos de alta calidad y tecnología de punta. Agenda tu cita hoy y experimenta el mejor servicio de lavado profesional.",
  "imageBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRg...",
  "updatedAt": "2025-12-12T02:55:29.539Z"
}
```

#### Actualizar Hero
**PATCH** `/hero`

**Protegido** 🔒

**Headers:**
```
Authorization: Bearer {token}
Content-Type: application/json
```

**Body:** (todos los campos son opcionales)
```json
{
  "heading": "NUEVO ENCABEZADO",
  "title": "Nuevo Título",
  "description": "Nueva descripción",
  "imageBase64": "data:image/jpeg;base64,..."
}
```

---

### Carousel

Slides del carrusel principal ordenados por el campo `order`.

#### Listar Slides
**GET** `/carousel`

**Público** ✅

**Respuesta:**
```json
[
  {
    "id": "e8999560-a453-4eba-b170-318e01489f3a",
    "heading": "BIENVENIDO A",
    "title": "AutoLavado Premium",
    "description": "Servicio profesional de autolavado con tecnología de punta y productos premium",
    "imageBase64": "data:image/jpeg;base64,/9j/4AAQ...",
    "order": 1,
    "createdAt": "2025-12-12T02:44:15.682Z",
    "updatedAt": "2025-12-12T02:46:21.896Z"
  }
]
```

#### Obtener Slide por ID
**GET** `/carousel/:id`

**Público** ✅

#### Crear Slide
**POST** `/carousel`

**Protegido** 🔒

**Body:**
```json
{
  "heading": "PROMOCIONES ESPECIALES",
  "title": "Descuentos de hasta 100%",
  "description": "Promociones exclusivas cada día de la semana",
  "imageBase64": "data:image/jpeg;base64,iVBORw0KGgo...",
  "order": 2
}
```

**Campos opcionales:** `heading`, `description`, `order`

**Campos requeridos:** `title`, `imageBase64`

#### Actualizar Slide
**PATCH** `/carousel/:id`

**Protegido** 🔒

**Body:** (todos los campos son opcionales)
```json
{
  "title": "Nuevo título",
  "description": "Nueva descripción",
  "order": 3
}
```

#### Eliminar Slide
**DELETE** `/carousel/:id`

**Protegido** 🔒

---

### Services

Servicios de autolavado disponibles.

#### Listar Servicios
**GET** `/services`

**Público** ✅

**Respuesta:**
```json
[
  {
    "id": "c43c78e8-970c-488a-847d-f48b77cf1a06",
    "name": "Lavado Exterior",
    "description": "Lavado completo de la carrocería con productos premium",
    "price": 25,
    "imageBase64": "data:image/jpeg;base64,/9j/4AAQ...",
    "createdAt": "2025-12-11T23:15:42.123Z"
  }
]
```

#### Obtener Servicio por ID
**GET** `/services/:id`

**Público** ✅

#### Crear Servicio
**POST** `/services`

**Protegido** 🔒

**Body:**
```json
{
  "name": "Lavado Interior",
  "description": "Aspirado profundo y limpieza de interiores",
  "price": 30,
  "imageBase64": "data:image/jpeg;base64,..."
}
```

**Campos opcionales:** `description`, `imageBase64`

**Campos requeridos:** `name`, `price`

#### Actualizar Servicio
**PATCH** `/services/:id`

**Protegido** 🔒

#### Eliminar Servicio
**DELETE** `/services/:id`

**Protegido** 🔒

---

### Plans

Planes de suscripción mensuales.

#### Listar Planes
**GET** `/plans`

**Público** ✅

**Respuesta:**
```json
[
  {
    "id": "4a6382c9-3812-41c5-8aa8-2a7efc706609",
    "title": "Basic",
    "subtitle": "Lavado exterior rápido con espuma activa y secado sin rayas.",
    "price": 149,
    "priceInterval": "mo",
    "description": "Plan básico perfecto para mantenimiento regular",
    "features": [
      "Espuma activa",
      "Llantas y rines",
      "Secado sin rayas",
      "crfdcxf"
    ],
    "badge": null,
    "icon": "💧",
    "isHighlighted": false,
    "buttonText": "Get Started",
    "createdAt": "2025-12-12T02:44:15.682Z",
    "updatedAt": "2025-12-12T02:46:21.896Z"
  },
  {
    "id": "6eafa4d6-371f-4d5b-9320-09fd36bc6c2a",
    "title": "Premium",
    "subtitle": "Lavado completo interior/exterior con cera sintética protectora.",
    "price": 299,
    "priceInterval": "mo",
    "features": [
      "Aspirado profundo",
      "Limpieza de plásticos y tapetes",
      "Cera sintética 30 días",
      "edfcerfc"
    ],
    "badge": "MOST POPULAR",
    "isHighlighted": true,
    "buttonText": "Get Efficient Plan",
    "createdAt": "2025-12-12T02:45:52.772Z",
    "updatedAt": "2025-12-12T02:45:52.772Z"
  }
]
```

#### Obtener Plan por ID
**GET** `/plans/:id`

**Público** ✅

#### Crear Plan
**POST** `/plans`

**Protegido** 🔒

**Body:**
```json
{
  "title": "Elite",
  "subtitle": "Detallado integral con encerado premium y sellador UV.",
  "price": 549,
  "priceInterval": "mo",
  "features": [
    "Descontaminación rápida",
    "Cera carnauba premium",
    "Protección UV 60 días",
    "edfcerfc"
  ],
  "icon": "💎",
  "buttonText": "Get Started",
  "isHighlighted": false
}
```

**Campos opcionales:** `subtitle`, `priceInterval`, `description`, `features`, `badge`, `icon`, `isHighlighted`, `buttonText`

**Campos requeridos:** `title`, `price`

#### Actualizar Plan
**PATCH** `/plans/:id`

**Protegido** 🔒

#### Eliminar Plan
**DELETE** `/plans/:id`

**Protegido** 🔒

---

### Promotions

Promociones diarias con descuentos.

#### Listar Promociones
**GET** `/promotions`

**Público** ✅

**Respuesta:**
```json
[
  {
    "id": "f5f92f22-2f6a-4b5d-be7f-44f4c8fb7a6b",
    "title": "Promo Lunes",
    "description": "",
    "discountPercentage": 100,
    "createdAt": "2025-12-12T02:37:10.261Z"
  },
  {
    "id": "9fa8006a-7e98-46f3-902d-5d5256bed7fa",
    "title": "Promo Martes",
    "description": "Descuento especial del 10%",
    "discountPercentage": 10,
    "createdAt": "2025-12-12T02:37:20.676Z"
  }
]
```

#### Obtener Promoción por ID
**GET** `/promotions/:id`

**Público** ✅

#### Crear Promoción
**POST** `/promotions`

**Protegido** 🔒

**Body:**
```json
{
  "title": "Promo Miércoles",
  "description": "Descuento especial del 20%",
  "discountPercentage": 20
}
```

**Campos opcionales:** `description`

**Campos requeridos:** `title`, `discountPercentage`

#### Actualizar Promoción
**PATCH** `/promotions/:id`

**Protegido** 🔒

#### Eliminar Promoción
**DELETE** `/promotions/:id`

**Protegido** 🔒

---

### Contact

Formularios de contacto y reservas de citas.

#### Enviar Formulario de Contacto
**POST** `/contact`

**Público** ✅

**Body:**
```json
{
  "name": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "phone": "+52 123 456 7890",
  "message": "Me gustaría agendar una cita"
}
```

#### Crear Reserva de Cita
**POST** `/contact/booking`

**Público** ✅

**Body:**
```json
{
  "name": "María López",
  "email": "maria@ejemplo.com",
  "phone": "+52 987 654 3210",
  "serviceIds": ["c43c78e8-970c-488a-847d-f48b77cf1a06"],
  "preferredDate": "2025-12-20",
  "preferredTime": "10:00"
}
```

#### Listar Envíos de Contacto
**GET** `/contact/submissions`

**Público** ✅

#### Listar Reservas
**GET** `/contact/bookings`

**Público** ✅

#### Actualizar Estado de Reserva
**PATCH** `/contact/booking/:id/status`

**Protegido** 🔒

**Body:**
```json
{
  "status": "confirmed"
}
```

Valores válidos: `pending`, `confirmed`, `cancelled`, `completed`

#### Actualizar WhatsApp
**PATCH** `/contact/whatsapp`

**Protegido** 🔒

**Body:**
```json
{
  "whatsappNumber": "+52 123 456 7890"
}
```

#### Obtener WhatsApp
**GET** `/contact/whatsapp`

**Público** ✅

---

## 📊 Modelos de Datos

### Hero
```typescript
{
  heading: string;        // Encabezado superior
  title: string;          // Título principal
  description: string;    // Descripción
  imageBase64: string;    // Imagen en Base64
  updatedAt: string;      // ISO timestamp
}
```

### Carousel Item
```typescript
{
  id: string;             // UUID
  heading: string;        // Encabezado opcional
  title: string;          // Título del slide
  description: string;    // Descripción
  imageBase64: string;    // Imagen en Base64
  order: number;          // Orden de aparición
  createdAt: string;      // ISO timestamp
  updatedAt: string;      // ISO timestamp
}
```

### Service
```typescript
{
  id: string;             // UUID
  name: string;           // Nombre del servicio
  description: string;    // Descripción
  price: number;          // Precio
  imageBase64: string;    // Imagen en Base64
  createdAt: string;      // ISO timestamp
}
```

### Plan
```typescript
{
  id: string;             // UUID
  title: string;          // Nombre del plan
  subtitle: string;       // Subtítulo
  price: number;          // Precio
  priceInterval: string;  // "mo", "year"
  description: string;    // Descripción
  features: string[];     // Array de características
  badge: string | null;   // "MOST POPULAR", etc.
  icon: string | null;    // Emoji o icono
  isHighlighted: boolean; // Si es destacado
  buttonText: string;     // Texto del botón
  createdAt: string;      // ISO timestamp
  updatedAt: string;      // ISO timestamp
}
```

### Promotion
```typescript
{
  id: string;             // UUID
  title: string;          // Título de la promoción
  description: string;    // Descripción
  discountPercentage: number; // 0-100
  createdAt: string;      // ISO timestamp
}
```

### Contact Submission
```typescript
{
  id: string;             // UUID
  name: string;           // Nombre
  email: string;          // Email
  phone: string;          // Teléfono
  message: string;        // Mensaje
  createdAt: string;      // ISO timestamp
}
```

### Booking
```typescript
{
  id: string;             // UUID
  name: string;           // Nombre
  email: string;          // Email
  phone: string;          // Teléfono
  serviceIds: string[];   // IDs de servicios
  preferredDate: string;  // Fecha preferida
  preferredTime: string;  // Hora preferida
  status: string;         // pending | confirmed | cancelled | completed
  createdAt: string;      // ISO timestamp
}
```

---

## 📡 Códigos de Estado

| Código | Significado |
|--------|-------------|
| 200 | OK - Petición exitosa |
| 201 | Created - Recurso creado exitosamente |
| 400 | Bad Request - Datos inválidos |
| 401 | Unauthorized - Token inválido o faltante |
| 404 | Not Found - Recurso no encontrado |
| 500 | Internal Server Error - Error del servidor |

---

## 💡 Ejemplos de Uso

### Ejemplo 1: Obtener y mostrar Hero Section

```javascript
// Frontend - Fetch Hero
async function loadHero() {
  const response = await fetch('http://localhost:3000/hero');
  const hero = await response.json();
  
  document.querySelector('.hero-heading').textContent = hero.heading;
  document.querySelector('.hero-title').textContent = hero.title;
  document.querySelector('.hero-description').textContent = hero.description;
  document.querySelector('.hero-image').src = hero.imageBase64;
}
```

### Ejemplo 2: Listar Planes de Suscripción

```javascript
// Frontend - Fetch Plans
async function loadPlans() {
  const response = await fetch('http://localhost:3000/plans');
  const plans = await response.json();
  
  plans.forEach(plan => {
    console.log(`${plan.title}: $${plan.price}/${plan.priceInterval}`);
    console.log(`Badge: ${plan.badge}`);
    console.log(`Features: ${plan.features.join(', ')}`);
  });
}
```

### Ejemplo 3: Crear Reserva

```javascript
// Frontend - Create Booking
async function createBooking(bookingData) {
  const response = await fetch('http://localhost:3000/contact/booking', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: bookingData.name,
      email: bookingData.email,
      phone: bookingData.phone,
      serviceIds: bookingData.serviceIds,
      preferredDate: bookingData.date,
      preferredTime: bookingData.time
    })
  });
  
  const result = await response.json();
  return result;
}
```

### Ejemplo 4: Login y Actualizar Hero (Admin)

```javascript
// Frontend - Admin Login & Update Hero
async function updateHeroAsAdmin(newData) {
  // 1. Login
  const loginResponse = await fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: 'admin@autolavado.com',
      password: 'Admin123!'
    })
  });
  
  const { token } = await loginResponse.json();
  
  // 2. Update Hero
  const updateResponse = await fetch('http://localhost:3000/hero', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(newData)
  });
  
  const updatedHero = await updateResponse.json();
  return updatedHero;
}
```

### Ejemplo 5: Cargar Carousel Ordenado

```javascript
// Frontend - Load Carousel Slides
async function loadCarousel() {
  const response = await fetch('http://localhost:3000/carousel');
  const slides = await response.json();
  
  // Los slides ya vienen ordenados por el campo 'order'
  const carouselContainer = document.querySelector('.carousel');
  
  slides.forEach(slide => {
    const slideElement = document.createElement('div');
    slideElement.className = 'carousel-slide';
    slideElement.innerHTML = `
      <img src="${slide.imageBase64}" alt="${slide.title}">
      <h3>${slide.heading}</h3>
      <h2>${slide.title}</h2>
      <p>${slide.description}</p>
    `;
    carouselContainer.appendChild(slideElement);
  });
}
```

---

## 🔧 Notas Técnicas

### Imágenes Base64
Todas las imágenes se almacenan en formato Base64 directamente en Firestore. El formato debe ser:

```
data:image/jpeg;base64,/9j/4AAQSkZJRg...
data:image/png;base64,iVBORw0KGgoAAAANSU...
```

### CORS
Si el frontend corre en un dominio diferente, asegúrate de configurar CORS en el backend.

### Rate Limiting
Actualmente no hay rate limiting implementado. Considera agregarlo en producción.

### Variables de Entorno
El backend usa las siguientes variables (archivo `.env`):

```env
FIREBASE_PROJECT_ID=tu-proyecto
FIREBASE_CLIENT_EMAIL=firebase-adminsdk@...
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."
JWT_SECRET=tu-secret-key
WHATSAPP_NUMBER=+52 123 456 7890
PORT=3000
```

---

## 📦 Datos Preconfigurados

El backend ya incluye:

- ✅ **1 Usuario Admin**
- ✅ **5 Servicios** de autolavado
- ✅ **7 Promociones** (una por día de la semana)
- ✅ **3 Planes** de suscripción (Basic, Premium, Elite)
- ✅ **3 Slides** en el carrusel
- ✅ **1 Hero Section** configurada

---

## 🚀 Inicio Rápido

1. **Iniciar el servidor:**
   ```bash
   cd backend
   npm run start:dev
   ```

2. **Verificar que está corriendo:**
   ```bash
   curl http://localhost:3000/hero
   ```

3. **Obtener token de admin:**
   ```bash
   curl -X POST http://localhost:3000/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email":"admin@autolavado.com","password":"Admin123!"}'
   ```

---

## 📞 Soporte

Para dudas o problemas, contacta al equipo de backend.

**Última actualización:** 12 de Diciembre, 2025
