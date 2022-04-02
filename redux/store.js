// external imports 
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// internal imports 
import rootReducer from './reducer'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

const DataProvider = ({ children }) => {
   return(
     <Provider store={store} >
        {children}
     </Provider>  
   ) 
}

export default DataProvider