import { createContext, ParentComponent, useContext } from "solid-js"
import { createStore, produce } from "solid-js/store";
import _ from "lodash";

type Map = {[key: string]: any}

type PersistenceStore = {[key: string]: any};

type PersistenceContextType = {
  getValue: <T>(key: string) => T;
  setValue: (key: string, value: any) => void;
  useRevalidate: <T extends Map>(key: string, getData: () => Promise<T>) => Promise<T>;
};

const PersistenceContext = createContext<PersistenceContextType>();

const PersistenceProvider: ParentComponent = (props) => {
  const [store, setStore] = createStore<PersistenceStore>();

  const setValue = (key: string, value: any) => {
    setStore(produce(store => {
      store[key] = value;
    }));
  }

  const getValue = <T, >(key: string) => {
    return store[key] as T;
  }

  const hasValue = (key: string) => !!store[key];

  const revalidate = async <T extends Map,>(
    key: string, 
    getData: () => Promise<T>,
    originalData: T
  ) => {
    const latestData = await getData();

    const isEqual = Object
      .keys(originalData)
      .every((property) => {
        return _.isEqual(latestData[property], originalData[property]);
      })
    
    alert(isEqual);
  }
  
  const useRevalidate = async <T extends Map,>(key: string, getData: () => Promise<T>) => {

    if (hasValue(key)) {
      const value = getValue<T>(key);
      revalidate(key, getData, value);
      return value;
    }

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
