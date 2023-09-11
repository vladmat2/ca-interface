import React, { useState } from 'react';
import { PassageAuthGuard } from '@passageidentity/passage-react';
import axios from 'axios';

// import InputGroup from 'react-bootstrap/InputGroup';

function UploadContract () {
    const [file, setFile] = useState();

    function handleFileChange(event) {
        setFile(event.target.files[0]);
        return;
    }

    function handleFileSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('contract', file);
        formData.append('contract_file_name', file.name);

        const postConfig = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post('/userFiles', formData, postConfig)
        .then((response => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });

    }

    return (
        <PassageAuthGuard>
            <div>
                <h2>Upload new employment contract</h2>
                <form onSubmit={handleFileSubmit}>
                    <input type="file" name="file" onChange={handleFileChange} required/>
                    <button type="submit">Upload</button>
                </form>
                <h5>Note: Only one contract may be uploaded and reviewed at a time. Uploading replaces any previously uploaded contracts.</h5>
            </div>    
        </PassageAuthGuard>
    
    );

}

export default UploadContract;
