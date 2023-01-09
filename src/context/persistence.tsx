import { createContext, ParentComponent, useContext } from "solid-js"
import { createStore, produce } from "solid-js/store";
import _ from "lodash";

type Map = {[key: string]: any}

type PersistenceStore = {[key: string]: any};

type PersistenceContextType = {
  getValue: <T>(key: string) => T;
  setValue: (key: string, value: any) => void;
  useRevalidate: <T extends Map>(
    key: string, 
    getData: () => Promise<T>, 
    callback?: (latestData: T) => void
  ) => Promise<T>;
};

const PersistenceContext = createContext<PersistenceContextType>();

const PERSISTENCE_LIMIT = 50;

const PersistenceProvider: ParentComponent = (props) => {
  const [store, setStore] = createStore<PersistenceStore>();

  const setValue = (key: string, value: any) => {
    if (Object.keys(store).length > PERSISTENCE_LIMIT) {
      clear();
    }

    setStore(produce(store => {
      store[key] = value;
    }));
  }

  const getValue = <T, >(key: string) => {
    return store[key] as T;
  }

  const clear = () => {
    setStore(produce(store => {
      Object.keys(store).forEach(key => {
        delete store[key];
      })
    }))
  }

  const hasValue = (key: string) => !!store[key];

  const revalidate = async <T extends Map,>(
    key: string, 
    getData: () => Promise<T>,
    persistedData: T,
    callback?: (latestData: T) => void
  ) => {
    const latestData = await getData();

    const isEqual = Object
      .keys(persistedData)
      .every((property) => {
        return _.isEqual(latestData[property], persistedData[property]);
      })
    
    if (!isEqual) {
      setValue(key, latestData);

      if (!!callback) {
        callback(latestData);
      }
    }

    return latestData;
  }
  
  const useRevalidate = async <T extends Map,>(
    key: string, 
    getData: () => Promise<T>,
    callback?: (latestData: T) => void
  ) => {

    if (hasValue(key)) {
      const value = getValue<T>(key);
      revalidate(key, getData, value, callback);
      return value;
    }

    const result = await getData();
    setValue(key, result);
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
