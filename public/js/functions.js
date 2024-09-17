
const url = 'http://localhost:3000/api/roles';
const bootstrap = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'

const listRoles = async () => {
  const contenido = document.getElementById('contenido');
  let respuesta = '';
  fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    
    let lista = data.roles;
    lista.map((rol) => {
      respuesta += 
      `<tr>
        <td>${rol.Name}</td>` +
        `<td>${rol.State ? 'Activo' : 'Inactivo'}</td>` +
        `<td>
          <button class="btn btn-success" id="btn-editar" onclick='editRol("${rol._id}")'>Editar</button>
          <button class="btn btn-danger" id="btn-eliminar" onclick='deleteRol("${rol._id}")'>Eliminar</button>
        </td>` +
      `</tr>`;
      contenido.innerHTML = respuesta;
    });
  })
  .catch((error) => console.error('Error:', error));
}

const createRol = async () => {  
  const rol = {
    Name: document.getElementById('nombre-rol').value,
    State: document.getElementById('estado').checked,
  };
  console.log(rol);
  
  fetch(url, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(rol),
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then((resp) => resp.json())
  .then((json) => alert(json.msg))
  .catch((error) => console.error('Error:', error));
  window.location.href = '/public/views/roles/listRoles.htm'

}
const updateRol = async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id')
  const rol = {
    Name: document.getElementById('nombre-rol').value,
    State: document.getElementById('estado').checked,
  };
  console.log(rol);
  
  fetch(`${url}/${id}`, {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify(rol),
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then((resp) => resp.json())
  .then((json) => alert(json.msg))
  .catch((error) => console.error('Error:', error));
  window.location.href = '/public/views/roles/listRoles.htm'
  ;
}
async function fillForm() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id')
  
  fetch(`${url}/${id}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then((resp) => {
    console.log(resp);
    
    return resp.json()
  })
  .then((data) => {
    console.log(data);
    document.getElementById('nombre-rol').value = data.Name;
    document.getElementById('estado').checked =data.State;
  })
  .catch((error) => console.error('Error:', error));
}

const editRol = async (id) => {
  const URL = "editRol.html?id="+id
  window.location.href = URL
}

const deleteRol = async (id)=> {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then((resp) => resp.json())
  .then((json) => alert(json.msg))
  .catch((error) => console.error('Error:', error));
  location.reload()  ;
}





