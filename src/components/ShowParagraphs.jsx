// Renders each sentence of each paragraph in the contract.

import React, { useState } from 'react';
import { PassageAuthGuard } from '@passageidentity/passage-react';
import '../assets/show-paragraphs.css';
import contrArray from '../data/contract-array.js';
import keySentences from '../data/key-sentences.js';
import senColorKeys from '../data/key-sent-colors.js';
import MarkedSenModal from './MarkedSenModal';




function ShowParagraphs() {
    const [showSenModal, setSenModal] = useState(false);
    const [senData, setSenData] = useState({
            senText : '',
            senCat : '',
            senColor : ''
        });


    return(
            <PassageAuthGuard>
            <p className="contrTextBox">{contrArray.map((eachSentence) => { 
                let senCat = keySentences[eachSentence];
                let senColor = senColorKeys[senCat];

                
                
                return (
                <React.Fragment key={eachSentence}>
                    {
/* If the sentence is associated with a known category, convert the sentence into a color-coded (based on category) hyperlink and 
launch the modal with info related to that category. Otherwise, just render the sentence plainly. */                       
                        (eachSentence in keySentences) ?
                            <>
                                <span onClick={ () => {
                                setSenModal(true);
                                setSenData({
                                    senText : eachSentence,
                                    senCat : senCat,
                                    senColor : senColor
                                });
                                }} 
                                style={{color : senColor, 
                                        cursor : 'pointer'}}> 
                                {eachSentence} </span> 
                                
                                <MarkedSenModal show={showSenModal} 
                                close={ () => setSenModal(false) } 
                                markedSen={senData.senText} 
                                catName={senData.senCat}
                                catColor={senData.senColor} /> 
                            </>   
                            :

                            <span>{eachSentence}</span>
                    }

                    { 
/* Add a space or a newline after each sentence, depending on whether it's the last sentence in the paragraph. */
                        (eachSentence[eachSentence.length-1] === '\n') ?
                            <p>{' '}</p>
                            :
                            <span>{' '}</span>   
                    }
                </React.Fragment>
                );
                })
            }</p>
    
    </PassageAuthGuard>
    );  
    
}


export default ShowParagraphs;
