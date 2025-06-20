# Indicaciones para la Creación de un Portafolio Web

Una lista de verificación integral y orientada a desarrolladores para construir un portafolio moderno, animado y responsivo usando HTML, CSS, JavaScript, Bootstrap 5.3 y Animate.css.

---

## 1. Planificación

1. Define el objetivo principal de tu portafolio (por ejemplo, búsqueda de empleo, freelance, marca personal).
2. Identifica tu público objetivo (reclutadores, clientes, colaboradores).
3. Enumera todas las secciones requeridas: Inicio, Proyectos, Contacto (mínimo).
4. Decide si agregarás secciones adicionales (Sobre mí, Blog, Habilidades, Testimonios).
5. Reúne todos los detalles de tus proyectos: títulos, descripciones, tecnologías, imágenes, enlaces.
6. Escribe una biografía personal concisa para la sección de Inicio.
7. Recopila todos los enlaces de redes sociales y contacto.
8. Elige una paleta de colores principal para un tema oscuro.
9. Selecciona 2–3 colores de acento para resaltar y botones.
10. Decide una combinación de fuentes (se recomienda Google Fonts).
11. Investiga 3–5 portafolios modernos para inspirarte.
12. Enumera todas las funcionalidades requeridas (diseño responsivo, animaciones, formulario de contacto).
13. Planifica la estructura de navegación y el flujo de usuario.
14. Haz wireframes para cada página/sección.
15. Decide los formatos de imagen (JPG, PNG, SVG, WebP).
16. Enumera todas las librerías externas y CDNs a utilizar.
17. Planifica la estructura de carpetas para assets, CSS, JS e imágenes.
18. Define fechas límite y hitos del proyecto.
19. Elige un favicon e imagen para compartir en redes sociales.
20. Decide la plataforma de despliegue (GitHub Pages, Netlify, Vercel).
21. Crea una paleta de colores para fondos, texto y acentos.
22. Selecciona e importa Google Fonts en tu maqueta de diseño.
23. Diseña una barra de navegación fija y responsiva con enlaces a secciones.
24. Diseña una sección de héroe con tu nombre, título y una introducción animada.
25. Diseña tarjetas de proyecto con imagen, título, tecnologías, descripción y botones.
26. Diseña un layout de grid responsivo para la sección de Proyectos.
27. Diseña un formulario de contacto con campos de nombre, email y mensaje.
28. Diseña un pie de página con iconos de redes sociales y derechos de autor.
29. Planifica los estados hover y focus para todos los elementos interactivos.
30. Elige efectos de Animate.css para héroe, tarjetas y revelado de secciones.
31. Diseña los puntos de quiebre para móvil, tablet y escritorio en todas las secciones.
32. Crea maquetas en tema oscuro para todas las páginas.
33. Diseña estilos de botones para acciones primarias y secundarias.
34. Planifica el sistema de espaciado, padding y márgenes para consistencia.
35. Diseña divisores o separadores de sección.
36. Elige sets de iconos (por ejemplo, Font Awesome, Bootstrap Icons).
37. Diseña los estados de error y éxito para el formulario de contacto.
38. Planifica la accesibilidad: contraste de color, tamaño de fuente, etiquetas ARIA.
39. Crea una guía de estilos para colores, fuentes y componentes.
40. Exporta todas las imágenes e iconos en resolución 2x para pantallas retina.

---

## 2. Diseño

41. Crea la estructura de carpetas del proyecto:
    ```
    /portafolio
      /assets
        /images
        /css
        /js
      index.html
      projects.html
      contact.html
    ```
42. Inicializa un repositorio Git y crea un archivo `.gitignore`.
43. Crea los archivos `index.html`, `projects.html` y `contact.html`.
44. Agrega el CDN de Bootstrap 5.3 en el `<head>` de cada archivo HTML:
    ```html
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    ```
45. Agrega el CDN de Animate.css en el `<head>`:
    ```html
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    ```
46. Importa Google Fonts en la etiqueta `<head>`.
47. Agrega un archivo CSS personalizado (`/assets/css/style.css`) y enlázalo en todos los HTML.
48. Agrega un archivo JS personalizado (`/assets/js/main.js`) y enlázalo antes de `</body>`.
49. Implementa una barra de navegación fija de Bootstrap con fondo oscuro.
50. Agrega desplazamiento suave a los enlaces de la barra de navegación.
51. Construye la sección de héroe con texto animado usando Animate.css.
52. Agrega un botón de llamada a la acción en la sección de héroe.
53. Crea la sección de Proyectos responsiva usando el grid de Bootstrap.
54. Para cada proyecto, crea una tarjeta con imagen, título, tecnologías, descripción y botones.
55. Agrega badges para las tecnologías en cada tarjeta de proyecto.
56. Añade clases de Animate.css a las tarjetas de proyecto para animaciones de entrada.
57. Implementa un modal o lightbox para previsualizar imágenes de proyectos (opcional).
58. Agrega una función de filtro o ordenamiento para proyectos usando JavaScript (opcional).
59. Crea una sección de Contacto responsiva con controles de formulario de Bootstrap.
60. Agrega validación del formulario en el cliente usando JavaScript.
61. Muestra mensajes de error y éxito en el formulario de contacto.
62. Agrega un pie de página con iconos de redes sociales usando Font Awesome o Bootstrap Icons.
63. Haz que el pie de página sea sticky en páginas cortas.
64. Agrega un favicon al sitio.
65. Agrega meta tags para SEO y redes sociales en el `<head>`.
66. Agrega un botón de volver arriba con animación suave.
67. Implementa animaciones de revelado de secciones al hacer scroll usando Animate.css.
68. Agrega efectos hover y focus a todos los botones y enlaces.
69. Usa utilidades de Bootstrap para espaciado y alineación.
70. Escribe CSS personalizado para sobrescribir Bootstrap y mantener la coherencia del tema oscuro.
71. Usa variables CSS para colores y fuentes en tu hoja de estilos personalizada.
72. Optimiza todas las imágenes a ≤ 200KB usando TinyPNG o similar.
73. Usa `srcset` para imágenes responsivas en las tarjetas de proyecto.
74. Agrega carga diferida (lazy loading) a todas las imágenes:
    ```html
    <img src="..." loading="lazy" ...>
    ```
