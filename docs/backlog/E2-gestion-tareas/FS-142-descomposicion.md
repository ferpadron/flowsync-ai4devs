# FS-142 — Descomposición en tickets (planificación)

> **Estado:** PLANIFICACIÓN REVISADA (FS-142.1) · contingencia de división `[CONTINGENTE]`, no aprobada (sección 7) · complejidad `[PROVISIONAL]` · no es un compromiso de entrega · sin horas · claves Jira solo en [`../README.md`](../README.md) §4.1 (Jira no es fuente de verdad).
> Última actualización: 2026-09-23. Etiquetas e identificadores: [`../README.md`](../README.md).
> Esta descomposición no modifica la historia ni sus criterios de aceptación: [`FS-142.md`](./FS-142.md) sigue siendo la fuente de AC-1 a AC-5.

## 1. Fuentes

- Historia y criterios de aceptación: [`FS-142.md`](./FS-142.md).
- Requisitos y decisiones: RF-7, RF-3 y DP-1 en [`../../prd/flowsync-mvp.md`](../../prd/flowsync-mvp.md); alcance §4.2 en [`../../prd/alcance-mvp.md`](../../prd/alcance-mvp.md). El comportamiento ante un estado de filtro inválido procede de la «decisión del ejercicio P10», citada en `FS-142.md` (decisión humana del ejercicio; procedencia de AC-4 y AC-5 en [`../README.md`](../README.md) §4).
- Prioridad, secuencia entre historias y prerrequisitos externos: [`../priorizacion-mvp.md`](../priorizacion-mvp.md).
- Historia hermana: [`FS-118-descomposicion.md`](./FS-118-descomposicion.md).

## 2. Alcance de esta descomposición

- Un único ticket propuesto y revisado, FS-142.1, que cubre AC-1 a AC-5 sin cambiarlos.
- **No forman parte de FS-142:** la creación base de tareas, los tres estados fijos, la lista compartida (E3) ni la infraestructura externa de pruebas. Son dependencias externas sin identificador persistido, definidas en [`../priorizacion-mvp.md`](../priorizacion-mvp.md).
- No se añaden quitar el filtro, filtros combinados, selección múltiple, búsqueda, ordenación, paginación, persistencia del filtro ni el estado «Bloqueada».
- **«Lo pendiente»** no se resuelve: FS-142 se basa en la capacidad confirmada de filtrar explícitamente por uno de los tres estados.

## 3. Ticket propuesto y revisado

### FS-142.1 — Filtrar la lista de tareas por estado, distinguiendo resultado vacío y estado no admitido

- **Tipo de trabajo:** vertical fino que atraviesa las capas necesarias (backend y/o frontend, según dónde resida el filtrado), más pruebas. Dónde se ejecuta el filtro es una decisión técnica pendiente y no se toma aquí.
- **Objetivo y alcance:**
  - Que un miembro pueda filtrar la lista por uno de los tres estados: Pendiente, En progreso o Hecha.
  - Un estado válido sin tareas devuelve una lista vacía que no es un error (AC-4).
  - Un estado no admitido produce un error observable y nunca un vacío silencioso (AC-5).
  - No incluye quitar el filtro, filtros combinados, ordenación, paginación, búsqueda ni persistencia. Tampoco el estado «Bloqueada» ni resolver qué es «lo pendiente».
- **AC a los que contribuye:** AC-1, AC-2, AC-3, AC-4, AC-5.
- **Dependencias:** internas, ninguna. Externas, ver la sección 4.
- **DoD — trabajo técnico terminado:**
  - [ ] Los prerrequisitos de la sección 4 existen y están disponibles.
  - [ ] Pasan `npm run lint` y `npm run typecheck` del backend, y `npm run build` y `npm run lint` del frontend, según las capas tocadas.
  - [ ] Si se tocan controladores o rutas, los tipos generados de `.adonisjs/` se regeneran y se versionan (regla de `CLAUDE.md`).
  - [ ] La revisión en PR comprueba que no se añadió ninguna capacidad excluida: quitar filtro, filtros combinados, ordenación, paginación, búsqueda, persistencia ni un estado adicional.
  - [ ] Ninguna decisión abierta de FS-142 quedó resuelta de forma implícita, y «lo pendiente» no se tradujo a ningún comportamiento.
