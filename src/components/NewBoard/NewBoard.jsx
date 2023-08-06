import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import IconRadioButton from './IconRadioButton';
import { PrimaryButton } from '../PrimaryButton/';
import BackgroundRadioButton from './BackgroundRadioButton';
import {
  Title,
  FormBox,
  FormInput,
  Text,
  RadioIconBox,
  RadioBackgroundBox,
  CloseButton,
  ButtonBox,
  SvgBox,
  ButtonText,
  Error,
} from './NewBoard.styled';
import icons from '../../img/icons/sprite.svg';
import { Svg } from '../SvgIcon/SvgIcon';
import { useDispatch } from 'react-redux';
import { add } from 'store/boards/operations';

const iconNames = [
  'icon-Project',
  'icon-star',
  'icon-loading',
  'icon-puzzle',
  'icon-container',
  'icon-lightning',
  'icon-colors',
  'icon-hexagon',
];

const backgroundImages = [
  'default',
  'flowers',
  'stars',
  'sakura',
  'night',
  'fern',
  'clouds',
  'rock',
  'circle',
  'moon',
  'yacht',
  'balloon',
  'canyon',
  'coast',
  'balloons',
  'aurora',
];

const NewBoard = ({ onClick }) => {
  const dispatch = useDispatch();

  const scheme = 'dark';
  const buttonStyles = {
    padding: '10px 0px 11px 0px',
    borderRadius: '8px',
    backgroundColor: scheme === 'violet' ? '#5255BC' : '#BEDBB0',
    color: '#161616',
    width: '100%',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    background: Yup.string().required('A background must be selected'),
    dashboardIcon: Yup.string().required('An icon must be selected'),
  });

  return (
    <Formik
      initialValues={{
        title: '',
        background: null,
        dashboardIcon: null,
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        dispatch(add(values));
        onClick();
      }}
    >
      {formik => (
        <Form>
          <FormBox scheme={scheme}>
            <CloseButton type="button" onClick={onClick}>
              <Svg w={18} h={18} use={`${icons}#icon-x-close`} />
            </CloseButton>
            <Title scheme={scheme}>New board</Title>
            <FormInput
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              scheme={scheme}
              value={formik.values.title}
            />
            {formik.errors.title && formik.touched.title && (
              <Error>{formik.errors.title}</Error>
            )}
            <Text scheme={scheme}>Icons</Text>
            <RadioIconBox>
              {iconNames.map(iconName => (
                <IconRadioButton
                  key={iconName}
                  name="dashboardIcon"
                  value={iconName}
                  checked={formik.values.dashboardIcon === iconName}
                  scheme={scheme}
                />
              ))}
            </RadioIconBox>
            {formik.errors.dashboardIcon && formik.touched.dashboardIcon && (
              <Error>{formik.errors.dashboardIcon}</Error>
            )}
            <Text scheme={scheme}>Background</Text>
            <RadioBackgroundBox>
              {backgroundImages.map(image => (
                <BackgroundRadioButton
                  key={image}
                  name="background"
                  value={image}
                  checked={formik.values.background === image}
                  scheme={scheme}
                />
              ))}
            </RadioBackgroundBox>
            {formik.errors.background && formik.touched.background && (
              <Error>{formik.errors.background}</Error>
            )}
            <PrimaryButton type="submit" styles={buttonStyles}>
              <ButtonBox>
                <SvgBox scheme={scheme}>
                  <Svg w={14} h={14} use={`${icons}#icon-plus`} />
                </SvgBox>
                <ButtonText scheme={scheme}>Create </ButtonText>
              </ButtonBox>
            </PrimaryButton>
          </FormBox>
        </Form>
      )}
    </Formik>
  );
};

NewBoard.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NewBoard;
