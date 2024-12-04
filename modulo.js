const url = "http://127.0.0.1:3000/";

export const solicitud = async (endpoint) => {
    const respuesta = await fetch(`${url}${endpoint}`);
    return await respuesta.json();
}
