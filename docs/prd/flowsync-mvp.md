# PRD del MVP — FlowSync

> Borrador. Última actualización: 2026-09-18.
> Autoridad documental:
> - [`alcance-mvp.md`](./alcance-mvp.md) es la fuente de verdad del alcance; este PRD está sincronizado con él.
> - DP-1, DP-2 y DP-3 (apartado 4.7) fueron decisiones humanas posteriores a la primera versión del alcance y ya están reflejadas en él. PA-1 quedó cerrado por DP-1.
> - PA-2, PA-3 y PA-4 permanecen abiertos (apartado 4.6).
>
> Convenciones:
> - **Existente / Nuevo**: distingue lo que ya está en el repo y se reutiliza de lo que aporta el MVP.
> - **DP-n**: decisión de producto posterior al documento de alcance (ver 4.7).
> - **PA-n**: punto abierto; sigue sin decidir. Los identificadores no se renumeran al cerrar uno.
> - **[SUPUESTO]**: hipótesis de producto pendiente de validar; no es un requisito.
> - **Origen**: la decisión de la que se traza cada requisito (sección y viñeta del alcance, o DP-n).

## 1. Problema y contexto

**Problema.** Un equipo remoto no tiene visibilidad compartida de en qué trabaja cada persona. Hoy esa visibilidad se obtiene con la ronda de status de la daily (en este documento, «ronda de status» nombra ese ritual; «estado» se reserva para el estado de una tarea). Se quiere comprobar si esa ronda, y solo esa, puede dejar de ser necesaria. El objetivo no es eliminar la daily completa: la conversación sobre bloqueos u otras funciones útiles de la daily pueden permanecer.

**Contexto.**
- El foco son equipos remotos pequeños, de aproximadamente 3 a 10 personas.
- El caso de estudio de 6 personas es un escenario de referencia para este ejercicio, no evidencia de un cliente real.
- El repo actual solo dispone de cuentas de usuario (registro, inicio y cierre de sesión, perfil). No existe ningún concepto de tarea, de espacio compartido ni de visualización de cambios sin refrescar (ver sección 4).

## 2. Usuarios y jobs-to-be-done

**Miembro.** Es el usuario del producto: una persona de un equipo remoto pequeño que usa FlowSync junto con el resto del equipo. Todos los miembros tienen el mismo nivel: no hay roles diferenciados de manager, administrador o supervisor. Cómo se determina quién forma parte del espacio compartido sigue abierto (PA-4). La visibilidad está pensada principalmente para los propios miembros, de modo que puedan ver de un vistazo en qué está cada uno sin tener que preguntar.

**Jobs-to-be-done** (derivados del alcance):
- Cuando trabajo en un equipo remoto, quiero ver de un vistazo en qué está cada persona, para no tener que preguntar ni esperar a la ronda de status de la daily.
- Cuando mi trabajo avanza, quiero crear una tarea o cambiarle el estado en segundos, para que el equipo tenga información al día sin que me suponga un trámite.
- Cuando miro el trabajo del equipo, quiero identificar qué se ha pasado de plazo, para centrarme en lo que no va en fecha.

## 3. Propuesta de valor

Ver de un vistazo en qué está cada persona del equipo y qué se ha pasado de plazo, sin preguntar.

- **«Menos rollo que Jira»** significa poder crear una tarea y cambiarle el estado en segundos, sin flujos de configuración ni campos obligatorios adicionales. Lo mínimo para saber quién está en qué.
- **«Tiempo real»** significa que, cuando alguien cambia el estado de una tarea, los demás miembros pueden ver ese cambio sin tener que refrescar manualmente. No implica una latencia concreta, que no está definida.

## 4. Alcance / Fuera de alcance

### 4.1 Dentro de alcance — capacidades que YA EXISTEN y se reutilizan

- Cuentas de usuario: registro, inicio de sesión, cierre de sesión y consulta del propio perfil. Se reutilizan; este PRD no las modifica ni decide cómo se determina quién forma parte del espacio compartido (PA-4).

### 4.2 Dentro de alcance — capacidades NUEVAS del MVP

