pub struct HTTPRequest {
    method: String,
}

impl HTTPRequest {
    pub fn new(method: String) -> Self {
        Self { method }
    }

    pub fn execute(&self) -> Result<String, String> {
        // Implementation of the HTTP request execution
        Ok(self.method.clone())
    }
}
