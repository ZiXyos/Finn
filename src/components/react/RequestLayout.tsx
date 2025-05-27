import { useState, type ChangeEvent, type FunctionComponent } from "react";
import { SmallButton } from './Button';
import { invoke } from "@tauri-apps/api/core";
import { InputField } from './InputField'
import { DropDown } from "./DropDown";

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH'

type Body = {
  [key: string]: unknown | Body
}

type RequestParams = {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH';
  url: string;
  body: Body | null
}

export const RequestLayout: FunctionComponent<{}> = ({ }) => {
  const [currentMethod, setMethod] = useState<Method>("GET");
  const [requestParam, setRequestParam] = useState<Partial<RequestParams>>({
    method: currentMethod,
    url: "",
    body: null
  });
  const updateUrl = (url: string) => {
    setRequestParam(prev => {
      return {
        ...prev,
        url
      }
    })
  }
  const updateMethod = (method: Method) => {
    console.log("UPDATE  METHOD: ", method)
    setMethod(method);
    setRequestParam(prev => {
      return {
        ...prev,
        method
      }
    })
  }

  const updateBody = (body: Body) => {
    setRequestParam(prev => {
      return {
        ...prev,
        body
      }
    })
  }

  const requestHandler = async () => {
    console.log("REQUESTING: ", requestParam.url, " METHOD TYPE ", requestParam.method)
    const res = requestParam ? await invoke("send_request", {
      request_param: {
        method: requestParam.method,
        url: requestParam.url ? requestParam.url.toString() : "",
        body: JSON.stringify(requestParam.body)
      }
    }) : "nothing";

    console.log(res)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateUrl(e.currentTarget.value)
  }

  return (
    <div>
      <h1>
        REQUEST LAYOUT
      </h1>

      <div>
        <DropDown
          items={['GET', 'POST', 'DELETE']}
          currentItem={currentMethod}
          onTaz={(method) => updateMethod(method as Method)}
        />
        <InputField
          value={requestParam?.url}
          onChange={handleInputChange}
          variant="default"
          isActive={true}
        />
        <SmallButton
          variant="sm"
          id="submit-button"
          type="submit"
          onClick={requestHandler}
        >
          <SmallButton.Text text="REACT BTN" />
        </SmallButton>
      </div>

    </div>
  )
}