- Un único espacio compartido para todo el equipo.
- Crear una tarea con únicamente estos atributos: título, responsable, estado y fecha de vencimiento. El responsable es obligatorio y la fecha de vencimiento es opcional (DP-2).
- Tres estados fijos y no configurables: Pendiente, En progreso y Hecha (DP-1).
- Cambiar el estado de una tarea, manualmente, por una persona.
- Todos los miembros ven y pueden editar lo mismo: no hay permisos diferenciados entre miembros en el MVP. Este PRD no define qué campos concretos de una tarea son editables más allá de las capacidades descritas en esta sección.
- Una lista compartida de tareas, visible por igual para todos los miembros, sin vistas diferenciadas por rol, que permite identificar qué tarea corresponde a qué responsable (DP-3).
- Filtrar la lista por estado, para centrarse en lo pendiente.
- Identificar de un vistazo qué tareas están vencidas, a partir de la fecha de vencimiento. Una tarea sin fecha de vencimiento no puede considerarse vencida por fecha (DP-2).
- Ver los cambios de estado de otras personas sin refrescar manualmente. Solo cambios de estado (ver RF-11).

### 4.3 Condición del piloto (no es funcionalidad)

- Durante la semana de prueba, el equipo del caso de estudio usa FlowSync como herramienta para este flujo, en lugar de mantener en paralelo otro gestor para la misma función.

### 4.4 Fuera del MVP (exclusiones confirmadas)

Son exclusiones del MVP, no reglas permanentes del producto.

- Modelar equipos, organizaciones, proyectos o múltiples espacios como conceptos de producto.
- Roles diferenciados (manager, administrador, supervisor).
- Roles y permisos avanzados (en el MVP todos los miembros ven y pueden editar lo mismo).
- Presencia online e indicadores de quién está conectado.
- Notificaciones push.
- Inferir automáticamente el estado de una tarea desde commits, calendario, actividad u otras herramientas: el estado lo actualiza manualmente una persona.
- Atributos de tarea adicionales a los definidos en 4.2.
- El estado «Bloqueada» y la configuración de estados (DP-1).
- Integración con Slack.
- Comentarios en tareas.
- Analytics/reporting.
- Reportes.
- Sprints.
- Estimaciones.
- Épicas como funcionalidad del producto.
- Backlog priorizado como funcionalidad del producto.

«Épicas» y «backlog priorizado» se refieren aquí a funcionalidades de FlowSync. No se refieren a las épicas de la sección 5 de este PRD ni a otros artefactos de planificación utilizados en este ejercicio.

Lo que no figura en 4.1–4.2 no forma parte del alcance acordado, pero eso no equivale a una exclusión decidida.

### 4.5 Riesgo principal e hipótesis (no son requisitos)

**Riesgo principal.** Que las personas no mantengan actualizado manualmente su estado, de modo que la información quede desactualizada. Si eso ocurre, la visibilidad deja de ser confiable y la propuesta de valor se rompe. No hay mecanismo decidido para abordarlo ni para detectarlo (ver PA-3).

**Hipótesis de producto:**
- [SUPUESTO] Un equipo de 6 personas mantendrá su estado actualizado a mano; crear y cambiar el estado de una tarea en segundos es suficientemente ligero para sostener ese hábito.
- [SUPUESTO] Ver los cambios sin refrescar basta para que la ronda de status de la daily deje de hacer falta.

### 4.6 Puntos abiertos (sin decidir; no se asume ninguna respuesta)

PA-1 (estados de una tarea) quedó resuelto por DP-1 y ya no figura aquí.

- **PA-2. Reasignación de tareas ajenas.** No está decidido qué significa concretamente reasignar el responsable de una tarea que corresponde a otra persona, ni si esa capacidad forma parte del MVP. Que todos los miembros ven y pueden editar lo mismo sí está decidido (apartado 4.2).
- **PA-3. Cómo se detectará o medirá la obsolescencia del estado durante el piloto.**
- **PA-4. Quién forma parte del espacio único.** No está definido cómo se determina que las personas del piloto son «el equipo».

### 4.7 Decisiones posteriores al alcance

