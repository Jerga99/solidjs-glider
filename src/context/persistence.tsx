import { createContext, onMount, ParentComponent, useContext } from "solid-js"


type PersistenceContextType = {};

const PersistenceContext = createContext<PersistenceContextType>();

const PersistenceProvider: ParentComponent = (props) => {

  onMount(() => {
    console.log("persistence mounted!");
  })

  return (
    <PersistenceContext.Provider value={{}}>
      {props.children}
    </PersistenceContext.Provider>
  )
}

export const usePersistence = () => useContext(PersistenceContext);
export default PersistenceProvider;
