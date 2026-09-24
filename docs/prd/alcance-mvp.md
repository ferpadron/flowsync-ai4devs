# Alcance del MVP — FlowSync

> Documento vivo. Es la fuente original del alcance acordado; no es el PRD (ver [`flowsync-mvp.md`](./flowsync-mvp.md), que se deriva de él).
> Última actualización: 2026-09-18.
>
> Convención: las decisiones confirmadas están en las secciones 1 a 5 y 8 (problema, usuarios, propuesta de valor, alcance, no-alcance y criterio de éxito del piloto). Las secciones 6 y 7 (hipótesis, riesgos y puntos abiertos) **no son requisitos** y no deben leerse como tales. Lo que no figura en la sección 4 no forma parte del alcance acordado, pero eso no equivale a una exclusión decidida.

## 1. Problema

Un equipo remoto no tiene visibilidad compartida de en qué trabaja cada persona. Hoy esa visibilidad se obtiene con la ronda de status de la daily. Se quiere comprobar si esa ronda, y solo esa, puede dejar de ser necesaria.

El objetivo no es eliminar la daily completa: la conversación sobre bloqueos u otras funciones útiles de la daily pueden permanecer.

## 2. Usuarios

- Miembros de equipos remotos pequeños, de aproximadamente 3 a 10 personas. El caso de estudio asume un equipo de 6.
- Todos los miembros tienen el mismo nivel: no hay roles diferenciados de manager, administrador o supervisor.
- La visibilidad está pensada principalmente para los propios miembros del equipo, de modo que puedan ver de un vistazo en qué está cada uno sin tener que preguntar.

## 3. Propuesta de valor

Ver de un vistazo en qué está cada persona del equipo y qué se ha pasado de plazo, sin preguntar.

- "Menos rollo que Jira" significa poder crear una tarea y cambiarle el estado en segundos, sin flujos de configuración ni campos obligatorios adicionales. Lo mínimo para saber quién está en qué.
- "Tiempo real" significa que, cuando alguien cambia el estado de una tarea, los demás pueden ver ese cambio sin tener que refrescar manualmente la página.

## 4. Alcance incluido (in-scope)

Solo decisiones confirmadas.

### 4.1 Capacidades que ya existen en el repo y se reutilizan sin cambios

- Cuentas de usuario: registro, inicio de sesión, cierre de sesión y consulta del propio perfil.

### 4.2 Capacidades nuevas (hoy no existen en el repo)

El repo actual no tiene ningún concepto de tarea, de espacio compartido ni de actualización en vivo. Todo lo siguiente es nuevo:

- **Espacio único compartido** para todo el equipo.
- **Crear una tarea** con únicamente estos cuatro atributos: título, responsable, estado y fecha de vencimiento. El responsable es obligatorio; la fecha de vencimiento es opcional.
- **Tres estados fijos y no configurables:** Pendiente, En progreso y Hecha. Son exactamente los tres estados del MVP.
- **Cambiar el estado de una tarea**, manualmente, por una persona.
- **Todos los miembros ven y pueden editar lo mismo:** no hay permisos diferenciados entre miembros en el MVP. Este documento no define qué campos concretos de una tarea son editables más allá de las capacidades descritas en esta sección.
- **Lista compartida de tareas**, visible por igual para todos los miembros, sin vistas diferenciadas por rol. Permite identificar qué tarea corresponde a qué responsable, porque se deriva de la propuesta de valor de saber «quién está en qué». No se decide diseño visual.
- **Filtrar la lista por estado**, para centrarse en lo pendiente.
- **Identificar de un vistazo qué tareas están vencidas**, a partir de la fecha de vencimiento. Una tarea sin fecha de vencimiento no puede considerarse vencida por fecha.
- **Ver los cambios de estado de otras personas sin refrescar manualmente la página.** Este comportamiento se limita a los cambios de estado: no cubre la creación de tareas, los cambios de responsable ni de fecha, ni otros atributos. No se fija una latencia ni un mecanismo.

### 4.3 Condición del piloto (no es funcionalidad)

- Durante la semana de prueba, el equipo del caso de estudio usa FlowSync como herramienta para este flujo, en lugar de mantener en paralelo otro gestor para la misma función.

## 5. No-alcance (out-of-scope)

Solo exclusiones confirmadas.

- Modelar equipos, organizaciones, proyectos o múltiples espacios como conceptos de producto.
- Roles diferenciados (manager, administrador, supervisor).
- Roles y permisos avanzados (en el MVP todos los miembros ven y pueden editar lo mismo).
- Presencia online e indicadores de quién está conectado.
- Notificaciones push.
- Inferir automáticamente el estado de una tarea desde commits, calendario, actividad u otras herramientas: el estado lo actualiza manualmente una persona.
- Atributos de tarea adicionales a los cuatro definidos en 4.2.
- El estado «Bloqueada» y la configuración de estados.
- Integración con Slack.
- Comentarios en tareas.
- Analytics/reporting.
- Reportes.
- Sprints.
- Estimaciones.
- Épicas como funcionalidad del producto.
- Backlog priorizado como funcionalidad del producto.

«Épicas» y «backlog priorizado» se refieren a funcionalidades de FlowSync, no a los artefactos de planificación utilizados en este ejercicio.

## 6. Hipótesis de producto y riesgos

Nada de esta sección es un requisito.

**Riesgo principal**

- Que las personas no mantengan actualizado manualmente su estado. Si la información queda obsoleta, la visibilidad deja de ser confiable y la propuesta de valor se rompe. No hay mecanismo decidido para abordarlo ni para detectarlo (ver sección 7).

**Hipótesis**

- Un equipo de 6 personas mantendrá su estado actualizado a mano; crear y cambiar el estado de una tarea en segundos es suficientemente ligero para sostener ese hábito.
- Ver los cambios sin refrescar basta para que la ronda de status de la daily deje de hacer falta.

## 7. Puntos abiertos

Siguen sin decidir. No se asume ninguna respuesta.

PA-1 (el conjunto de estados de una tarea) quedó resuelto y está recogido en la sección 4.2.

- **PA-2. Reasignación de tareas ajenas.** No está decidido qué significa concretamente reasignar el responsable de una tarea que corresponde a otra persona, ni si esa capacidad forma parte del MVP. Que todos los miembros ven y pueden editar lo mismo sí está decidido (sección 4.2).
- **PA-3. Cómo se detectará o medirá la obsolescencia del estado durante el piloto.**
- **PA-4. Quién forma parte del espacio único.** No está definido cómo se determina que las personas del piloto son "el equipo".

## 8. Criterio de éxito del piloto

- Señal de éxito para el usuario: dejar de hacer la ronda de "¿en qué estás?" de la daily, porque el estado del equipo se ve de un vistazo.
- Criterio tras una semana de uso real: el equipo elimina esa ronda de status y nadie pide recuperarla.
- Si la siguen haciendo igual, se considera que la propuesta no resolvió el problema.
- El criterio se refiere únicamente a la ronda de status, no a la daily completa: la conversación sobre bloqueos u otras funciones útiles de la daily puede permanecer.
