import React, { useContext, useState } from 'react';
import { Button } from '../layout/common';
import { ThemeContext } from '../../context/context';
import Form from './Form';
import { useNavigate } from 'react-router-dom';
import { isSubmittedAtom } from '../../recoil/atoms';
import { useSetRecoilState } from 'recoil';
import Modal from './Modal';

const FormSection = () => {
    const mode = useContext(ThemeContext);
    const isSubmitted = useSetRecoilState(isSubmittedAtom);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleClick = () => {
        isSubmitted(true);
        // navigate('/mypage');
        openModal();
        
    }   

  return (
    <>
    <Form type='text' inputType='이름'/>
    <Form type='email' inputType='이메일'/>
    <Form type='date' inputType='생년월일'/>
    <Button mode={mode.button} onClick={handleClick}>제출</Button>
    <Modal isOpen={isModalOpen} closeModal = {closeModal}/>
    </>
  )
}

export default FormSection;