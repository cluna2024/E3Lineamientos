---
title: Producto - Alcance y Responsabilidades
---

# Producto

## Alcance

Noviembre 2024

### Alcance para el Producto E3 Ecommerce

1. Definición de Alcance

Este documento establece claramente qué elementos son y no son considerados parte del producto E3 Ecommerce, en especial en relación al manejo del front-end para clientes, así como las responsabilidades de soporte y desarrollo de nuevas características.

1.1 Alcance del Producto

Plataforma Stores:

La plataforma E3 es una solución integral para e-commerce, cuyo alcance funcional abarca el backend, la API y el panel de administración (backoffice). A continuación, se detallan las funciones clave:

#### Backend

Propósito: Gestionar la infraestructura principal que soporta la operación del e-commerce.

Funcionalidad: Proporciona administración centralizada de productos, inventarios y procesamiento de transacciones, asegurando un flujo continuo de información y escalabilidad para responder a demandas crecientes.

#### API de Integración

Propósito: Facilitar la interoperabilidad entre la plataforma y servicios externos.

Funcionalidad: La API permite integraciones con proveedores de pago, servicios logísticos y otros sistemas, asegurando la comunicación en tiempo real para la actualización de estados de pedidos, disponibilidad de productos y procesos de pago.

#### Panel de Administración (Backoffice)

Propósito: Ofrecer a los administradores una interfaz intuitiva para la gestión de operaciones.

Funcionalidad: Permite gestionar catálogos de productos, configurar precios y promociones, monitorear inventarios y gestionar pedidos. Este panel optimiza la operatividad al centralizar las tareas administrativas en una interfaz accesible y organizada.

1.2 Responsabilidades del Equipo de Producto en la Plataforma Stores

El equipo de producto es responsable de la gestión y evolución de la plataforma Stores, que abarca el backend, el backoffice y la API. A continuación, se detallan sus responsabilidades clave:

#### Backend

Responsabilidad: Optimización y mantenimiento de la arquitectura del backend.

Objetivo: Asegurar un alto rendimiento y estabilidad de la plataforma, abordando tanto la resolución de errores como la implementación de mejoras que permitan la escalabilidad del sistema.

#### API

Responsabilidad: Desarrollo, documentación y mantenimiento de la API de la plataforma.

Objetivo: Permitir la integración efectiva con sistemas externos, proporcionando soporte y documentación actualizada para garantizar una interoperabilidad confiable y segura con servicios como proveedores de pago y logística.

#### Panel de Administración (Backoffice)

Responsabilidad: Mejora continua de la interfaz de administración interna.

Objetivo: Facilitar la gestión de productos, inventarios, pedidos y otras operaciones administrativas, asegurando que el panel sea intuitivo y eficiente para los usuarios internos.

#### Monitoreo de Rendimiento y Seguridad

Responsabilidad: Supervisión constante de la plataforma y aplicación de estándares de calidad.

Objetivo: Detectar y resolver problemas de rendimiento o vulnerabilidades de seguridad, garantizando que todas las actualizaciones se realicen sin comprometer la experiencia del usuario final y cumpliendo con los más altos estándares de calidad.

#### Migraciones

Responsabilidad: Garantizar que todos los clientes de la compañía tengan acceso a la última versión de la plataforma.

Objetivo: Coordinar y realizar las migraciones necesarias para mantener a todos los clientes actualizados, asegurando que cada cliente se beneficie de las últimas mejoras y funcionalidades sin interrupciones significativas en el servicio.

Responsabilidad sobre el Front-End (Front)

El desarrollo y mantenimiento del front-end no forma parte del alcance del equipo de producto para aquellos clientes cuya plataforma ya ha sido entregada. Este alcance excluye a clientes que cuenten con un front-end personalizado o adaptado a sus necesidades específicas, así como a aquellos que requieren soporte continuo para modificaciones puntuales, tales como los casos de Casa del Audio y Multipoint.

Para los nuevos clientes que no requieran personalización en su front-end, se ofrecerá una versión estándar del mismo. Sin embargo, esta versión no estará disponible hasta que se haya realizado un nuevo front remaquetado con la capacidad de personalización de colores desde el panel de administración. Este diseño remaquetado permitirá una mínima variación visual entre las implementaciones, siempre y cuando los clientes no realicen modificaciones adicionales en el diseño ni contraten un servicio de soporte continuo (abono).

Para estos front-end estandarizados, cualquier cambio será limitado a ajustes estéticos mínimos y controlados. Estos cambios, como la modificación de la hoja de estilos para los colores básicos, deberán ser aprobados previamente y gestionados a través de un backlog específico de producto. Solo se autorizarán cambios que no afecten la estructura ni la funcionalidad del sistema, garantizando así la estabilidad y coherencia visual en la plataforma.

