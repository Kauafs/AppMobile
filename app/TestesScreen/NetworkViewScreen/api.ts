const url = 'http://192.168.3.133:8000/scan'

export function getIpLocal() {
    return fetch(`${url}`)
        .then(res => res.json());
}

export default getIpLocal;