- **DoD — comportamiento validado** (solo se marca con los prerrequisitos disponibles):
  - [ ] AC-1, AC-2 y AC-3 verificados con una lista que contiene tareas en los tres estados.
  - [ ] AC-4 verificado con un estado sin tareas.
  - [ ] AC-5 verificado con un valor de filtro no admitido (ver el riesgo de alcanzabilidad en la sección 6).
  - [ ] Cada escenario tiene su resultado registrado: automatizado en backend, manual en frontend, porque no hay runner de tests en el frontend. Lo no verificable queda como no validado, no como satisfecho.
- **Justificación de tamaño (condicional):** es una sola capacidad con cinco escenarios cerrados y sin funcionalidad adicional. Cabe en media jornada solo si los prerrequisitos ya existen; está en el límite alto.

Terminar el ticket es trabajo técnico completado. El comportamiento de negocio solo se da por validado con el segundo bloque del DoD.

## 4. Dependencias

**Internas:** ninguna.

**Externas** (fuera de FS-142, sin identificador persistido):

| Dependencia externa | Detalle |
|---|---|
| Tareas con estado | Requiere la creación de tareas y los tres estados fijos (RF-2, RF-3). Hoy no existe nada de esto. |
| Lista compartida (E3, RF-9) | AC-1 a AC-5 hablan de «la lista». Su implementación no entra en FS-142. |
| Infraestructura de pruebas backend | No existe. Las suites functional comparten hoy la base de datos con el servidor de desarrollo (`CLAUDE.md`), así que las pruebas pueden escribirse test-first, pero el aislamiento debe estar disponible antes de ejecutar pruebas que puedan afectar a los datos de desarrollo y antes de cerrar la parte funcional. |
| PA-4 | «Miembro» hereda su indefinición. PA-2 y PA-3 no afectan. |

**Bloqueo hoy.** No existen ni las tareas con estado ni la lista de E3, así que ningún AC es observable y FS-142.1 no puede cerrarse. No hay una parte ejecutable de forma aislada: sin tareas con estado ni lista, tampoco puede probarse por separado el filtrado.

## 5. Coordinación con FS-118

- **Bloqueo directo entre ambas historias:** ninguno. Ni el inicio ni el cierre de una requieren la otra.
- **Precedencia de negocio:** no hay una precedencia de negocio aprobada entre FS-142 y FS-118 (ver [`../priorizacion-mvp.md`](../priorizacion-mvp.md)).
- **Externas compartidas:** las mismas dependencias (tareas con estado, lista, pruebas).
- **Coordinación funcional:** ambas actúan sobre la misma lista. Deben acordar qué ve el miembro cuando hay a la vez un filtro por estado y una marca de tarea vencida. Si D-4 de FS-118 admite que una tarea Hecha esté vencida, filtrar por Hecha puede mostrar tareas marcadas (ver [`FS-118-descomposicion.md`](./FS-118-descomposicion.md)). Es un punto de coordinación, no una decisión ni un bloqueo.

## 6. Riesgos de tamaño y bloqueos

**Viabilidad del medio día.** FS-142.1 se mantiene como un único ticket, en el límite alto. Si al empezar hay que crear el aislamiento de pruebas o la lista no ofrece lo necesario, se supera. La división contingente está en la sección 7.

**Riesgos y condicionantes de producto** (se señalan, no se deciden):

