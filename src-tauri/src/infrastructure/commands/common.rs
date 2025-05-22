use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct RequestParams<'lt> {
    pub method: &'lt str,
    pub url: &'lt str,
    pub body: &'lt str,
}
