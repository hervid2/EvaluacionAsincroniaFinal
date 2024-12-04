import { solicitud } from "./modulo.js";


const obtenerDatos = async () => {
    const ciudades = await solicitud("ciudades");
    const respuestaCiudades = await Promise.all(ciudades.map(async(ciudad) =>{
        const usuarios = await solicitud(`usuarios/?cityId=${ciudad.id}`);
        const respuestaUsuario = await Promise.all(usuarios.map(async(usuario) =>{
            const materiasId = await solicitud(`materia_usuario/?userId=${usuario.id}`);
            respuestaMateriasId = await Promise.all(materiasId.map(async(materia) =>{
                const materiasNombre = await solicitud(`materias/?name=${materia.name}`);
                return {...usuarios, ...materiasId, materiasNombre };
            }))
            
        }));
        return {...ciudad, usuariosConMaterias: respuestaUsuario,respuestaMateriasId}
    }));
    return respuestaCiudades;
}

obtenerDatos().then((datosOrganizados) =>{
    console.log(datosOrganizados);
});