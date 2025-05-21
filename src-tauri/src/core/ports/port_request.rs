use crate::core::models::common::{RequestOptions, Response};

pub trait HTTPClient {
    fn send_request(&self, req_opt: RequestOptions) -> Result<Response, String>;
}
