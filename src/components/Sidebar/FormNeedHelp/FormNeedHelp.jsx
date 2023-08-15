import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  DivIconClose,
  StyledButton,
  StyledDiv,
  StyledInput,
  StyledP,
  StyledTextArea,
} from './FormNeedHelp.styled';
import sprite from 'img/icons/sprite.svg';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { sendNeedHelp } from 'store/boards/operations';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';

export const FormNeedHelp = ({ closeModal }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string()
        .min(8, 'Must be not less than 8 characters')
        .max(2000, 'Must be 2000 characters or less')
        .required('Required'),
    }),
    onSubmit: values => {
      Notify.info(
        'Your email has been sent to support. Expect a response to your email within a day.',
        {
          timeout: 4000,
        }
      );
      dispatch(sendNeedHelp(values));
      closeModal();
    },
  });

  return (
    <StyledDiv>
      <DivIconClose onClick={closeModal}>
        <Svg w={18} h={18} use={`${sprite}#icon-x-close`} />
      </DivIconClose>
      <StyledP>Need help</StyledP>
      <form onSubmit={formik.handleSubmit}>
        <StyledInput
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Email address"
        />
        <StyledTextArea
          type="text"
          name="message"
          placeholder="comment"
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        <StyledButton type="submit">Send</StyledButton>
      </form>
    </StyledDiv>
  );
};
