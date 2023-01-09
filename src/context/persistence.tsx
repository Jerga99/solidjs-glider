import { createContext, ParentComponent, useContext } from "solid-js"
import { createStore, produce } from "solid-js/store";

type PersistenceStore = {[key: string]: any};

type PersistenceContextType = {
  getValue: <T>(key: string) => T;
  setValue: (key: string, value: any) => void;
  useRevalidate: <T>(key: string, getData: () => Promise<T>) => Promise<T>;
};

const PersistenceContext = createContext<PersistenceContextType>();

const PersistenceProvider: ParentComponent = (props) => {
  const [store, setStore] = createStore<PersistenceStore>();

  const setValue = (key: string, value: any) => {
    setStore(produce(store => {
      store[key] = value;
    }));
  }

  const getValue = (key: string) => {
    return store[key];
  }

  const useRevalidate = async <T,>(key: string, getData: () => Promise<T>) => {
    const result = await getData();
    return result;
  }
  
  return (
    <PersistenceContext.Provider value={{
      getValue, setValue, useRevalidate
    }}>
      {props.children}
    </PersistenceContext.Provider>
  )
}

export const usePersistence = () => useContext(PersistenceContext);
export default PersistenceProvider;
