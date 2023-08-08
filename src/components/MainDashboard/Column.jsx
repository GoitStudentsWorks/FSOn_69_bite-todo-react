import React, { useState } from 'react';
import sprite from '../../img/icons/sprite.svg';
import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Modal';
import { ColumnForm } from '../../components/MainDashboard';

import {
  ColumnContainer,
  ColumnTitleContainer,
  ColumnTitle,
  IconContainer,
  TitleIcon,
  IconButton,
  AddCardButton,
  AddCardIconContainer,
  AddCardIcon,
} from './Column.styled';
import { CardList } from 'components/Card/CardList';
import { AddTasks } from 'components/AddTaskForm/AddTaskForm';

export const Column = ({ _id, title, createdAt, cards, owner }) => {
  const [isEditCardMode, setIsEditCardMode] = useState(false);
  const { isModalOpen, closeModal, openModal } = useModal();

  const handleDeleteButtonClick = id => {
    console.log('Delete: id: ', id);
  };

  const handleAddCardButtonClick = () => {
    setIsEditCardMode(false);
    openModal();
  };

  const handleEditCardButtonClick = () => {
    setIsEditCardMode(true);
    openModal();
  };

  return (
    <ColumnContainer>
      <ColumnTitleContainer>
        <ColumnTitle>{title}</ColumnTitle>
        <IconContainer>
          <IconButton
            type="button"
            onClick={() => handleEditCardButtonClick(openModal)}
          >
            <TitleIcon>
              <use href={`${sprite}#icon-pencil`}></use>
            </TitleIcon>
          </IconButton>
          <IconButton type="button" onClick={handleDeleteButtonClick}>
            <TitleIcon>
              <use href={`${sprite}#icon-trash`}></use>
            </TitleIcon>
          </IconButton>
        </IconContainer>
      </ColumnTitleContainer>
      {cards && <CardList cards={cards} />}
      <AddCardButton onClick={handleAddCardButtonClick}>
        <AddCardIconContainer>
          <AddCardIcon>
            <use href={`${sprite}#icon-plus`}></use>
          </AddCardIcon>
        </AddCardIconContainer>
        <div>Add another card</div>
      </AddCardButton>
      {isModalOpen && isEditCardMode && (
        <Modal onClose={closeModal}>
          <ColumnForm
            id={_id}
            boardId={owner}
            onCloseForm={closeModal}
            columnTitle={title}
            isEditMode={true}
          />
        </Modal>
      )}
      {isModalOpen && !isEditCardMode && (
        <Modal onClose={closeModal}>
          <AddTasks boardId={owner} columnId={_id} closeModal={closeModal} />
        </Modal>
      )}
    </ColumnContainer>
  );
};
