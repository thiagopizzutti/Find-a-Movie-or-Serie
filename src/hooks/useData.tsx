import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  SyntheticEvent,
} from 'react';
import { api } from '../services/api';
import filmPoster from '../assets/film-poster.png';

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
  moviesOrSeries: typeof INITIAL_MOVIES_OR_SERIES_STATE;
  selectedItem: typeof INITIAL_SELECTED_ITEM_STATE;
  page: number;
  handleSelectedItem: (id: string) => Promise<void>;
  handleFormData: (formPayload: IFormPayload) => void;
  handlePage: (str: string) => Promise<void>;
  handleBrokenImg: (event: SyntheticEvent<HTMLImageElement, Event>) => void;
  totalPages: number;
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
  Plot: string;
}

const DataContext = createContext({} as IDataContext);

const DataContextProvider: React.FC = ({ children }) => {
  const [moviesOrSeries, setMoviesOrSeries] = useState(
    INITIAL_MOVIES_OR_SERIES_STATE,
  );
  const [selectedItem, setSelectedItem] = useState(INITIAL_SELECTED_ITEM_STATE);

  const [formData, setFormData] = useState({
    title: '',
    type: '',
  });

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleFormData = useCallback(({ type, title }: IFormPayload) => {
    setFormData({
      type,
      title,
    });
    setPage(1);
  }, []);

  const handleMoviesOrSeries = useCallback(async () => {
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
          s: formData.title,
          type: formData.type,
          page,
        },
      });

      if (response.data.Error) {
        setMoviesOrSeries(prevState => ({
          ...prevState,
          error: 'Nenhum item encontrado',
        }));

        return;
      }

      setTotalPages(Math.floor(Number(response.data.totalResults) / 10));

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
        error: 'Oops!! Algo não está certo. Tente novamente.',
      }));
    } finally {
      setMoviesOrSeries(prevState => ({
        ...prevState,
        loading: false,
      }));
    }
  }, [page, formData.title, formData.type]);

  useEffect(() => {
    if (formData.title) {
      handleMoviesOrSeries();
    }
  }, [page, formData, handleMoviesOrSeries]);

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
        error: 'Oops!! Algo não está certo. Tente novamente.',
      }));
    } finally {
      setSelectedItem(prevState => ({
        ...prevState,
        loading: false,
      }));
    }
  }, []);

  const handlePage = useCallback(async str => {
    if (str === '+') {
      setPage(prevPage => prevPage + 1);
      return;
    }
    setPage(prevPage => prevPage - 1);
    window.scrollTo(0, 0);
  }, []);

  const handleBrokenImg = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = filmPoster;
  };

  return (
    <DataContext.Provider
      value={{
        handleFormData,
        handleSelectedItem,
        handlePage,
        handleBrokenImg,
        moviesOrSeries,
        selectedItem,
        page,
        totalPages,
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