Decisiones humanas posteriores a la primera versión de `alcance-mvp.md`. Ya están reflejadas en él; se conservan aquí como historial de trazabilidad.

- **DP-1. Estados de una tarea.** Exactamente tres: Pendiente, En progreso y Hecha. Son fijos y no configurables. «Bloqueada» no forma parte del MVP. Cierra PA-1.
- **DP-2. Responsable y fecha de vencimiento.** El responsable es obligatorio. La fecha de vencimiento es opcional. Una tarea sin fecha de vencimiento no puede considerarse vencida por fecha.
- **DP-3. Visibilidad del responsable.** La lista permite al miembro identificar qué tarea corresponde a qué responsable, porque se deriva de la propuesta de valor de saber «quién está en qué».

## 5. Épicas del MVP

- **E1 «Cuentas y acceso»** — reutiliza las capacidades existentes de cuentas y autenticación (registro, inicio y cierre de sesión, consulta del perfil).
- **E2 «Gestión de tareas»** — agrupa la creación de tareas, el responsable, los estados, el cambio manual de estado, la fecha de vencimiento, la identificación de tareas vencidas y el filtrado por estado.
- **E3 «Actividad del equipo»** — agrupa la visibilidad compartida de la actividad del equipo y el comportamiento confirmado de ver los cambios de estado sin refrescar.

## 6. Requisitos funcionales

Cada RF indica su épica, si es Existente o Nuevo, su origen (la decisión de la que se traza; «Alcance» = `alcance-mvp.md`) y sus dependencias de puntos abiertos.

### E1 — Cuentas y acceso

**RF-1 [Existente]** Un miembro puede registrarse, iniciar sesión, cerrar sesión y consultar su propio perfil.
Origen: Alcance §4.1.
Nota: capacidad existente que se reutiliza. No decide cómo se determina quién forma parte del espacio compartido (PA-4).

### E2 — Gestión de tareas

**RF-2 [Nuevo]** Un miembro puede crear una tarea con título, responsable, estado y, opcionalmente, fecha de vencimiento. El responsable es obligatorio. En el MVP la tarea no tiene otros atributos.
Origen: Alcance §4.2 («Crear una tarea…»); Alcance §5 (atributos adicionales fuera del MVP); DP-2.
Depende de: PA-4 (qué personas pueden figurar como responsable).

**RF-3 [Nuevo]** Toda tarea tiene uno de estos tres estados: Pendiente, En progreso o Hecha. Los estados son fijos y los miembros no pueden configurarlos.
Origen: DP-1.

**RF-4 [Nuevo]** Un miembro puede actualizar manualmente el estado de una tarea entre Pendiente, En progreso y Hecha (RF-3), y la tarea pasa a mostrar el nuevo estado.
Origen: Alcance §4.2 («Cambiar el estado…» y «Todos los miembros ven y pueden editar lo mismo»); Alcance §5 (el estado lo actualiza una persona); DP-1.

**RF-5 [Nuevo]** Crear una tarea y cambiar su estado no requiere flujos de configuración ni campos obligatorios adicionales a los definidos en RF-2.
Origen: Alcance §3 («menos rollo que Jira»); Alcance §4.2.

**RF-6 [Nuevo]** Desde la lista, un miembro puede identificar qué tareas están vencidas por su fecha de vencimiento. Una tarea sin fecha de vencimiento no puede considerarse vencida por fecha.
Origen: Alcance §3; Alcance §4.2 («Identificar de un vistazo… vencidas»); DP-2.

**RF-7 [Nuevo]** Un miembro puede filtrar la lista de tareas por estado (Pendiente, En progreso o Hecha).
Origen: Alcance §4.2 («Filtrar la lista por estado…»); DP-1.
Nota: la finalidad confirmada es centrarse en lo pendiente. Sigue sin decidirse si «lo pendiente» significa solo el estado Pendiente o todo lo que no está en estado Hecha; este PRD no lo resuelve.

### E3 — Actividad del equipo

**RF-8 [Nuevo]** Para el MVP existe un único espacio compartido en el que los miembros ven las tareas del equipo.
Origen: Alcance §4.2 («Espacio único compartido»); Alcance §5 (equipos, organizaciones, proyectos y múltiples espacios fuera del MVP).
Depende de: PA-4 (quién forma parte del espacio).

