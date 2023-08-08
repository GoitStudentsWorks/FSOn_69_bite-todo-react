import React, { useState } from 'react';
import { Formik, ErrorMessage} from 'formik';
import userEditScheme from './schema';
import {
  DivStyled,
  FromStyled,
  FieldStyled,
  WrapperInput,
  BtnShowPassword,
  BtnSubmitStyled,
  ErrorStyled
} from './FormProfile.styled';
import sprite from '../../img/icons/sprite.svg';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { useDispatch } from 'react-redux';
import { updateUser } from 'store/auth/operations';
import { updateAvatar } from 'store/auth/operations';


const iconAllow = '#icon-eye-allow';
const iconDenied = '#icon-eye-denied';


const FormProfie = ({ avatarFile, onAvatarChange }) => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <DivStyled>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={userEditScheme}
        // onSubmit={(values, {resetForm}) => {
        //   dispatch(updateUser(values))
        //   resetForm();
        // }}
        onSubmit={(values, {resetForm}) => {

          if (avatarFile) {
            const formData = new FormData();
            formData.append('avatar', avatarFile);
            dispatch(updateAvatar(formData));
          }

          dispatch(updateUser(values));
          onAvatarChange(null);
          resetForm();

        }}
      >
        {({ isSubmitting }) => {
          return (
            <FromStyled>
              <FieldStyled id="name" name="name" placeholder="Username" />
              <ErrorMessage name="name" component={ErrorStyled} /> 
              <FieldStyled id="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component={ErrorStyled} />
              <WrapperInput>
              <FieldStyled 
                id="password"
                name="password"
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                />  
              <BtnShowPassword type="button" onClick={() => setShowPassword(!showPassword)}>
                  <Svg v={'18px'} h={'18px'} use={`${sprite}${showPassword ? iconDenied : iconAllow}`} />
              </BtnShowPassword>
              </WrapperInput>
              <ErrorMessage name="password" component={ErrorStyled} />
              <BtnSubmitStyled type="submit" disabled={isSubmitting}>Send</BtnSubmitStyled>
            </FromStyled>
          );
        }}
      </Formik>
    </DivStyled>
  );
};

export default FormProfie;
