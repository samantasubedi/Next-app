"use client";
import { useCallback, useState } from "react";

import { toast } from "sonner";
import { uploadToCloudonary } from "@/lib/utils";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDelete,
  FileUploadItemMetadata,
  FileUploadItemPreview,
  FileUploadList,
  FileUploadTrigger,
} from "@/components/ui/file-upload";
import { Cloud, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface cloudnaryresult {
  info: { public_id: string };
}

const Uploadpage = () => {
  const [imageid, setimageid] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const onFileReject = useCallback((file: File, message: string) => {
    toast(message, {
      description: `"${
        file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name
      }" has been rejected`,
    });
  }, []);
  return (
    <div>
      {/* <CldUploadWidget
        uploadPreset="uploadpreset123"
        onSuccess={(data) => {
          console.log(data);
        }}
        onPublicId={(id) => {
          console.log("Public id", id);
        }}
        onError={() => {
          toast("Error uploading photo");
        }}
      >
        {({ open }) => (
          <button onClick={() => open()} className="btn btn-primary">
            Upload
          </button>
        )}
      </CldUploadWidget> */}

      <FileUpload
        maxFiles={2}
        maxSize={5 * 1024 * 1024}
        className="w-full max-w-md"
        value={files}
        onValueChange={(files) => {
          setFiles(files);
        }}
        onFileReject={onFileReject}
        // multiple
      >
        <FileUploadDropzone>
          <div className="flex flex-col items-center gap-1 text-center">
            <div className="flex items-center justify-center rounded-full border p-2.5">
              <Upload className="size-6 text-muted-foreground" />
            </div>
            <p className="font-medium text-sm">Drag & drop files here</p>
            <p className="text-muted-foreground text-xs">
              Or click to browse (max 2 files, up to 5MB each)
            </p>
          </div>
          <FileUploadTrigger asChild>
            <Button variant="outline" size="sm" className="mt-2 w-fit">
              Browse files
            </Button>
          </FileUploadTrigger>
        </FileUploadDropzone>
        <FileUploadList>
          {files.map((file, index) => (
            <FileUploadItem key={index} value={file}>
              <FileUploadItemPreview />
              <FileUploadItemMetadata />
              <FileUploadItemDelete asChild>
                <Button variant="ghost" size="icon" className="size-7">
                  <X />
                </Button>
              </FileUploadItemDelete>
            </FileUploadItem>
          ))}
        </FileUploadList>
      </FileUpload>

      <Button
        variant={"default"}
        disabled={isUploading}
        className={isUploading ? "animate-pulse" : ""}
        onClick={async () => {
          if (!files[0]) return toast.error("Please select a file to upload");
          setIsUploading(true);
          const url = await uploadToCloudonary(files[0]);
          setIsUploading(false);
          toast.success("Image uploaded successfully");
          setimageid(url);
        }}
      >
        <Cloud className={isUploading ? "animate-bounce" : ""} /> Upload to
        cloudinary
      </Button>

      {imageid && (
        <img alt="image" src={imageid} height={200} width={500}></img>
      )}
    </div>
  );
};

export default Uploadpage;
