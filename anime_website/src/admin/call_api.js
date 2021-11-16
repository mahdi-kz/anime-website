const get_image_url = '/api/get-image-address';
const get_video_url = '/api/get-video-address';


function call_api(url, data){
    return new Promise((resolve) => {
        fetch(url, {
            method: 'POST',
            headers: {"Accept": "application/json", "Content-Type": "application/json"},
            body: JSON.stringify(data),
        })
        .then((response) => {
            response.json().then((body) => {
                resolve(body['data']);
            });
        });
    })
};

export async function get_image_address(key){
    let res = await call_api(get_image_url, {'key': key});
    return res['url'];
}

export async function get_video_address(key){
    let res = await call_api(get_video_url, {'key': key});
    return res['url'];
}