import React, { createContext, useContext, useState } from 'react'
import { api } from '../services/api';

interface IDataContext {
  handleMoviesOrSeries: (formPayload: IFormPayload) => Promise<void>;
  isLoading: boolean;
  moviesOrSeries: Array<IMovie | ISerie>;
}

interface IFormPayload{
    title: string;
    type: string
}

interface IMovie{
  poster: string
  title:string
  type:string
  year:string
  imdbid:string
}
interface ISerie{
  poster:string
  title:string
  type:string
  year:string
  actors:string
  director:string
  genre:string
  imdbid:string
}

const DataContext = createContext({} as IDataContext)


const DataContextProvider: React.FC = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesOrSeries, setMoviesOrSeries] = useState<Array<ISerie | IMovie>>([]);

  const handleMoviesOrSeries = async ({ title, type }) => {
    setIsLoading(true);

    const response = await api.get('', {
      params: {
        s: title,
        type,
      },
    });

    setTimeout(() => {
      setIsLoading(false);
      setMoviesOrSeries(response.data);
      console.log(response.data);
    }, 1500);
  };

  return (
    <DataContext.Provider
      value={{
        handleMoviesOrSeries,
        isLoading,
        moviesOrSeries
      }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const context = useContext(DataContext)
  return context
}

export { useData, DataContextProvider };