- **Alcanzabilidad de AC-5.** Un estado inválido solo puede darse si el valor del filtro puede llegar al sistema por una vía distinta de una elección cerrada entre tres opciones. Cómo se ofrece el filtro no está decidido; si es un control cerrado, AC-5 puede necesitar otro nivel de verificación. Es una observación de planificación: no figura entre los pendientes de `FS-142.md`.
- **Presentación del error y contenido tras el error.** AC-5 exige que sea observable, pero quien implemente deberá elegir alguna presentación. Una persona debe decidirla, o aceptar que es provisional.
- **Quitar el filtro.** Sin ello un miembro no puede volver a la lista completa. Conviene que una persona lo decida antes de la entrega; no se resuelve dentro de este ticket.
- **Orden de los resultados.** No está definido, así que las pruebas no deben apoyarse en un orden.
- **Estado visible en la lista.** Ningún requisito exige que la lista muestre el estado de cada tarea. La verificación puede apoyarse en datos de prueba conocidos, pero conviene que E3 lo tenga presente.

## 7. Contingencia FS-142.2 `[CONTINGENTE]`

> **NO APROBADA.** Esta sección describe una posibilidad condicionada. FS-142.2 no forma parte de la planificación revisada, no se cuenta en ninguna matriz de trazabilidad ni en ningún grafo, y no tiene identificador persistido ni de Jira. Solo se activaría por decisión humana, que además revisaría el alcance de FS-142.1.

- **Disparador:** si al empezar FS-142.1 hay que crear el aislamiento de pruebas, o la lista no ofrece lo necesario, y el ticket supera la media jornada.
- **División posible, sin añadir alcance:**
  - **FS-142.1** quedaría en la capacidad de filtrado con la distinción entre resultado vacío válido y error, con sus pruebas.
  - **FS-142.2** cubriría exponerla en la lista: elegir el estado, mostrar los resultados y el error observable. Dependería de FS-142.1 y de E3.

## 8. Puntos abiertos de FS-142 `[DECISIÓN ABIERTA]`

Las cinco ambigüedades documentadas en [`FS-142.md`](./FS-142.md). **No generan historias ni tickets** y ninguna se resuelve aquí; las decide una persona.

| Pendiente de FS-142.md (literal) | Qué condiciona |
|---|---|
| «Qué significa concretamente "lo pendiente": únicamente el estado Pendiente, o todo lo que no está en estado Hecha.» | La interpretación del valor de FS-142; no bloquea los cinco AC. |
| «Cómo se quita el filtro o se vuelve a ver la lista completa.» | La usabilidad del filtro; no es un AC. |
| «Qué contenido permanece visible en la lista después de que se produzca el error de AC-5.» | La implementación de AC-5. |
| «Presentación concreta del error de AC-5 (dónde y cómo se muestra).» | La implementación de AC-5. |
| «Orden de los resultados de la lista filtrada.» | Las pruebas no deben apoyarse en un orden. |

## 9. Estimación

- **No hay talla:** la estimación preliminar por talla de la planificación cubrió solo FS-118. No se inventa una para FS-142.1.
- **Complejidad de historia:** MEDIA `[PROVISIONAL]`, con confianza MEDIA, según [`../priorizacion-mvp.md`](../priorizacion-mvp.md).

## 10. Trazabilidad

| Ticket | AC | Requisitos y decisiones de origen | Dependencias externas | Puntos abiertos que lo condicionan | Estimación |
|---|---|---|---|---|---|
| FS-142.1 | AC-1, AC-2, AC-3, AC-4, AC-5 | RF-7, RF-3, DP-1; alcance §4.2; decisión del ejercicio P10 (AC-5) | tareas con estado, lista (E3), infraestructura de pruebas | los cinco pendientes de la sección 8; PA-4 (heredado) | sin talla; complejidad de historia MEDIA `[PROVISIONAL]` |

| AC | Ticket que permite satisfacerlo | Se declara validado con |
|---|---|---|
| AC-1 a AC-5 | FS-142.1 | el bloque «comportamiento validado» del DoD de FS-142.1 |
