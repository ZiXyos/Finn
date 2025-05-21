use crate::{
    core::{models::common::Response, services::http_service::HTTPService},
    infrastructure::http::tauri_adapter::TauriHTTPAdapter,
};

#[tauri::command]
pub fn hello_string() -> &'static str {
    let res: &'static str = "hello world from tauro server";
    res
}

#[tauri::command(rename_all = "snake_case")]
pub fn send_request(request_param: &str) -> Result<Response, String> {
    let client = TauriHTTPAdapter {};
    let req = HTTPService::new(client);
    req.execute_request("GET", Some(String::from(request_param)))
}
