<h1>✨Creative IA</h1>

<h2>Backend</h2>

<p>Creative IA es una aplicación de chat interactiva impulsada por inteligencia artificial que permite a los usuarios enviar mensajes y recibir respuestas generadas dinámicamente. El proyecto está compuesto por un backend en Laravel y un frontend en React, proporcionando una interfaz moderna y fluida para la interacción del usuario.</p>

<ul>
<li>🐘 <strong>Laravel:</strong> 11.29.0</li>
<li>🐘 <strong>PHP:</strong> 8.3.2</li>
<li>🐬 <strong>Base de Datos:</strong> MySQL</li>
</ul>

<h3>📄 Modelo</h3>
<h4>PromptHistory</h4>
<p>Modelo de Eloquent que representa el historial de prompts enviados por el usuario y las respuestas generadas por la IA. Contiene los campos <code>user_id</code>, <code>prompt</code>, <code>generated_text</code>, <code>max_length</code>, y <code>temperature</code>.</p>

<h3>🚀 Controlador</h3>
<h4>TextGenerationController</h4>
<p>Controlador que maneja las solicitudes de generación de texto y obtención del historial de prompts.</p>
<ul>
<li><strong>generateText:</strong> Valida la entrada, genera una respuesta y guarda el prompt en el historial.</li>
<li><strong>getHistory:</strong> Devuelve el historial de prompts.</li>
</ul>

<h3>🛠️ Servicio</h3>
<h4>TextGeneratorService</h4>
<p>Lógica separada para generar respuestas basadas en las configuraciones y variables definidas en los archivos de configuración.</p>

<h3>🗂️ Archivos de Configuración</h3>
<ul>
  <li><strong>config/introductionText.php:</strong> Contiene introducciones de texto predeterminadas que se agregan al comienzo de cada respuesta generada.</li>
  <li><strong>config/generatedText.php:</strong> Define respuestas posibles organizadas por nivel de creatividad (low, medium, high) y longitud (short, medium, long).</li>
</ul>

<h3>🌐 Rutas de la API</h3>
<ul>
  <li><strong>POST /api/generate-text:</strong> Genera una respuesta a partir de un prompt proporcionado por el usuario y guarda el prompt en la base de datos.</li>
  <li><strong>GET /api/history:</strong> Devuelve el historial completo de prompts y respuestas.</li>
</ul>

<h3>🔍 Pruebas con Postman</h3>
<ul>
  <li><strong>Generar Texto:</strong></li>
  <p><strong>Método:</strong> POST</p>
  <p><strong>URL:</strong> http://localhost:8000/api/generate-text</p>
  <p><strong>Cuerpo:</strong> JSON con los campos <code>prompt</code>, <code>maxLength</code>, y <code>temperature</code>.</p>
  <pre><code>
{
    "prompt": "Hello Creative IA",
    "maxLength": 50,
    "temperature": 0.7
}
  </code></pre>
  <li><strong>Obtener Historial:</strong></li>
  <p><strong>Método:</strong> GET</p>
  <p><strong>URL:</strong> http://localhost:8000/api/history</p>
</ul>

<hr>

<h2>Frontend</h2>

<ul>
  <li>🔵 <strong>React:</strong> 18.3</li>
  <li>🖼️ <strong>Material-UI:</strong> Biblioteca de diseño</li>
  <li>🌐 <strong>Axios:</strong> Cliente HTTP</li>
</ul>

<h2>🧩 Componentes Principales</h2>

<h3>⚙️ App</h3>
<p>El componente <strong>App</strong> es el punto de entrada de la aplicación y organiza la estructura general, cargando el <strong>Sidebar</strong> y el <strong>Layout</strong>. Utiliza <code>react-router-dom</code> para manejar la navegación interna y define la lógica para manejar el historial de prompts y respuestas.</p>

<h3>📐 Layout</h3>
<p>El <strong>Layout</strong> contiene el <strong>Header</strong> y el <strong>Footer</strong>, proporcionando una estructura fija para el contenido de la aplicación.</p>
<ul>
  <li><strong>Header:</strong> Muestra el logo y el título de la aplicación.</li>
  <li><strong>Footer:</strong> Incluye información de derechos de autor.</li>
  <li><strong>Funcionalidad:</strong> Utiliza <code>&lt;Outlet /&gt;</code> de <code>react-router-dom</code> para cargar el contenido dinámico entre el <strong>Header</strong> y el <strong>Footer</strong>.</li>
</ul>

<h3>📜 Sidebar</h3>
<p>La barra lateral muestra el historial de prompts generados.</p>
<p>Cada entrada en el historial es clicable, permitiendo al usuario seleccionar un mensaje previo y cargarlo nuevamente en el <strong>MainBox</strong>.</p>

<h3>💬 MainBox</h3>
<p><strong>MainBox</strong> contiene dos componentes principales:</p>

<h4>✏️ InputChat</h4>
<p>Proporciona un campo de entrada para el usuario, donde puede escribir su mensaje y ajustar la longitud máxima y la creatividad de la respuesta.</p>
<p>Incluye un botón de envío que activa la llamada a la API <code>/api/generate-text</code> y muestra los errores de validación en tiempo real.</p>

<h4>🔄 ChatResponse</h4>
<p>Muestra la respuesta generada por la IA.</p>
<p>Incluye una animación de carga mientras la respuesta se está generando.</p>

<h3>🔗 Llamadas a la API</h3>
<p>El frontend realiza llamadas a la API del backend usando Axios para las siguientes rutas:</p>

<ul>
  <li><strong>Generar Texto:</strong> <code>POST /api/generate-text</code> Envía el mensaje del usuario, la longitud máxima y el nivel de creatividad para recibir una respuesta generada.</li>
  <li><strong>Obtener Historial:</strong> <code>GET /api/history</code> Obtiene el historial completo de prompts y respuestas generadas, que se muestra en el <strong>Sidebar</strong>.</li>
</ul>
