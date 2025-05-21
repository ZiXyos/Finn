use crate::core::{
    models::common::{self, Response},
    ports::port_request::HTTPClient,
};

pub struct TauriHTTPAdapter;

impl HTTPClient for TauriHTTPAdapter {
    fn send_request(&self, req_opt: common::RequestOptions) -> Result<common::Response, String> {
        Ok(Response {
            status_code: 200,
            body: req_opt.body.clone(),
            headers: Vec::new(),
        })
    }
}
