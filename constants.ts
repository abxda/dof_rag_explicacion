
import { ScriptData, ScriptConcept, InteractiveCodeSegment } from './types';

export const SCRIPTS_DATA: ScriptData[] = [
  {
    id: "001_test_playwright",
    title: "001_test_playwright.py",
    generalPurpose: "Testea la instalación y funcionalidad básica de Playwright.",
    detailedExplanation: `Este script sirve como una prueba de humo fundamental para el entorno de desarrollo.
Su objetivo principal es confirmar que la biblioteca Playwright está correctamente
instalada y es accesible desde Python, y que los navegadores necesarios
(específicamente Chromium en este caso) pueden ser lanzados y controlados.
El script intenta importar Playwright, iniciar su API síncrona, lanzar un
navegador en modo "headless" (sin interfaz gráfica visible), y luego cerrarlo.
Los mensajes impresos en la consola indican el éxito o fracaso de cada uno
de estos pasos cruciales, ayudando a diagnosticar problemas de configuración iniciales.`,
    keyConcepts: [
      {
        id: "001_test_playwright-concept-0",
        name: "Automatización de Navegadores",
        explanation: `La automatización de navegadores se refiere al uso de software para controlar un navegador web y realizar tareas de forma programada, imitando la interacción humana.
Usos Comunes:
- Pruebas de Software (Testing): Verificar que las aplicaciones web funcionen como se espera (ej. Selenium, Playwright, Cypress).
- Web Scraping: Extraer datos de sitios web.
- Automatización de Tareas Repetitivas: Llenar formularios, tomar capturas de pantalla, generar reportes.
- Monitoreo de Sitios Web: Comprobar la disponibilidad y rendimiento.

Playwright es una herramienta poderosa para esto, permitiendo interactuar con páginas web, hacer clic en botones, escribir texto, navegar, etc., todo mediante código.`
      },
      {
        id: "001_test_playwright-concept-1",
        name: "Playwright: Introducción y características",
        explanation: `Playwright es una biblioteca de Node.js (con bindings para Python, Java y C#) desarrollada por Microsoft para la automatización de navegadores.
Características Destacadas:
- Multi-Navegador: Soporta Chromium (Chrome, Edge), Firefox y WebKit (Safari) con una única API.
- Multi-Lenguaje: Se puede usar con JavaScript/TypeScript, Python, Java y C#.
- API Síncrona y Asíncrona: Ofrece ambas para adaptarse a diferentes estilos de programación. Este script usa la API síncrona (\`sync_playwright\`).
- Auto-Esperas (Auto-Waits): Playwright espera automáticamente a que los elementos estén listos antes de realizar acciones, reduciendo la fragilidad de los scripts.
- Selectores Ricos: Permite localizar elementos usando CSS, XPath, texto, y selectores propios de Playwright.
- Emulación: Puede emular dispositivos móviles, geolocalización, permisos, etc.
- Modo Headless y Headed: Puede correr con o sin interfaz gráfica.
- Contextos de Navegador: Permite aislar sesiones (cookies, localStorage) dentro de una misma instancia de navegador.`
      },
      {
        id: "001_test_playwright-concept-2",
        name: "Entornos Virtuales (Conda/venv)",
        explanation: `Los entornos virtuales son directorios aislados que contienen una instalación específica de Python y las bibliotecas necesarias para un proyecto particular.
Importancia:
- Gestión de Dependencias: Cada proyecto puede tener sus propias versiones de bibliotecas sin afectar a otros proyectos o a la instalación global de Python.
- Aislamiento: Evitan conflictos entre versiones de paquetes requeridas por diferentes proyectos. Si Proyecto A necesita 'libX v1.0' y Proyecto B necesita 'libX v2.0', los entornos virtuales permiten que ambas coexistan.
- Reproducibilidad: Facilitan recrear el mismo entorno en diferentes máquinas o momentos, asegurando que el código se comporte igual. Usualmente se listan las dependencias en un archivo (ej. 'requirements.txt').
- Limpieza: Mantienen la instalación global de Python limpia.

Herramientas Comunes:
- 'venv': Módulo incorporado en Python.
- 'conda': Popular en la comunidad de ciencia de datos, gestiona paquetes Python y no-Python, y entornos.`
      },
      {
        id: "001_test_playwright-concept-3",
        name: "Headless Browsing",
        explanation: `El "Headless Browsing" (navegación sin cabeza) se refiere a ejecutar un navegador web sin su interfaz gráfica de usuario (GUI). Las interacciones ocurren programáticamente.
Ventajas:
- Rendimiento: Generalmente más rápido y consume menos recursos (CPU, memoria) que un navegador con GUI.
- Servidores y CI/CD: Ideal para ejecutar en servidores donde no hay un display gráfico disponible, o en pipelines de Integración Continua/Despliegue Continuo (CI/CD).
- Escalabilidad: Más fácil ejecutar múltiples instancias en paralelo.

Cuándo Usarlo:
- Web scraping automatizado.
- Pruebas automatizadas en CI/CD.
- Tareas de fondo que involucran interacciones web.

Cuándo NO Usarlo (o usar modo "headed" para depurar):
- Al desarrollar/depurar scripts, ver la GUI ayuda a entender qué está pasando.
- Sitios con JavaScript muy complejo o medidas anti-bot que podrían comportarse diferente en modo headless (aunque Playwright es bueno mitigando esto).`
      },
      {
        id: "001_test_playwright-concept-4",
        name: "Context Managers (\`with ... as ...\`)",
        explanation: `En Python, un "context manager" es un objeto que define los métodos '__enter__()' y '__exit__()'. La sentencia 'with' se usa para envolver la ejecución de un bloque de código con métodos definidos por un context manager.
Propósito Principal: Gestión de Recursos.
- Asegura que los recursos se configuren adecuadamente antes de que el bloque de código se ejecute ('__enter__()').
- Garantiza que los recursos se liberen o limpien después de que el bloque de código termine, incluso si ocurren errores ('__exit__()').

Ejemplos Comunes:
- Manejo de archivos: 'with open("file.txt") as f:' asegura que el archivo se cierre automáticamente.
- Conexiones de red, bloqueos (locks), y en este script, la instancia de Playwright y el navegador:
  'with sync_playwright() as p:' asegura que la API de Playwright se inicie y se cierre correctamente.
  'with p.chromium.launch() as browser:' asegura que el navegador se cierre.

Beneficios: Código más limpio, legible y menos propenso a fugas de recursos.`
      },
      {
        id: "001_test_playwright-concept-5",
        name: "Manejo Básico de Excepciones (\`try-except\`)",
        explanation: `El manejo de excepciones es cómo Python lidia con errores que ocurren durante la ejecución de un programa. Sin él, un error detendría el script abruptly.
Estructura Básica:
- 'try': El bloque de código que podría generar un error se coloca aquí.
- 'except <TipoDeError> as <variable_error>': Si ocurre un error del tipo especificado en el bloque 'try', el código en este bloque 'except' se ejecuta. Se pueden tener múltiples bloques 'except' para diferentes tipos de errores. Si no se especifica '<TipoDeError>', captura cualquier excepción (generalmente no recomendado para todos los casos).
- 'else': (Opcional) Se ejecuta si el bloque 'try' se completa sin generar ninguna excepción.
- 'finally': (Opcional) Se ejecuta siempre, haya o no haya habido una excepción. Útil para limpieza de recursos.

En este script:
- Se usa 'try-except ImportError' para verificar si Playwright está instalado.
- Se usa 'try-except Exception as e' para capturar errores generales al lanzar navegadores o durante la ejecución de Playwright, imprimiendo mensajes descriptivos. Esto ayuda a diagnosticar problemas como la no instalación de los binarios del navegador.`
      }
    ],
    sourceCode: `
from playwright.sync_api import sync_playwright, Playwright # INTERACTIVE_SEGMENT_TARGET: 001-import-playwright
import sys

def run_test():
    print(f"Intentando usar Playwright con Python en: {sys.executable}")
    version_disponible = False
    try:
        # Intentar obtener la versión del paquete playwright instalado si está disponible
        # Esto se hace mejor con 'pip show playwright' desde la CLI.
        # Aquí solo confirmamos que podemos importar módulos específicos.
        import playwright.sync_api
        print(f"Módulo playwright.sync_api importado correctamente.")
        version_disponible = True # Asumimos que si importa, algo está bien.
    except ImportError:
        print("Error: No se pudo importar playwright.sync_api. La biblioteca Playwright de Python no parece estar instalada correctamente.")
        return
    except Exception as e_ver:
        print(f"No se pudo determinar la versión de la biblioteca Playwright mediante importación: {e_ver}")
        version_disponible = True # Aún así, procedemos con la prueba funcional

    if not version_disponible:
         print("No se pudo confirmar la instalación de la biblioteca Playwright.")
         return

    try:
        with sync_playwright() as playwright_instance: # INTERACTIVE_SEGMENT_TARGET: 001-with-context
            print("Playwright Sync API iniciada.")

            # Probar Chromium
            try:
                browser_chromium = playwright_instance.chromium.launch(headless=True) # INTERACTIVE_SEGMENT_TARGET: 001-launch-chromium
                print("Chromium lanzado exitosamente.")
                browser_chromium.close()
                print("Chromium cerrado.")
            except Exception as e_chromium:
                print(f"Error al lanzar/cerrar Chromium: {e_chromium}")
                print("Asegúrate de que Chromium esté instalado (ej. 'python -m playwright install chromium')")

            # Puedes descomentar las siguientes secciones si también quieres probar Firefox y WebKit
            # Probar Firefox
            # try:
            #     browser_firefox = playwright_instance.firefox.launch(headless=True)
            #     print("Firefox lanzado exitosamente.")
            #     browser_firefox.close()
            #     print("Firefox cerrado.")
            # except Exception as e_firefox:
            #     print(f"Error al lanzar/cerrar Firefox: {e_firefox}")
            #     print("Asegúrate de que Firefox esté instalado (ej. 'python -m playwright install firefox')")

            # Probar WebKit
            # try:
            #     browser_webkit = playwright_instance.webkit.launch(headless=True)
            #     print("WebKit lanzado exitosamente.")
            #     browser_webkit.close()
            #     print("WebKit cerrado.")
            # except Exception as e_webkit:
            #     print(f"Error al lanzar/cerrar WebKit: {e_webkit}")
            #     print("Asegúrate de que WebKit esté instalado (ej. 'python -m playwright install webkit')")

        print("\\nPrueba de Playwright completada exitosamente.")

    except Exception as e: # INTERACTIVE_SEGMENT_TARGET: 001-general-exception
        print(f"Error general al usar Playwright: {e}")
        if "Executable doesn't exist" in str(e) or "BrowserType.launch: Executable" in str(e):
            print("Esto usualmente significa que los navegadores no están instalados o Playwright no puede encontrarlos.")
            print("Ejecuta 'python -m playwright install' en tu terminal (con el entorno Conda activo).")
        elif "No module named 'playwright'" in str(e): # Aunque ya lo verificamos
             print("Esto significa que la biblioteca Playwright de Python no está instalada en este entorno.")
             print("Ejecuta 'pip install playwright --break-system-packages' o revisa tu instalación.")
        else:
            print("Ocurrió un error inesperado durante la prueba funcional.")


if __name__ == "__main__":
    run_test()
`,
    interactiveSegments: [
      {
        id: "001-import-playwright",
        label: "Importación de Playwright",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 001-import-playwright/,
        explanation: "Esta línea es crucial. Importa `sync_playwright`, la función principal para usar la API síncrona de Playwright, y `Playwright`, la clase que representa la instancia de Playwright. Sin esto, no se pueden utilizar las funcionalidades de automatización del navegador.",
        relatedConceptIds: ["001_test_playwright-concept-1"]
      },
      {
        id: "001-with-context",
        label: "Gestor de Contexto 'with sync_playwright()'",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 001-with-context/,
        explanation: "Aquí se utiliza un gestor de contexto (`with` statement). `sync_playwright()` inicializa la API síncrona de Playwright. El gestor de contexto asegura que los recursos de Playwright (como la conexión al driver del navegador) se configuren correctamente al inicio y se liberen limpiamente al final, incluso si ocurren errores. `playwright_instance` es el objeto a través del cual se accede a los navegadores.",
        relatedConceptIds: ["001_test_playwright-concept-1", "001_test_playwright-concept-4"]
      },
      {
        id: "001-launch-chromium",
        label: "Lanzar Navegador Chromium",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 001-launch-chromium/,
        explanation: "Esta línea lanza una instancia del navegador Chromium. `playwright_instance.chromium` accede al manejador del navegador Chromium. `.launch()` lo inicia. `headless=True` significa que el navegador se ejecutará en segundo plano, sin una interfaz gráfica visible, lo cual es ideal para automatización y pruebas en servidores.",
        relatedConceptIds: ["001_test_playwright-concept-1", "001_test_playwright-concept-3"]
      },
      {
        id: "001-general-exception",
        label: "Manejo de Excepciones Generales",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 001-general-exception/,
        explanation: "Este bloque `except` captura cualquier error general que pueda ocurrir durante la inicialización o uso de Playwright (que no haya sido capturado por un `except` más específico). La variable `e` contiene la información del error, que luego se imprime. Esto es útil para diagnosticar problemas, como la falta de instalación de los navegadores (`python -m playwright install`).",
        relatedConceptIds: ["001_test_playwright-concept-5"]
      }
    ]
  },
  {
    id: "002_dof_web_scraper",
    title: "002_dof_web_scraper.py",
    generalPurpose: "Script inicial para extraer URLs de la página principal del DOF (sin paginación).",
    detailedExplanation: `Este script representa el primer paso en la recolección de datos del Diario Oficial
de la Federación. Se enfoca en realizar una búsqueda de un término específico
proporcionado por el usuario en la página principal del DOF. Utiliza Playwright para
automatizar la navegación, localizar el campo de búsqueda, ingresar el término y
enviar el formulario. Después de la búsqueda, espera a que la página de resultados
cargue e intenta extraer los enlaces a las notas individuales. Crucialmente,
introduce una lógica para detectar una página de "ATENTO AVISO" que el DOF a veces
presenta, evitando procesarla erróneamente.`,
    keyConcepts: [
      {
        id: "002_dof_web_scraper-concept-0",
        name: "Web Scraping (Fundamentos, Ética)",
        explanation: `El Web Scraping (raspado web) es el proceso de extraer información de sitios web de forma automatizada.
Fundamentos:
1.  Obtener el contenido HTML de la página (usando bibliotecas como Playwright, Requests, Scrapy).
2.  Analizar (parsear) el HTML para encontrar los datos deseados (usando selectores CSS, XPath, o bibliotecas como BeautifulSoup).
3.  Extraer y estructurar los datos.
4.  Almacenar los datos (ej. CSV, base de datos, JSON).

Ética y Legalidad:
-   \`robots.txt\`: Revisa este archivo en el sitio web; indica qué partes del sitio los webmasters no quieren que los bots accedan. Respetarlo es crucial.
-   Términos de Servicio (ToS): Algunos sitios prohíben explícitamente el scraping.
-   Carga del Servidor: Realiza solicitudes a un ritmo razonable para no sobrecargar el servidor. Usa retardos.
-   Datos Personales y Copyright: Ten cuidado con la extracción y uso de datos personales o material protegido por derechos de autor.
-   Identificación: Considera identificar tu bot en el User-Agent.

Este script utiliza Playwright para obtener el HTML dinámico (renderizado por JavaScript) y extraer enlaces.`
      },
      {
        id: "002_dof_web_scraper-concept-1",
        name: "Selectores CSS y XPath",
        explanation: `Los selectores son patrones que permiten identificar y seleccionar elementos específicos en un documento HTML o XML. Son fundamentales para el web scraping.

Selectores CSS:
-   Basados en la sintaxis de las hojas de estilo en cascada (CSS).
-   Generalmente más simples y legibles para tareas comunes.
-   Ejemplos:
    -   \`input#textobusqueda\`: Selecciona un elemento <input> con el id="textobusqueda".
    -   \`a.enlaces\`: Selecciona todos los elementos <a> con la clase "enlaces".
    -   \`div > p\`: Selecciona todos los párrafos <p> que son hijos directos de un <div>.
    -   \`td[valign="top"]\`: Selecciona celdas <td> que tienen el atributo 'valign' igual a "top".

XPath (XML Path Language):
-   Lenguaje de consulta más potente y flexible, diseñado para navegar por elementos y atributos en documentos XML (y HTML, que es similar).
-   Puede seleccionar elementos basados en relaciones complejas (padres, hermanos, ancestros, etc.) y contenido.
-   Ejemplos:
    -   \`//input[@id="textobusqueda"]\`: Similar al CSS \`input#textobusqueda\`.
    -   \`//a[contains(@href, "nota_detalle.php")]\`: Selecciona enlaces <a> cuyo atributo 'href' contiene "nota_detalle.php".
    -   \`//td/a\`: Selecciona todos los enlaces <a> que son hijos directos de una celda <td>.

Playwright soporta ambos tipos de selectores, así como selectores basados en texto visible y roles ARIA.`
      },
      {
        id: "002_dof_web_scraper-concept-2",
        name: "Interacción con Formularios Web (\`page.fill\`, \`page.press\`)",
        explanation: `Playwright proporciona métodos intuitivos para interactuar con formularios web:
-   \`page.fill(selector, valor)\`:
    -   Localiza un elemento de entrada (como <input>, <textarea>) usando el 'selector' proporcionado.
    -   Rellena el campo con el 'valor' especificado.
    -   Ejemplo en el script: \`page.fill(campo_busqueda_selector, termino_busqueda)\`

-   \`page.press(selector, tecla)\`:
    -   Localiza un elemento usando el 'selector'.
    -   Simula la pulsación de una 'tecla' específica en ese elemento.
    -   Teclas comunes: "Enter", "ArrowDown", "Tab", "Escape", etc.
    -   Ejemplo en el script: \`page.press(campo_busqueda_selector, "Enter")\` para enviar el formulario de búsqueda.

Otras interacciones comunes con formularios:
-   \`page.click(selector)\`: Para hacer clic en botones (ej. type="submit") o checkboxes/radio buttons.
-   \`page.check(selector)\` / \`page.uncheck(selector)\`: Para checkboxes.
-   \`page.select_option(selector, value)\`: Para seleccionar opciones en un <select>.`
      },
      {
        id: "002_dof_web_scraper-concept-3",
        name: "Esperas en Playwright (\`wait_for_selector\`, \`wait_for_load_state\`)",
        explanation: `Las aplicaciones web modernas cargan contenido dinámicamente. Interactuar con un elemento antes de que exista o sea visible/interactuable causa errores. Playwright maneja esto con:
1.  Auto-Esperas (Auto-Waits): La mayoría de las acciones de Playwright (como \`click()\`, \`fill()\`) esperan automáticamente a que el elemento objetivo cumpla ciertas condiciones (ej. visible, habilitado) antes de actuar. Esto reduce la necesidad de esperas explícitas.

2.  Esperas Explícitas: Para condiciones más complejas o para sincronizar con el estado de la página.
    -   \`page.wait_for_selector(selector, **kwargs)\`:
        -   Espera hasta que un elemento que coincide con el 'selector' aparezca en el DOM y (opcionalmente) cumpla ciertas condiciones de estado.
        -   \`state="visible"\`: Espera a que el elemento sea visible.
        -   \`state="attached"\`: Espera a que esté en el DOM (puede ser invisible).
        -   \`timeout\`: Tiempo máximo de espera en milisegundos.
        -   Ejemplo: \`page.wait_for_selector(campo_busqueda_selector, state="visible", timeout=30000)\`

    -   \`page.wait_for_load_state(estado, **kwargs)\`:
        -   Espera a que la página alcance un cierto estado de carga.
        -   \`estado="load"\`: Espera al evento 'load' del DOM (todos los recursos iniciales cargados).
        -   \`estado="domcontentloaded"\`: Espera a que el HTML esté completamente cargado y parseado (sin esperar a stylesheets, images, subframes). Es más rápido.
        -   \`estado="networkidle"\`: Espera hasta que no haya más de X conexiones de red activas durante Y ms. Útil para páginas con muchas peticiones AJAX post-carga.
        -   Ejemplo: \`page.wait_for_load_state('networkidle', timeout=30000)\`

    -   \`page.wait_for_url(url, **kwargs)\`: Espera a que la URL de la página coincida.
    -   \`page.wait_for_timeout(milisegundos)\`: Pausa explícita (generalmente menos recomendada que las esperas condicionales).`
      },
      {
        id: "002_dof_web_scraper-concept-4",
        name: "Extracción de Atributos y Texto (\`get_attribute\`, \`inner_text\`)",
        explanation: `Una vez que se localiza un elemento en la página, se puede extraer información de él:

-   \`elemento.get_attribute(nombre_atributo)\`:
    -   Devuelve el valor del atributo especificado para el elemento.
    -   Si el atributo no existe, devuelve \`None\` (en Python).
    -   Ejemplo: Para un enlace \`<a href="pagina.html">Texto</a>\`, \`elemento_enlace.get_attribute("href")\` devolvería "pagina.html".
    -   Se usa en el script para obtener la URL de los enlaces: \`href = elemento_enlace.get_attribute("href")\`

-   \`elemento.inner_text()\`:
    -   Devuelve el texto contenido dentro del elemento y sus descendientes, similar a lo que un usuario vería.
    -   Excluye el texto de elementos ocultos por CSS (si el elemento mismo es visible).
    -   Realiza cierta normalización de espacios.
    -   Ejemplo: Para \`<p> Hola <b>Mundo</b> </p>\`, \`elemento_parrafo.inner_text()\` podría devolver "Hola Mundo".
    -   Se usa en el script para obtener el texto visible del enlace: \`texto_enlace = elemento_enlace.inner_text().strip()...\`

Otros métodos relacionados:
-   \`elemento.text_content()\`: Similar a \`Node.textContent\` en JavaScript. Devuelve todo el texto dentro del elemento, incluyendo el de elementos ocultos.
-   \`elemento.inner_html()\`: Devuelve el HTML contenido dentro del elemento.
-   \`page.title()\`: Devuelve el título de la página (\`<title>...\`).`
      },
      {
        id: "002_dof_web_scraper-concept-5",
        name: "Manejo de URLs (relativas vs. absolutas, \`urllib.parse.urljoin\`)",
        explanation: `Cuando se hace web scraping, los enlaces (\`href\` en etiquetas \`<a>\`) pueden ser de dos tipos:

1.  URLs Absolutas:
    -   Una URL completa que incluye el protocolo (http/https), el nombre de dominio y la ruta.
    -   Ejemplo: \`https://www.ejemplo.com/pagina/documento.html\`
    -   Son directamente navegables.

2.  URLs Relativas:
    -   Una URL que no especifica el protocolo ni el dominio; se interpreta en relación con la URL de la página actual.
    -   Ejemplos:
        -   \`/seccion/otra_pagina.html\` (relativa a la raíz del dominio)
        -   \`item.html\` (relativa al directorio actual)
        -   \`../otra_carpeta/recurso.pdf\` (navega hacia arriba en la jerarquía de directorios)
    -   No son directamente navegables sin resolverlas contra una URL base.

\`urllib.parse.urljoin(base_url, relative_url)\`:
-   Una función de la biblioteca estándar de Python (\`urllib.parse\`) que combina una URL base con una URL relativa para formar una URL absoluta.
-   Es la forma robusta y correcta de construir URLs completas.
-   \`base_url\`: La URL de la página actual donde se encontró el enlace relativo (ej. \`page.url\` de Playwright).
-   \`relative_url\`: El valor del atributo \`href\` que podría ser relativo.
-   Ejemplo en el script: \`enlace_absoluto = urljoin(current_page_url, href)\`
    Esto asegura que todos los enlaces recolectados sean absolutos y utilizables independientemente de dónde se encontraron.`
      },
      {
        id: "002_dof_web_scraper-concept-6",
        name: "Análisis de Flujo de Navegación de Sitios Web",
        explanation: `Antes de escribir un script de scraping, es crucial entender cómo un usuario (o un bot) interactuaría con el sitio web para obtener la información deseada. Esto implica:
1.  Inspección Manual: Usar las herramientas de desarrollador del navegador (F12) para:
    -   Identificar las URLs de las páginas clave (inicio, búsqueda, resultados, detalle).
    -   Observar las peticiones de red (Network tab) para ver cómo se cargan los datos (HTML directo, XHR/Fetch para AJAX).
    -   Inspeccionar el DOM (Elements tab) para encontrar los selectores CSS o XPath de los elementos de interés (campos de búsqueda, botones, datos a extraer, enlaces de paginación).

2.  Mapeo del Proceso:
    -   Página de inicio: ¿Hay un formulario de búsqueda? ¿Cuáles son sus campos?
    -   Envío de búsqueda: ¿Cómo se envía (Enter, botón)? ¿A qué URL redirige?
    -   Página de resultados: ¿Cómo se estructuran los resultados? ¿Cómo se identifican los enlaces a las páginas de detalle? ¿Hay paginación?
    -   Página de detalle: ¿Dónde está el contenido principal a extraer?

3.  Manejo de Casos Especiales:
    -   ¿Qué pasa si no hay resultados?
    -   ¿Hay pop-ups, captchas, o páginas intermedias (como la de "ATENTO AVISO" en este script)?
    -   ¿El sitio requiere login?

Este análisis previo guía el diseño del scraper, la elección de selectores, y la lógica de navegación y extracción. En el script, se identificó la necesidad de buscar un término, enviar el formulario, y luego, crucialmente, verificar si se llega a una página de aviso o a una página de resultados real antes de intentar extraer enlaces.`
      }
    ],
    sourceCode: `
import csv
from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeoutError
import os
import time
from urllib.parse import urljoin

def buscar_en_dof_y_extraer_enlaces_local(termino_busqueda: str, nombre_archivo_csv: str):
    with sync_playwright() as p:
        print("Lanzando el navegador Chromium...")
        browser = None
        page = None
        try:
            browser = p.chromium.launch(headless=True) 
            page = browser.new_page()
            print("Navegador y página creados.")
        except Exception as e:
            print(f"Error al lanzar el navegador: {e}")
            return

        try:
            print(f"Navegando a https://www.dof.gob.mx/...")
            page.goto("https://www.dof.gob.mx/", timeout=60000) # INTERACTIVE_SEGMENT_TARGET: 002-goto-dof
            print("Página del DOF cargada.")

            print(f"Ingresando '{termino_busqueda}' en el campo de búsqueda...")
            campo_busqueda_selector = "input#textobusqueda"
            page.wait_for_selector(campo_busqueda_selector, state="visible", timeout=30000) # INTERACTIVE_SEGMENT_TARGET: 002-wait-search-field
            page.fill(campo_busqueda_selector, termino_busqueda) # INTERACTIVE_SEGMENT_TARGET: 002-fill-search
            print(f"Término '{termino_busqueda}' ingresado.")

            print("Realizando la búsqueda...")
            page.press(campo_busqueda_selector, "Enter") # INTERACTIVE_SEGMENT_TARGET: 002-press-enter
            print("Búsqueda enviada. Esperando navegación...")
            
            try:
                page.wait_for_load_state('networkidle', timeout=30000) 
                print(f"Navegación completada. URL actual: {page.url}")
            except PlaywrightTimeoutError:
                print("Timeout esperando que la red se calme después de la búsqueda. Continuando de todas formas...")
            except Exception as e_nav:
                print(f"Error durante la espera de navegación post-búsqueda: {e_nav}. Continuando...")

            aviso_selector_texto = "text=Su solicitud no pudo ser procesada correctamente"
            es_pagina_de_aviso = False
            try:
                page.wait_for_selector(aviso_selector_texto, timeout=10000) # INTERACTIVE_SEGMENT_TARGET: 002-check-atento-aviso
                es_pagina_de_aviso = True
                print("¡ALERTA! Se detectó la página de 'ATENTO AVISO'.")
                # ... (código de guardado de HTML de aviso)
            except PlaywrightTimeoutError:
                print("No se detectó la página de 'ATENTO AVISO'.")
                es_pagina_de_aviso = False
            
            if es_pagina_de_aviso:
                print("Terminando el script debido a la página de 'ATENTO AVISO'.")
                return 

            selector_resultados_principales = 'td > a[href*="nota_detalle.php"]' # INTERACTIVE_SEGMENT_TARGET: 002-result-selector
            try:
                page.wait_for_selector(selector_resultados_principales, state="visible", timeout=60000)
            except PlaywrightTimeoutError:
                print(f"TIMEOUT: No se encontraron enlaces con el selector '{selector_resultados_principales}'.")
                # ... (código de guardado de HTML y screenshot sin resultados)
                return 

            enlaces_elementos = page.query_selector_all(selector_resultados_principales) # INTERACTIVE_SEGMENT_TARGET: 002-extract-links
            enlaces_extraidos = []
            if enlaces_elementos:
                current_page_url = page.url
                for i, elemento_enlace in enumerate(enlaces_elementos):
                    href = elemento_enlace.get_attribute("href")
                    texto_enlace = elemento_enlace.inner_text().strip().replace('\\n', ' ').replace('\\r', ' ')
                    if href and texto_enlace: 
                        enlace_absoluto = urljoin(current_page_url, href) # INTERACTIVE_SEGMENT_TARGET: 002-urljoin
                        enlaces_extraidos.append({"texto": texto_enlace, "url": enlace_absoluto})
            
            if enlaces_extraidos:
                # ... (código para guardar en CSV)
                with open(nombre_archivo_csv, mode='w', newline='', encoding='utf-8') as archivo_csv: # INTERACTIVE_SEGMENT_TARGET: 002-save-csv
                    escritor_csv = csv.DictWriter(archivo_csv, fieldnames=["texto", "url"])
                    escritor_csv.writeheader()
                    escritor_csv.writerows(enlaces_extraidos)
                print(f"Enlaces guardados en '{nombre_archivo_csv}'.")

        except PlaywrightTimeoutError as e_timeout:
            print(f"TIMEOUT durante el scraping: {e_timeout}")
            # ... (manejo de errores con screenshots)
        except Exception as e:
            print(f"Error INESPERADO durante el scraping: {e}")
            # ... (manejo de errores con screenshots)
        finally:
            if browser and browser.is_connected():
                browser.close()

if __name__ == "__main__":
    termino_a_buscar = "acuerdo energías limpias"
    nombre_del_archivo = "resultados_dof.csv"
    buscar_en_dof_y_extraer_enlaces_local(termino_a_buscar, nombre_del_archivo)
`,
    interactiveSegments: [
      {
        id: "002-goto-dof",
        label: "Navegar a la página del DOF",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 002-goto-dof/,
        explanation: "El script comienza navegando a la URL principal del Diario Oficial de la Federación. `page.goto()` es el comando de Playwright para cargar una nueva página.",
        relatedConceptIds: ["001_test_playwright-concept-1"]
      },
      {
        id: "002-wait-search-field",
        label: "Esperar campo de búsqueda",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 002-wait-search-field/,
        explanation: "Antes de interactuar con el campo de búsqueda, el script espera explícitamente a que esté visible en la página usando `page.wait_for_selector()`. Esto evita errores si la página carga lentamente.",
        relatedConceptIds: ["002_dof_web_scraper-concept-3"]
      },
      {
        id: "002-fill-search",
        label: "Rellenar término de búsqueda",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 002-fill-search/,
        explanation: "`page.fill()` se usa para escribir el `termino_busqueda` proporcionado en el campo de búsqueda, identificado por `campo_busqueda_selector`.",
        relatedConceptIds: ["002_dof_web_scraper-concept-2"]
      },
      {
        id: "002-press-enter",
        label: "Enviar búsqueda (Enter)",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 002-press-enter/,
        explanation: "Se simula la pulsación de la tecla 'Enter' en el campo de búsqueda para enviar el formulario, usando `page.press()`.",
        relatedConceptIds: ["002_dof_web_scraper-concept-2"]
      },
      {
        id: "002-check-atento-aviso",
        label: "Verificar página 'ATENTO AVISO'",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 002-check-atento-aviso/,
        explanation: "El DOF a veces muestra una página de aviso si la búsqueda es inválida. Este bloque usa `page.wait_for_selector()` con un timeout corto para detectar si dicha página apareció. Es una parte crucial del análisis de flujo de navegación.",
        relatedConceptIds: ["002_dof_web_scraper-concept-3", "002_dof_web_scraper-concept-6"]
      },
      {
        id: "002-result-selector",
        label: "Selector para resultados",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 002-result-selector/,
        explanation: "Este es el selector CSS (`td > a[href*=\"nota_detalle.php\"]`) usado para identificar los enlaces a las notas de detalle en la página de resultados. Es específico para la estructura HTML del DOF.",
        relatedConceptIds: ["002_dof_web_scraper-concept-1"]
      },
      {
        id: "002-extract-links",
        label: "Extraer todos los enlaces de resultados",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 002-extract-links/,
        explanation: "`page.query_selector_all()` devuelve una lista de todos los elementos que coinciden con el `selector_resultados_principales`. Luego se itera sobre esta lista para extraer el `href` y el texto de cada enlace.",
        relatedConceptIds: ["002_dof_web_scraper-concept-4"]
      },
      {
        id: "002-urljoin",
        label: "Construir URL absoluta",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 002-urljoin/,
        explanation: "`urllib.parse.urljoin()` se utiliza para convertir URLs relativas (encontradas en los atributos `href`) a URLs absolutas, usando la URL de la página actual como base. Esto asegura que los enlaces sean siempre funcionales.",
        relatedConceptIds: ["002_dof_web_scraper-concept-5"]
      },
      {
        id: "002-save-csv",
        label: "Guardar enlaces en CSV",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 002-save-csv/,
        explanation: "Los enlaces extraídos (texto y URL) se guardan en un archivo CSV usando `csv.DictWriter` para un fácil almacenamiento y uso posterior.",
        relatedConceptIds: ["003_dof_web_scraper_next-concept-4"]
      }
    ]
  },
  {
    id: "003_dof_web_scraper_next",
    title: "003_dof_web_scraper_next.py",
    generalPurpose: "Recolecta URLs del DOF, manejando la paginación para obtener múltiples resultados y guardarlos en un CSV.",
    detailedExplanation: `Este script evoluciona el scraper anterior añadiendo la capacidad de manejar la
paginación, permitiendo recolectar un conjunto de datos más extenso. Busca y hace
clic en el elemento "Siguiente Página" (identificado como una imagen con 'alt="siguiente"'
dentro de un enlace) en un bucle hasta alcanzar un máximo de URLs o no encontrar más
páginas. Los enlaces recolectados se guardan en un archivo CSV.`,
    keyConcepts: [
      {
        id: "003_dof_web_scraper_next-concept-0",
        name: "Manejo de Paginación en Web Scraping",
        explanation: `La paginación es común en sitios web para dividir grandes conjuntos de resultados en múltiples páginas. Para scrapear todos los datos, es necesario navegar estas páginas.
Estrategias Comunes:
1.  Identificar el enlace/botón "Siguiente":
    -   Usar selectores para encontrar el elemento que lleva a la siguiente página (ej. un \`<a>\` con texto "Siguiente", "Next", ">", o una imagen específica como en este script \`img[alt="siguiente"]\`).
    -   Hacer clic en él repetidamente.
2.  Iterar sobre números de página:
    -   Si las URLs tienen un patrón como \`/resultados?pagina=1\`, \`/resultados?pagina=2\`, se puede generar estas URLs directamente.
3.  Detectar contenido "infinito" (Infinite Scroll):
    -   Requiere simular el scroll hacia abajo para cargar más contenido, y observar las peticiones de red que traen nuevos datos (a menudo XHR/Fetch).

Este script usa la primera estrategia: busca un enlace específico (\`SELECTOR_SIGUIENTE_PAGINA\`) y hace clic en él dentro de un bucle \`while\`.`
      },
      {
        id: "003_dof_web_scraper_next-concept-1",
        name: "Localizadores Avanzados (Playwright Locators, \`:has()\`)",
        explanation: `Playwright ofrece "Locators" (localizadores), que son objetos que representan una forma de encontrar elementos en la página. Son más potentes que los selectores de cadena porque:
-   Son estrictos: Se aseguran de que la acción apunte a un solo elemento (a menos que se use \`query_selector_all\` o similar).
-   Soportan auto-espera: Las acciones sobre localizadores esperan a que el elemento esté listo.
-   Permiten encadenamiento y filtrado.

Pseudo-clase CSS \`:has()\`:
-   Es un selector CSS que permite seleccionar un elemento si contiene (o "tiene") ciertos otros elementos dentro de él que cumplen una condición.
-   Sintaxis: \`elemento_padre:has(elemento_hijo_condicion)\`
-   Ejemplo en el script: \`SELECTOR_SIGUIENTE_PAGINA = 'a:has(img[alt="siguiente"])'\`
    -   Esto selecciona un elemento \`<a>\` (enlace) SIEMPRE Y CUANDO contenga (\`has\`) un elemento \`<img>\` (imagen) cuyo atributo \`alt\` sea igual a "siguiente".
    -   Es una forma muy precisa de identificar el enlace correcto para la paginación, en lugar de depender solo de la clase del \`<a>\` o el \`alt\` de la imagen por separado.

Playwright soporta \`:has()\` y otros selectores avanzados, haciendo la localización de elementos más robusta.`
      },
      {
        id: "003_dof_web_scraper_next-concept-2",
        name: "Bucles de Navegación y Condiciones de Parada",
        explanation: `Para scrapear múltiples páginas (paginación) o seguir una serie de enlaces, se usan bucles. Es crucial definir condiciones de parada claras para evitar bucles infinitos y controlar la cantidad de datos recolectados.

Estructura del Bucle de Navegación (ej. para paginación):
1.  Iniciar en la primera página de resultados.
2.  Dentro de un bucle \`while\`:
    a.  Extraer los datos de la página actual.
    b.  Verificar si se ha alcanzado la condición de parada (ej. número máximo de URLs recolectadas, límite de páginas a procesar). Si es así, salir del bucle (\`break\`).
    c.  Buscar el elemento "Siguiente Página".
    d.  Si se encuentra y es clickeable:
        i.  Hacer clic en él.
        ii. Esperar a que la nueva página cargue.
        iii. Incrementar el contador de página actual.
        iv. Continuar el bucle.
    e.  Si no se encuentra el elemento "Siguiente Página" (o no es clickeable), asumir que es la última página y salir del bucle.

Condiciones de Parada en este script:
-   \`len(todos_los_enlaces_recolectados) < max_urls_a_recolectar\`: El bucle continúa mientras no se haya alcanzado el máximo de URLs deseado.
-   Si no se encuentran más enlaces en la página actual (\`if not enlaces_esta_pagina and pagina_actual > 1\`).
-   Si el botón/enlace "Siguiente Página" no se encuentra, no es visible, o no está habilitado (\`siguiente_pagina_locator.is_visible()\`, \`siguiente_pagina_locator.is_enabled()\`).
-   Si ocurre un error al intentar hacer clic en "Siguiente Página".
-   Si se detecta la página de "ATENTO AVISO".`
      },
      {
        id: "003_dof_web_scraper_next-concept-3",
        name: "Gestión de Estado (ej. \`urls_ya_vistas\` para evitar duplicados)",
        explanation: `Durante el web scraping, especialmente con paginación o al seguir enlaces complejos, es posible encontrar la misma URL o el mismo ítem de datos múltiples veces. Para evitar procesar o guardar duplicados, se necesita gestionar el estado de lo que ya se ha visto.

En este script, se usa \`urls_ya_vistas = set()\`:
-   Un \`set\` (conjunto) de Python es una colección desordenada de elementos únicos.
-   Antes de agregar una URL recién extraída a la lista principal \`todos_los_enlaces_recolectados\`, se verifica si ya está en \`urls_ya_vistas\`:
    \`if enlace_info["url"] not in urls_ya_vistas:\`
-   Si no está, se agrega a ambas: a la lista de resultados y al conjunto \`urls_ya_vistas.add(enlace_info["url"])\`.
-   Si ya está en \`urls_ya_vistas\`, se ignora.

Beneficios:
-   Evita datos duplicados en el archivo CSV final.
-   Puede ayudar a detectar y romper bucles de redirección o patrones de paginación anómalos si se combina con otras lógicas.
-   Hace el conteo de URLs únicas recolectadas más preciso.

Otras formas de gestión de estado podrían incluir:
-   IDs de ítems ya procesados.
-   Hashes del contenido de los ítems.
-   Almacenamiento persistente (ej. base de datos) para crawls muy largos que pueden interrumpirse y reanudarse.`
      },
      {
        id: "003_dof_web_scraper_next-concept-4",
        name: "Almacenamiento en CSV (\`csv.DictWriter\`)",
        explanation: `CSV (Comma-Separated Values) es un formato de archivo simple para almacenar datos tabulares. Cada línea es un registro de datos, y cada registro consiste en uno o más campos, separados por comas.

El módulo \`csv\` de Python facilita la lectura y escritura de archivos CSV.
\`csv.DictWriter\`:
-   Crea un objeto que mapea diccionarios de Python a filas CSV.
-   Es conveniente cuando los datos están estructurados como una lista de diccionarios, donde cada diccionario representa una fila y las claves del diccionario son los encabezados de columna.
-   Uso en el script:
    1.  Definir los nombres de campo (encabezados de columna): \`fieldnames=["texto", "url"]\`.
    2.  Abrir el archivo CSV en modo escritura (\`w\`): \`with open(ruta_archivo_csv, mode='w', newline='', encoding='utf-8') as archivo_csv:\`.
        -   \`newline=''\` es importante para evitar filas en blanco adicionales en algunos sistemas operativos.
        -   \`encoding='utf-8'\` es bueno para manejar caracteres internacionales.
    3.  Crear la instancia de \`DictWriter\`: \`escritor_csv = csv.DictWriter(archivo_csv, fieldnames=fieldnames)\`.
    4.  Escribir la fila de encabezado: \`escritor_csv.writeheader()\`.
    5.  Escribir las filas de datos (lista de diccionarios): \`escritor_csv.writerows(todos_los_enlaces_recolectados)\`.

Alternativas: \`csv.writer\` (para listas de listas), bibliotecas como Pandas para manejo de datos más complejo y exportación a CSV.`
      },
      {
        id: "003_dof_web_scraper_next-concept-5",
        name: "User-Agent Spoofing",
        explanation: `El User-Agent es una cadena de texto que el navegador envía al servidor web con cada solicitud. Identifica el tipo y versión del navegador, sistema operativo, y a veces otros detalles.
Ejemplo: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36"

User-Agent Spoofing (Suplantación del User-Agent):
-   Consiste en modificar esta cadena para que el scraper parezca un navegador real o diferente.
-   Algunos sitios web pueden bloquear o dar contenido diferente a User-Agents desconocidos o asociados comúnmente con bots (como el User-Agent por defecto de bibliotecas como \`requests\` en Python, o a veces incluso el de herramientas de automatización).
-   Playwright, por defecto, usa un User-Agent correspondiente al navegador que está controlando, lo cual ya es bastante bueno. Sin embargo, a veces se puede personalizar aún más.

Implementación en el script:
-   \`context = browser.new_context(user_agent="...")\`: Se crea un nuevo contexto de navegador y se especifica explícitamente una cadena de User-Agent común de un navegador Chrome en Windows.
-   \`page = context.new_page()\`: Las páginas creadas desde este contexto usarán el User-Agent especificado.

Consideraciones Éticas:
-   Si bien puede ayudar a acceder a contenido, el spoofing excesivo o para eludir medidas de seguridad específicas puede ir en contra de los términos de servicio del sitio.
-   Es preferible combinarlo con un comportamiento de scraping respetuoso (baja frecuencia de solicitudes, respeto a \`robots.txt\`).`
      }
    ],
    sourceCode: `
import csv
from playwright.sync_api import sync_playwright, Page, TimeoutError as PlaywrightTimeoutError
import os
import time
from urllib.parse import urljoin
from typing import List, Dict, Optional

# --- Constantes y Configuración ---
BASE_URL = "https://www.dof.gob.mx/"
CAMPO_BUSQUEDA_SELECTOR = "input#textobusqueda"

SELECTOR_SIGUIENTE_PAGINA = 'a:has(img[alt="siguiente"])' # INTERACTIVE_SEGMENT_TARGET: 003-next-page-selector
AVISO_SELECTOR_TEXTO = "text=Su solicitud no pudo ser procesada correctamente"
SELECTOR_RESULTADOS_PRINCIPALES = 'a[href*="nota_detalle.php"]'


def extraer_enlaces_de_pagina(page: Page) -> List[Dict[str, str]]:
    # ... (similar al script 002, enfocado en la extracción de esta página)
    enlaces_extraidos_pagina = []
    try:
        page.wait_for_selector(f"{SELECTOR_RESULTADOS_PRINCIPALES}:visible", timeout=20000)
    except PlaywrightTimeoutError:
        return []
    enlaces_elementos = page.query_selector_all(SELECTOR_RESULTADOS_PRINCIPALES)
    if enlaces_elementos:
        current_page_url = page.url
        for elemento_enlace in enlaces_elementos:
            href = elemento_enlace.get_attribute("href")
            texto_enlace = elemento_enlace.inner_text().strip().replace('\\n', ' ').replace('\\r', ' ')
            if href and texto_enlace:
                enlace_absoluto = urljoin(current_page_url, href)
                enlaces_extraidos_pagina.append({"texto": texto_enlace, "url": enlace_absoluto})
    return enlaces_extraidos_pagina


def buscar_en_dof_con_paginacion(termino_busqueda: str, nombre_archivo_csv: str, max_urls_a_recolectar: int):
    todos_los_enlaces_recolectados: List[Dict[str, str]] = []
    urls_ya_vistas = set() # INTERACTIVE_SEGMENT_TARGET: 003-urls-seen-set

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True) 
        context = browser.new_context( # INTERACTIVE_SEGMENT_TARGET: 003-user-agent
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36"
        )
        page = context.new_page()
        
        page.goto(BASE_URL, timeout=60000)
        page.wait_for_selector(CAMPO_BUSQUEDA_SELECTOR, state="visible", timeout=30000)
        page.fill(CAMPO_BUSQUEDA_SELECTOR, termino_busqueda)
        page.press(CAMPO_BUSQUEDA_SELECTOR, "Enter")
        try:
            page.wait_for_load_state('domcontentloaded', timeout=45000)
        except PlaywrightTimeoutError:
            print("Timeout esperando carga después de la búsqueda inicial.")
            
        pagina_actual = 1
        while len(todos_los_enlaces_recolectados) < max_urls_a_recolectar: # INTERACTIVE_SEGMENT_TARGET: 003-pagination-loop
            # ... (código para detectar página de aviso omitido por brevedad) ...

            enlaces_esta_pagina = extraer_enlaces_de_pagina(page) # INTERACTIVE_SEGMENT_TARGET: 003-extract-current-page

            if not enlaces_esta_pagina and pagina_actual == 1:
                print("La primera página de búsqueda no arrojó resultados.")
                break 
            if not enlaces_esta_pagina and pagina_actual > 1 :
                print("No se encontraron más enlaces en esta página. Fin de resultados.")
                break

            nuevos_enlaces_agregados_count = 0
            for enlace_info in enlaces_esta_pagina:
                if enlace_info["url"] not in urls_ya_vistas: # INTERACTIVE_SEGMENT_TARGET: 003-check-duplicates
                    if len(todos_los_enlaces_recolectados) < max_urls_a_recolectar:
                        todos_los_enlaces_recolectados.append(enlace_info)
                        urls_ya_vistas.add(enlace_info["url"])
                        nuevos_enlaces_agregados_count +=1
                    else:
                        break 
            
            if len(todos_los_enlaces_recolectados) >= max_urls_a_recolectar:
                print(f"Se alcanzó el máximo de {max_urls_a_recolectar} URLs.")
                break

            siguiente_pagina_locator = page.locator(SELECTOR_SIGUIENTE_PAGINA)
            try:
                if siguiente_pagina_locator.is_visible(timeout=10000):
                    if siguiente_pagina_locator.is_enabled(timeout=1000):
                        siguiente_pagina_locator.click() # INTERACTIVE_SEGMENT_TARGET: 003-click-next
                        page.wait_for_load_state('domcontentloaded', timeout=30000)
                        pagina_actual += 1
                        time.sleep(1) 
                    else:
                        print("Botón 'Siguiente Página' no habilitado (última página?).")
                        break
                else:
                    print("Botón 'Siguiente Página' no encontrado. Fin de paginación.")
                    break
            except PlaywrightTimeoutError:
                print("Timeout buscando 'Siguiente Página'. Fin de paginación.")
                break
            except Exception as e_click_siguiente:
                print(f"Error al hacer clic en 'Siguiente Página': {e_click_siguiente}. Fin.")
                break
        
        # ... (código para guardar CSV y cerrar navegador omitido por brevedad) ...
        if todos_los_enlaces_recolectados:
            with open(nombre_archivo_csv, mode='w', newline='', encoding='utf-8') as archivo_csv:
                escritor_csv = csv.DictWriter(archivo_csv, fieldnames=["texto", "url"])
                escritor_csv.writeheader()
                escritor_csv.writerows(todos_los_enlaces_recolectados)
            print(f"Enlaces guardados en '{nombre_archivo_csv}'.")
        if browser and browser.is_connected():
            browser.close()

if __name__ == "__main__":
    termino_busqueda_main = "decreto" 
    nombre_archivo_main = "resultados_dof_paginado.csv"
    max_urls_main = 50 
    buscar_en_dof_con_paginacion(termino_busqueda_main, nombre_archivo_main, max_urls_main)
`,
    interactiveSegments: [
      {
        id: "003-next-page-selector",
        label: "Selector para 'Siguiente Página'",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 003-next-page-selector/,
        explanation: "Este selector CSS avanzado `a:has(img[alt=\"siguiente\"])` se utiliza para localizar el enlace de 'Siguiente Página'. Selecciona un tag `<a>` que contenga un tag `<img>` con el atributo `alt` igual a 'siguiente'.",
        relatedConceptIds: ["003_dof_web_scraper_next-concept-1"]
      },
      {
        id: "003-urls-seen-set",
        label: "Conjunto de URLs Vistas",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 003-urls-seen-set/,
        explanation: "`urls_ya_vistas = set()` inicializa un conjunto para llevar un registro de las URLs ya recolectadas. Esto es crucial para evitar duplicados en los resultados finales.",
        relatedConceptIds: ["003_dof_web_scraper_next-concept-3"]
      },
      {
        id: "003-user-agent",
        label: "Establecer User-Agent",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 003-user-agent/,
        explanation: "Se crea un nuevo contexto de navegador con un User-Agent específico. Esto puede ayudar a que el scraper parezca un navegador estándar y evite bloqueos simples basados en User-Agent.",
        relatedConceptIds: ["003_dof_web_scraper_next-concept-5"]
      },
      {
        id: "003-pagination-loop",
        label: "Bucle de Paginación",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 003-pagination-loop/,
        explanation: "Este bucle `while` controla el proceso de paginación. Continúa mientras el número de URLs recolectadas sea menor que `max_urls_a_recolectar` y se puedan encontrar más páginas.",
        relatedConceptIds: ["003_dof_web_scraper_next-concept-0", "003_dof_web_scraper_next-concept-2"]
      },
       {
        id: "003-extract-current-page",
        label: "Extraer enlaces de página actual",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 003-extract-current-page/,
        explanation: "La función `extraer_enlaces_de_pagina(page)` se llama para obtener todos los enlaces relevantes de la página cargada actualmente.",
        relatedConceptIds: ["002_dof_web_scraper-concept-4"]
      },
      {
        id: "003-check-duplicates",
        label: "Verificar URLs duplicadas",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 003-check-duplicates/,
        explanation: "Antes de añadir una URL a la lista de resultados, se comprueba si `enlace_info[\"url\"]` ya existe en `urls_ya_vistas`. Si no, se añade a ambas colecciones.",
        relatedConceptIds: ["003_dof_web_scraper_next-concept-3"]
      },
      {
        id: "003-click-next",
        label: "Clic en 'Siguiente Página'",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 003-click-next/,
        explanation: "Si el localizador de 'Siguiente Página' es visible y está habilitado, se hace clic en él con `siguiente_pagina_locator.click()` para navegar a la siguiente tanda de resultados.",
        relatedConceptIds: ["003_dof_web_scraper_next-concept-0", "002_dof_web_scraper-concept-2"]
      }
    ]
  },
  {
    id: "004_procesar_urls_dof",
    title: "004_procesar_urls_dof.py",
    generalPurpose: "Visita cada URL recolectada del CSV y guarda el contenido textual completo de la nota del DOF en archivos .txt individuales.",
    detailedExplanation: `Este script toma el CSV de URLs del paso anterior. Para cada URL, navega a la página
de detalle de la nota del DOF y extrae el contenido textual principal del documento
(identificado por el selector 'div#DivDetalleNota'). El texto extraído se limpia
mínimamente y se guarda en un archivo '.txt' individual, en una carpeta nombrada
según el término de búsqueda original. Incluye un retardo aleatorio entre
solicitudes para ser cortés con el servidor.`,
    keyConcepts: [
      {
        id: "004_procesar_urls_dof-concept-0",
        name: "Procesamiento de Datos en Pipeline",
        explanation: `Un pipeline de procesamiento de datos es una secuencia de pasos donde la salida de un paso se convierte en la entrada del siguiente. Esto permite modularizar tareas complejas en componentes más pequeños y manejables.
En este proyecto DOF Scraper y RAG:
1.  Script 003 (o 002): Recolecta URLs y las guarda en un CSV. (Salida: \`resultados_dof_paginado.csv\`)
2.  Script 004 (este script): Lee el CSV de URLs (Entrada), visita cada URL, extrae el contenido completo y lo guarda en archivos .txt. (Salida: Carpeta con archivos .txt)
3.  Script 005: Lee los archivos .txt (Entrada), genera resúmenes y los guarda. (Salida: Carpeta con resúmenes .txt)
4.  Script 007: Lee los archivos .txt originales (Entrada), los fragmenta, genera embeddings y crea una base de datos vectorial. (Salida: Base de datos LanceDB)
Y así sucesivamente.

Ventajas:
-   Modularidad: Cada script tiene una responsabilidad clara.
-   Reusabilidad: Los componentes individuales pueden ser reutilizados.
-   Depuración: Es más fácil aislar y corregir problemas en un paso específico.
-   Escalabilidad: Se pueden optimizar o escalar partes individuales del pipeline.
-   Persistencia Intermedia: Guardar resultados intermedios (como el CSV de URLs o los .txt) permite reanudar el proceso desde un punto intermedio si algo falla, sin tener que empezar desde cero.`
      },
      {
        id: "004_procesar_urls_dof-concept-1",
        name: "Lectura de Archivos CSV (\`csv.DictReader\`)",
        explanation: `Así como \`csv.DictWriter\` escribe diccionarios a CSV, \`csv.DictReader\` lee archivos CSV y mapea la información de cada fila a un diccionario.
\`csv.DictReader\`:
-   Trata la primera fila del CSV como los encabezados de columna (claves del diccionario).
-   Cada fila subsiguiente se convierte en un diccionario donde las claves son los encabezados y los valores son los datos de esa fila.
-   Es más conveniente que \`csv.reader\` (que devuelve listas) cuando se quiere acceder a los datos por nombre de columna.

Uso en el script:
1.  Abrir el archivo CSV en modo lectura (\`r\`): \`with open(archivo_csv_completo, mode='r', newline='', encoding='utf-8') as f_csv:\`.
2.  Crear una instancia de \`DictReader\`: \`lector_csv = csv.DictReader(f_csv)\`.
3.  Iterar sobre \`lector_csv\` para obtener cada fila como un diccionario:
    \`for fila in lector_csv:\`
    -   Dentro del bucle, \`fila\` es un diccionario. Por ejemplo, \`fila["url"]\` y \`fila["texto"]\` acceden a los valores de las columnas "url" y "texto" respectivamente.
    -   \`enlaces_a_procesar.append(fila)\` guarda estos diccionarios para su procesamiento posterior.

Esto permite al script tomar las URLs y sus textos asociados (que pueden usarse para nombrar archivos) del CSV generado por el script anterior.`
      },
      {
        id: "004_procesar_urls_dof-concept-2",
        name: "Extracción de Contenido Específico (identificar el contenedor principal)",
        explanation: `Una vez que el script navega a una página de detalle de una nota del DOF, el objetivo es extraer el cuerpo principal del texto del documento.
Esto implica:
1.  Inspección del DOM: Usar las herramientas de desarrollador del navegador en una página de detalle típica para identificar el elemento HTML que envuelve el contenido principal de la nota.
    -   Buscar un \`<div>\`, \`<article>\`, o sección similar con un ID o clase distintiva.
    -   En este caso, se identificó que el contenido está dentro de un \`div\` con el id "DivDetalleNota".
    -   Por lo tanto, el selector es: \`SELECTOR_CONTENIDO_NOTA = "div#DivDetalleNota"\`

2.  Localización y Extracción con Playwright:
    -   \`contenido_elemento = page.locator(SELECTOR_CONTENIDO_NOTA)\`: Se obtiene un localizador para este div.
    -   \`if not contenido_elemento.is_visible(timeout=20000)\`: Se verifica si el contenedor existe y es visible. Esto es importante porque si el selector es incorrecto o la página no cargó como se esperaba, intentar extraer texto de un elemento no existente causaría un error.
    -   \`texto_nota = contenido_elemento.inner_text()\`: Si el contenedor es visible, se extrae todo el texto interno, que corresponde al contenido de la nota.

3.  Limpieza Mínima:
    -   \`texto_nota = re.sub(r'\\s\\s+', ' ', texto_nota)\`: Reemplaza múltiples espacios en blanco con uno solo.
    -   \`texto_nota = texto_nota.strip()\`: Elimina espacios en blanco al inicio y al final del texto.

Este proceso asegura que se capture el texto relevante de la página, excluyendo cabeceras, pies de página, menús de navegación, etc.`
      },
      {
        id: "004_procesar_urls_dof-concept-3",
        name: "Sanitización de Nombres de Archivo/Carpeta (\`re.sub\`)",
        explanation: `Los sistemas operativos tienen restricciones sobre los caracteres que se pueden usar en nombres de archivos y carpetas (ej. \`/\`, \`\\\`, \`:\`, \`*\`, \`?\`, \`"\`, \`<\`, \`>\`, \`|\` suelen ser problemáticos). Además, los espacios pueden ser inconvenientes en algunos contextos.
La "sanitización" es el proceso de modificar una cadena de texto para que sea un nombre de archivo/carpeta válido y útil.

\`re.sub(patron, reemplazo, cadena)\`:
-   Función del módulo \`re\` (expresiones regulares) de Python.
-   Busca todas las ocurrencias de \`patron\` en \`cadena\` y las reemplaza con \`reemplazo\`.

Implementación en \`sanitizar_nombre()\`:
1.  \`nombre = nombre.lower()\`: Convierte a minúsculas para consistencia.
2.  \`nombre = re.sub(r'\\s+', '_', nombre)\`: Reemplaza una o más ocurrencias de caracteres de espacio en blanco (\`\\s+\`) con un guion bajo (\`_\`).
3.  \`if es_carpeta: nombre = re.sub(r'[^\\w-]', '', nombre)\`:
    -   Si es para un nombre de carpeta, elimina (\`''\`) cualquier carácter que NO sea (\`^\`) alfanumérico (\`\\w\`, incluye letras, números y guion bajo) o un guion (\`-\`). Esto es más restrictivo.
4.  \`else: nombre = re.sub(r'[^\\w.-]', '', nombre)\`:
    -   Si es para un nombre de archivo, permite también puntos (\`.\`) para las extensiones.
5.  \`nombre = nombre[:150]\`: Trunca el nombre a 150 caracteres para evitar problemas con límites de longitud de ruta en algunos sistemas.
6.  \`if not nombre: return "documento_sin_titulo"\`: Si después de sanitizar queda vacío, devuelve un nombre por defecto.

Esto asegura que los nombres de archivo (derivados del título de la nota) y la carpeta contenedora (derivada del término de búsqueda) sean válidos y seguros para el sistema de archivos.`
      },
      {
        id: "004_procesar_urls_dof-concept-4",
        name: "Operaciones de Sistema de Archivos (crear directorios, escribir archivos)",
        explanation: `El módulo \`os\` de Python proporciona funciones para interactuar con el sistema operativo, incluyendo operaciones de sistema de archivos.

Operaciones Usadas en el Script:
1.  Creación de Directorios:
    -   \`nombre_carpeta_base = sanitizar_nombre(...) + "_colectados"\`: Se define el nombre de la carpeta.
    -   \`script_dir = os.path.dirname(__file__) if "__file__" in locals() else "."\`: Obtiene la ruta del directorio donde se está ejecutando el script.
    -   \`ruta_carpeta_base = os.path.join(script_dir, nombre_carpeta_base)\`: Construye la ruta completa a la nueva carpeta. \`os.path.join\` es la forma correcta de unir componentes de ruta de forma independiente del sistema operativo.
    -   \`if not os.path.exists(ruta_carpeta_base):\`: Verifica si la carpeta ya existe.
    -   \`os.makedirs(ruta_carpeta_base)\`: Crea la carpeta. \`makedirs\` crea directorios intermedios si no existen (a diferencia de \`mkdir\`).

2.  Escritura de Archivos:
    -   \`nombre_archivo_txt = sanitizar_nombre(texto_titulo_original) + ".txt"\`: Se define el nombre del archivo de texto.
    -   \`ruta_archivo_txt = os.path.join(ruta_carpeta_base, nombre_archivo_txt)\`: Se construye la ruta completa al archivo.
    -   \`with open(ruta_archivo_txt, "w", encoding="utf-8") as f_txt:\`: Abre el archivo en modo escritura (\`w\`). Si el archivo no existe, se crea. Si existe, se sobrescribe. \`encoding="utf-8"\` es crucial para manejar correctamente diversos caracteres.
    -   \`f_txt.write(contenido_texto)\`: Escribe el contenido extraído al archivo.

Otras funciones comunes de \`os\` y \`os.path\`: \`os.listdir()\`, \`os.remove()\`, \`os.path.isfile()\`, \`os.path.isdir()\`.`
      },
      {
        id: "004_procesar_urls_dof-concept-5",
        name: "Web Scraping Ético (retardos)",
        explanation: `Al realizar web scraping, es fundamental ser "cortés" con el servidor web para evitar sobrecargarlo. Una alta frecuencia de solicitudes desde una misma IP puede:
-   Degradar el rendimiento del sitio para otros usuarios.
-   Disparar medidas de seguridad que bloqueen la IP del scraper.
-   Ser considerado un comportamiento abusivo.

Introducir Retardos (Delays):
-   Una práctica común es añadir una pausa (\`time.sleep()\`) entre solicitudes.
-   \`import time\`
-   \`import random\`
-   \`MIN_DELAY_SECONDS = 1.0\`
-   \`MAX_DELAY_SECONDS = 3.0\`

Implementación en el script:
-   \`tiempo_espera = random.uniform(MIN_DELAY_SECONDS, MAX_DELAY_SECONDS)\`: Genera un número flotante aleatorio entre el mínimo y máximo de segundos especificados. Usar un retardo aleatorio en lugar de uno fijo puede hacer que el patrón de solicitudes parezca menos robótico.
-   \`time.sleep(tiempo_espera)\`: Pausa la ejecución del script durante el \`tiempo_espera\` calculado.
-   Este retardo se aplica *después* de procesar cada URL y *antes* de solicitar la siguiente:
    \`if i + 1 < len(enlaces_a_procesar): time.sleep(tiempo_espera)\`

Esto ayuda a distribuir la carga en el servidor del DOF y reduce la probabilidad de ser bloqueado. La duración adecuada del retardo depende del sitio web y de la cantidad de datos a extraer.`
      }
    ],
    sourceCode: `
import csv
import os
import re 
from playwright.sync_api import sync_playwright, Page, TimeoutError as PlaywrightTimeoutError
from typing import List, Dict, Optional
import time
import random 

SELECTOR_CONTENIDO_NOTA = "div#DivDetalleNota" # INTERACTIVE_SEGMENT_TARGET: 004-content-selector
MIN_DELAY_SECONDS = 1.0
MAX_DELAY_SECONDS = 3.0

def sanitizar_nombre(nombre: str, es_carpeta=False) -> str: # INTERACTIVE_SEGMENT_TARGET: 004-sanitize-name
    nombre = nombre.lower()
    nombre = re.sub(r'\\s+', '_', nombre)
    if es_carpeta:
        nombre = re.sub(r'[^\\w-]', '', nombre)
    else:
        nombre = re.sub(r'[^\\w.-]', '', nombre)
    nombre = nombre[:150]
    if not nombre:
        return "documento_sin_titulo"
    return nombre

def extraer_contenido_de_nota(page: Page, url: str) -> Optional[str]:
    print(f"  Visitando URL: {url}")
    try:
        page.goto(url, timeout=60000, wait_until='domcontentloaded')
        contenido_elemento = page.locator(SELECTOR_CONTENIDO_NOTA)
        if not contenido_elemento.is_visible(timeout=20000): # INTERACTIVE_SEGMENT_TARGET: 004-check-content-visible
            # ... (código de manejo de error si no es visible)
            return None
        texto_nota = contenido_elemento.inner_text() # INTERACTIVE_SEGMENT_TARGET: 004-extract-inner-text
        texto_nota = re.sub(r'\\s\\s+', ' ', texto_nota) 
        texto_nota = texto_nota.strip()
        return texto_nota
    except PlaywrightTimeoutError:
        print(f"  TIMEOUT al cargar o encontrar contenido en: {url}")
    except Exception as e:
        print(f"  Error al procesar URL {url}: {e}")
    return None

def procesar_urls_y_guardar_contenido(archivo_csv_entrada: str, termino_busqueda_original: str):
    nombre_carpeta_base = sanitizar_nombre(termino_busqueda_original, es_carpeta=True) + "_colectados"
    script_dir = os.path.dirname(__file__) if "__file__" in locals() else "."
    ruta_carpeta_base = os.path.join(script_dir, nombre_carpeta_base)
    
    if not os.path.exists(ruta_carpeta_base):
        os.makedirs(ruta_carpeta_base) # INTERACTIVE_SEGMENT_TARGET: 004-create-folder
        print(f"Carpeta creada: {ruta_carpeta_base}")

    archivo_csv_completo = os.path.join(script_dir, archivo_csv_entrada)
    enlaces_a_procesar: List[Dict[str, str]] = []
    with open(archivo_csv_completo, mode='r', newline='', encoding='utf-8') as f_csv: # INTERACTIVE_SEGMENT_TARGET: 004-read-csv
        lector_csv = csv.DictReader(f_csv)
        for fila in lector_csv:
            enlaces_a_procesar.append(fila)
    
    if not enlaces_a_procesar: return
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True) 
        context = browser.new_context(
             user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        )
        page = context.new_page()
        archivos_guardados_count = 0
        for i, enlace_info in enumerate(enlaces_a_procesar):
            url_nota = enlace_info.get("url")
            texto_titulo_original = enlace_info.get("texto", "documento_desconocido")
            if not url_nota: continue

            contenido_texto = extraer_contenido_de_nota(page, url_nota)

            if contenido_texto:
                nombre_archivo_txt = sanitizar_nombre(texto_titulo_original) + ".txt"
                ruta_archivo_txt = os.path.join(ruta_carpeta_base, nombre_archivo_txt)
                try:
                    with open(ruta_archivo_txt, "w", encoding="utf-8") as f_txt: # INTERACTIVE_SEGMENT_TARGET: 004-write-txt
                        f_txt.write(f"URL: {url_nota}\\n")
                        f_txt.write(f"TÍTULO ORIGINAL: {texto_titulo_original}\\n\\n")
                        f_txt.write("-------------------- CONTENIDO --------------------\\n\\n")
                        f_txt.write(contenido_texto)
                    archivos_guardados_count += 1
                except Exception as e_write:
                    print(f"  Error al escribir archivo {ruta_archivo_txt}: {e_write}")
            
            if i + 1 < len(enlaces_a_procesar):
                tiempo_espera = random.uniform(MIN_DELAY_SECONDS, MAX_DELAY_SECONDS) # INTERACTIVE_SEGMENT_TARGET: 004-random-delay
                time.sleep(tiempo_espera)
        browser.close()
        print(f"\\nProcesamiento finalizado. Se guardaron {archivos_guardados_count} archivos.")

if __name__ == "__main__":
    archivo_csv_con_urls = "resultados_dof_paginado.csv" 
    termino_busqueda_usado = "decreto" 
    # ... (resto del main)
    procesar_urls_y_guardar_contenido(archivo_csv_con_urls, termino_busqueda_usado) 
`,
    interactiveSegments: [
      {
        id: "004-content-selector",
        label: "Selector de Contenido Principal",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 004-content-selector/,
        explanation: "El selector CSS `div#DivDetalleNota` se usa para identificar el elemento `<div>` que contiene el texto principal de la nota del DOF en su página de detalle.",
        relatedConceptIds: ["004_procesar_urls_dof-concept-2", "002_dof_web_scraper-concept-1"]
      },
      {
        id: "004-sanitize-name",
        label: "Función para Sanitizar Nombres",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 004-sanitize-name/,
        explanation: "La función `sanitizar_nombre` toma una cadena y la limpia para que sea un nombre de archivo o carpeta válido, eliminando caracteres problemáticos y reemplazando espacios.",
        relatedConceptIds: ["004_procesar_urls_dof-concept-3"]
      },
      {
        id: "004-check-content-visible",
        label: "Verificar Visibilidad del Contenido",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 004-check-content-visible/,
        explanation: "Antes de extraer texto, `contenido_elemento.is_visible()` comprueba si el contenedor principal es realmente visible en la página. Esto evita errores si el selector es incorrecto o la página no cargó bien.",
        relatedConceptIds: ["004_procesar_urls_dof-concept-2", "002_dof_web_scraper-concept-3"]
      },
      {
        id: "004-extract-inner-text",
        label: "Extraer Texto del Contenido",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 004-extract-inner-text/,
        explanation: "`contenido_elemento.inner_text()` extrae todo el texto visible dentro del elemento `DivDetalleNota`, que corresponde al contenido de la nota oficial.",
        relatedConceptIds: ["004_procesar_urls_dof-concept-2", "002_dof_web_scraper-concept-4"]
      },
      {
        id: "004-create-folder",
        label: "Crear Carpeta de Salida",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 004-create-folder/,
        explanation: "`os.makedirs(ruta_carpeta_base)` crea el directorio donde se guardarán los archivos .txt. Se verifica primero si ya existe para evitar errores.",
        relatedConceptIds: ["004_procesar_urls_dof-concept-4"]
      },
      {
        id: "004-read-csv",
        label: "Leer URLs del Archivo CSV",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 004-read-csv/,
        explanation: "El script abre el archivo CSV generado por el script anterior y usa `csv.DictReader` para leer cada fila como un diccionario, obteniendo las URLs a procesar.",
        relatedConceptIds: ["004_procesar_urls_dof-concept-1", "004_procesar_urls_dof-concept-0"]
      },
      {
        id: "004-write-txt",
        label: "Escribir Contenido a Archivo .txt",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 004-write-txt/,
        explanation: "Para cada URL procesada, el contenido textual extraído se guarda en un nuevo archivo `.txt`. El nombre del archivo se deriva del título original de la nota, sanitizado previamente.",
        relatedConceptIds: ["004_procesar_urls_dof-concept-4"]
      },
      {
        id: "004-random-delay",
        label: "Retardo Aleatorio entre Solicitudes",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 004-random-delay/,
        explanation: "`time.sleep(random.uniform(MIN_DELAY_SECONDS, MAX_DELAY_SECONDS))` introduce una pausa aleatoria entre el procesamiento de cada URL. Esto es una práctica de scraping ético para no sobrecargar el servidor.",
        relatedConceptIds: ["004_procesar_urls_dof-concept-5"]
      }
    ]
  },
  {
    id: "005_generar_resumenes_dof",
    title: "005_generar_resumenes_dof.py",
    generalPurpose: "Lee los archivos .txt de contenido completo y utiliza la API de Groq para generar un resumen de cada documento.",
    detailedExplanation: `Toma los archivos de texto completos y emplea un Modelo de Lenguaje Grande (LLM) a
través de la API de Groq (configurado para Llama-4-Scout) para crear resúmenes.
El texto se trunca usando \`tiktoken\` para no exceder los límites de contexto del LLM.
Construye un prompt específico para la tarea de resumen. El script gestiona la
interacción con la API de Groq, incluyendo la carga de claves API desde \`.env\` y
el manejo de límites de la API (RPM, TPM). Los resúmenes se guardan en una nueva
estructura de carpetas. Implementa renombrado de carpetas "OLD".`,
    keyConcepts: [
      {
        id: "005_generar_resumenes_dof-concept-0",
        name: "Modelos de Lenguaje Grandes (LLMs)",
        explanation: `Los Modelos de Lenguaje Grandes (LLMs, por sus siglas en inglés Large Language Models) son modelos de inteligencia artificial entrenados con enormes cantidades de datos de texto.
Características Principales:
-   Capacidad de Comprensión y Generación: Pueden entender el lenguaje natural y generar texto coherente y contextualmente relevante.
-   Versatilidad: Se utilizan para una amplia gama de tareas como traducción, resumen, respuesta a preguntas, generación de código, escritura creativa, etc.
-   Modelos Pre-entrenados: Generalmente, se parte de un modelo base pre-entrenado por organizaciones como OpenAI (GPT), Google (Gemini, PaLM), Meta (Llama), Anthropic (Claude), Mistral AI.
-   Fine-tuning (Ajuste Fino): Pueden ser adaptados (fine-tuned) a tareas o dominios específicos con conjuntos de datos más pequeños y especializados.
-   Interacción mediante Prompts: Se interactúa con ellos dándoles instrucciones en lenguaje natural (prompts).

En este script, se usa un LLM (Llama-4-Scout a través de Groq) para la tarea específica de resumir documentos del DOF.`
      },
      {
        id: "005_generar_resumenes_dof-concept-1",
        name: "APIs de LLMs (Groq)",
        explanation: `Muchas organizaciones que desarrollan LLMs los ofrecen a través de APIs (Interfaces de Programación de Aplicaciones). Esto permite a los desarrolladores integrar las capacidades de los LLMs en sus propias aplicaciones sin necesidad de alojar o gestionar los modelos ellos mismos.

Groq:
-   Es una empresa que ofrece acceso a LLMs de código abierto (como Llama, Mixtral) a través de una API, destacándose por su alta velocidad de inferencia (tokens por segundo) gracias a su hardware especializado (LPUs - Language Processing Units).
-   Proporciona una SDK (Software Development Kit) en Python (la biblioteca \`groq\`) para facilitar la interacción con su API.
-   Requiere una Clave API (API Key) para autenticación y seguimiento del uso.

Funcionamiento Típico de una API de LLM:
1.  Obtener una API Key del proveedor.
2.  Instalar la biblioteca cliente del proveedor (ej. \`pip install groq\`).
3.  En el código:
    -   Configurar el cliente con la API Key.
    -   Seleccionar un modelo disponible en la plataforma.
    -   Enviar una solicitud (request) con el prompt y otros parámetros (temperatura, max_tokens, etc.).
    -   Recibir una respuesta (response) que contiene el texto generado por el LLM.
    -   Manejar posibles errores y límites de la API.

Este script usa la API de Groq para enviar el contenido de los documentos y recibir resúmenes generados por \`meta-llama/Llama-4-Scout-17B-16E-Instruct\`.`
      },
      {
        id: "005_generar_resumenes_dof-concept-2",
        name: "Ingeniería de Prompts para Resúmenes",
        explanation: `La ingeniería de prompts ("prompt engineering") es el arte y la ciencia de diseñar entradas (prompts) efectivas para que un LLM genere la salida deseada. Para la tarea de resumen:
Principios Clave:
1.  Claridad y Especificidad: Indicar claramente la tarea. En lugar de "Resume esto", usar "Genera un resumen conciso en un solo párrafo que capture la esencia y los puntos más importantes del siguiente documento."
2.  Rol del LLM: Asignar un rol al LLM puede mejorar la calidad. Ej: "Eres un asistente experto en la extracción de información clave de documentos oficiales mexicanos."
3.  Formato de Salida: Especificar el formato deseado si es necesario (ej. "en un solo párrafo", "en viñetas").
4.  Restricciones y Guías:
    -   Indicar qué evitar: "Evita frases introductorias como 'El documento habla de...'".
    -   Indicar en qué enfocarse: "Ve directamente a los hechos y el propósito principal."
5.  Contexto: Proveer el texto a resumir de forma clara, a menudo delimitado. Ej: \`--- INICIO DEL DOCUMENTO ---\\n{texto_documento}\\n--- FIN DEL DOCUMENTO ---\`
6.  Iteración: Probar diferentes prompts y ajustar según los resultados.

El prompt usado en este script (\`prompt_resumen\`) aplica varios de estos principios para guiar al LLM de Groq a generar resúmenes concisos y factuales de los documentos del DOF.`
      },
      {
        id: "005_generar_resumenes_dof-concept-3",
        name: "Tokenización para LLMs (\`tiktoken\`), Límites de Contexto, Truncado",
        explanation: `Tokenización:
-   Los LLMs no procesan texto como caracteres o palabras directamente, sino como "tokens". Un token puede ser una palabra, parte de una palabra (subpalabra), o un carácter de puntuación.
-   Diferentes LLMs usan diferentes tokenizadores. \`tiktoken\` es una biblioteca de OpenAI (usada aquí) que permite tokenizar texto según los esquemas de varios modelos (ej. \`cl100k_base\` para GPT-3.5/4 y algunos modelos Llama).
-   \`obtener_conteo_tokens_tiktoken()\` cuenta cuántos tokens tiene un texto.

Límites de Contexto (Context Window):
-   Cada LLM tiene un "límite de contexto" o "ventana de contexto", que es la cantidad máxima de tokens (entrada + salida) que puede procesar en una sola interacción.
-   Ej: Un modelo puede tener un límite de 4096 tokens, otro de 16K, 32K, 128K, etc.
-   Si el texto de entrada más el texto de salida esperado excede este límite, la API generalmente dará un error o truncará la entrada/salida.

Truncado:
-   Cuando un documento es demasiado largo para caber en la ventana de contexto del LLM, una estrategia simple es truncarlo: cortar el texto para que no exceda un número máximo de tokens.
-   \`truncar_texto_por_tokens()\` en el script hace esto:
    1.  Tokeniza el texto.
    2.  Si el número de tokens excede \`MAX_TOKENS_PARA_ENVIAR_MODELO\`, corta la lista de tokens.
    3.  Decodifica los tokens truncados de nuevo a texto.
-   Desventaja del truncado simple: Se puede perder información importante al final del documento. Otras estrategias incluyen resumir por partes, o técnicas más avanzadas de RAG.

Este script usa \`tiktoken\` para contar y truncar los documentos del DOF antes de enviarlos a Groq, asegurando que no se exceda \`MAX_TOKENS_PARA_ENVIAR_MODELO\`.`
      },
      {
        id: "005_generar_resumenes_dof-concept-4",
        name: "Manejo de Límites de API (Rate Limiting)",
        explanation: `Los proveedores de API de LLMs imponen límites de uso (rate limits) para asegurar la disponibilidad del servicio para todos los usuarios y gestionar la carga en sus sistemas.
Tipos Comunes de Límites:
-   RPM (Requests Per Minute): Número máximo de solicitudes API que puedes hacer en un minuto.
-   TPM (Tokens Per Minute): Número máximo de tokens (entrada + salida) que puedes procesar en un minuto.
-   Algunos servicios pueden tener límites diarios o por segundo.

Manejo de Límites en el Script (\`verificar_y_esperar_limites_api\`):
1.  Seguimiento Local:
    -   \`solicitudes_en_minuto_actual\`: Contador de solicitudes hechas.
    -   \`tokens_procesados_en_minuto_actual\`: Contador de tokens procesados.
    -   \`inicio_minuto_actual\`: Marca de tiempo de cuándo comenzó la "ventana" del minuto actual.
2.  Reseteo por Minuto: Si ha pasado más de 60 segundos desde \`inicio_minuto_actual\`, se resetean los contadores.
3.  Verificación Antes de la Solicitud:
    -   Comprueba si la solicitud actual por sí sola es muy grande y podría necesitar esperar al siguiente minuto.
    -   Si \`solicitudes_en_minuto_actual\` >= \`LIMITE_SOLICITUDES_POR_MINUTO\`: Espera hasta que termine el minuto actual.
    -   Si \`tokens_procesados_en_minuto_actual\` + tokens_proyectados_para_esta_solicitud > \`LIMITE_TOKENS_POR_MINUTO_PROCESADOS\`: Espera.
4.  Actualización Después de la Solicitud: Incrementa \`solicitudes_en_minuto_actual\` y \`tokens_procesados_en_minuto_actual\`.
5.  Reintentos con Backoff Exponencial (no implementado explícitamente en esta función pero sí en \`generar_resumen_con_groq\`): Si una API devuelve un error de rate limit (ej. HTTP 429), esperar un tiempo y reintentar, aumentando el tiempo de espera en cada reintento.

Este script implementa una gestión proactiva de los límites de RPM y TPM definidos para la API de Groq, además de reintentos en caso de error.`
      },
      {
        id: "005_generar_resumenes_dof-concept-5",
        name: "Variables de Entorno (\`python-dotenv\`)",
        explanation: `Las variables de entorno son variables cuyo valor se establece fuera del programa, en el entorno del sistema operativo o en un archivo especial, y están disponibles para el programa en tiempo de ejecución.
Son comúnmente usadas para:
-   Configuraciones específicas del entorno (desarrollo, pruebas, producción).
-   Credenciales sensibles como claves API, contraseñas de base de datos.

\`python-dotenv\`:
-   Es una biblioteca de Python que carga variables de entorno desde un archivo llamado \`.env\` (por defecto) ubicado en el directorio raíz del proyecto.
-   El archivo \`.env\` es un archivo de texto simple con pares \`CLAVE=VALOR\`, uno por línea.
-   Ejemplo de \`.env\`:
    GROQ_API_KEY="tu_clave_api_aqui"
-   IMPORTANTE: El archivo \`.env\` NUNCA debe ser subido a sistemas de control de versiones (ej. Git). Se debe agregar a \`.gitignore\`.

Uso en el script:
1.  \`from dotenv import load_dotenv\`: Importa la función.
2.  \`load_dotenv()\`: Carga las variables del archivo \`.env\` al entorno.
3.  \`GROQ_API_KEY = os.getenv("GROQ_API_KEY")\`: Accede al valor de la variable de entorno \`GROQ_API_KEY\` usando \`os.getenv()\`. Si la variable no está definida, \`os.getenv()\` devuelve \`None\`.

Beneficios:
-   Seguridad: Mantiene las credenciales fuera del código fuente.
-   Flexibilidad: Fácil cambiar configuraciones sin modificar el código.
-   Portabilidad: Cada desarrollador o entorno de despliegue puede tener su propio archivo \`.env\`.`
      },
      {
        id: "005_generar_resumenes_dof-concept-6",
        name: "Gestión de Carpetas (\`shutil.move\`)",
        explanation: `El módulo \`shutil\` (shell utilities) en Python proporciona funciones de alto nivel para operaciones de archivos y colecciones de archivos, como copiar, mover, renombrar y eliminar.

\`shutil.move(origen, destino)\`:
-   Mueve un archivo o directorio (recursivamente) desde \`origen\` a \`destino\`.
-   Si \`destino\` es un directorio existente, \`origen\` se mueve dentro de ese directorio.
-   Si \`destino\` especifica un nombre de archivo en un directorio existente, \`origen\` se renombra a \`destino\`.
-   Si \`origen\` y \`destino\` están en el mismo sistema de archivos, \`os.rename()\` se usa internamente (generalmente atómico). Si están en sistemas de archivos diferentes, \`origen\` se copia y luego se elimina.

Uso en la función \`renombrar_carpeta_si_existe()\`:
-   Este script crea una carpeta para guardar los resúmenes (ej. \`decreto_colectados_resumen\`).
-   Si el script se ejecuta varias veces, para evitar conflictos o mezclar resultados de ejecuciones anteriores, la función \`renombrar_carpeta_si_existe\` verifica si la carpeta de resúmenes ya existe.
-   Si existe, la renombra añadiendo un sufijo \`_OLD_XXX\` (ej. \`decreto_colectados_resumen_OLD_001\`).
    \`shutil.move(ruta_carpeta, nueva_ruta_old)\`
-   Esto preserva los resultados de ejecuciones anteriores y permite que el script actual cree una nueva carpeta limpia para los nuevos resúmenes.

Es una forma de gestionar los artefactos de salida del script de manera organizada.`
      }
    ],
    sourceCode: `
import os
import csv
import re
import time
import tiktoken
from groq import Groq
from dotenv import load_dotenv # INTERACTIVE_SEGMENT_TARGET: 005-import-dotenv
from typing import Optional, List, Dict
import shutil 

load_dotenv() # INTERACTIVE_SEGMENT_TARGET: 005-load-dotenv

GROQ_API_KEY = os.getenv("GROQ_API_KEY") # INTERACTIVE_SEGMENT_TARGET: 005-get-apikey
MODELO_GROQ = "meta-llama/Llama-4-Scout-17B-16E-Instruct" 
ENCODING_TIKTOKEN = "cl100k_base" 

LIMITE_SOLICITUDES_POR_MINUTO = 30
LIMITE_TOKENS_POR_MINUTO_PROCESADOS = 30000 
MAX_TOKENS_PARA_ENVIAR_MODELO = 25000 
MAX_COMPLETION_TOKENS_RESUMEN = 768 
TEMPERATURE_RESUMEN = 0.4 
MAX_API_REINTENTOS = 3
TIEMPO_ESPERA_REINTENTO_SEGUNDOS = 10
PAUSA_MINIMA_ENTRE_SOLICITUDES_SEGUNDOS = 2.0 

solicitudes_en_minuto_actual = 0
tokens_procesados_en_minuto_actual = 0
inicio_minuto_actual = time.time()

def sanitizar_nombre(nombre: str, es_carpeta=False) -> str:
    # ... (función de sanitización)
    nombre = nombre.lower()
    nombre = re.sub(r'\\s+', '_', nombre)
    if es_carpeta: nombre = re.sub(r'[^\\w-]', '', nombre)
    else: nombre = re.sub(r'[^\\w.-]', '', nombre)
    nombre = nombre[:150]
    if not nombre:
        if es_carpeta: return "documentos_sin_nombre_busqueda"
        return "documento_sin_titulo"
    return nombre

def renombrar_carpeta_si_existe(ruta_carpeta: str): # INTERACTIVE_SEGMENT_TARGET: 005-rename-folder
    if os.path.exists(ruta_carpeta):
        i = 1
        while True:
            nueva_ruta_old = f"{ruta_carpeta}_OLD_{i:03d}"
            if not os.path.exists(nueva_ruta_old):
                try:
                    shutil.move(ruta_carpeta, nueva_ruta_old) # INTERACTIVE_SEGMENT_TARGET: 005-shutil-move
                except Exception as e:
                    raise 
                break
            i += 1

def obtener_conteo_tokens_tiktoken(texto: str, encoding_nombre: str = ENCODING_TIKTOKEN) -> int:
    try:
        encoding = tiktoken.get_encoding(encoding_nombre)
        return len(encoding.encode(texto))
    except Exception: 
        return len(texto.split()) 

def truncar_texto_por_tokens(texto: str, encoding_nombre: str, max_tokens: int) -> str: # INTERACTIVE_SEGMENT_TARGET: 005-truncate-text
    try:
        encoding = tiktoken.get_encoding(encoding_nombre)
        tokens = encoding.encode(texto)
        if len(tokens) > max_tokens:
            tokens_truncados = tokens[:max_tokens]
            texto_truncado = encoding.decode(tokens_truncados)
            return texto_truncado
        return texto
    except Exception as e:
        # ... (fallback a truncado por caracteres)
        max_chars = max_tokens * 3 
        if len(texto) > max_chars: return texto[:max_chars]
        return texto

def verificar_y_esperar_limites_api(tokens_entrada_prompt: int): # INTERACTIVE_SEGMENT_TARGET: 005-rate-limit-check
    global solicitudes_en_minuto_actual, tokens_procesados_en_minuto_actual, inicio_minuto_actual
    # ... (lógica de manejo de límites de API detallada en la explicación del concepto)
    tiempo_actual = time.time()
    if tiempo_actual - inicio_minuto_actual >= 60:
        solicitudes_en_minuto_actual = 0; tokens_procesados_en_minuto_actual = 0; inicio_minuto_actual = tiempo_actual
    # ... (más verificaciones de RPM y TPM) ...
    if solicitudes_en_minuto_actual >= LIMITE_SOLICITUDES_POR_MINUTO:
        # ... esperar ...
        pass # Simplificado para brevedad
    if tokens_procesados_en_minuto_actual + tokens_entrada_prompt + MAX_COMPLETION_TOKENS_RESUMEN > LIMITE_TOKENS_POR_MINUTO_PROCESADOS:
        # ... esperar ...
        pass # Simplificado para brevedad


def generar_resumen_con_groq(cliente_groq: Groq, texto_documento: str) -> Optional[str]:
    global solicitudes_en_minuto_actual, tokens_procesados_en_minuto_actual

    prompt_resumen = ( # INTERACTIVE_SEGMENT_TARGET: 005-summary-prompt
        "Eres un asistente experto en la extracción de información clave de documentos oficiales mexicanos. "
        "Tu tarea es generar un resumen muy conciso, en un solo párrafo, que capture la esencia y los puntos más importantes del siguiente documento. "
        "Evita frases introductorias como 'El documento habla de...' o 'Este texto es sobre...'. Ve directamente a los hechos y el propósito principal."
        f"\\n\\n--- INICIO DEL DOCUMENTO ---\\n{texto_documento}\\n--- FIN DEL DOCUMENTO ---\\n\\n"
        "RESUMEN CONCISO EN UN PÁRRAFO:"
    )
    tokens_prompt_estimados = obtener_conteo_tokens_tiktoken(prompt_resumen)
    verificar_y_esperar_limites_api(tokens_prompt_estimados)

    for intento in range(MAX_API_REINTENTOS):
        try:
            stream = cliente_groq.chat.completions.create( # INTERACTIVE_SEGMENT_TARGET: 005-groq-api-call
                model=MODELO_GROQ,
                messages=[{"role": "user", "content": prompt_resumen}],
                temperature=TEMPERATURE_RESUMEN,
                max_tokens=MAX_COMPLETION_TOKENS_RESUMEN,
                stream=True,
            )
            resumen_completo = "".join([chunk.choices[0].delta.content or "" for chunk in stream])
            # ... (actualizar contadores de límites)
            solicitudes_en_minuto_actual += 1
            # ...
            return resumen_completo.strip() if resumen_completo.strip() else None
        except Exception as e:
            # ... (manejo de reintentos y errores)
            if "rate limit" in str(e).lower() or "429" in str(e).lower():
                # ... esperar y posiblemente resetear contadores ...
                pass
            elif intento < MAX_API_REINTENTOS - 1:
                time.sleep(TIEMPO_ESPERA_REINTENTO_SEGUNDOS)
            else:
                return None
    return None

def procesar_documentos_para_resumen(carpeta_textos_entrada: str, termino_busqueda_original: str):
    if not GROQ_API_KEY: return
    cliente_groq = Groq()
    # ... (lógica de creación/renombrado de carpetas) ...
    
    # Leer archivos .txt y procesarlos
    for i, nombre_archivo in enumerate(archivos_txt_encontrados): # Suponiendo que archivos_txt_encontrados está definido
        # ... (leer contenido del archivo .txt) ...
        texto_documento_completo = "..." # Extraído del archivo
        if not texto_documento_completo: continue

        texto_para_modelo = truncar_texto_por_tokens(
            texto_documento_completo, ENCODING_TIKTOKEN, MAX_TOKENS_PARA_ENVIAR_MODELO
        )
        resumen = generar_resumen_con_groq(cliente_groq, texto_para_modelo)
        if resumen:
            # ... (guardar resumen en archivo) ...
            pass
        if i + 1 < len(archivos_txt_encontrados): # Suponiendo archivos_txt_encontrados
             time.sleep(PAUSA_MINIMA_ENTRE_SOLICITUDES_SEGUNDOS) # INTERACTIVE_SEGMENT_TARGET: 005-pause-between-docs

if __name__ == "__main__":
    # ... (configuración del script)
    # Suponiendo que archivos_txt_encontrados es una lista de archivos a procesar
    archivos_txt_encontrados = [] # Placeholder, debe ser llenado en la lógica real de procesar_documentos_para_resumen
    procesar_documentos_para_resumen("carpeta_entrada", "termino_busqueda")
`,
    interactiveSegments: [
      {
        id: "005-import-dotenv",
        label: "Importar python-dotenv",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 005-import-dotenv/,
        explanation: "Se importa la biblioteca `dotenv` para cargar variables de entorno desde un archivo `.env`.",
        relatedConceptIds: ["005_generar_resumenes_dof-concept-5"]
      },
      {
        id: "005-load-dotenv",
        label: "Cargar Variables de Entorno",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 005-load-dotenv/,
        explanation: "`load_dotenv()` lee el archivo `.env` y carga las variables definidas allí en el entorno del script, haciéndolas accesibles a través de `os.getenv()`.",
        relatedConceptIds: ["005_generar_resumenes_dof-concept-5"]
      },
      {
        id: "005-get-apikey",
        label: "Obtener Clave API de Groq",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 005-get-apikey/,
        explanation: "`os.getenv(\"GROQ_API_KEY\")` recupera la clave API de Groq desde las variables de entorno. Es crucial para autenticarse con la API de Groq.",
        relatedConceptIds: ["005_generar_resumenes_dof-concept-1", "005_generar_resumenes_dof-concept-5"]
      },
       {
        id: "005-rename-folder",
        label: "Renombrar Carpeta Existente",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 005-rename-folder/,
        explanation: "La función `renombrar_carpeta_si_existe` se usa para mover una carpeta de resúmenes anterior (si existe) a un nuevo nombre con el sufijo '_OLD_XXX', preservando resultados previos.",
        relatedConceptIds: ["005_generar_resumenes_dof-concept-6"]
      },
      {
        id: "005-shutil-move",
        label: "Mover Carpeta con shutil.move",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 005-shutil-move/,
        explanation: "`shutil.move(origen, destino)` es la función que efectivamente renombra (mueve) la carpeta de resúmenes existente a la nueva ubicación '_OLD_XXX'.",
        relatedConceptIds: ["005_generar_resumenes_dof-concept-6"]
      },
      {
        id: "005-truncate-text",
        label: "Truncar Texto por Tokens",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 005-truncate-text/,
        explanation: "La función `truncar_texto_por_tokens` usa `tiktoken` para asegurar que el texto enviado al LLM no exceda `MAX_TOKENS_PARA_ENVIAR_MODELO`, cortándolo si es necesario.",
        relatedConceptIds: ["005_generar_resumenes_dof-concept-3"]
      },
      {
        id: "005-rate-limit-check",
        label: "Verificar Límites de API",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 005-rate-limit-check/,
        explanation: "Antes de cada llamada a la API, `verificar_y_esperar_limites_api` comprueba si se han alcanzado los límites de solicitudes o tokens por minuto (RPM/TPM) y espera si es necesario.",
        relatedConceptIds: ["005_generar_resumenes_dof-concept-4"]
      },
      {
        id: "005-summary-prompt",
        label: "Prompt para Resumen",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 005-summary-prompt/,
        explanation: "Este es el prompt diseñado para instruir al LLM de Groq sobre cómo generar el resumen. Incluye el rol, la tarea, restricciones y el formato del documento.",
        relatedConceptIds: ["005_generar_resumenes_dof-concept-0", "005_generar_resumenes_dof-concept-2"]
      },
      {
        id: "005-groq-api-call",
        label: "Llamada a la API de Groq",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 005-groq-api-call/,
        explanation: "`cliente_groq.chat.completions.create()` envía la solicitud al modelo LLM especificado en Groq, con el prompt y otros parámetros como temperatura y máximo de tokens para la respuesta.",
        relatedConceptIds: ["005_generar_resumenes_dof-concept-1"]
      },
      {
        id: "005-pause-between-docs",
        label: "Pausa entre Documentos",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 005-pause-between-docs/,
        explanation: "Se introduce una pequeña pausa (`PAUSA_MINIMA_ENTRE_SOLICITUDES_SEGUNDOS`) después de procesar cada documento para ser cortés con la API y ayudar a gestionar los límites de tasa.",
        relatedConceptIds: ["005_generar_resumenes_dof-concept-4"]
      }
    ]
  },
  {
    id: "006_contar_tokens_dof",
    title: "006_contar_tokens_dof.py",
    generalPurpose: "Analiza archivos de texto y cuenta tokens usando tiktoken (método OpenAI).",
    detailedExplanation: `Este script es una utilidad para cuantificar el tamaño de los documentos (originales
o resúmenes) en términos de tokens, usando \`tiktoken\` y el encoding \`"cl100k_base"\`
(relevante para modelos OpenAI y algunos Llama). Lee archivos \`.txt\`, extrae el
contenido principal y cuenta los tokens. Los resultados se guardan en un CSV.
Esto es útil para estimar costos de API y planificar estrategias de RAG.`,
    keyConcepts: [
      {
        id: "006_contar_tokens_dof-concept-0",
        name: "Tokenización (específica de OpenAI/tiktoken)",
        explanation: `La tokenización es el proceso de convertir una secuencia de texto en una secuencia de tokens. Los LLMs operan sobre estos tokens.
\`tiktoken\` es la biblioteca de tokenización de OpenAI. Permite:
-   Obtener el tokenizador (encoding) para un modelo específico (ej. "gpt-4", "text-embedding-ada-002").
-   Codificar texto a una lista de IDs de tokens: \`encoding.encode("hola mundo")\` -> \`[123, 456]\`.
-   Decodificar una lista de IDs de tokens de vuelta a texto: \`encoding.decode([123, 456])\` -> \`"hola mundo"\`.
-   Contar el número de tokens que un texto ocuparía para un modelo dado: \`len(encoding.encode(texto))\`.

Importancia:
-   Conocer el número de tokens es crucial para gestionar los límites de contexto de los LLMs.
-   Muchos modelos de API cobran por el número de tokens procesados (entrada + salida).
-   Ayuda a diseñar estrategias de fragmentación (chunking) para RAG.

Este script usa \`tiktoken\` para analizar el tamaño (en tokens) de los documentos del DOF, lo cual es útil para la planificación de los pasos siguientes que involucran LLMs (resumen, embedding, generación RAG).`
      },
      {
        id: "006_contar_tokens_dof-concept-1",
        name: "Encodings de \`tiktoken\` (\`cl100k_base\`)",
        explanation: `Un "encoding" en el contexto de \`tiktoken\` se refiere al esquema específico de tokenización que usa un modelo de lenguaje. Diferentes familias de modelos (o incluso versiones) pueden usar diferentes encodings.
\`cl100k_base\`:
-   Es el nombre del encoding utilizado por varios modelos modernos de OpenAI, incluyendo:
    -   Modelos GPT-3.5 Turbo
    -   Modelos GPT-4
    -   Modelos de embedding como \`text-embedding-ada-002\` y \`text-embedding-3-small\` / \`text-embedding-3-large\`.
-   También es el encoding base para algunos modelos de la familia Llama y otros modelos de código abierto, lo que lo hace bastante versátil.

Obtención del Encoding:
-   \`encoding = tiktoken.get_encoding("cl100k_base")\`: Carga el tokenizador específico.
-   Si se usa un nombre de modelo, \`tiktoken\` puede inferir el encoding: \`encoding = tiktoken.encoding_for_model("gpt-4")\`.

¿Por qué es importante el encoding correcto?
-   Usar el encoding incorrecto resultará en un conteo de tokens erróneo y puede llevar a problemas al interactuar con el LLM (ej. enviar más tokens de los que el modelo realmente ve, o viceversa).
-   La forma en que se dividen las palabras en subpalabras varía entre encodings.

Este script usa \`cl100k_base\` porque es un encoding común y relevante para los modelos que se podrían usar en las etapas posteriores del pipeline RAG (como embeddings de OpenAI o LLMs basados en Llama/GPT).`
      },
      {
        id: "006_contar_tokens_dof-concept-2",
        name: "Análisis de Corpus de Texto",
        explanation: `Un "corpus" de texto es una colección grande y estructurada de textos. En este proyecto, la colección de archivos \`.txt\` con el contenido de las notas del DOF forma un corpus.
Análisis de Corpus:
-   Implica examinar el corpus para entender sus propiedades estadísticas y lingüísticas.
-   En el contexto de LLMs y RAG, un análisis importante es el tamaño de los documentos:
    -   Distribución de longitudes de documentos (en tokens).
    -   Número de documentos muy largos o muy cortos.
    -   Promedio de tokens por documento.
-   Esta información es vital para:
    -   Estrategias de Fragmentación (Chunking): ¿Cuál es el tamaño de chunk óptimo? ¿Cuánto overlap se necesita?
    -   Estimación de Costos de API: Si se van a procesar todos los documentos con un LLM (ej. para embeddings o resúmenes), el conteo total de tokens da una idea del costo.
    -   Selección de Modelos: Algunos modelos tienen ventanas de contexto más grandes que otros.
    -   Optimización de Prompts: Si los documentos son consistentemente largos, se podría necesitar un enfoque de resumen iterativo o RAG sobre resúmenes.

Este script realiza una parte de este análisis: cuenta los tokens para cada documento y los guarda en un CSV. Este CSV podría luego ser analizado más a fondo (ej. con Pandas) para obtener estadísticas descriptivas sobre el tamaño del corpus documental del DOF recolectado.`
      },
      {
        id: "006_contar_tokens_dof-concept-3",
        name: "Estimación de Uso de API basada en Tokens",
        explanation: `Muchos servicios de API de LLMs (como OpenAI, Groq, Anthropic) basan su precio en el número de tokens procesados. Generalmente, hay costos separados para:
-   Tokens de Entrada (Input Tokens): Los tokens que componen el prompt enviado al modelo.
-   Tokens de Salida (Output Tokens/Completion Tokens): Los tokens que el modelo genera como respuesta.

Ejemplo:
-   Un modelo podría costar $0.001 por cada 1000 tokens de entrada y $0.002 por cada 1000 tokens de salida.

Importancia de la Estimación:
-   Presupuesto: Permite prever los costos de un proyecto que usa LLMs extensivamente.
-   Optimización: Motiva a:
    -   Hacer prompts más concisos (menos tokens de entrada).
    -   Pedir al LLM respuestas más cortas si es apropiado (menos tokens de salida).
    -   Elegir modelos con una buena relación costo/rendimiento para la tarea.
    -   Implementar estrategias de caching para evitar reprocesar las mismas solicitudes.

El script \`006_contar_tokens_dof.py\` ayuda en esta estimación al:
1.  Contar los tokens de los documentos originales (que serían entrada para resúmenes o embeddings).
2.  Si se aplica a los resúmenes generados por \`005_generar_resumenes_dof.py\`, contaría los tokens de esos resúmenes (que podrían ser entrada para un sistema RAG).

Con estos conteos, se puede multiplicar por las tarifas del proveedor de API para estimar los costos de procesar todo el corpus documental, por ejemplo, para generar embeddings para todos los fragmentos o resúmenes.`
      }
    ],
    sourceCode: `
import os
import csv
import re
import tiktoken 

def sanitizar_nombre(nombre: str, es_carpeta=False) -> str:
    # ... (función de sanitización)
    nombre = nombre.lower()
    nombre = re.sub(r'\\s+', '_', nombre)
    if es_carpeta: nombre = re.sub(r'[^\\w-]', '', nombre) 
    else: nombre = re.sub(r'[^\\w.-]', '', nombre) 
    nombre = nombre[:150] 
    if not nombre: 
        if es_carpeta: return "documentos_sin_nombre_busqueda"
        return "documento_sin_titulo"
    return nombre

def limpiar_nombre_para_documento(nombre_archivo_txt: str) -> str:
    # ... (función de limpieza de nombre)
    nombre_sin_extension = nombre_archivo_txt.rsplit('.txt', 1)[0]
    nombre_legible = nombre_sin_extension.replace('_', ' ')
    return ' '.join(word.capitalize() for word in nombre_legible.split())


def contar_tokens_openai(texto: str, modelo_encoding: str = "cl100k_base") -> int: # INTERACTIVE_SEGMENT_TARGET: 006-count-tokens-func
    try:
        encoding = tiktoken.get_encoding(modelo_encoding) # INTERACTIVE_SEGMENT_TARGET: 006-get-encoding
        tokens = encoding.encode(texto) # INTERACTIVE_SEGMENT_TARGET: 006-encode-text
        return len(tokens)
    except Exception as e:
        print(f"Error al tokenizar con tiktoken (modelo {modelo_encoding}): {e}")
        return 0

def contar_tokens_en_archivo_openai(ruta_archivo_txt: str, modelo_encoding: str = "cl100k_base") -> int:
    try:
        with open(ruta_archivo_txt, 'r', encoding='utf-8') as f:
            lineas = f.readlines()
        
        contenido_principal = []
        capturando_contenido = False
        for linea in lineas: # INTERACTIVE_SEGMENT_TARGET: 006-extract-file-content
            if "-------------------- CONTENIDO --------------------" in linea:
                capturando_contenido = True
                continue 
            if capturando_contenido:
                contenido_principal.append(linea)
        
        texto_completo = "".join(contenido_principal).strip()
        if not texto_completo: return 0
        return contar_tokens_openai(texto_completo, modelo_encoding)
    except Exception as e:
        print(f"Error leyendo o procesando el archivo {ruta_archivo_txt}: {e}")
        return 0

def generar_csv_conteo_tokens_openai(carpeta_textos: str, archivo_csv_salida: str, modelo_encoding: str = "cl100k_base"):
    if not os.path.isdir(carpeta_textos): return
    datos_tokens = []
    for nombre_archivo in os.listdir(carpeta_textos): # INTERACTIVE_SEGMENT_TARGET: 006-iterate-files
        if nombre_archivo.endswith(".txt"):
            ruta_completa_archivo = os.path.join(carpeta_textos, nombre_archivo)
            nombre_documento = limpiar_nombre_para_documento(nombre_archivo)
            cantidad_tokens = contar_tokens_en_archivo_openai(ruta_completa_archivo, modelo_encoding)
            if cantidad_tokens > 0 :
                datos_tokens.append({"nombre_documento": nombre_documento, "cantidad_tokens_openai": cantidad_tokens})

    if not datos_tokens: return
    with open(archivo_csv_salida, mode='w', newline='', encoding='utf-8') as f_csv: # INTERACTIVE_SEGMENT_TARGET: 006-write-csv
        campos = ["nombre_documento", "cantidad_tokens_openai"] 
        escritor_csv = csv.DictWriter(f_csv, fieldnames=campos)
        escritor_csv.writeheader()
        escritor_csv.writerows(datos_tokens)
    print(f"\\nArchivo CSV con conteo de tokens (OpenAI) guardado en: {archivo_csv_salida}")

if __name__ == "__main__":
    # ... (configuración del script)
    ruta_carpeta_documentos = "..." # Debe ser definida
    nombre_archivo_csv_salida = "..." # Debe ser definido
    # generar_csv_conteo_tokens_openai(ruta_carpeta_documentos, nombre_archivo_csv_salida)
`,
    interactiveSegments: [
      {
        id: "006-count-tokens-func",
        label: "Función para Contar Tokens",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 006-count-tokens-func/,
        explanation: "La función `contar_tokens_openai` es el núcleo de la tokenización. Toma un texto y el nombre de un encoding (por defecto `cl100k_base`) y devuelve el número de tokens.",
        relatedConceptIds: ["006_contar_tokens_dof-concept-0"]
      },
      {
        id: "006-get-encoding",
        label: "Obtener Encoding de Tiktoken",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 006-get-encoding/,
        explanation: "`tiktoken.get_encoding(modelo_encoding)` carga el tokenizador específico (encoding) necesario para contar los tokens correctamente según el modelo de referencia.",
        relatedConceptIds: ["006_contar_tokens_dof-concept-1"]
      },
      {
        id: "006-encode-text",
        label: "Codificar Texto a Tokens",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 006-encode-text/,
        explanation: "`encoding.encode(texto)` convierte la cadena de texto en una lista de IDs de tokens. La longitud de esta lista (`len(tokens)`) es el conteo de tokens.",
        relatedConceptIds: ["006_contar_tokens_dof-concept-0"]
      },
      {
        id: "006-extract-file-content",
        label: "Extraer Contenido Relevante del Archivo",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 006-extract-file-content/,
        explanation: "Este bucle lee las líneas del archivo `.txt` y extrae solo el texto que aparece después del delimitador `-------------------- CONTENIDO --------------------`, asumiendo una estructura específica para los archivos de contenido.",
        relatedConceptIds: ["006_contar_tokens_dof-concept-2"]
      },
      {
        id: "006-iterate-files",
        label: "Iterar sobre Archivos de Texto",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 006-iterate-files/,
        explanation: "El script recorre todos los archivos en la `carpeta_textos` especificada, procesando aquellos que terminan en `.txt` para contar sus tokens.",
        relatedConceptIds: ["006_contar_tokens_dof-concept-2", "004_procesar_urls_dof-concept-4"]
      },
      {
        id: "006-write-csv",
        label: "Escribir Resultados a CSV",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 006-write-csv/,
        explanation: "Los resultados (nombre del documento y cantidad de tokens) se almacenan en un archivo CSV para fácil análisis posterior, utilizando `csv.DictWriter`.",
        relatedConceptIds: ["006_contar_tokens_dof-concept-3", "003_dof_web_scraper_next-concept-4"]
      }
    ]
  },
  {
    id: "007_crear_bd_lancedb_dof",
    title: "007_crear_bd_lancedb_dof.py",
    generalPurpose: "Crea la base de datos vectorial en LanceDB con embeddings (Ollama bge-m3) de fragmentos de documentos.",
    detailedExplanation: `Este script es crucial para la fase de recuperación del RAG. Toma los textos completos
de los documentos, los fragmenta en chunks con traslape (usando \`tiktoken\` para
controlar el tamaño), genera embeddings para cada chunk usando Ollama con el modelo
\`bge-m3\`, y los almacena en una base de datos vectorial LanceDB. Define un esquema
para la tabla usando \`LanceModel\` y crea un índice IVF_PQ para búsquedas eficientes.
Guarda metadatos como el nombre del archivo original y el ID del fragmento.`,
    keyConcepts: [
      {
        id: "007_crear_bd_lancedb_dof-concept-0",
        name: "Embeddings de Texto (bge-m3)",
        explanation: `Un embedding de texto es una representación vectorial (una lista de números) de un fragmento de texto en un espacio de alta dimensionalidad.
Propósito: Capturar el significado semántico del texto. Textos con significados similares tendrán vectores (embeddings) cercanos en este espacio vectorial.
Cómo se Generan: Mediante modelos de lenguaje entrenados específicamente para esta tarea (modelos de embedding). Estos modelos aprenden a mapear texto a vectores durante su entrenamiento.

\`bge-m3\` (BAAI General Embedding):
-   Es un modelo de embedding de texto de alto rendimiento desarrollado por el Beijing Academy of Artificial Intelligence (BAAI).
-   Es multilingüe y conocido por su buen desempeño en tareas de recuperación semántica.
-   Puede ser ejecutado localmente usando herramientas como Ollama.
-   Produce embeddings de una dimensionalidad específica (ej. 1024 dimensiones para \`bge-m3-base\`, que es el que se usa aquí implícitamente con \`bge-m3\` en Ollama).

En este script:
-   Cada fragmento (chunk) de los documentos del DOF se convierte en un embedding usando \`bge-m3\` a través de Ollama.
-   Estos embeddings son los que se almacenan en LanceDB para permitir la búsqueda por similitud semántica.`
      },
      {
        id: "007_crear_bd_lancedb_dof-concept-1",
        name: "Ollama (servicio local de modelos)",
        explanation: `Ollama es una herramienta que facilita la ejecución de modelos de lenguaje grandes (LLMs) y modelos de embedding de forma local en tu propia máquina.
Características:
-   Sencillez: Permite descargar y ejecutar modelos populares (Llama, Mistral, Phi, y modelos de embedding como \`bge-m3\`, \`nomic-embed-text\`) con comandos simples.
-   API Local: Expone una API compatible con la API de OpenAI, lo que facilita la integración con bibliotecas existentes (como \`langchain\`, \`llama-index\`, o la biblioteca \`ollama\` para Python).
-   Privacidad: Los datos procesados localmente no se envían a servidores de terceros.
-   Costo: Gratuito (aparte del costo del hardware y electricidad).
-   Experimentación: Ideal para probar diferentes modelos y configuraciones sin incurrir en costos de API.

Uso en el script:
-   \`import ollama\`
-   \`ollama.embeddings(model="bge-m3", prompt=texto)\`: Envía el \`texto\` al servicio local de Ollama (que debe estar corriendo) para generar un embedding usando el modelo \`bge-m3\`.
-   La respuesta contiene el vector de embedding.

Requiere tener Ollama instalado y el modelo deseado descargado (ej. \`ollama pull bge-m3\`).`
      },
      {
        id: "007_crear_bd_lancedb_dof-concept-2",
        name: "Bases de Datos Vectoriales (LanceDB)",
        explanation: `Las bases de datos vectoriales (Vector Databases) están diseñadas específicamente para almacenar, gestionar y realizar búsquedas eficientes sobre vectores de alta dimensionalidad, como los embeddings de texto o imágenes.
Características Clave:
-   Almacenamiento Eficiente: Optimizadas para manejar grandes cantidades de vectores.
-   Búsqueda por Similitud (ANN - Approximate Nearest Neighbor): Permiten encontrar rápidamente los vectores en la base de datos que son más similares a un vector de consulta dado. Esto es mucho más rápido que calcular la similitud con cada vector individualmente (búsqueda exacta o k-NN).
-   Indexación Vectorial: Utilizan algoritmos de indexación especializados (ej. IVF_PQ, HNSW) para acelerar las búsquedas ANN.
-   Metadatos: Permiten almacenar metadatos junto con los vectores (ej. el texto original del fragmento, ID del documento).
-   Escalabilidad.

LanceDB:
-   Es una base de datos vectorial open-source, sin servidor (serverless), diseñada para ser embebida en aplicaciones Python y otros lenguajes.
-   Se basa en el formato de archivo Lance, optimizado para analítica y machine learning.
-   Características:
    -   Fácil de usar e integrar.
    -   Persistente en disco (no solo en memoria).
    -   Soporta filtrado de metadatos junto con la búsqueda vectorial.
    -   Integración con Pydantic para la definición de esquemas.
    -   Permite la creación de índices como IVF_PQ.

En este script, LanceDB se usa para:
1.  Crear una tabla con un esquema que incluye el embedding (\`vector\`) y metadatos.
2.  Añadir los embeddings de los fragmentos de documentos.
3.  Crear un índice para búsquedas rápidas por similitud coseno.`
      },
      {
        id: "007_crear_bd_lancedb_dof-concept-3",
        name: "Fragmentación (Chunking) y Superposición (Overlap)",
        explanation: `Los LLMs y modelos de embedding tienen límites de contexto (cuántos tokens pueden procesar a la vez). Los documentos largos necesitan ser divididos en fragmentos más pequeños ("chunks") antes de generar embeddings o procesarlos con un LLM.

Fragmentación (Chunking):
-   Proceso de dividir un texto largo en trozos de tamaño manejable.
-   Tamaño del Chunk (\`CHUNK_SIZE_TOKENS\`): Se define en términos de tokens (ej. 1000 tokens). La elección del tamaño depende del modelo de embedding, la naturaleza del contenido y la granularidad deseada para la recuperación.
-   \`fragmentador_texto_con_traslape()\` en el script usa \`tiktoken\` para dividir el texto basado en el conteo de tokens.

Superposición (Overlap):
-   Al dividir el texto, parte del final de un chunk se repite al inicio del siguiente chunk.
-   Tamaño del Overlap (\`CHUNK_OVERLAP_TOKENS\`): Cantidad de tokens que se superponen (ej. 150 tokens).
-   Propósito: Ayuda a mantener la coherencia y el contexto semántico entre fragmentos adyacentes. Sin overlap, una idea o frase que se extienda a través del límite de dos chunks podría perderse o interpretarse incorrectamente al embedir cada chunk por separado.

Ejemplo (simplificado por palabras, no tokens):
Texto: "El perro marrón rápido salta sobre el zorro perezoso."
Chunk size: 6 palabras, Overlap: 2 palabras
Chunk 1: "El perro marrón rápido salta sobre"
Chunk 2: "salta sobre el zorro perezoso." (El overlap es "salta sobre")

El script \`007\` usa esta técnica para preparar los documentos del DOF para la generación de embeddings.`
      },
      {
        id: "007_crear_bd_lancedb_dof-concept-4",
        name: "Esquemas en LanceDB (\`LanceModel\`, \`Vector\`)",
        explanation: `LanceDB utiliza una integración con Pydantic (o su propio sistema similar \`LanceModel\`) para definir el esquema (la estructura) de los datos que se almacenarán en una tabla.
\`LanceModel\`:
-   Es una clase base similar a \`pydantic.BaseModel\`. Se hereda de ella para definir un nuevo esquema.
-   Cada campo de la clase representa una columna en la tabla de LanceDB, con su tipo de dato correspondiente.
-   Ejemplo de definición de esquema en el script:
    \`class DocumentoFragmento(LanceModel):\`
        \`id: str\`                      # Columna 'id' de tipo string
        \`texto: str\`                   # Columna 'texto' (el fragmento) de tipo string
        \`vector: LanceVector(actual_dimension_usar)\` # Columna 'vector' de tipo embedding
        \`nombre_archivo_original: str\` # Metadato: nombre del archivo fuente
        \`indice_fragmento_en_doc: int\`# Metadato: índice del fragmento

\`LanceVector(dimension)\`:
-   Es un tipo especial proporcionado por LanceDB para campos que almacenarán vectores (embeddings).
-   Se debe especificar la \`dimension\` del vector (ej. 1024 para \`bge-m3\`).
-   Es crucial que la dimensión en el esquema coincida con la dimensión de los embeddings que se van a insertar; de lo contrario, ocurrirán errores. El script intenta determinar esta dimensión dinámicamente.

Al crear una tabla en LanceDB:
-   \`db.create_table(nombre_tabla_lancedb, schema=DocumentoFragmento, mode="overwrite")\`
-   Se pasa la clase \`DocumentoFragmento\` (que define el esquema) al método \`create_table\`.
-   \`mode="overwrite"\` indica que si la tabla ya existe, se eliminará y se creará una nueva. Otras opciones son "create" (falla si existe) o "append" (si el esquema coincide).`
      },
      {
        id: "007_crear_bd_lancedb_dof-concept-5",
        name: "Indexación Vectorial (IVF_PQ), Métricas de Distancia",
        explanation: `La indexación vectorial es crucial para realizar búsquedas de similitud rápidas (ANN) en grandes conjuntos de datos vectoriales. Sin un índice, se tendría que comparar el vector de consulta con todos los vectores de la base de datos (búsqueda exhaustiva), lo cual es lento.

IVF_PQ (Inverted File Index with Product Quantization):
-   Es un algoritmo popular de indexación para ANN.
-   IVF (Inverted File Index):
    1.  Agrupamiento (Clustering): Los vectores de la base de datos se agrupan en \`k\` clústeres (particiones). Se elige un centroide para cada clúster.
    2.  Búsqueda: Dado un vector de consulta, primero se encuentran los clústeres más cercanos a él. Luego, la búsqueda se limita solo a los vectores dentro de esos pocos clústeres, en lugar de toda la base de datos.
-   PQ (Product Quantization):
    -   Técnica de compresión de vectores para reducir el uso de memoria y acelerar los cálculos de distancia.
    -   Divide cada vector en sub-vectores más pequeños.
    -   Cuantiza (aproxima) estos sub-vectores usando un conjunto de centroides precalculados para cada grupo de sub-vectores.

Métricas de Distancia:
-   Para determinar qué tan "cercanos" o "similares" son dos vectores, se usan métricas de distancia.
-   Distancia Coseno (Cosine Distance) / Similitud Coseno (Cosine Similarity):
    -   Mide el coseno del ángulo entre dos vectores.
    -   Similitud Coseno: Varía de -1 (opuestos) a 1 (idénticos). 0 significa ortogonales.
    -   Distancia Coseno: A menudo se calcula como \`1 - Similitud Coseno\`. Varía de 0 (idénticos) a 2 (opuestos). Menor distancia es mejor.
    -   Es comúnmente usada para embeddings de texto porque es insensible a la magnitud del vector, enfocándose en la orientación.
-   Distancia Euclidiana (L2 Distance):
    -   La distancia "en línea recta" entre dos puntos (vectores) en el espacio. Menor distancia es mejor.

En el script:
-   \`tabla.create_index(metric="cosine", ...)\`
    -   Crea un índice en la columna \`vector\` usando la métrica de distancia coseno.
    -   LanceDB maneja los detalles de IVF_PQ internamente. Parámetros como \`num_partitions\` y \`num_sub_vectors\` pueden ajustarse, pero LanceDB también puede usar valores por defecto razonables.`
      },
      {
        id: "007_crear_bd_lancedb_dof-concept-6",
        name: "Persistencia de BD Vectorial",
        explanation: `La persistencia se refiere a la capacidad de una base de datos de guardar los datos de forma duradera, de modo que no se pierdan cuando la aplicación se cierra o el sistema se reinicia.
Para LanceDB:
-   Cuando se conecta a LanceDB, se especifica un directorio en el sistema de archivos:
    \`db = lancedb.connect(directorio_bd_lance)\`
    (ej. \`directorio_bd_lance = "./lance_db_store_bge_m3"\`)
-   LanceDB almacena todas las tablas, datos (incluyendo los vectores) y metadatos dentro de este directorio en el disco.
-   Esto significa que:
    1.  Once que el script \`007_crear_bd_lancedb_dof.py\` termina de crear la base de datos y la tabla, los datos persisten en la carpeta especificada.
    2.  Otros scripts (como \`008_consultar_bd_lancedb_terminal.py\` o \`009_rag_dof_ollama_groq_deepseek.py\`) pueden luego conectarse al mismo directorio para abrir y consultar la tabla existente sin necesidad de reconstruirla cada vez.
    \`db = lancedb.connect(directorio_bd)\`
    \`table = db.open_table(nombre_de_la_tabla)\`

Esto es fundamental para cualquier aplicación RAG, ya que la construcción de la base de datos de embeddings (especialmente para corpus grandes) puede ser un proceso que consume mucho tiempo y recursos, y solo necesita hacerse una vez (o periódicamente cuando los documentos fuente se actualizan).`
      }
    ],
    sourceCode: `
import os
import re
import time
import lancedb
from lancedb.pydantic import LanceModel, Vector as LanceVector 
import ollama
import tiktoken
import numpy as np
from typing import List, Dict, Optional, Generator
import hashlib

MODELO_EMBEDDING_OLLAMA = "bge-m3" # INTERACTIVE_SEGMENT_TARGET: 007-ollama-model
DIMENSION_EMBEDDING = 1024 
CHUNK_SIZE_TOKENS = 1000 # INTERACTIVE_SEGMENT_TARGET: 007-chunk-size
CHUNK_OVERLAP_TOKENS = 150 # INTERACTIVE_SEGMENT_TARGET: 007-chunk-overlap
ENCODING_TIKTOKEN_CHUNKING = "cl100k_base"

def sanitizar_nombre(nombre: str, es_carpeta=False) -> str:
    # ... (función de sanitización)
    return nombre # Simplificado

def sanitizar_nombre_tabla_lancedb(nombre: str) -> str:
    # ... (función de sanitización para nombre de tabla)
    return nombre # Simplificado

def obtener_conteo_tokens_tiktoken(texto: str, encoding_nombre: str = ENCODING_TIKTOKEN_CHUNKING) -> int:
    # ... (función de conteo de tokens)
    try: return len(tiktoken.get_encoding(encoding_nombre).encode(texto))
    except: return len(texto.split())


def fragmentador_texto_con_traslape(texto_completo: str, # INTERACTIVE_SEGMENT_TARGET: 007-chunker-func
                                   chunk_size: int = CHUNK_SIZE_TOKENS,
                                   chunk_overlap: int = CHUNK_OVERLAP_TOKENS,
                                   encoding_nombre: str = ENCODING_TIKTOKEN_CHUNKING) -> Generator[str, None, None]:
    if not texto_completo.strip(): return
    try: encoding = tiktoken.get_encoding(encoding_nombre)
    except: return
    tokens_totales = encoding.encode(texto_completo)
    longitud_total_tokens = len(tokens_totales)
    if longitud_total_tokens == 0: return
    inicio = 0
    while inicio < longitud_total_tokens:
        fin = min(inicio + chunk_size, longitud_total_tokens)
        fragmento_tokens = tokens_totales[inicio:fin]
        fragmento_texto = encoding.decode(fragmento_tokens)
        if fragmento_texto.strip(): yield fragmento_texto.strip()
        if fin == longitud_total_tokens: break
        avance = chunk_size - chunk_overlap
        inicio += avance if avance > 0 else chunk_size 

def generar_id_fragmento(nombre_archivo: str, indice_fragmento: int) -> str:
    hash_nombre = hashlib.md5(nombre_archivo.encode()).hexdigest()[:8]
    return f"{hash_nombre}_frag_{indice_fragmento}"

def obtener_embedding_ollama_para_bd(texto: str, modelo: str = MODELO_EMBEDDING_OLLAMA) -> Optional[List[float]]: # INTERACTIVE_SEGMENT_TARGET: 007-get-embedding
    try:
        response = ollama.embeddings(model=modelo, prompt=texto)
        return response.get('embedding')
    except Exception as e:
        print(f"    Error al generar embedding con Ollama: {e}")
        return None

def crear_base_de_datos_lance(carpeta_documentos_txt: str,
                               nombre_tabla_lancedb: str,
                               directorio_bd_lance: str = "./lance_db"):
    if not os.path.isdir(directorio_bd_lance): os.makedirs(directorio_bd_lance)
    db = lancedb.connect(directorio_bd_lance) # INTERACTIVE_SEGMENT_TARGET: 007-lancedb-connect

    actual_dimension_usar = DIMENSION_EMBEDDING 
    test_embedding = obtener_embedding_ollama_para_bd("texto de prueba")
    if test_embedding: actual_dimension_usar = len(test_embedding)
    
    class DocumentoFragmento(LanceModel): # INTERACTIVE_SEGMENT_TARGET: 007-lancedb-schema
        id: str
        texto: str
        vector: LanceVector(actual_dimension_usar) 
        nombre_archivo_original: str
        indice_fragmento_en_doc: int

    try:
        tabla = db.create_table(nombre_tabla_lancedb, schema=DocumentoFragmento, mode="overwrite") # INTERACTIVE_SEGMENT_TARGET: 007-lancedb-create-table
    except Exception as e: return

    if not os.path.isdir(carpeta_documentos_txt): return
    datos_para_lote = [] 
    for nombre_archivo in sorted(os.listdir(carpeta_documentos_txt)):
        if nombre_archivo.endswith(".txt"):
            # ... (leer contenido del archivo)
            texto_documento_completo = "..." # Extraído
            if not texto_documento_completo: continue
            for i, fragmento_texto in enumerate(fragmentador_texto_con_traslape(texto_documento_completo)):
                embedding_vector = obtener_embedding_ollama_para_bd(fragmento_texto)
                if embedding_vector and len(embedding_vector) == actual_dimension_usar:
                    id_frag = generar_id_fragmento(nombre_archivo, i)
                    datos_para_lote.append({
                        "id": id_frag, "texto": fragmento_texto, "vector": embedding_vector,
                        "nombre_archivo_original": nombre_archivo, "indice_fragmento_en_doc": i
                    })
                time.sleep(0.02) 
            if len(datos_para_lote) >= 100: 
                if datos_para_lote: tabla.add(datos_para_lote); datos_para_lote = [] # INTERACTIVE_SEGMENT_TARGET: 007-lancedb-add-data
    if datos_para_lote: tabla.add(datos_para_lote)

    if tabla.count_rows() > 0:
        try:
            tabla.create_index(metric="cosine", replace=True) # INTERACTIVE_SEGMENT_TARGET: 007-lancedb-create-index
            print("Índice IVF_PQ creado.")
        except Exception as e_index:
            print(f"Error al crear índice: {e_index}")
    print(f"Base de datos LanceDB guardada en: {directorio_bd_lance}")

if __name__ == "__main__":
    # ... (configuración del script)
    # crear_base_de_datos_lance("carpeta_entrada", "nombre_tabla", "./lancedb_store")
    pass
`,
    interactiveSegments: [
      {
        id: "007-ollama-model",
        label: "Modelo de Embedding Ollama",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 007-ollama-model/,
        explanation: "Se define `bge-m3` como el modelo de embedding que se utilizará a través de Ollama para convertir fragmentos de texto en vectores numéricos.",
        relatedConceptIds: ["007_crear_bd_lancedb_dof-concept-0", "007_crear_bd_lancedb_dof-concept-1"]
      },
      {
        id: "007-chunk-size",
        label: "Tamaño del Fragmento (Chunk)",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 007-chunk-size/,
        explanation: "`CHUNK_SIZE_TOKENS` (1000 tokens) define el tamaño máximo de cada fragmento de texto que se generará a partir de los documentos originales.",
        relatedConceptIds: ["007_crear_bd_lancedb_dof-concept-3"]
      },
      {
        id: "007-chunk-overlap",
        label: "Superposición de Fragmentos",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 007-chunk-overlap/,
        explanation: "`CHUNK_OVERLAP_TOKENS` (150 tokens) especifica cuántos tokens del final de un fragmento se repetirán al inicio del siguiente para mantener el contexto semántico.",
        relatedConceptIds: ["007_crear_bd_lancedb_dof-concept-3"]
      },
      {
        id: "007-chunker-func",
        label: "Función de Fragmentación de Texto",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 007-chunker-func/,
        explanation: "La función `fragmentador_texto_con_traslape` es responsable de dividir el texto de los documentos en fragmentos más pequeños, usando `tiktoken` y considerando el tamaño del chunk y el overlap.",
        relatedConceptIds: ["007_crear_bd_lancedb_dof-concept-3", "005_generar_resumenes_dof-concept-3"]
      },
      {
        id: "007-get-embedding",
        label: "Obtener Embedding de Ollama",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 007-get-embedding/,
        explanation: "`obtener_embedding_ollama_para_bd` llama a `ollama.embeddings` para generar el vector de embedding para un fragmento de texto dado, usando el modelo `bge-m3`.",
        relatedConceptIds: ["007_crear_bd_lancedb_dof-concept-0", "007_crear_bd_lancedb_dof-concept-1"]
      },
      {
        id: "007-lancedb-connect",
        label: "Conectar a LanceDB",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 007-lancedb-connect/,
        explanation: "`lancedb.connect(directorio_bd_lance)` establece una conexión (o crea si no existe) con la base de datos LanceDB en el directorio especificado, donde se almacenarán los datos.",
        relatedConceptIds: ["007_crear_bd_lancedb_dof-concept-2", "007_crear_bd_lancedb_dof-concept-6"]
      },
      {
        id: "007-lancedb-schema",
        label: "Definir Esquema LanceDB",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 007-lancedb-schema/,
        explanation: "La clase `DocumentoFragmento(LanceModel)` define la estructura (esquema) de los datos que se guardarán en la tabla de LanceDB, incluyendo campos para ID, texto, el vector de embedding y metadatos.",
        relatedConceptIds: ["007_crear_bd_lancedb_dof-concept-2", "007_crear_bd_lancedb_dof-concept-4"]
      },
      {
        id: "007-lancedb-create-table",
        label: "Crear Tabla en LanceDB",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 007-lancedb-create-table/,
        explanation: "`db.create_table()` crea una nueva tabla en LanceDB con el nombre y esquema especificados. `mode=\"overwrite\"` indica que si la tabla ya existe, será reemplazada.",
        relatedConceptIds: ["007_crear_bd_lancedb_dof-concept-2", "007_crear_bd_lancedb_dof-concept-4"]
      },
      {
        id: "007-lancedb-add-data",
        label: "Añadir Datos a LanceDB",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 007-lancedb-add-data/,
        explanation: "`tabla.add(datos_para_lote)` inserta los datos de los fragmentos (incluyendo sus embeddings) en la tabla de LanceDB. Se hace en lotes para mayor eficiencia.",
        relatedConceptIds: ["007_crear_bd_lancedb_dof-concept-2"]
      },
      {
        id: "007-lancedb-create-index",
        label: "Crear Índice Vectorial",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 007-lancedb-create-index/,
        explanation: "`tabla.create_index(metric=\"cosine\")` construye un índice vectorial (IVF_PQ por defecto) sobre la columna de vectores, utilizando la métrica de distancia coseno. Esto acelera significativamente las búsquedas por similitud.",
        relatedConceptIds: ["007_crear_bd_lancedb_dof-concept-2", "007_crear_bd_lancedb_dof-concept-5"]
      }
    ]
  },
  {
    id: "008_consultar_bd_lancedb_terminal",
    title: "008_consultar_bd_lancedb_terminal.py",
    generalPurpose: "Aplicación de terminal para probar la recuperación de LanceDB (solo embeddings).",
    detailedExplanation: `Proporciona una interfaz de línea de comandos para interactuar con la base de datos
LanceDB. El usuario ingresa una pregunta, se genera su embedding con Ollama ('bge-m3'),
y se buscan los fragmentos más similares en LanceDB. Muestra los fragmentos
recuperados y sus metadatos (incluyendo la distancia). Es una herramienta para
diagnosticar la calidad de la recuperación antes de la generación de respuesta.`,
    keyConcepts: [
      {
        id: "008_consultar_bd_lancedb_terminal-concept-0",
        name: "Búsqueda por Similitud Vectorial (Aplicada)",
        explanation: `La búsqueda por similitud vectorial es el núcleo de la fase de recuperación en RAG y en muchos sistemas de búsqueda semántica.
Proceso:
1.  Vector de Consulta: La pregunta del usuario (o cualquier texto de consulta) se convierte primero en un vector de embedding usando el *mismo* modelo de embedding que se usó para crear los vectores en la base de datos (en este caso, \`bge-m3\` vía Ollama).
    \`pregunta_embedding = obtener_embedding_ollama_pregunta(pregunta_texto)\`
2.  Búsqueda en LanceDB:
    -   El vector de consulta se envía a la base de datos vectorial.
    -   \`results = table.search(query_vector_list).limit(k).to_list()\`
    -   LanceDB usa su índice vectorial (ej. IVF_PQ) y la métrica de distancia especificada (ej. coseno) para encontrar los \`k\` vectores en la tabla que son más "cercanos" (más similares) al vector de consulta.
3.  Resultados:
    -   La búsqueda devuelve una lista de los fragmentos más similares.
    -   Cada resultado incluye:
        -   El vector del fragmento (generalmente no se muestra al usuario).
        -   Los metadatos almacenados con el vector (ej. el texto del fragmento, ID, nombre del archivo original, índice del fragmento).
        -   Una puntuación de distancia o similitud (\`_distance\` en LanceDB).

Este script implementa este proceso, permitiendo al usuario ingresar preguntas y ver los fragmentos de texto que LanceDB considera más relevantes semánticamente.`
      },
      {
        id: "008_consultar_bd_lancedb_terminal-concept-1",
        name: "Interpretación de Distancia/Similitud",
        explanation: `Cuando una base de datos vectorial devuelve resultados de una búsqueda por similitud, incluye una puntuación que indica qué tan similar es cada resultado al vector de consulta.
Interpretación:
-   Distancia Coseno (\`cosine\` en LanceDB, a menudo \`1 - similitud_coseno\`):
    -   Rango: 0 a 2.
    -   **Menor es mejor**: Un valor cercano a 0 significa que los vectores son muy similares (apuntan en la misma dirección). Un valor cercano a 1 significa que son ortogonales (no relacionados). Un valor cercano a 2 significa que son opuestos.
    -   Este es el valor que LanceDB devuelve en el campo \`_distance\` cuando la tabla se indexó con \`metric="cosine"\`.
-   Similitud Coseno Pura:
    -   Rango: -1 a 1.
    -   **Mayor es mejor**: Un valor cercano a 1 significa muy similares. Cercano a -1, muy opuestos. Cercano a 0, no relacionados.
-   Distancia Euclidiana (L2):
    -   Rango: 0 a infinito.
    -   **Menor es mejor**: Un valor de 0 significa que los vectores son idénticos. Cuanto mayor la distancia, menos similares.

En el script:
-   \`print(f"  Distancia (menor es mejor): {frag_info['_distance']:.4f}")\`
    -   Muestra el campo \`_distance\` devuelto por LanceDB. Como el índice se creó con \`metric="cosine"\`, esta es la distancia coseno (1 - similitud).
-   Es importante saber qué métrica se usó para la indexación para interpretar correctamente las puntuaciones. Los resultados de \`table.search()\` ya vienen ordenados por relevancia según esta métrica (los más relevantes primero).

Umbrales (Thresholds):
-   A veces, se puede aplicar un umbral de distancia/similitud para filtrar resultados que no son lo suficientemente relevantes, aunque este script no lo hace y simplemente toma los \`k\` mejores.`
      },
      {
        id: "008_consultar_bd_lancedb_terminal-concept-2",
        name: "Fase de Recuperación en RAG",
        explanation: `RAG (Retrieval Augmented Generation) es una arquitectura para LLMs que combina:
1.  Recuperación (Retrieval): Encontrar información relevante de una base de conocimiento externa.
2.  Generación (Generation): Usar un LLM para generar una respuesta basada en la pregunta del usuario Y la información recuperada.

Este script (\`008_consultar_bd_lancedb_terminal.py\`) se enfoca exclusivamente en la **Fase de Recuperación**:
-   Base de Conocimiento: La base de datos LanceDB que contiene los embeddings de los fragmentos de los documentos del DOF.
-   Entrada: Una pregunta del usuario.
-   Proceso:
    a.  Convertir la pregunta del usuario en un embedding.
    b.  Buscar en LanceDB los fragmentos de texto cuyos embeddings son más similares al embedding de la pregunta.
-   Salida: Una lista de los fragmentos de texto más relevantes (y sus metadatos).

Por qué es importante la Recuperación:
-   Proporciona al LLM (en la fase de generación posterior, ej. script 009) contexto factual y específico de la base de conocimiento.
-   Ayuda a reducir las "alucinaciones" del LLM (inventar información).
-   Permite que el LLM responda sobre datos que no estaban en su conjunto de entrenamiento original (ej. documentos recientes del DOF).
-   Permite citar fuentes.

La calidad de la fase de recuperación es crítica para la calidad general de un sistema RAG. Si se recuperan fragmentos irrelevantes, el LLM probablemente generará una respuesta pobre o incorrecta.`
      },
      {
        id: "008_consultar_bd_lancedb_terminal-concept-3",
        name: "Desarrollo de CLI para Pruebas",
        explanation: `CLI (Command-Line Interface) o Interfaz de Línea de Comandos es una forma de interactuar con un programa usando comandos de texto en una terminal o consola.
Para el Desarrollo y Pruebas:
-   Las CLIs son herramientas valiosas para probar componentes individuales de un sistema más grande antes de integrarlos completamente o construir una interfaz gráfica de usuario (GUI) compleja.
-   Permiten una interacción rápida y directa con la lógica del backend.

Este script implementa una CLI simple para:
1.  Aceptar una pregunta del usuario: \`input("\\nIntroduce tu pregunta...")\`.
2.  Invocar la lógica de búsqueda en LanceDB: \`buscar_fragmentos_similares_lance(...)\`.
3.  Mostrar los resultados (fragmentos recuperados y sus metadatos) de forma legible en la terminal.
4.  Permitir al usuario hacer múltiples preguntas en un bucle \`while True:\`.
5.  Ofrecer una forma de salir (\`salir\`).

Beneficios de una CLI para este caso:
-   Diagnóstico Rápido: Permite evaluar rápidamente la calidad de la recuperación de LanceDB. ¿Los fragmentos devueltos son relevantes para la pregunta? ¿Son correctas las distancias?
-   Iteración: Fácil probar diferentes tipos de preguntas y ver cómo responde el sistema de recuperación.
-   Aislamiento: Prueba la fase de recuperación independientemente de la fase de generación del LLM, lo que ayuda a identificar dónde podrían estar los problemas en un pipeline RAG completo.
-   Simplicidad: Más rápido de desarrollar que una GUI completa para propósitos de prueba.

Es una práctica común en el desarrollo de software crear pequeñas herramientas CLI para probar y depurar módulos o servicios.`
      }
    ],
    sourceCode: `
import os
import re
import lancedb
import ollama 
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity 
from typing import List, Dict, Optional

MODELO_EMBEDDING_OLLAMA = "bge-m3" 
DIMENSION_EMBEDDING = 1024 
NUM_FRAGMENTOS_A_RECUPERAR = 4 

def sanitizar_nombre(nombre: str, es_carpeta=False) -> str: 
    # ... (función de sanitización)
    return nombre # Simplificado

def obtener_embedding_ollama_pregunta(texto: str, modelo: str = MODELO_EMBEDDING_OLLAMA) -> Optional[np.ndarray]: # INTERACTIVE_SEGMENT_TARGET: 008-get-query-embedding
    try:
        response = ollama.embeddings(model=modelo, prompt=texto)
        embedding = response.get('embedding')
        if embedding: return np.array(embedding)
        return None
    except Exception as e:
        print(f"Error al generar embedding para la pregunta: {e}")
        return None

def buscar_fragmentos_similares_lance(db_path: str, table_name: str, pregunta_texto: str, k: int = NUM_FRAGMENTOS_A_RECUPERAR) -> List[Dict]: # INTERACTIVE_SEGMENT_TARGET: 008-search-lance-func
    try:
        db = lancedb.connect(db_path)
        table = db.open_table(table_name) # INTERACTIVE_SEGMENT_TARGET: 008-open-lance-table
    except Exception as e: return []

    pregunta_embedding = obtener_embedding_ollama_pregunta(pregunta_texto)
    if pregunta_embedding is None: return []

    try:
        query_vector_list = pregunta_embedding.tolist()
        results = table.search(query_vector_list).limit(k).to_list() # INTERACTIVE_SEGMENT_TARGET: 008-lance-search
        return results
    except Exception as e:
        print(f"Error durante la búsqueda en LanceDB: {e}")
        return []

if __name__ == "__main__":
    termino_busqueda_usado = "decreto" 
    script_dir = os.path.dirname(__file__) if "__file__" in locals() else "."
    directorio_bd = os.path.join(script_dir, "lancedb_store_bge_m3") 
    nombre_de_la_tabla = sanitizar_nombre(termino_busqueda_usado, es_carpeta=False) 

    # ... (verificación inicial de la tabla)

    while True: # INTERACTIVE_SEGMENT_TARGET: 008-cli-loop
        pregunta_usuario = input("\\nIntroduce tu pregunta (o 'salir'):\\n> ")
        if pregunta_usuario.lower() == 'salir': break
        if not pregunta_usuario.strip(): continue

        fragmentos_recuperados = buscar_fragmentos_similares_lance(directorio_bd, nombre_de_la_tabla, pregunta_usuario)

        if fragmentos_recuperados:
            print("\\n--- Fragmentos Recuperados ---")
            for i, frag_info in enumerate(fragmentos_recuperados):
                # ... (imprimir detalles del fragmento)
                if '_distance' in frag_info: # INTERACTIVE_SEGMENT_TARGET: 008-show-distance
                    print(f"  Distancia (menor es mejor): {frag_info['_distance']:.4f}")
                # ...
            print("-----------------------------")
        else:
            print("No se encontraron fragmentos relevantes.")
    print("\\nSaliendo.")
`,
    interactiveSegments: [
      {
        id: "008-get-query-embedding",
        label: "Generar Embedding para Pregunta",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 008-get-query-embedding/,
        explanation: "La función `obtener_embedding_ollama_pregunta` toma el texto de la pregunta del usuario y utiliza Ollama con el modelo `bge-m3` para convertirla en un vector numérico (embedding).",
        relatedConceptIds: ["007_crear_bd_lancedb_dof-concept-0", "007_crear_bd_lancedb_dof-concept-1", "008_consultar_bd_lancedb_terminal-concept-0"]
      },
      {
        id: "008-search-lance-func",
        label: "Función de Búsqueda en LanceDB",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 008-search-lance-func/,
        explanation: "`buscar_fragmentos_similares_lance` encapsula la lógica para conectar a LanceDB, generar el embedding de la pregunta y realizar la búsqueda por similitud.",
        relatedConceptIds: ["008_consultar_bd_lancedb_terminal-concept-0", "008_consultar_bd_lancedb_terminal-concept-2"]
      },
      {
        id: "008-open-lance-table",
        label: "Abrir Tabla LanceDB Existente",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 008-open-lance-table/,
        explanation: "`db.open_table(table_name)` accede a la tabla que fue creada y poblada por el script anterior (`007_crear_bd_lancedb_dof.py`). La persistencia de LanceDB es clave aquí.",
        relatedConceptIds: ["007_crear_bd_lancedb_dof-concept-2", "007_crear_bd_lancedb_dof-concept-6"]
      },
      {
        id: "008-lance-search",
        label: "Realizar Búsqueda por Similitud",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 008-lance-search/,
        explanation: "`table.search(query_vector_list).limit(k).to_list()` es el comando que ejecuta la búsqueda por similitud en LanceDB. Compara el `query_vector_list` (embedding de la pregunta) con los vectores en la tabla y devuelve los `k` más similares.",
        relatedConceptIds: ["008_consultar_bd_lancedb_terminal-concept-0", "007_crear_bd_lancedb_dof-concept-5"]
      },
      {
        id: "008-cli-loop",
        label: "Bucle Principal de la CLI",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 008-cli-loop/,
        explanation: "Este bucle `while True` permite al usuario ingresar múltiples preguntas en la terminal. El programa espera una entrada, procesa la pregunta y muestra los resultados, hasta que el usuario escribe 'salir'.",
        relatedConceptIds: ["008_consultar_bd_lancedb_terminal-concept-3"]
      },
      {
        id: "008-show-distance",
        label: "Mostrar Distancia de Similitud",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 008-show-distance/,
        explanation: "Para cada fragmento recuperado, se imprime el valor de `_distance`. En LanceDB con métrica coseno, una distancia menor indica mayor similitud entre el fragmento y la pregunta.",
        relatedConceptIds: ["008_consultar_bd_lancedb_terminal-concept-1"]
      }
    ]
  },
  {
    id: "009_rag_dof_ollama_groq_deepseek",
    title: "009_rag_dof_ollama_groq_deepseek.py",
    generalPurpose: "Aplicación RAG completa: recupera de LanceDB y genera respuesta con Groq (Deepseek).",
    detailedExplanation: `Script final que implementa el pipeline RAG completo. Una pregunta del usuario se
convierte en embedding (Ollama 'bge-m3') para buscar fragmentos relevantes en LanceDB.
Adicionalmente, recupera los resúmenes pre-generados de los documentos fuente de esos
fragmentos. Resúmenes y fragmentos forman un contexto enriquecido que se envía, junto
con la pregunta y un prompt de sistema, al LLM 'deepseek-r1-distill-llama-70b' vía Groq
para generar una respuesta. Gestiona límites de API de Groq y muestra el prompt
completo y los fragmentos fuente al usuario.`,
    keyConcepts: [
      {
        id: "009_rag_dof_ollama_groq_deepseek-concept-0",
        name: "Pipeline RAG Completo (Integración)",
        explanation: `Este script integra los componentes previamente desarrollados en un pipeline de RAG (Retrieval Augmented Generation) completo:
1.  Entrada del Usuario: Recibe una pregunta del usuario.
2.  Fase de Recuperación (Retrieval):
    a.  Generación de Embedding para la Pregunta: La pregunta se convierte en un vector de embedding usando Ollama con \`bge-m3\` (función \`obtener_embedding_ollama_pregunta\`).
    b.  Búsqueda en Base de Datos Vectorial: Se buscan en LanceDB los fragmentos de documentos (\`documentos_contexto\`) cuyos embeddings son más similares al embedding de la pregunta (función \`buscar_fragmentos_similares_lance\`).
3.  Enriquecimiento del Contexto (Context Augmentation):
    a.  Lectura de Resúmenes: Para cada documento original de donde provienen los fragmentos recuperados, se intenta leer un resumen pre-generado (del script 005, función \`leer_resumen_de_archivo\`).
    b.  Construcción del Contexto para el LLM: Se combinan los resúmenes (si están disponibles y son únicos por documento) y los textos de los fragmentos recuperados para formar una cadena de texto de contexto. Se aplican límites de tokens a cada parte (\`MAX_TOKENS_POR_RESUMEN_EN_CONTEXTO\`, \`MAX_TOKENS_POR_FRAGMENTO_EN_CONTEXTO\`).
4.  Fase de Generación (Generation):
    a.  Construcción del Prompt Completo: Se crea un prompt detallado que incluye:
        i.  Instrucciones para el LLM (rol, cómo usar el contexto, qué hacer si la información no está).
        ii. La pregunta original del usuario.
        iii. El contexto enriquecido (resúmenes y fragmentos).
    b.  Llamada al LLM: Se envía este prompt completo a un LLM generativo (aquí, \`deepseek-r1-distill-llama-70b\` a través de la API de Groq) para generar una respuesta (función \`generar_respuesta_con_rag_groq\`).
    c.  Manejo de Límites de API: Se gestionan los rate limits de Groq.
5.  Salida: Se presenta la respuesta generada por el LLM al usuario, y opcionalmente, los fragmentos fuente.

Este pipeline permite al LLM generar respuestas más informadas y basadas en el contenido específico de los documentos del DOF, en lugar de depender únicamente de su conocimiento general pre-entrenado.`
      },
      {
        id: "009_rag_dof_ollama_groq_deepseek-concept-1",
        name: "Enriquecimiento del Contexto (Resúmenes + Fragmentos)",
        explanation: `Para que el LLM genere la mejor respuesta posible en un sistema RAG, es crucial proporcionarle un contexto rico y relevante. Este script emplea una estrategia de enriquecimiento del contexto combinando dos tipos de información:
1.  Fragmentos Específicos Recuperados:
    -   Son los trozos de texto (chunks) directamente recuperados de LanceDB porque sus embeddings son muy similares al embedding de la pregunta del usuario.
    -   Proporcionan detalles precisos y pasajes exactos que probablemente contienen la respuesta.
    -   Limitación: Pueden carecer de una visión general del documento del que provienen si la pregunta es más amplia.
    -   En el script: \`texto_fragmento = doc.get('texto', '')\`.

2.  Resúmenes de Documentos Fuente:
    -   Son los resúmenes generados previamente por el script \`005_generar_resumenes_dof.py\` para cada documento completo del cual se extrajo un fragmento relevante.
    -   Se leen de la carpeta de resúmenes: \`resumen_texto = leer_resumen_de_archivo(...)\`.
    -   Proporcionan una visión general del propósito y contenido principal de los documentos de donde provienen los fragmentos.
    -   Ayudan al LLM a entender el contexto más amplio de los fragmentos específicos.
    -   Limitación: Pueden omitir detalles específicos que estén en los fragmentos pero no en el resumen.

Combinación:
-   El script primero intenta añadir los resúmenes de los documentos fuente (asegurándose de no repetir resúmenes si múltiples fragmentos vienen del mismo documento).
-   Luego, añade los fragmentos específicos.
-   Se aplican límites de tokens a cada resumen y fragmento (\`MAX_TOKENS_POR_RESUMEN_EN_CONTEXTO\`, \`MAX_TOKENS_POR_FRAGMENTO_EN_CONTEXTO\`) para no exceder el límite de contexto total del LLM generador.

Esta combinación de resúmenes (contexto general) y fragmentos (contexto específico) tiene como objetivo dar al LLM una base de información más completa para generar respuestas precisas y bien contextualizadas.`
      },
      {
        id: "009_rag_dof_ollama_groq_deepseek-concept-2",
        name: "Construcción Avanzada de Prompts para RAG",
        explanation: `El prompt enviado al LLM generativo en un sistema RAG es uno de los componentes más críticos. Un buen prompt guía al LLM para que use el contexto proporcionado de manera efectiva y genere respuestas útiles.
Componentes de un Prompt RAG Avanzado (como el usado en \`generar_respuesta_con_rag_groq\`):
1.  Definición del Rol (Role Setting):
    -   "Eres un asistente experto en responder preguntas sobre documentos del Diario Oficial de la Federación (DOF) de México."
    -   Esto ayuda al LLM a adoptar el tono y el conocimiento especializado adecuado.
2.  Instrucción Principal y Restricción de Fuente (Grounding Instruction):
    -   "Tu respuesta debe basarse ESTRICTAMENTE en la información contenida en los siguientes resúmenes y fragmentos de documentos proporcionados."
    -   Esto es crucial para evitar que el LLM use su conocimiento general (y potencialmente alucine) y lo obliga a basarse en la evidencia.
3.  Descripción del Contexto Proporcionado:
    -   "Primero se presentan resúmenes generales de los documentos relevantes, seguidos de fragmentos específicos."
    -   Ayuda al LLM a entender la estructura de la información que se le da.
4.  Instrucciones de Comportamiento y Formato:
    -   "Sé directo y factual."
5.  Manejo de Información Faltante (Fallback Instruction):
    -   "Si la información necesaria para responder la pregunta no está presente en los fragmentos, debes indicar claramente: 'La información específica para responder a su pregunta no se encuentra en los fragmentos de documentos proporcionados.'"
    -   Esto previene que el LLM invente respuestas cuando el contexto no es suficiente.
6.  Prohibición de Invención:
    -   "No inventes información ni hagas suposiciones más allá del texto dado."
7.  Estructura Clara de Entrada:
    -   \`PREGUNTA DEL USUARIO:\\n{pregunta_usuario}\\n\\n\`
    -   \`CONTEXTO (RESÚMENES Y FRAGMENTOS DE DOCUMENTOS RELEVANTES):\\n{contexto_str}\\n\\n\`
    -   \`RESPUESTA (basada únicamente en el contexto anterior):\`
    -   El uso de delimitadores claros y etiquetas ayuda al LLM a parsear el prompt correctamente.

La iteración y el refinamiento del prompt son clave para optimizar el rendimiento de un sistema RAG. El prompt de este script es un buen punto de partida, pero podría ajustarse aún más según los resultados observados.`
      },
      {
        id: "009_rag_dof_ollama_groq_deepseek-concept-3",
        name: "Generación de Respuestas Basadas en Evidencia",
        explanation: `Un objetivo fundamental de los sistemas RAG es asegurar que las respuestas generadas por el LLM estén firmemente ancladas en la información (evidencia) recuperada de la base de conocimiento. Esto contrasta con el uso de LLMs de forma aislada, donde pueden generar respuestas basadas en su entrenamiento general, que podría estar desactualizado o ser incorrecto para un dominio específico.

Cómo se Promueve en el Script:
1.  Contexto Explícito: El LLM recibe la pregunta del usuario JUNTO CON los fragmentos y resúmenes recuperados. Este contexto *es* la evidencia.
2.  Instrucciones en el Prompt: El prompt instruye explícitamente al LLM:
    -   "Tu respuesta debe basarse ESTRICTAMENTE en la información contenida en los siguientes resúmenes y fragmentos..."
    -   "No inventes información ni hagas suposiciones más allá del texto dado."
3.  Manejo de Información Faltante: Si la evidencia no contiene la respuesta, se le indica al LLM que lo admita ("La información específica... no se encuentra...").

Beneficios:
-   Mayor Precisión y Fiabilidad: Las respuestas son más propensas a ser correctas y relevantes para el corpus documental específico.
-   Reducción de Alucinaciones: Al obligar al LLM a usar el contexto, se reduce la probabilidad de que invente hechos.
-   Transparencia y Verificabilidad (aunque no implementado completamente en la UI de este script): Idealmente, un sistema RAG también mostraría las fuentes (fragmentos) usadas para generar la respuesta, permitiendo al usuario verificar la información. Este script sí muestra los fragmentos recuperados en la terminal después de la respuesta del LLM.

El modelo LLM elegido (\`deepseek-r1-distill-llama-70b\` en este caso) también juega un papel; algunos modelos son mejores siguiendo instrucciones y manteniéndose dentro del contexto proporcionado que otros.`
      },
      {
        id: "009_rag_dof_ollama_groq_deepseek-concept-4",
        name: "Presentación de Fuentes al Usuario",
        explanation: `En un sistema RAG robusto y amigable para el usuario, no solo se proporciona la respuesta generada por el LLM, sino también las fuentes (los fragmentos de texto recuperados) que se usaron para construir esa respuesta.
Beneficios:
-   Transparencia: El usuario entiende de dónde proviene la información.
-   Verificabilidad: El usuario puede consultar los fragmentos originales para confirmar la exactitud de la respuesta o para obtener más detalles.
-   Confianza: Aumenta la confianza del usuario en el sistema.
-   Exploración Adicional: Permite al usuario profundizar en los documentos fuente si lo desea.

Implementación en este Script (para la CLI):
-   Después de que el LLM genera la respuesta y esta se muestra al usuario, el script imprime una sección:
    \`"--- Fragmentos de Documentos Originales Usados para Contextualizar (base de la recuperación) ---"\`
-   Luego, itera sobre \`fragmentos_recuperados\` y muestra para cada uno:
    -   ID del fragmento.
    -   Nombre del archivo original.
    -   Índice del fragmento en el documento.
    -   Distancia de similitud.
    -   Los primeros 250 caracteres del texto del fragmento.

En una Interfaz Gráfica de Usuario (GUI):
-   Esto podría presentarse de forma más interactiva, como enlaces a los documentos completos, la capacidad de expandir/colapsar fragmentos, o resaltar las partes del fragmento que el LLM usó más directamente (aunque esto último es más avanzado).

Aunque la "presentación" aquí es a través de la consola, el principio de mostrar las fuentes es un aspecto importante del diseño de sistemas RAG centrados en el usuario.`
      },
      {
        id: "009_rag_dof_ollama_groq_deepseek-concept-5",
        name: "Iteración y Ajuste de Sistemas RAG",
        explanation: `Construir un sistema RAG efectivo raramente es un proceso de "una sola vez". Generalmente requiere múltiples ciclos de iteración y ajuste para optimizar su rendimiento.
Aspectos Comunes a Iterar y Ajustar:
1.  Calidad de los Datos Fuente: ¿Son los documentos originales limpios y bien estructurados?
2.  Estrategia de Fragmentación (Chunking):
    -   Tamaño del Chunk: ¿Demasiado pequeño (pierde contexto)? ¿Demasiado grande (diluye la información relevante, excede límites)?
    -   Overlap: ¿Es suficiente para mantener la coherencia?
3.  Modelo de Embedding:
    -   Diferentes modelos (\`bge-m3\`, \`text-embedding-ada-002\`, etc.) tienen diferentes fortalezas y debilidades. Probar varios puede ser necesario.
    -   ¿La dimensionalidad es la adecuada?
4.  Base de Datos Vectorial y Parámetros de Búsqueda:
    -   ¿El índice está bien configurado?
    -   Número de Fragmentos a Recuperar (\`k\`): ¿Recuperar muy pocos (pierde información)? ¿Demasiados (introduce ruido y excede el contexto del LLM generador)?
    -   Umbrales de similitud para filtrar resultados.
5.  Modelo de Lenguaje Generativo (LLM):
    -   Elegir el LLM adecuado para la tarea y el presupuesto (ej. GPT-4, Llama, Deepseek, Mixtral).
    -   Parámetros de generación: Temperatura (creatividad vs. factualidad), max_tokens para la respuesta.
6.  Ingeniería de Prompts:
    -   Refinar continuamente el prompt del sistema enviado al LLM generador para mejorar la calidad, factualidad y formato de las respuestas.
7.  Enriquecimiento del Contexto:
    -   ¿Es útil incluir resúmenes además de fragmentos? ¿Se deberían incluir otros metadatos?
    -   ¿Cómo se ordenan y presentan los fragmentos al LLM?
8.  Evaluación:
    -   Definir métricas para evaluar la calidad de la recuperación y la generación (ej. relevancia de los fragmentos, exactitud de la respuesta, cobertura).
    -   Usar conjuntos de preguntas y respuestas de prueba.

Este script representa una configuración específica del pipeline RAG. Para un sistema de producción, se realizarían experimentos y ajustes en estos componentes para lograr el mejor rendimiento posible para el caso de uso específico de consulta de documentos del DOF.`
      }
    ],
    sourceCode: `
import os
import re
import time
import json
import numpy as np
import ollama
import lancedb
from groq import Groq
from dotenv import load_dotenv
from typing import List, Dict, Optional, Tuple
import tiktoken

load_dotenv()

MODELO_EMBEDDING_OLLAMA = "bge-m3" # INTERACTIVE_SEGMENT_TARGET: 009-ollama-model
MODELO_GENERACION_GROQ = "deepseek-r1-distill-llama-70b" # INTERACTIVE_SEGMENT_TARGET: 009-groq-model
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
# ... (otras constantes)
NUM_DOCUMENTOS_RELEVANTES_K = 4

def obtener_embedding_ollama_pregunta(texto: str, modelo: str = MODELO_EMBEDDING_OLLAMA) -> Optional[np.ndarray]:
    # ... (función para obtener embedding de la pregunta)
    try:
        response = ollama.embeddings(model=modelo, prompt=texto)
        return np.array(response.get('embedding')) if response.get('embedding') else None
    except: return None

def buscar_fragmentos_similares_lance(db_path: str, table_name: str, pregunta_texto: str, k: int = NUM_DOCUMENTOS_RELEVANTES_K) -> List[Dict]: # INTERACTIVE_SEGMENT_TARGET: 009-retrieve-fragments
    # ... (función para buscar en LanceDB)
    try:
        db = lancedb.connect(db_path); table = db.open_table(table_name)
        pregunta_embedding = obtener_embedding_ollama_pregunta(pregunta_texto)
        if pregunta_embedding is None: return []
        return table.search(pregunta_embedding.tolist()).limit(k).to_list()
    except: return []


def leer_resumen_de_archivo(nombre_archivo_original_txt: str, carpeta_base_resumenes: str) -> Optional[str]: # INTERACTIVE_SEGMENT_TARGET: 009-read-summary
    nombre_archivo_resumen = nombre_archivo_original_txt.rsplit('.txt', 1)[0] + "_resumen.txt"
    ruta_archivo_resumen = os.path.join(carpeta_base_resumenes, nombre_archivo_resumen)
    if os.path.exists(ruta_archivo_resumen):
        try:
            with open(ruta_archivo_resumen, 'r', encoding='utf-8') as f_resumen:
                return f_resumen.read().strip()
        except: return None
    return None

def generar_respuesta_con_rag_groq(cliente_groq: Groq, pregunta_usuario: str, documentos_contexto: List[Dict[str, any]], carpeta_resumenes: str) -> Tuple[Optional[str], int]:
    tokens_prompt_final_enviados = 0
    if not documentos_contexto: return "No pude encontrar documentos relevantes.", 0
    
    contexto_str_parts = [] # INTERACTIVE_SEGMENT_TARGET: 009-build-context-start
    archivos_originales_ya_con_resumen = set()
    for doc in documentos_contexto: # Add summaries
        nombre_original = doc.get('nombre_archivo_original')
        if nombre_original and nombre_original not in archivos_originales_ya_con_resumen:
            resumen_texto = leer_resumen_de_archivo(nombre_original, carpeta_resumenes)
            if resumen_texto:
                # ... (truncar resumen si es necesario)
                contexto_str_parts.append(f"Resumen del documento '{nombre_original}':\\n{resumen_texto}")
                archivos_originales_ya_con_resumen.add(nombre_original)
    
    if contexto_str_parts: contexto_str_parts.append("\\n--- Detalles de Fragmentos Específicos ---")
    for doc_idx, doc in enumerate(documentos_contexto): # Add specific fragments
        texto_fragmento = doc.get('texto', '')
        # ... (truncar fragmento si es necesario)
        contexto_str_parts.append(f"Fragmento {doc_idx+1} (de '{doc.get('nombre_archivo_original', 'N/A')}'):\\n{texto_fragmento}")
    contexto_str = "\\n\\n".join(contexto_str_parts) # INTERACTIVE_SEGMENT_TARGET: 009-build-context-end

    prompt_completo = ( # INTERACTIVE_SEGMENT_TARGET: 009-full-rag-prompt
        "Eres un asistente experto en responder preguntas sobre documentos del Diario Oficial de la Federación (DOF) de México. "
        "Tu respuesta debe basarse ESTRICTAMENTE en la información contenida en los siguientes resúmenes y fragmentos de documentos proporcionados. "
        # ... (más instrucciones del prompt)
        "Si la información necesaria no está en los fragmentos, indica: 'La información específica no se encuentra en los documentos proporcionados.' "
        "No inventes información.\\n\\n"
        f"PREGUNTA DEL USUARIO:\\n{pregunta_usuario}\\n\\n"
        "CONTEXTO (RESÚMENES Y FRAGMENTOS RELEVANTES):\\n"
        f"{contexto_str}\\n\\n"
        "RESPUESTA (basada únicamente en el contexto anterior):"
    )
    # ... (contar tokens, verificar límites de API Groq)

    try:
        # ... (verificar_y_esperar_limites_groq)
        stream = cliente_groq.chat.completions.create( # INTERACTIVE_SEGMENT_TARGET: 009-groq-generate-call
            model=MODELO_GENERACION_GROQ,
            messages=[{"role": "user", "content": prompt_completo}],
            # ... (otros parámetros de generación: temperature, max_tokens)
            stream=True 
        )
        respuesta_llm = "".join([chunk.choices[0].delta.content or "" for chunk in stream])
        # ... (actualizar contadores de API)
        return respuesta_llm.strip(), tokens_prompt_final_enviados
    except Exception as e:
        # ... (manejo de errores y reintentos)
        return "Error con API Groq.", tokens_prompt_final_enviados
    # return "No se pudo obtener respuesta.", tokens_prompt_final_enviados


if __name__ == "__main__":
    if not GROQ_API_KEY: print("Error: GROQ_API_KEY no configurada."); exit()
    cliente_groq_main = Groq()
    # ... (configuración de rutas y nombres de tabla)
    
    while True:
        pregunta_usuario = input("\\nIntroduce tu pregunta (o 'salir'):\\n> ")
        if pregunta_usuario.lower() == 'salir': break
        if not pregunta_usuario.strip(): continue
        
        # 1. Recuperación
        fragmentos_recuperados = buscar_fragmentos_similares_lance(directorio_bd, nombre_de_la_tabla, pregunta_usuario)
        
        respuesta_llm_texto = "No se procesó."
        if fragmentos_recuperados:
            # 2. Generación
            respuesta_llm_texto, _ = generar_respuesta_con_rag_groq( # INTERACTIVE_SEGMENT_TARGET: 009-call-rag-generation
                cliente_groq_main, pregunta_usuario, fragmentos_recuperados, ruta_carpeta_resumenes_completa
            )
        else:
            respuesta_llm_texto = "No se encontraron fragmentos relevantes."
        
        print("\\nRespuesta del Asistente RAG:") # INTERACTIVE_SEGMENT_TARGET: 009-display-response
        print(respuesta_llm_texto)
        
        if fragmentos_recuperados: # INTERACTIVE_SEGMENT_TARGET: 009-display-sources
            print("\\n--- Fragmentos Usados para Contextualizar ---")
            # ... (imprimir detalles de los fragmentos fuente)
        # ... (pausa)
`,
    interactiveSegments: [
      {
        id: "009-ollama-model",
        label: "Modelo de Embedding (Ollama)",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 009-ollama-model/,
        explanation: "Se especifica `bge-m3` como el modelo a usar con Ollama para generar los embeddings de las preguntas del usuario. Debe ser el mismo que se usó para crear la base de datos vectorial.",
        relatedConceptIds: ["007_crear_bd_lancedb_dof-concept-0", "007_crear_bd_lancedb_dof-concept-1"]
      },
      {
        id: "009-groq-model",
        label: "Modelo de Generación (Groq)",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 009-groq-model/,
        explanation: "Se define `deepseek-r1-distill-llama-70b` como el modelo LLM que se usará a través de la API de Groq para generar la respuesta final, basándose en el contexto recuperado.",
        relatedConceptIds: ["005_generar_resumenes_dof-concept-0", "005_generar_resumenes_dof-concept-1"]
      },
      {
        id: "009-retrieve-fragments",
        label: "Recuperar Fragmentos de LanceDB",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 009-retrieve-fragments/,
        explanation: "La función `buscar_fragmentos_similares_lance` se llama para convertir la pregunta del usuario en un embedding y luego buscar los fragmentos más similares en la base de datos LanceDB.",
        relatedConceptIds: ["008_consultar_bd_lancedb_terminal-concept-0", "008_consultar_bd_lancedb_terminal-concept-2"]
      },
      {
        id: "009-read-summary",
        label: "Leer Resumen de Archivo",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 009-read-summary/,
        explanation: "`leer_resumen_de_archivo` intenta cargar un resumen pre-generado (del script 005) para el documento original de donde proviene un fragmento recuperado. Esto enriquece el contexto.",
        relatedConceptIds: ["009_rag_dof_ollama_groq_deepseek-concept-1"]
      },
      {
        id: "009-build-context-start",
        label: "Inicio de Construcción de Contexto",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 009-build-context-start/,
        explanation: "Aquí comienza la lógica para ensamblar el contexto que se enviará al LLM. Se inicializa `contexto_str_parts` para acumular resúmenes y fragmentos.",
        relatedConceptIds: ["009_rag_dof_ollama_groq_deepseek-concept-1"]
      },
      {
        id: "009-build-context-end",
        label: "Finalización de Construcción de Contexto",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 009-build-context-end/,
        explanation: "Los resúmenes y fragmentos recolectados se unen en una sola cadena `contexto_str`, listos para ser insertados en el prompt principal.",
        relatedConceptIds: ["009_rag_dof_ollama_groq_deepseek-concept-1"]
      },
      {
        id: "009-full-rag-prompt",
        label: "Prompt Completo para RAG",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 009-full-rag-prompt/,
        explanation: "Este es el prompt completo que se envía al LLM de Groq. Contiene instrucciones, la pregunta del usuario y el contexto enriquecido (resúmenes y fragmentos recuperados).",
        relatedConceptIds: ["009_rag_dof_ollama_groq_deepseek-concept-0", "009_rag_dof_ollama_groq_deepseek-concept-2", "005_generar_resumenes_dof-concept-2"]
      },
      {
        id: "009-groq-generate-call",
        label: "Llamada a Groq para Generación",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 009-groq-generate-call/,
        explanation: "`cliente_groq.chat.completions.create()` envía el prompt completo al modelo de Groq para generar la respuesta final al usuario.",
        relatedConceptIds: ["005_generar_resumenes_dof-concept-1", "009_rag_dof_ollama_groq_deepseek-concept-3"]
      },
      {
        id: "009-call-rag-generation",
        label: "Invocar Función de Generación RAG",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 009-call-rag-generation/,
        explanation: "Se llama a la función `generar_respuesta_con_rag_groq`, pasando el cliente de Groq, la pregunta, los fragmentos recuperados y la ruta a los resúmenes, para obtener la respuesta final del LLM.",
        relatedConceptIds: ["009_rag_dof_ollama_groq_deepseek-concept-0"]
      },
      {
        id: "009-display-response",
        label: "Mostrar Respuesta del Asistente",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 009-display-response/,
        explanation: "La respuesta generada por el LLM se imprime en la consola para el usuario.",
        relatedConceptIds: ["009_rag_dof_ollama_groq_deepseek-concept-3"]
      },
      {
        id: "009-display-sources",
        label: "Mostrar Fragmentos Fuente",
        matcher: /# INTERACTIVE_SEGMENT_TARGET: 009-display-sources/,
        explanation: "Después de la respuesta, se muestran los detalles de los fragmentos que se recuperaron de LanceDB y se usaron para construir el contexto. Esto proporciona transparencia sobre las fuentes.",
        relatedConceptIds: ["009_rag_dof_ollama_groq_deepseek-concept-4"]
      }
    ]
  }
];
