document.addEventListener('DOMContentLoaded', () => {
    const courses = document.querySelectorAll('.course');
    const approvedCourses = new Set(); // Para llevar un registro de los ramos aprobados

    // Cargar estado de ramos desde localStorage (si existe)
    const savedApproved = localStorage.getItem('approvedCourses');
    if (savedApproved) {
        JSON.parse(savedApproved).forEach(id => {
            approvedCourses.add(id);
            const courseElement = document.getElementById(id);
            if (courseElement) {
                courseElement.classList.add('approved');
                courseElement.classList.remove('locked'); // Asegurarse de que no esté bloqueado si ya está aprobado
            }
        });
    }

    // Función para verificar y actualizar el estado de los ramos
    const updateCourseStates = () => {
        courses.forEach(course => {
            if (approvedCourses.has(course.id)) {
                return; // Si ya está aprobado, no hacer nada más
            }

            const requires = course.dataset.requires;
            if (requires) {
                const requiredCourses = requires.split(',');
                const allRequirementsMet = requiredCourses.every(reqId => approvedCourses.has(reqId.trim()));

                if (allRequirementsMet) {
                    course.classList.remove('locked');
                } else {
                    course.classList.add('locked');
                }
            } else {
                // Si no tiene requisitos, siempre está desbloqueado por defecto (excepto si está aprobado)
                course.classList.remove('locked');
            }
        });
    };

    // Inicializar el estado de los ramos al cargar la página
    updateCourseStates();

    courses.forEach(course => {
        course.addEventListener('click', () => {
            if (course.classList.contains('locked')) {
                alert('¡Este ramo está bloqueado! Debes aprobar sus requisitos primero.');
                return;
            }

            if (course.classList.contains('approved')) {
                // Opcional: Permitir desaprobar un ramo para pruebas, o no hacer nada
                // if (confirm('¿Quieres desaprobar este ramo? Esto podría bloquear otros ramos.')) {
                //     course.classList.remove('approved');
                //     approvedCourses.delete(course.id);
                //     localStorage.setItem('approvedCourses', JSON.stringify(Array.from(approvedCourses)));
                //     updateCourseStates();
                // }
                return; // Si ya está aprobado, no hacer nada más al hacer clic
            }

            // Aprobar el ramo
            course.classList.add('approved');
            approvedCourses.add(course.id);

            // Guardar el estado en localStorage
            localStorage.setItem('approvedCourses', JSON.stringify(Array.from(approvedCourses)));

            // Desbloquear ramos dependientes
            const unlocks = course.dataset.unlock;
            if (unlocks) {
                const coursesToUnlock = unlocks.split(',');
                coursesToUnlock.forEach(unlockId => {
                    const unlockedCourse = document.getElementById(unlockId.trim());
                    if (unlockedCourse) {
                        // Solo quitar 'locked' si no está aprobado y sus propios requisitos (si los tiene) se cumplen
                        // La función updateCourseStates se encargará de esto
                    }
                });
            }
            updateCourseStates(); // Actualizar el estado de todos los ramos
        });
    });

    // Añadir un botón para reiniciar la malla (opcional, para pruebas)
    // const resetButton = document.createElement('button');
    // resetButton.textContent = 'Reiniciar Malla';
    // resetButton.style.marginTop = '20px';
    // resetButton.style.padding = '10px 20px';
    // resetButton.style.backgroundColor = '#d32f2f';
    // resetButton.style.color = 'white';
    // resetButton.style.border = 'none';
    // resetButton.style.borderRadius = '5px';
    // resetButton.style.cursor = 'pointer';
    // resetButton.addEventListener('click', () => {
    //     if (confirm('¿Estás seguro de que quieres reiniciar la malla? Esto borrará todo tu progreso.')) {
    //         localStorage.removeItem('approvedCourses');
    //         approvedCourses.clear();
    //         courses.forEach(course => {
    //             course.classList.remove('approved');
    //         });
    //         updateCourseStates();
    //     }
    // });
    // document.querySelector('.container').appendChild(resetButton);
});
