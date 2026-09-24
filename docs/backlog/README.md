# Backlog de FlowSync — índice y convenciones

> Última actualización: 2026-09-23.
> Este directorio contiene las historias del MVP con sus criterios de aceptación y la planificación derivada de ellas (descomposición en tickets, dependencias, estimaciones preliminares y priorización). Origen de la planificación: sesión de planificación del ejercicio (pasos P11, P11b, P12, P13, P14, P14b y P15).

## 1. Jerarquía documental

Si dos documentos discrepan, manda el de nivel superior.

| Nivel | Documento | Papel |
|---|---|---|
| 1 | [`../prd/alcance-mvp.md`](../prd/alcance-mvp.md) | Fuente original del alcance del MVP. |
| 2 | [`../prd/flowsync-mvp.md`](../prd/flowsync-mvp.md) | PRD, sincronizado con el alcance. Determina qué está dentro y fuera del MVP. |
| 3 | [`E2-gestion-tareas/FS-118.md`](./E2-gestion-tareas/FS-118.md) y [`E2-gestion-tareas/FS-142.md`](./E2-gestion-tareas/FS-142.md) | Historias con sus criterios de aceptación, revisadas por una persona. La planificación no modifica sus criterios. |
| 4 | Planificación (este directorio, ver el índice) | Subordinada a los niveles 1 a 3. No añade requisitos, criterios de aceptación ni decisiones de producto. |

## 2. Índice

| Documento | Contenido | Estado |
|---|---|---|
| [`E2-gestion-tareas/FS-118.md`](./E2-gestion-tareas/FS-118.md) | Historia FS-118: fecha de vencimiento opcional e identificación de tareas vencidas (5 AC). | APROBADO (versionado) |
| [`E2-gestion-tareas/FS-142.md`](./E2-gestion-tareas/FS-142.md) | Historia FS-142: filtrar la lista de tareas por estado (5 AC). | APROBADO (versionado) |
| [`E2-gestion-tareas/FS-118-descomposicion.md`](./E2-gestion-tareas/FS-118-descomposicion.md) | Siete tickets, grafo de dependencias, decisiones abiertas y estimaciones preliminares de FS-118. | PLANIFICACIÓN REVISADA; tallas PROVISIONAL |
| [`E2-gestion-tareas/FS-142-descomposicion.md`](./E2-gestion-tareas/FS-142-descomposicion.md) | Ticket FS-142.1, sus dependencias y una contingencia de división no aprobada. | PLANIFICACIÓN REVISADA; contingencia CONTINGENTE |
| [`priorizacion-mvp.md`](./priorizacion-mvp.md) | Matriz de impacto y complejidad, prioridad de negocio, secuencia técnica y prerrequisitos externos. | PLANIFICACIÓN REVISADA; clasificaciones PROVISIONAL |

## 3. Vocabulario de estados

Definido una sola vez; el resto de documentos usa estas etiquetas.

| Etiqueta | Significado |
|---|---|
| `APROBADO` | Versionado y revisado: PRD, alcance e historias con sus criterios de aceptación. |
| `PLANIFICACIÓN REVISADA` | Descomposición, dependencias y priorización revisadas para el ejercicio; sujetas a decisiones abiertas, verificación y aprobación de ejecución. No constituyen un compromiso de entrega. |
| `PROVISIONAL` | Estimación, complejidad, impacto o secuencia preliminar; puede cambiar con información nueva. |
| `CONTINGENTE` | Posibilidad condicionada a un disparador; no está aprobada y no forma parte de la planificación revisada. |
| `DECISIÓN ABIERTA` | Falta una decisión humana. Ningún documento de planificación la resuelve. |
| `INFORMACIÓN INSUFICIENTE` | No hay historia ni alcance suficiente para clasificar el elemento. |

## 4. Identificadores

- **`FS-118`, `FS-142`:** historias persistidas.
- **`FS-118.1` a `FS-118.7` y `FS-142.1`:** identificadores documentales de los tickets de planificación. Existen en Jira como subtareas, con las claves reales de la sección 4.1. Dentro de estos documentos sigue mandando el identificador documental.
- **Contingencia de división de FS-142:** no aprobada. Su identificador solo aparece en la sección contingente de [`E2-gestion-tareas/FS-142-descomposicion.md`](./E2-gestion-tareas/FS-142-descomposicion.md), y no figura en ninguna tabla, matriz ni grafo.
- **`HU-E2-01` y `HU-E2-03`:** identificadores provisionales del ejercicio para historias de E2 que no están persistidas.
- **`RF-n`, `DP-n`, `PA-n`:** requisitos, decisiones y puntos abiertos del PRD. PA-1 está cerrado por DP-1.
- **`D-1` a `D-5`:** etiquetas de planificación que agrupan las ocho ambigüedades documentadas en `FS-118.md`.
- Las claves de Jira se registran solo en la sección 4.1; el resto de documentos usa los identificadores documentales.

### 4.1 Correspondencia con Jira (proyecto MINI)

Registrada el 2026-09-23. La fuente de verdad sigue siendo este repositorio: Jira es una copia de trabajo y, si discrepan, manda el documento (sección 1).

| ID documental | Clave Jira | Tipo | Parent |
|---|---|---|---|
| FS-118 | MINI-7 | Historia | — |
| FS-142 | MINI-8 | Historia | — |
| FS-118.1 | MINI-9 | Subtask | MINI-7 |
| FS-118.2 | MINI-10 | Subtask | MINI-7 |
| FS-118.3 | MINI-11 | Subtask | MINI-7 |
| FS-118.4 | MINI-12 | Subtask | MINI-7 |
| FS-118.5 | MINI-13 | Subtask | MINI-7 |
| FS-118.6 | MINI-14 | Subtask | MINI-7 |
| FS-118.7 | MINI-15 | Subtask | MINI-7 |
| FS-142.1 | MINI-16 | Subtask | MINI-8 |

- Las descripciones de Jira reproducen la planificación transferida del commit `f85701b`, con su estado `PLANIFICACIÓN REVISADA`. No constituyen autorización de ejecución ni compromiso de entrega.
- Las historias y subtareas se crearon sin asignar y en «Tareas por hacer». No hay enlaces Jira entre issues: las dependencias de inicio, cierre y coordinación viven solo como texto en cada descripción y en las descomposiciones.
- La prioridad «Medium» de las subtareas la aplicó Jira por defecto. No expresa prioridad de negocio; esa vive en [`priorizacion-mvp.md`](./priorizacion-mvp.md).
- La contingencia de división de FS-142 no tiene issue ni clave y no figura en esta tabla.
- MINI-4, MINI-5 y MINI-6 son issues previas del proyecto, ajenas a esta planificación.

## 5. Qué no es este directorio

- No es un compromiso de entrega: las tallas son preliminares y miden solo el trabajo propio de cada ticket.
- No contiene horas ni puntos de historia.
- No añade funcionalidades, decisiones de producto ni criterios de aceptación.
- No resuelve puntos abiertos: PA-2, PA-3, PA-4, D-5 y los pendientes de FS-142 no son historias.
- No incorpora la lista compartida ni la actualización sin refrescar (E3) dentro de FS-118 ni de FS-142.
