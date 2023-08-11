import React from 'react';
import { useSelector } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CardListContainer, CardListStyled } from './CardList.styled';
import { Card } from './Card';
import { selectStatusFilter } from 'store/filter/selectors';

export const CardList = ({ boardId, cards }) => {
  const status = useSelector(selectStatusFilter);
  const filteredCards = status.priority
    ? cards.filter(card => card.priority === status.priority)
    : cards;

  return (
    <CardListContainer>
      <Scrollbars thumbMinSize={10}>
        <CardListStyled>
          {filteredCards.map(
            ({ _id, title, description, priority, deadline, owner }) => {
              return (
                <Card
                  key={_id}
                  _id={_id}
                  title={title}
                  description={description}
                  priority={priority}
                  deadline={deadline}
                  boardId={boardId}
                  columnId={owner}
                />
              );
            }
          )}
        </CardListStyled>
      </Scrollbars>
    </CardListContainer>
  );
};
