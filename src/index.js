import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import count from './modules/count';
// 라우터 코드 추가
// import {BrowserRouter} from 'react-router-dom'

//리덕스 코드 추가
import {Provider} from 'react-redux'
import {legacy_createStore as createStore} from 'redux'
import {devToolsEnhancer} from '@redux-devtools/extension'
import rootReducer from './modules';

//스토어 생성
// const store = createStore(count, devToolsEnhancer())
const store = createStore(rootReducer, devToolsEnhancer())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //얘는 리덕스만 사용한다.
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
