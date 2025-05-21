use crate::core::{
    models::common::{HTTPMethod, RequestOptions, Response},
    ports::port_request::HTTPClient,
};

pub struct HTTPService<T: HTTPClient> {
    client: T,
}

impl<T: HTTPClient> HTTPService<T> {
    pub fn new(client: T) -> Self {
        Self { client }
    }

    pub fn execute_request(&self, method: &str, body: Option<String>) -> Result<Response, String> {
        self.client.send_request(RequestOptions {
            url: String::from("https://google.com"),
            method: self.method_builder(method),
            body: body,
            headers: Vec::new(),
        })
    }

    fn method_builder(&self, method: &str) -> HTTPMethod {
        match method {
            "GET" => HTTPMethod::GET(String::from(method)),
            _ => HTTPMethod::OPTIONS(String::from("GET")),
        }
    }
}