Migración de Sitios Actuales a la Nueva Versión del Stores:

Como parte de las responsabilidades del equipo de producto, se incluirá la migración de sitios actuales de clientes a la nueva versión del E3Store. Este proceso contempla la actualización de backend y backoffice  para alinearse con las mejoras y nuevas funcionalidades de la plataforma.

Esta migración se limita a sitios que utilizan el front estándar de E3Store sin personalización avanzada. Para clientes con front personalizados o configuraciones exclusivas, cualquier migración o ajuste en la nueva versión será responsabilidad del equipo de soporte o se realizará bajo servicios de abono si el cliente así lo requiere.

Recomendación de QA para la Validación de Migraciones y Nuevos Cambios

Con el objetivo de garantizar la calidad y funcionalidad de las migraciones y actualizaciones en el sistema, se recomienda asignar al menos 20 horas de trabajo de QA por cada migración o actualización significativa. Este tiempo será fundamental para realizar una validación exhaustiva en los siguientes aspectos:

- **Integridad de los datos**: Verificación de la correcta migración de productos e inventarios, asegurando que no se pierdan ni se alteren datos críticos.
- **Sincronización con sistemas externos**: Validación de la correcta integración y sincronización con servicios y sistemas externos, como pagos y envíos.
- **Funcionalidad de integraciones existentes**: Comprobación de que las integraciones previas continúan funcionando de manera efectiva y sin interrupciones.
- **Estabilidad del front-end**: Aseguramiento de que la nueva versión del front-end sea estable para los clientes que utilizan el diseño estándar de Store, sin comprometer la experiencia de usuario.
- **Alineación de cambios estéticos y nuevas funcionalidades**: Validación de que cualquier cambio estético mínimo o adición de nuevas funcionalidades en el front-end cumpla con los estándares de calidad y no afecte la estabilidad.
- **Prueba de medios de envío y pagos**: Verificación exhaustiva de la correcta funcionalidad de los medios de envío y pago en entornos pre-productivos y productivos. Esto incluye la realización de ventas en ambos entornos para asegurar que las transacciones sean procesadas correctamente y que la experiencia del usuario no se vea afectada.

Además, se recomienda en el futuro contar con un rol de QA dedicado para supervisar de manera continua los cambios en el producto. Este rol se enfocaría en revisar tanto las migraciones como las nuevas funcionalidades, permitiendo identificar y resolver errores antes de la entrega. La implementación de este rol no solo contribuiría a reducir los riesgos de problemas en producción, sino que también tendría un beneficio económico significativo. Tener un equipo de QA dedicado ayudaría a identificar problemas antes de que lleguen a producción, lo que reduciría los costos asociados con la corrección de errores post-lanzamiento y minimizaría el impacto negativo sobre los clientes. Esto resultaría en menores tiempos de inactividad, menos incidencias de soporte y una mayor satisfacción del cliente, lo que, a largo plazo, optimizaría la eficiencia operativa y reduciría gastos imprevistos.

1.2 Soporte y Modificaciones

Backlog de Cambios Estéticos:

Se añadirá en  backlog una tarea dedicada para cambios visuales en el front, limitado a aspectos de diseño no funcionales que no alteren la estructura de la plataforma. Esto incluye colores y estilos básicos definidos de antemano.

La modificación de la hoja de estilo se considera una tarea de largo plazo y será implementada para estandarizar visualmente el front para futuros clientes que no soliciten personalización.

Mantenimiento de Funcionalidad:

Los errores en el backend que afecten el funcionamiento general de la plataforma son parte del alcance del equipo de producto. Sin embargo, cualquier requerimiento de modificación funcional en el front-end personalizado es responsabilidad del soporte o equipo de abonos.

El soporte proporcionará arreglos temporales ("hotfixes") para solucionar problemas críticos en clientes sin alteraciones mayores en la plataforma común. Cualquier ajuste adicional debe ser probado y aprobado antes de ser implementado en producción para evitar conflictos con la rama principal de desarrollo.

## 2. Exclusiones del Producto

Clientes con Abono o Personalización:

Los clientes que soliciten abonos o modificaciones personalizadas en el front no serán gestionados directamente por el equipo de producto. En cambio, estos requerimientos se gestionarán bajo la responsabilidad del área de soporte y abonos. Esto incluye cambios exclusivos como elementos específicos en el front, integraciones externas no estándar o personalización avanzada del diseño.

Soporte a Modificaciones y Proyectos Pasados:

Cualquier front entregado previamente (antes de esta definición) queda excluido del alcance del producto. Esto abarca proyectos anteriores como Casa del Audio o Multipoint, ya que presentan personalizaciones específicas no mantenibles por el equipo de producto.

