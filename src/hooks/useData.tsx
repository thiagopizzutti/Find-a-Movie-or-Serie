import React, { createContext, useContext, useState, useCallback } from 'react';
import { api } from '../services/api';

interface IDataContext {
  handleMoviesOrSeries: (formPayload: IFormPayload) => Promise<void>;
  isLoading: boolean;
  moviesOrSeries: Array<IMovie | ISerie>;
  selectedItem: IMovie | ISerie;
  handleSelectedItem: (id: string) => Promise<void>;
  error: string;
}
interface IFormPayload {
  title: string;
  type: string;
}
interface IMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  Director: string;
  Actors: string;
  imdbID: string;
}
interface ISerie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  Actors: string;
  Director: string;
  Genre: string;
  imdbID: string;
}

const DataContext = createContext({} as IDataContext);

const DataContextProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesOrSeries, setMoviesOrSeries] = useState<Array<ISerie | IMovie>>(
    [],
  );
  const [selectedItem, setSelectedItem] = useState<IMovie | ISerie>(
    {} as ISerie | IMovie,
  );
  const [error, setError] = useState('');

  const handleMoviesOrSeries = useCallback(async ({ title, type }) => {
    setIsLoading(true);
    setError('');
    try {
      const response = await api.get('', {
        params: {
          s: title,
          type,
        },
      });

      if (response.data.Error) {
        setError('Nenhum item encontrado');
        return;
      }

      setMoviesOrSeries(response.data.Search);
    } catch (error) {
      setError('Falha para obter os dados solicitados');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSelectedItem = useCallback(async (id: string) => {
    setIsLoading(true);
    setError('');
    try {
      const response = await api.get('/', {
        params: {
          i: id,
        },
      });
      if (response.data.Error) {
        setError('Nenhum item encontrado');
        return;
      }

      setSelectedItem(response.data);
    } catch (error) {
      setError('Falha ao obter os dados solicitados');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        handleMoviesOrSeries,
        isLoading,
        moviesOrSeries,
        selectedItem,
        handleSelectedItem,
        error,
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
