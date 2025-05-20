#[tauri::command]
pub fn hello_string() -> &'static str {
    let res: &'static str = "hello world from tauro server";
    res
}

#[tauri::command(rename_all = "snake_case")]
pub fn send_request(request_param: &str) -> Result<String, String> {
    Ok(String::from(request_param))
}
