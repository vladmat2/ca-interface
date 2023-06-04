// The modal for educational info related to each categorized sentence in the contract.

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import catInfo from '../data/category-info.js';


function MarkedSenModal(props) {
    
    return (<>
    <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>{props.catName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h2 style={{color: props.catColor}}><i>"{props.markedSen}"</i></h2>
            <p></p>
            <h4>{catInfo[props.catName]}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
          <Button variant="primary" onClick={props.close}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>);
}

export default MarkedSenModal;