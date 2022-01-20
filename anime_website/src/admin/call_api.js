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
const delete_service_video_url = '/api/delete-service-video';
const get_members_url = '/api/get-members';
const get_member_url = '/api/get-member';
const save_member_url = '/api/save-member';
const delete_member_url = '/api/delete-member';
const get_department_members_url = '/api/get-department-member';
const get_courses_url = '/api/get-courses';
const get_course_url = '/api/get-course';
const save_course_url = '/api/save-course';
const delete_course_url = '/api/delete-course';
const get_awards_url = '/api/get-awards';
const get_award_url = '/api/get-award';
const save_award_url = '/api/save-award';
const delete_award_url = '/api/delete-award';


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

export async function delete_service_video(id){
    let res = await call_json_api(delete_service_video_url, {'id': id});
    return res;
}

export async function get_members(){
    let res = await call_json_api(get_members_url, {});
    return res;
}

export async function get_member(id){
    let res = await call_json_api(get_member_url, {'id': id});
    return res;
}

export async function save_member(id, name, description, position, sequence, departments, back_image_file, gif_file, image_file){
    let data = new FormData();
    data.append('back_image_file', back_image_file);
    data.append('gif_file', gif_file);
    data.append('image_file', image_file);
    data.append('id', id)
    data.append('name', name);
    data.append('description', description);
    data.append('position', position);
    data.append('sequence', sequence);
    data.append('departments', departments);
    let res = await call_form_api(save_member_url, data);
    return res['id'];
}

export async function delete_member(id){
    let res = await call_json_api(delete_member_url, {'id': id});
    return res;
}

export async function get_department_members(department_name){
    let res = await call_json_api(get_department_members_url, {'department': department_name})
    return res;
}

export async function get_courses(){
    let res = await call_json_api(get_courses_url, {});
    return res;
}

export async function get_course(id){
    let res = await call_json_api(get_course_url, {'id': id});
    return res;
}

export async function save_course(id, name, description, sequence, image_file){
    let data = new FormData();
    data.append('image_file', image_file);
    data.append('id', id)
    data.append('name', name);
    data.append('description', description);
    data.append('sequence', sequence);
    let res = await call_form_api(save_course_url, data);
    return res['id'];
}

export async function delete_course(id){
    let res = await call_json_api(delete_course_url, {'id': id});
    return res;
}

export async function get_awards(){
    let res = await call_json_api(get_awards_url, {});
    return res;
}

export async function get_award(id){
    let res = await call_json_api(get_award_url, {'id': id});
    return res;
}

export async function save_award(id, year, award, presenter, winner, winner_category, status, status_type){
    let data = {}
    data.append('id', id);
    data.append('year', year);
    data.append('award', award);
    data.append('presenter', presenter);
    data.append('winner', winner);
    data.append('winner_category', winner_category);
    data.append('status', status);
    data.append('status_type', status_type);
    let res = await call_json_api(save_award_url, data);
    return res['id'];
}

export async function delete_award(id){
    let res = await call_json_api(delete_award_url, {'id': id});
    return res;
}