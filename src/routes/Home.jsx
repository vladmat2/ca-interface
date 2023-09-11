import React, { useState } from 'react';
import { useState } from 'react';
import { PassageAuthGuard } from '@passageidentity/passage-react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import UploadContract from './UploadContract';


function Home() {
    
    const [isUploaded, setUploaded] = useState();
    const [isAnalyzed, setAnalyzed] = useState();


    return (
        <PassageAuthGuard>
            <div>
                <UploadContract />
                <hr />
                <h2>Review previously uploaded contracts</h2>
                {
                    (isUploaded && isAnalyzed) ? 
                        <Link to='/ShowParagraphs'>
                            <Button>View Analysis</Button>    
                        </Link> 
                        :
                        (isUploaded) ? 
                            <h3> Contract under analysis. Please refresh page or check back later.</h3>
                            :
                            <h3>No contract uploaded yet.</h3>
                        
                }
          </div>
        </PassageAuthGuard>
        
    );
}

export default Home;
