use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub enum HTTPMethod {
    GET(String),
    POST(String),
    PUT(String),
    DELETE(String),
    PATCH(String),
    HEAD(String),
    OPTIONS(String),
}

#[derive(Serialize, Deserialize)]
pub struct RequestOptions {
    pub url: String,
    pub method: HTTPMethod,
    pub headers: Vec<(String, String)>,
    pub body: Option<String>,
}

#[derive(Serialize, Deserialize)]
pub struct Response {
    pub status_code: u16,
    pub body: Option<String>,
    pub headers: Vec<(String, String)>,
}
