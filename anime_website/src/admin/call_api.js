const upload_image_url = '/api/upload-image'
const get_image_url = '/api/get-image-address';
const upload_video_url = '/api/upload-video'
const get_video_url = '/api/get-video-address';
const get_customers_url = '/api/get-customers';
const save_customer_url = '/api/save-customer';
const get_customer_url = '/api/get-customer';
const get_local_customers_url = '/api/get-local-customers';
const get_global_customers_url = '/api/get-global-customers';
const get_service_videos_url = '/api/get-service-videos';
const get_service_video_url = '/api/get-service-video';
const save_service_video_url = '/api/save-service-video';


function call_json_api(url, data){
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

function call_form_api(url, data){
    return new Promise((resolve) => {
        fetch(url, {
            method: 'POST',
            headers: {"Accept": "application/json"},
            body: data
        })
        .then((response) => {
            response.json().then((body) => {
                resolve(body['data']);
            });
        });
    })
};


export async function upload_image(file, file_type, file_key){
    let data = new FormData();
    data.append('file', file);
    data.append('file_type', file_type)
    data.append('file_key', file_key);

    let res = await call_form_api(upload_image_url, data);
    return;
}

export async function get_image_address(key){
    let res = await call_json_api(get_image_url, {'key': key});
    return res['url'];
}

export async function upload_video(file, file_type, file_key){
    let data = new FormData();
    data.append('file', file);
    data.append('file_type', file_type)
    data.append('file_key', file_key);

    let res = await call_form_api(upload_video_url, data);
    return;
}

export async function get_video_address(key){
    let res = await call_json_api(get_video_url, {'key': key});
    return res['url'];
}

export async function get_customers(){
    let res = await call_json_api(get_customers_url, {});
    return res;
}

export async function save_customer(id, name, international, sequence, file){
    let data = new FormData();
    data.append('file', file);
    data.append('id', id)
    data.append('name', name);
    data.append('international', international)
    data.append('sequence', sequence)
    console.log(data, name)
    let res = await call_form_api(save_customer_url, data);
    return res['id'];
}

export async function get_customer(id){
    let res = await call_json_api(get_customer_url, {'id': id})
    return res;
}

export async function get_local_customers(){
    let res = await call_json_api(get_local_customers_url, {});
    return res;
}

export async function get_global_customers(){
    let res = await call_json_api(get_global_customers_url, {});
    return res;
}

export async function get_service_videos(department, top){
    let res = await call_json_api(get_service_videos_url, {'department': department, 'top': top});
    return res;
}

export async function get_service_video(id){
    let res = await call_json_api(get_service_video_url, {'id': id});
    return res;
}

export async function save_service_video(id, name, sequence, top, department, file){
    let data = new FormData();
    data.append('file', file);
    data.append('id', id)
    data.append('name', name);
    data.append('sequence', sequence);
    data.append('top', top);
    data.append('department', department);
    let res = await call_form_api(save_service_video_url, data);
    return res['id'];
}