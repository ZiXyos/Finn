use crate::core::requests::http_request;

#[tauri::command]
pub fn hello_string() -> &'static str {
    let res: &'static str = "hello world from tauro server";
    res
}

#[tauri::command(rename_all = "snake_case")]
pub fn send_request(request_param: &str) -> Result<String, String> {
    let req = http_request::HTTPRequest::new(String::from(request_param));
    let res = req.execute().unwrap();
    Ok(res)
}
