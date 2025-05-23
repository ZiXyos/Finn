import { useState, type FunctionComponent } from "react";
import { SmallButton } from './Button';
import { invoke } from "@tauri-apps/api/core";

type Body = {
  [key: string]: unknown | Body
}

type RequestParams = {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH';
  url: URL;
  body: Body | null
}

export const RequestLayout: FunctionComponent<{}> = ({ }) => {
  const [requestParam, setRequestParam] = useState<RequestParams | null>(null);
  const updateUrl = (url: URL) => {
    setRequestParam(prev => {
      if (!prev) return {
        method: 'GET',
        url: url,
        body: null
      }

      return {
        ...prev,
        url
      }
    })
  }
  const requestHandler = async () => {
    const res = requestParam ? await invoke("send_request", {
      request_param: {
        method: requestParam.method,
        url: requestParam.url.toString(),
        body: JSON.stringify(requestParam.body)
      }
    }) : "nothing";

    console.log(res)
  }

  return (
    <div>
      <h1>
        REQUEST LAYOUT
      </h1>

      <SmallButton
        variant="sm"
        id="submit-button"
        type="submit"
        onClick={requestHandler}
      >
        <SmallButton.Text text="REACT BTN" />
      </SmallButton>

    </div>
  )
}
