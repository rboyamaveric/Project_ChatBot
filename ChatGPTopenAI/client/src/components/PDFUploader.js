import React from 'react';

function PDFUploader() {
  const handleUpload = (event) => {
    // TODO: Implement PDF upload logic
    console.log('PDF Uploaded:', event.target.files[0]);
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleUpload} />
    </div>
  );
}

export default PDFUploader;
