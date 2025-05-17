#[tauri::command]
pub fn hello_string() -> &'static str {
    let res: &'static str = "hello world";
    res
}
