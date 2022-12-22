import { createContext, ParentComponent, useContext } from "solid-js"
import { createStore } from "solid-js/store";


type UIState = {
  snackbars: string[]
}

const UIStateContext = createContext<UIState>();

const defaultState = () => ({
  snackbars: ["Message 1", "Message 2"]
})

const UIProvider: ParentComponent = (props) => {
  const [store, setStore] = createStore<UIState>(defaultState());

  return (
    <UIStateContext.Provider value={store}>
      {props.children}
    </UIStateContext.Provider>
  )
}

export const useUIState = () => useContext(UIStateContext)!;

export default UIProvider;
