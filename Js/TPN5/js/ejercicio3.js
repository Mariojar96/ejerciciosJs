function agregarTarea() {
    const tareaInput = document.getElementById('tareaInput');
    const tarea = tareaInput.value.trim();

    if (tarea !== '') {
      const lista = document.getElementById('lista');
      const li = document.createElement('li');
      li.className = 'list-group-item task-list-item d-flex justify-content-between align-items-center';
      li.innerHTML = `
        <span>${tarea}</span>
        <button class="btn btn-danger btn-sm delete-btn">Eliminar</button>
      `;
      lista.appendChild(li);

     
      tareaInput.value = '';

     
      const remover = li.querySelector('.delete-btn');
      remover.addEventListener('click', function() {
        li.remove();
      });
    }
  }


  const botonAgregar = document.getElementById('agregar');
  botonAgregar.addEventListener('click', agregarTarea);

