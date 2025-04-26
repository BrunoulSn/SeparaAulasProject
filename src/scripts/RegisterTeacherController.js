//Buscar no Select * from Materias no banco de dados
const materias = ['Matemática', 'Português', 'História', 'Geografia'];
                    const classComboBox = document.getElementById('classComboBox');
                    materias.forEach(materia => {
                        const option = document.createElement('option');
                        option.value = materia.toLowerCase();
                        option.textContent = materia;
                        classComboBox.appendChild(option);
                    });