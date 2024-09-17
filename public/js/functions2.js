const url = 'http://localhost:3000/api/usuario';


const listUsuarios = async () => {
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
    
    let lista = data.usuario;
    lista.map((usuario) => {
      respuesta += 
      `<tr>
        <td>${usuario.Name}</td>` +
        `<td>${usuario.Email}</td>` +
        `<td>
          <button class="btn btn-success" onclick='editUsuario("${usuario._id}")'>Editar</button>
          <button class="btn btn-danger" onclick='deleteUsuarios("${usuario._id}")'>Eliminar</button>
        </td>` +
      `</tr>`;
      contenido.innerHTML = respuesta;
    });
  })
  .catch((error) => console.error('Error:', error));
}

const createUsuario = async () => {  
  const usuario = {
    Name: document.getElementById('nombre').value,
    Email: document.getElementById('email').value,
  };
  console.log(usuario);
  
  fetch(url, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(usuario),
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then((resp) => resp.json())
  .then((json) => alert(json.msg))
  .catch((error) => console.error('Error:', error));
  window.location.href = '/public/views/usuarios/listusuarios.html'

}
const updateUsuario = async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');  // Obtener el ID de los parámetros de la URL
  
  const usuario = {
    Name: document.getElementById('nombre').value,
    Email: document.getElementById('email').value,
  };

  console.log(usuario);
  
  try {
    const response = await fetch(`${url}/${id}`, {  
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify(usuario),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const json = await response.json();
    alert(json.msg);

    window.location.href = '/public/views/usuarios/listusuarios.html'    
  } catch (error) {
    console.error('Error:', error);
  }
};

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
    document.getElementById('nombre').value = data.Name;
    document.getElementById('email').value =data.Email;
  })
  .catch((error) => console.error('Error:', error));
}

const editUsuario = async (id) => {
  const URL = "editUsuario.html?id="+id
  window.location.href = URL
}

const deleteUsuarios = async (id)=> {
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

