import React from 'react'
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadDropzone } from "react-uploader";
export default function Fileupload() {
    const uploader = Uploader({
        apiKey: "free" // Get production API keys from Bytescale
      });
      const options = { multi: true };
  return (
    <div className="flex flex-col justify-center items-center gap-9 mt-[-3%]  ">
    <h1
      id="fileupload"
      className="text-3xl text-blue-900 font-semibold text-center pr-[70px]"
    >
      File Upload
    </h1>
    <div className="border-r-2 pr-[70px] flex justify-center flex-col items-center gap-10">
      <p className="w-[300px] text-center text-base text-[#61677A]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since.
      </p>

    <div className="h-[150px]">
      <UploadDropzone uploader={uploader}
                    options={options}
                    onUpdate={files => alert(files.map(x => x.fileUrl).join("\n"))}
                    width="600px"
                    height="375px"
                     />
     
     </div>
    </div>
  </div>  )
}
