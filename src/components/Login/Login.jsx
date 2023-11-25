import {useState} from "react";


const Login = () => {
    const [username, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    
    //Funcion que indica que hace el boton
    const handleLogin = (e) => {
        e.preventDefault();

        // Vamos a crear un objeto con los datos del formulario
        const data = {
            username : username,
            password : password,
        }

        // Vamos a enviar los datos al backend ( acá va ir nuestra url/ endpoint)
        fetch(
            'http://localhost:3000/login/',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.error(error);
            })

        }
        
    return(
            <div>
                <h1>Login</h1>
                <form>
                    <label >Usuario</label> 
                    <input onChange={ (event) => {setUsuario(event.target.value)}}  type="text" placeholder="Usuario:"  />
                    <label >Contraseña</label>
                    <input onChange={ (event) => {setPassword(event.target.value)}} type="password" placeholder="Password:" />
                    <button onClick= { handleLogin } >Login</button>
                </form>
            </div>
            );
    }
    export default Login;