**RF-9 [Nuevo]** Todos los miembros ven la lista de tareas del espacio compartido por igual, sin vistas diferenciadas por rol.
Origen: Alcance §2 (mismo nivel, sin roles); Alcance §4.2 («Lista compartida de tareas…»).
Depende de: PA-4 (quiénes son «los miembros»).

**RF-10 [Nuevo]** La lista permite a un miembro identificar qué tarea corresponde a qué responsable.
Origen: Alcance §3 (saber «quién está en qué»); DP-3.

**RF-11 [Nuevo]** Cuando una persona cambia el estado de una tarea, los demás miembros pueden ver ese cambio sin tener que refrescar manualmente.
Origen: Alcance §3 («tiempo real»); Alcance §4.2 («Ver los cambios de estado…»).
Depende de: PA-4 (quiénes son «los demás miembros»).
Alcance de este requisito: únicamente los cambios de estado. No cubre la creación de tareas, los cambios de responsable ni de fecha, ni otros atributos. No fija una latencia concreta ni un mecanismo.

## 7. Requisitos no funcionales

Con las decisiones actuales no existe ningún requisito no funcional verificable respaldado por el alcance, y no se fabrica ninguno. Para evitar que se lean como tales:

- **Baja fricción («en segundos»).** Expresa la intención de producto de que crear una tarea y cambiar su estado cueste poco. No existe un umbral numérico aprobado. El comportamiento observable que la respalda es RF-5.
- **Tamaño del equipo (aproximadamente 3 a 10 personas; caso de estudio de 6).** Es contexto del equipo objetivo (ver §1 y §2), no un requisito no funcional.
- **Sin acordar:** objetivos de rendimiento, disponibilidad, escalabilidad, seguridad y experiencia de usuario. Tampoco existe un tiempo máximo para que un cambio de estado sea visible para los demás (RF-11).

## 8. Restricciones

- **Stack actual:** AdonisJS 7 (backend) y React 19 (frontend). Fuente: repo actual.
- **Cuentas y autenticación:** ya existen en el repo y deben reutilizarse.
- **Autoridad de producto:** [`alcance-mvp.md`](./alcance-mvp.md) es la fuente de verdad del alcance; este PRD está sincronizado con él.

## 9. Métricas de éxito

Derivadas del criterio de éxito del piloto en el alcance. No se han acordado cifras ni objetivos cuantitativos.

- **Señal de éxito para el usuario:** dejar de hacer la ronda de «¿en qué estás?» de la daily, porque el estado del equipo se ve de un vistazo.
- **Criterio tras una semana de uso real:** el equipo elimina esa ronda de status y nadie pide recuperarla.
- **Criterio de fracaso:** si la siguen haciendo igual, se considera que la propuesta no resolvió el problema.
- **Alcance del criterio:** se refiere únicamente a la ronda de status, no a la daily completa; la conversación sobre bloqueos u otras funciones útiles de la daily puede permanecer.
- **Condición de validez:** durante la semana, FlowSync es la herramienta del equipo para este flujo, sin otro gestor en paralelo (ver 4.3). El caso de estudio de 6 personas es un escenario de referencia, no un cliente real.
- **Sin métrica de obsolescencia:** no se define una medida de si el estado se mantiene al día, porque el mecanismo sigue abierto (PA-3). El riesgo de información desactualizada (4.5) permanece sin medir.

**Limitaciones metodológicas y riesgos del piloto** (no son requisitos ni métricas nuevas):
- Efecto novedad: una semana puede favorecer el uso inicial y no reflejar el desgaste posterior.
- Resultados intermedios: la ronda puede acortarse, volverse opcional o mantenerse solo para algunas personas; no son ni éxito ni fracaso según el criterio actual.
- Migración de preguntas a chat: la ronda puede cancelarse mientras la pregunta «¿en qué estás?» pasa a otro canal.
- Duración y muestra: una semana y un solo equipo de referencia limitan lo que el resultado permite concluir.
