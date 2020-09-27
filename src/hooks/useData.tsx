import React, { createContext, useContext, useState, useCallback } from 'react';
import { api } from '../services/api';

const INITIAL_MOVIES_OR_SERIES_STATE = {
  data: {
    items: [] as IMoviesOrSeries[],
    totalResults: '',
  },
  loading: false,
  error: '',
};
const INITIAL_SELECTED_ITEM_STATE = {
  data: {} as IMoviesOrSeries,
  loading: true,
  error: '',
};
interface IDataContext {
  handleMoviesOrSeries: (formPayload: IFormPayload) => Promise<void>;
  moviesOrSeries: typeof INITIAL_MOVIES_OR_SERIES_STATE;
  selectedItem: typeof INITIAL_SELECTED_ITEM_STATE;
  handleSelectedItem: (id: string) => Promise<void>;
}
interface IFormPayload {
  title: string;
  type: string;
}
interface IMoviesOrSeries {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  Actors: string;
  Director: string;
  imdbID: string;
}

const DataContext = createContext({} as IDataContext);

const DataContextProvider: React.FC = ({ children }) => {
  const [moviesOrSeries, setMoviesOrSeries] = useState(
    INITIAL_MOVIES_OR_SERIES_STATE,
  );
  const [selectedItem, setSelectedItem] = useState(INITIAL_SELECTED_ITEM_STATE);

  const handleMoviesOrSeries = useCallback(async ({ title, type }) => {
    setMoviesOrSeries(prevState => ({
      ...prevState,
      error: '',
      loading: true,
      data: {
        items: [],
        totalResults: '',
      },
    }));

    try {
      const response = await api.get('', {
        params: {
          s: title,
          type,
        },
      });

      if (response.data.Error) {
        setMoviesOrSeries(prevState => ({
          ...prevState,
          error: 'Nenhum item encontrado',
        }));

        return;
      }
      setMoviesOrSeries(prevState => ({
        ...prevState,
        data: {
          totalResults: response.data.totalResults,
          items: response.data.Search,
        },
      }));
    } catch (error) {
      setMoviesOrSeries(prevState => ({
        ...prevState,
        error: 'Falha para obter os dados solicitados',
      }));
    } finally {
      setMoviesOrSeries(prevState => ({
        ...prevState,
        loading: false,
      }));
    }
  }, []);

  const handleSelectedItem = useCallback(async (id: string) => {
    setSelectedItem(prevState => ({
      ...prevState,
      error: '',
      loading: true,
    }));

    try {
      const response = await api.get('/', {
        params: {
          i: id,
        },
      });
      if (response.data.Error) {
        setSelectedItem(prevState => ({
          ...prevState,
          error: 'Nenhum item encontrado',
        }));
        return;
      }

      setSelectedItem(prevState => ({
        ...prevState,
        data: response.data,
      }));
    } catch (error) {
      setSelectedItem(prevState => ({
        ...prevState,
        error: 'Falha para obter os dados solicitados',
      }));
    } finally {
      setSelectedItem(prevState => ({
        ...prevState,
        loading: false,
      }));
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        handleMoviesOrSeries,
        moviesOrSeries,
        selectedItem,
        handleSelectedItem,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = (): IDataContext => {
  const context = useContext(DataContext);
  return context;
};

export { useData, DataContextProvider };
