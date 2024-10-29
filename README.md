<h1>✨Creative Mind Lab</h1>
<h2>Backend</h2>

Este es el backend de la aplicación Creative Mind Lab, una aplicación de chat que genera respuestas creativas basadas en un prompt del usuario.

<ul>
<li>🐘 Laravel: 11.29.0</li>
<li>🐘 PHP: 8.3.2</li>
<li>🐬 Base de Datos: MySQL</li>
</ul>

<h3>📄 Modelo</h3>
<h4>PromptHistory</h4> 
Modelo de Eloquent que representa el historial de prompts enviados por el usuario y las respuestas generadas por la IA. Contiene los campos user_id, prompt, generated_text, max_length, y temperature.

<h3>🚀 Controlador</h3>
<strong>TextGenerationController</strong>
Controlador que maneja las solicitudes de generación de texto y obtención del historial de prompts.
<ul>
<li>generateText: Valida la entrada, genera una respuesta y guarda el prompt en el historial.</li>
<li>getHistory: Devuelve el historial de prompts.</li>
</ul>

<h3>🛠️ Servicio </h3>
<strong>TextGeneratorService</strong>
 Lógica separada para generar respuestas basadas en las configuraciones y variables definidas en los archivos de configuración.

<h3>Archivos de Configuración</h3>
<strong>config/introductionText.php</strong> Contiene introducciones de texto predeterminadas que se agregan al comienzo de cada respuesta generada.
<strong>config/generatedText.php</strong> Define respuestas posibles organizadas por nivel de creatividad (low, medium, high) y longitud (short, medium, long).

<h3>🌐 Rutas de la API</h3>
<ul>
<li><strong>POST /api/generate-text</strong> Genera una respuesta a partir de un prompt proporcionado por el usuario y guarda el prompt en la base de datos.</li>
<li><strong>GET /api/history</strong> Devuelve el historial completo de prompts y respuestas.</li>
</ul>

<h3>🔍 Pruebas con Postman</h3>

<ul>
<li>Generar Texto:</li>
<strong>Método: POST</strong>
URL: http://localhost:8000/api/generate-text
Cuerpo: JSON con los campos prompt, maxLength y temperature.
Ejemplo de cuerpo de solicitud:
json
Copy code
{
"prompt": "Hello CreativeIa",
"maxLength": 50,
"temperature": 0.7
}
<li>Obtener Historial:</li>
<strong>Método: GET</strong>
URL: http://localhost:8000/api/history
</ul>
<hr>
<h2>Frontend</h2>
