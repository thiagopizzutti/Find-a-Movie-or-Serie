import React from 'react';
import { useFormik } from 'formik';
import BounceLoader from 'react-spinners/BounceLoader';
import * as yup from 'yup';
import {
  StyledLoader,
  ButtonContent,
  SearchContent,
  StyledError,
} from './styles';
import Form from '../Form';
import { Input, Button, SelectableButton } from '..';
import { useData } from '../../hooks/useData';

const Search: React.FC = () => {
  const { isLoading, handleMoviesOrSeries } = useData();

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      type: '',
      title: '',
    },
    onSubmit: handleMoviesOrSeries,
    validationSchema: yup.object().shape({
      title: yup.string().required('Preencha com o nome do filme ou série'),
    }),
  });

  const handleType = (type: string) => {
    setFieldValue('type', type);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ButtonContent>
        <SelectableButton
          type="button"
          onClick={() => handleType('movie')}
          isActive={values.type === 'movie'}
        >
          Filme
        </SelectableButton>
        <SelectableButton
          type="button"
          onClick={() => handleType('series')}
          isActive={values.type === 'series'}
        >
          Série
        </SelectableButton>
      </ButtonContent>
      <SearchContent>
        {isLoading ? (
          <StyledLoader>
            <BounceLoader size={60} color="#45aaf2" />
          </StyledLoader>
        ) : (
          <Input
            placeholder="termo de busca: (ex: Silicon Valley)"
            onChange={handleChange}
            onBlur={handleBlur}
            name="title"
            type="text"
            label="Busque o filme ou série"
            value={values.title}
          />
        )}
        <Button type="submit">Pesquisar</Button>
      </SearchContent>

      {errors.title && touched.title ? (
        <StyledError>{errors.title}</StyledError>
      ) : null}
    </Form>
  );
};

export default Search;
