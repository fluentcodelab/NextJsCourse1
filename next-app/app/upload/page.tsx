'use client';
import React, { useState } from 'react';
import { CldImage, CldUploadWidget } from 'next-cloudinary';

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('');
  return (
    <>
      {publicId && (
        <CldImage
          alt="A random image"
          src={publicId}
          width={270}
          height={180}
        />
      )}
      <CldUploadWidget
        uploadPreset="auxlzag8"
        options={{
          sources: ['local'],
          multiple: false,
          maxFiles: 5,
          // Check out demo.cloudinary.com/uw/#/ for more options
        }}
        onUpload={(result, widget) => {
          if (result.event !== 'success') return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};
export default UploadPage;
