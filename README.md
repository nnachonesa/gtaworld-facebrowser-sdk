# 📦 GTA World FaceBrowser

Por favor, ante cualquier inconveniente con la libreria, puede crear un [issue](https://github.com/nnachonesa/gtaworld-facebrowser-sdk/issues).

> [!NOTE]
> **Breaking change v2.0.3:** `pageId`/`postId` (q eran camelCase) ahora son `page_id`/`post_id` (snake_case), los mismos aplican a `posts.list`, `posts.get`, `posts.edit`, `posts.delete`, `comments.get` y `comments.post` para alinearse con la API. `comments.post` ahora envía `content` en el body JSON.
> Para `HttpClient`, la `baseUrl` debe terminar en `/` (se normaliza automáticamente)


## Caracteristicas

- 📦 Totalmente tipado con TypeScript
- 📝 Crear, editar y eliminar publicaciones
- 💬 Leer y crear comentarios
- 📄 Obtener las páginas del usuario
- 📩 Conversaciones de la pagina.

---

# Primeros pasos

```ts
import { FaceClient } from "gtaworld-fb";

const client = new FaceClient("TU_API_KEY"); // existe un segundo parametro que es la url_base, en cambio de que cambie en un futuro la misma se podra cambiar
```
> [!IMPORTANT]
> Para utilizar la SDK con el FaceBrowser del ingles, se debe de cambiar la URL a "https://face.gta.world/api/v1/page-api/"
```ts
// Quedaria:
import { FaceClient } from "gtaworld-fb";

const client = new FaceClient("API_KEY", "https://face.gta.world/api/v1/")
```

# ¿Qué es un `page_id`?

Una de las dudas más comunes es el uso del **`page_id`**.

A diferencia de otras redes sociales, FaceBrowser no permite publicar utilizando directamente tu perfil personal.

Todas las publicaciones, comentarios y acciones realizadas mediante la API deben hacerse desde una Página (Page). 

Cada vez que crees una publicación, edites un post o escribas un comentario deberás indicar el **`page_id`** de la página desde la cual querés realizar esa acción.

Ejemplo:

```ts
await client.posts.create({
    page_id: 6023,
    content: "Hola"
});
```

Si no conocés el ID de tus páginas, podés obtenerlas mediante:

```ts
const pages = await client.pages.mine();
```

---

# Pages

## Obtener mis páginas

Devuelve todas las páginas administradas por el usuario autenticado.

```ts
const pages = await client.pages.mine();
```

---

# Posts

## Obtener publicaciones

Obtiene las publicaciones pertenecientes a una página.

```ts
const posts = await client.posts.list({
    page_id: 6023
});
```

La API utiliza paginación mediante cursores.

```ts
const siguiente = await client.posts.list({
    page_id: 6023,
    cursor: posts.meta.next_cursor
});
```

---

## Obtener una publicación

```ts
const post = await client.posts.get({
    page_id: 6023,
    post_id: 150
});
```

---

## Crear una publicación

```ts
await client.posts.create({
    page_id: 6023,
    content: "Hola"
});
```

---

## Editar una publicación

```ts
await client.posts.edit({
    post_id: 150,
    page_id: 6023,
    content: "Contenido actualizado."
});
```

---

## Eliminar una publicación

```ts
await client.posts.delete({
    post_id: 150,
    page_id: 6023
});
```

---

# Comentarios

## Obtener comentarios

Obtiene todos los comentarios de una publicación.

```ts
const comments = await client.comments.get({
    post_id: 150,
    page_id: 6023
});
```

---

## Crear un comentario

```ts
await client.comments.post({
    post_id: 150,
    page_id: 6023,
    content: "excelente publicacion"
});
```
---

# Conversaciones
## Obtener conversaciones

Obtiene todos los chats de la pagina.

```ts
const comments = await client.dm.list({
    page_id: 6023
});
```

---

## Obtener los mensajes de una conversacion

```ts
await client.dm.getMessagesFromDM({
    conversationId: 3947,
    page_id: 6023,
});
```
---

# Referencia de la API

## Pages

| Método | Descripción |
|---------|-------------|
| `pages.mine()` | Obtiene todas las páginas administradas por el usuario autenticado. |

---

## Posts

| Método | Descripción |
|---------|-------------|
| `posts.list()` | Lista las publicaciones de una página. |
| `posts.get()` | Obtiene una publicación por su ID. |
| `posts.create()` | Crea una nueva publicación. |
| `posts.edit()` | Edita una publicación existente. |
| `posts.delete()` | Elimina una publicación. |

---

## Comentarios

| Método | Descripción |
|---------|-------------|
| `comments.get()` | Obtiene los comentarios de una publicación. |
| `comments.post()` | Publica un nuevo comentario. |

---

## Conversaciones

| Método | Descripción |
|---------|-------------|
| `dm.list()` | Obtiene los chats de una pagina. |
| `dm.getMessagesFromDM()` | Obtiene las conversaciones de un chat. |

---

# Ejemplo completo

```ts
import { FaceClient } from "gtaworld-fb";

const client = new FaceClient(process.env.FACE_API_KEY!);

const pages = await client.pages.mine();

const page = pages.pages[0];

const post = await client.posts.create({
    page_id: page.id,
    content: "Hola"
});

await client.comments.post({
    page_id: page.id,
    post_id: post.post.id,
    content: "Primer comentario."
});
```

---

## Manejo de errores

```ts
try {
    const posts = await client.posts.list({ page_id: 6023 });
} catch (error) {
    if (error instanceof Error) {
        // 401: API key inválida, 404: no encontrado, 429: rate limit
        console.error(error.message);
    }
}
```