## 3. Responsabilidades Claras

1. Equipo de Producto:

Gestiona y mantiene el backend y el core del sistema, asegurando la estabilidad y escalabilidad de la plataforma E3.

Define, prioriza y documenta las funcionalidades en el backlog de producto.

Solo realiza modificaciones estéticas en el front para front standards siempre y cuando no se trate de personalización avanzada.

2. Soporte y Área de Abonos:

El detalle de las responsabilidades de las areas anteriormente dichas se encuentra en el siguiente documento

[https://docs.google.com/document/d/19PZtJr9PuE_veSnwyx8qTy3CtK77eeZr/edit?pli=1](https://docs.google.com/document/d/19PZtJr9PuE_veSnwyx8qTy3CtK77eeZr/edit?pli=1)

## 4. Conclusión

Este documento de alcance establece que el front-end de clientes con personalizaciones previas no es parte del producto base de E3Store. Las tareas relacionadas con la personalización del front-end, así como el soporte y mantenimiento de clientes con abonos, serán administradas por el área de soporte y no forman parte del equipo de producto. Esta segmentación permite mantener la integridad de la plataforma central y asegurar una experiencia estandarizada para nuevos clientes.

---

## Metodologías de Trabajo

Se definieron las siguientes directrices y metodologías para gestionar las tareas y flujos de trabajo del equipo:

Metodología de Trabajo

-Framework: Se utilizará Scrumban como metodología base.

-Duración del Sprint: Cada sprint tendrá una duración de 1 semana (ajustable tras revisión al completar 4 sprints).

-Ciclo de Release: Pendiente de definición.

Proceso de Gestión de solicitudes

-Definición de Prioridades:

-Cada Solicitud debe contener:

-Contexto: Explicación detallada de la necesidad o problema.

-Justificación: Por qué la tarea es importante para el negocio o el producto.

Las solicitudes funcionales y tecnológicas serán evaluadas para determinar si deben ser incluidas en el sprint actual o en el siguiente, en función de su prioridad.

-Compromiso de Respuesta:

La evaluación inicial de una tarea (día y hora) tendrá un plazo mínimo de 1 semana y un máximo de 2 semanas desde su asignación.

-La respuesta incluirá:

Estimación del tiempo de ejecución: Indicando el esfuerzo necesario para completar la tarea.

Documento técnico o alcance funcional: Si aplica.

No se definirá una fecha exacta de entrega, ya que el backlog es dinámico y sujeto a cambios continuos, y las prioridades del mismo son coordinadas con todo el equipo.

-Asignación y Desarrollo:

Los tiempos específicos de desarrollo serán definidos por el responsable de la tarea, quien evaluará su complejidad.

-Entrega:

La solicitud será respondida dentro del sprint en curso si es prioritaria.

Si no se incluye en el sprint actual, se garantizará su resolución en el siguiente sprint, cumpliendo el plazo máximo de 15 días.

###Ejemplo de Flujo de Trabajo

Un Project Manager (PM) realiza una solicitud de presupuesto que afecta funcionalmente al producto, el martes de la primera semana del mes.

-El equipo evalúa si la tarea es prioritaria:

Si es prioritaria:

Se incluye en el sprint en curso.

La respuesta (estimación y alcance) se proporciona dentro del mismo sprint.

-Si no es prioritaria:

Se agenda para el siguiente sprint.

El plazo máximo de resolución es de 15 días.

Estas metodologías aseguran que el equipo pueda responder de manera ágil y ordenada a las necesidades del producto, manteniendo la flexibilidad necesaria para gestionar un backlog dinámico y cambiante.

quedaría ver de especificar el flujo de consultas

---

## Roles y Responsabilidades

Ideal

### Analista de Negocio

Responsable de:

- Analizar procedimientos e identificar las necesidades específicas de los distintos modelos de negocio.
- Diseñar procesos y procedimientos adaptados a los objetivos de cada cliente.
- Realizar análisis de sistemas y modelos de negocio.
- Generar predicciones de mercado basadas en datos e información relevante.

### Célula QA

Responsable de:

- Elaborar planes de prueba detallados.
- Desarrollar automatizaciones para pruebas de regresión tanto en sistemas como en APIs.
- Realizar el seguimiento y resolución de bugs.
- Implementar procesos de mejora continua.
- Diseñar casos de prueba para QA manual en nuevas funcionalidades.
- Medir y realizar el seguimiento del performance de sistemas y aplicaciones.

### Product Owner

Responsable de:

- Servir como punto de contacto entre los stakeholders y el equipo de desarrollo.
- Aportar valor agregado al producto a través de su experiencia y conocimiento en el sector.
- Colaborar activamente con los integrantes del equipo y equipos externos.
- Administrar el backlog del producto, asegurando la priorización adecuada de tareas y funcionalidades.
- Definir y comunicar la visión del producto en toda la organización.
- Monitorear la performance del producto, recopilando feedback de clientes y stakeholders para la toma de decisiones.
- Garantizar que el producto cumpla con los aspectos legales aplicables.
- Actuar como líder del producto y experto en el negocio de e-commerce.

### Scrum Master

Responsable de:

- Liderar el equipo bajo la metodología Scrum, asegurando el cumplimiento de las ceremonias y marcos de trabajo.
- Ayudar al equipo a mantener el enfoque en sus objetivos y tareas específicas.
- Facilitar la resolución de conflictos internos y externos, eliminando obstáculos para el equipo.
- Proteger al equipo de interferencias externas y asegurar un entorno de trabajo eficiente.
- Colaborar estrechamente con el Product Owner para garantizar la alineación estratégica.

### Desarrollador/a

Responsable de:

- Entregar soluciones de desarrollo de alta calidad dentro de las tecnologías requeridas.
- Cumplir con las políticas de calidad y estándares establecidos por la empresa para cada lenguaje o tecnología utilizada.

### Analista Funcional

Responsable de:

- Modelar diagramas UML y otros artefactos funcionales.
- Recopilar y analizar requisitos tanto con usuarios finales como con equipos técnicos.
- Realizar análisis de funcionalidad, riesgos, viabilidad e impacto.
- Crear casos de uso detallados para el desarrollo y validación de funcionalidades.
- Generar manuales, documentación funcional y técnica.
- Llevar a cabo capacitaciones internas para equipos y usuarios clave.

### Arquitecto/a

Responsable de:

- Diseñar la arquitectura de alto nivel de la aplicación.
- Definir el modelo de datos e infraestructura tecnológica.
- Establecer y promover mejores prácticas en el desarrollo y la implementación.

### Consultor/a de Marketing Digital (con conocimiento en implementaciones)

Responsable de:

- Brindar asesoramiento técnico sobre implementaciones necesarias para optimizar el posicionamiento de un e-commerce.
- Recomendar herramientas efectivas para el análisis y mejora del SEO de los clientes.
- Garantizar que las estrategias y técnicas empleadas se alineen con los objetivos del negocio y las mejores prácticas del sector.

---

Actual: Distribución de Roles y Responsabilidades

En ausencia de todas las posiciones antes mencionadas, las responsabilidades asociadas a estas han sido distribuidas entre los cuatro integrantes del equipo. Esta distribución permite abordar las necesidades estratégicas y operativas del producto de manera colaborativa. A continuación, se detallan las áreas de responsabilidad de cada miembro:

### Claudio Luna

Responsabilidades principales:

- Servir como punto de contacto entre stakeholders y el equipo.
- Analizar los modelos de negocio para identificar oportunidades y necesidades.
- Diseñar procedimientos y realizar análisis funcionales detallados.
- Contribuir en el análisis de sistemas para garantizar alineación técnica y operativa.

### Leonardo Squeo

Responsabilidades principales:

- Facilitar la colaboración entre los integrantes del equipo y otros equipos externos.
- Participar ocasionalmente como desarrollador en proyectos clave.
- Actuar como arquitecto del sistema, definiendo aspectos técnicos de alto nivel y mejores prácticas.

### Lucas Popowsky

Responsabilidades principales:

- Supervisar la performance del producto y recopilar feedback de clientes y stakeholders para priorizar y tomar decisiones estratégicas.
- Liderar al equipo mediante la metodología Scrum, asegurando el cumplimiento de ceremonias y procesos.
- Contribuir regularmente como desarrollador en entregas de valor.
- Brindar soporte ocasional como consultor en marketing digital, enfocándose en implementaciones técnicas y optimizaciones de SEO.
- Asumir funciones de arquitecto cuando sea necesario para garantizar la calidad técnica.

### Diego Gorischnik

Responsabilidades principales:

- Definir y comunicar la visión del producto, asegurando su alineación con los objetivos organizacionales.
- Velar por el cumplimiento de aspectos legales y normativos relacionados con el producto.
- Analizar las necesidades y procedimientos de los negocios para proponer soluciones efectivas.
- Realizar predicciones de mercado y análisis estratégicos que apoyen el desarrollo del producto.

Dinámica de Trabajo

Gestión del Backlog:

Las decisiones sobre la priorización y asignación de tareas del backlog son tomadas en conjunto por los cuatro integrantes, maximizando la sinergia entre áreas de expertise.

Distribución de Tareas:

Cada integrante asume responsabilidades específicas de acuerdo con su experiencia y conocimientos, asegurando una gestión equilibrada del producto.