75. Minimiza los archivos CSS y JS para producción.
76. Agrega etiquetas ARIA y roles para accesibilidad.
77. Prueba la navegación por teclado en todos los elementos interactivos.
78. Agrega un spinner o animación de carga para conexiones lentas (opcional).
79. Implementa una página 404.html para enlaces rotos.
80. Agrega Google Analytics u otra herramienta de analítica (opcional).

---

## 3. Desarrollo

81. Prueba todos los puntos de quiebre: móvil, tablet, escritorio.
82. Valida el HTML usando el validador W3C.
83. Valida el CSS usando el validador W3C.
84. Prueba todos los enlaces de navegación para asegurar el enrutamiento correcto.
85. Prueba el colapso y expansión de la barra de navegación en móvil.
86. Prueba todos los efectos de Animate.css para asegurar que se disparan correctamente.
87. Prueba los botones de las tarjetas de proyecto (demo, código fuente) para asegurar los enlaces.
88. Prueba la validación y envío del formulario de contacto.
89. Prueba los mensajes de error y éxito en el formulario de contacto.
90. Prueba todos los enlaces de redes sociales en el pie de página.
91. Prueba la funcionalidad del botón de volver arriba.
92. Prueba las animaciones de revelado de secciones al hacer scroll.
93. Prueba el modal/lightbox para imágenes de proyectos (si se implementó).
94. Prueba la accesibilidad: contraste de color, tamaño de fuente, ARIA, navegación por teclado.
95. Prueba el sitio en Chrome, Firefox, Edge y Safari.
96. Prueba el sitio en dispositivos iOS y Android.
97. Prueba el sitio con JavaScript deshabilitado (funcionalidad básica).
98. Prueba el sitio con red lenta (acelera en herramientas de desarrollo).
99. Revisa la consola en busca de errores y soluciona cualquier problema.
100. Audita el rendimiento del sitio usando Lighthouse.
101. Audita la accesibilidad del sitio usando Lighthouse.
102. Audita buenas prácticas y SEO usando Lighthouse.
103. Revisa enlaces e imágenes rotas.
104. Prueba el favicon y meta tags en todas las páginas.
105. Prueba la página 404 visitando una URL inexistente.

---

## 4. Pruebas

106. Elimina CSS y JS no utilizados.
107. Minimiza todos los archivos CSS y JS.
108. Revisa todos los tamaños de imagen y comprime más si es necesario.
109. Actualiza todas las meta tags para producción (título, descripción, og:image, etc.).
110. Configura un dominio personalizado (opcional).
111. Sube el código a GitHub u otro repositorio elegido.
112. Configura el despliegue en GitHub Pages, Netlify o Vercel.
113. Configura los ajustes de build para tu plataforma de despliegue.
114. Despliega el sitio y verifica la URL en vivo.
115. Prueba el sitio en vivo en todos los dispositivos y navegadores.
116. Verifica HTTPS y el certificado SSL.
117. Configura despliegue automático desde la rama principal.
118. Agrega un README.md con detalles e instrucciones del proyecto.
119. Monitorea el uptime y errores del sitio (opcional).
120. Comparte el enlace de tu portafolio en redes sociales y contactos.

---

## 5. Despliegue

121. Agrega un interruptor de tema claro/oscuro con JavaScript y variables CSS.
122. Guarda la preferencia de tema en `localStorage`.
123. Agrega filtrado de proyectos por tecnología usando JavaScript.
124. Agrega contadores animados para habilidades o estadísticas.
125. Agrega una sección de blog o noticias.
126. Agrega una sección de testimonios o recomendaciones.
127. Agrega un botón para descargar el CV/hoja de vida.
128. Agrega una hoja de estilos para impresión del CV.
129. Agrega una página 404 personalizada con navegación de regreso a Inicio.
130. Agrega un service worker para soporte offline (PWA).
131. Agrega un manifest.json para soporte PWA.
132. Agrega meta tags Open Graph y Twitter Card.
133. Agrega un sitemap.xml para SEO.
134. Agrega robots.txt para controlar el indexado de buscadores.
135. Agrega un banner de consentimiento de cookies (si usas analítica).
136. Agrega una barra de progreso de carga (por ejemplo, NProgress.js).
137. Agrega efectos de parallax al hacer scroll (opcional).
138. Agrega iconos SVG animados o fondos animados.
139. Agrega una animación de tipeo en la sección de héroe.
140. Agrega un carrusel de testimonios usando Bootstrap.
141. Agrega una sección de habilidades con barras de progreso o gráficos.
142. Agrega un botón de volver arriba con animación de aparición/desaparición.
143. Agrega un formulario de suscripción a newsletter (opcional).
144. Agrega un backend para el formulario de contacto (Formspree, Netlify Forms, API propia).
145. Configura despliegue continuo (CI/CD) para actualizaciones automáticas.
146. Agrega pruebas unitarias para funciones JavaScript (opcional).
147. Agrega pruebas end-to-end para formularios y navegación (opcional).
148. Agrega una sección de historial de cambios o versiones.
149. Agrega una sección de colaboradores si es open source.
150. Actualiza y mantén regularmente el contenido de tu portafolio.

---

**Fin de las Indicaciones**
