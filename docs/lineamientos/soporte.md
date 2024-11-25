---
title: Pautas de Trabajo del Área de Tecnología
---

# Introducción

El presente documento intenta fijar pautas mínimas de trabajo para lograr optimizar la eficiencia y calidad del servicio del área de tecnología. Estos postulados se pueden lograr teniendo información clara y sencilla, en pocas herramientas que todos los colaboradores podamos operar, evitando planillas privadas y notas sueltas.

**Objetivo:**  
Concentrar procedimientos e información de todas las operaciones de Tecnología en una única herramienta como es **Wrike**. Desde los pedidos de los clientes hasta las acciones de implementación de un nuevo sitio. Wrike tiene un papel preponderante en cada área de tecnología, concentrando información de las tareas y proyectos, pero debemos garantizar que esa información esté siempre disponible.

---

## Glosario

Algunas definiciones comunes:

- **Ticket:** Todo requerimiento solicitado por un cliente interno o externo. Cada ticket puede clasificarse en tarea de proyecto o acción de soporte.
- **Proyecto:** Tarea o conjunto de tareas de implementaciones, evolutivos, o mejoras de producto.
- **Producto:** Mantenimiento correctivo y evolutivo que correspondan a la nueva plataforma Stores. Esto incluye nuevas funcionalidades de Backend y Frontend estándar.
- **Evolutivos:** Tareas que corresponden a implementaciones ya realizadas y fuera del periodo de Hypercare tanto para clientes con el producto Store como de la versión anterior de plataforma que mantengan el pago de un abono.
- **Integraciones:** Aplicación o conjunto de aplicaciones que mantienen el flujo de información entre la plataforma y otros sistemas del cliente como, por ejemplo, sistemas contable-administrativos (ERP).
- **Hypercare:** Estado de pre-cierre de un proyecto que define un periodo durante el cual el área encargada del proyecto original probará y reparará cualquier problema que impida el normal funcionamiento del proyecto y el cierre del mismo. En implementaciones e integraciones el periodo de garantía es de 30 días. En evolutivo no hay vencimiento de las tareas realizadas.

---

## Áreas de Trabajo

Vamos a definir la estructura organizacional de Tecnología. No es el objetivo del presente informe definir procedimientos a detalle ni estructuras primarias (Célula vs. Equipo o Agile vs. Cascada), sino establecer un vocabulario y lograr definiciones para que todos trabajemos como un equipo integrado.  

**Las áreas en cuestión son:**

- **Implementaciones:** Desarrolla proyectos de la plataforma Stores para nuevos clientes, desde la **Kickoff Meeting** hasta el “Acta de Cierre” y el periodo de Hypercare.
- **Evolutivos:** Planifica y desarrolla proyectos de mejora solicitados por los clientes con abono mensual, desde la planificación hasta la aprobación del cliente.
- **Integraciones:** Desarrolla aplicaciones necesarias para la interconexión de datos entre la plataforma y otros sistemas del cliente.
- **Producto:** Desarrollo y evolutivo de funcionalidades que se decidan incorporar a la plataforma Stores.
- **Infraestructura:** Área transversal que crea y mantiene el soporte físico de proyectos tanto de Implementaciones como de Integraciones.
- **Quality Assurance (QA) (Futura):** Responsable del estado final del producto en toda tecnología.

---

## Herramientas para Soporte de Proyectos y Requerimientos

Se establece **Wrike** como la herramienta única de control de proyectos. Para ello se definen las siguientes configuraciones:

### Jerarquía de Entidades en Wrike

La estructura recomendada es la siguiente:
- **Espacios** agrupan **Carpetas**.
- **Carpetas** agrupan **Proyectos**.
- **Proyectos** agrupan **Tareas**.

Esta jerarquía permite generar diagramas de Gantt, tableros e informes más claros.

---

## Flujo de Estados de Proyecto

Todo proyecto debe pasar por los siguientes estados. Los cambios serán manuales y responsabilidad del PM:

1. **Nuevo:** Creado por el PM al liberar el proyecto desde Comercial/Administración.
2. **En Análisis:** Inicia con la Kickoff Meeting y generación de tareas.
3. **En Curso:** Estado durante el desarrollo. Culmina al completarse todas las tareas.
4. **En Espera:** Suspensión temporal del proyecto por cambio de prioridades.
5. **Pruebas/QA:** Desde el fin del desarrollo hasta la aprobación en entorno pre-productivo.
6. **Hypercare:** Periodo de garantía para ajustes por reclamos.
7. **Finalizado:** Marca el cierre del proyecto tras su paso a soporte.
8. **Cancelado:** Indica que el proyecto fue dado de baja.

---

## Plan General de Proyectos

Es necesario mantener un diagrama de tiempos con todos los proyectos y tareas en curso, permitiendo plantear nuevas implementaciones y calcular recursos.

---

## Evolutivos

Las tareas de proyectos evolutivos para clientes con abono deben recibirse y planificarse entre el **día 25 del mes en curso y el día 5 del mes siguiente**.

---

## Flujo de Estados de Tareas

Se recomienda unificar flujos para que cualquier actor pueda interpretar rápidamente el estado de una tarea.  

### Flujos de tareas sugeridos:
- Implementaciones / Evolutivos.
- Producto (Backlog Ítems).
- Soporte.

---

## Área de Soporte

**Actores involucrados:**

- **Desarrollador:** Programador con experiencia en .NET Framework/Core y SQL Server.
- **Analista de Soporte Nivel 1:** Clasifica y asigna tickets desde Zendesk.
- **Analista de Soporte Nivel 2:** Resolución de tickets asignados.
- **Project Manager (PM):** Planea fechas, escribe descripciones y asegura hitos.
- **Líder Técnico:** Supervisa desarrolladores y asigna recursos según competencias.
- **Líder de Producto:** Encargado del desarrollo evolutivo y correctivo de Stores.
- **Key Account Manager (KAM):** Responsable comercial del cliente.
- **Administración:** Gestiona aprobaciones de tickets.

---

## Flujo de Proceso de Tickets

**Definiciones:**
1. Los tickets se reciben vía **Zendesk**.
2. Clasificación inicial por el Analista Nivel 1.
3. Determinación de:
   - Corrección en Hypercare.
   - Creación de nueva característica (abono o cotización).
   - Circuito normal de soporte.

**Estados de acción principales:**
- **Nuevo:** Creado y asignado.
- **En Curso:** Desarrollo en progreso.
- **Finalizado:** Resuelto y comunicado al cliente.

---

## Condiciones Operativas

1. **Estado especial "A Revisar":** Para tickets pendientes de análisis.
2. **Reporte Diario:** Verifica movimientos y atención de tickets.
3. **Capacitaciones Internas:** Actualización mensual para analistas y desarrolladores.

---

**Puntos Clave:**
- Integraciones: Para interacciones con aplicaciones externas.
- Infraestructura: Problemas relacionados con hosting y rendimiento.
- Producto: Operaciones de la plataforma Stores y frontend estándar.
- Soporte: Tickets generales de la versión anterior de la plataforma.


