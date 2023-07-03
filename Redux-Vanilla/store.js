// import가 아닌 node.js의 require를 통해 가져오기

const redux = require('redux');
const reduxLogger = require('redux-logger')
// 변수안에 createStore함수를 담는다.
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const combineReducers = redux.combineReducers;


// ** actions
//action-types 액션 타입 지정
const ADD_SUBSCRIBER='ADD_SUBSCRIBER'
const ADD_VIEWCOUNT = 'ADD_VIEWCOUNT'

// action코드 작성
const addSubscriber = () => {
    // ttype을 가진 object반환
    return {
        type: ADD_SUBSCRIBER
    }
}

const addViewCount = () => {
    return {
        type : ADD_VIEWCOUNT
    }
}

//reducers
// reducer는 state와 action을 넘겨받음
const subscriberState = {
    // 초기값
    // 만약 값이 안들어오면 이 값을 받아서 사용하겠다.
    subscribers : 365
}
// initialState 값으로 초기화 하게 되어 있고, 값이 없을 경우 이 값을 사용
// action을 두번쨰 인자로 받은 type을 통해 handleing
const subscriberReducer = (state=subscriberState, action) => {
    switch(action.type) {
        case ADD_SUBSCRIBER:
            return {
                // 기존 state값 복사해서 1 증가
                ...state,
                subscribers : state.subscribers + 1
            }
            default: return state;
    }

}
// 조회수를 처리하는 hanlder
const viewState = {
    viewCount : 100
}

const viewReducer = (state=viewState, action) => {
    switch(action.type) {
        case ADD_VIEWCOUNT:
            return {
                ...state,
            viewCount: state.viewCount + 1
            }
        default:return state

    }
}
// object를 인자로 넘겨서 combine된 reducer가 생성될 수 있도록 함.
const rootReducer = combineReducers({
    view : viewReducer,
    subscriber:subscriberReducer
})

// reducer combine이 되어서 rootReducer로 사용할 수 있게 됨.

//store
const store = createStore(rootReducer, applyMiddleware(logger));

// **** subscribe - view - dispatch
// store.subscribe(()=> {
//     console.log('subscribe =>>',store.getState())
// })

// store.subscribe(() => {
//     console.log('subscribe ==>', store.getState())
// })

// action을 호출해주면 된다. 
// action을 dispatch해주면 됨.
// 리듀서가 작동이 되면서 상태가 변화
store.dispatch(addSubscriber())
store.dispatch(addSubscriber())
store.dispatch(addSubscriber())
store.dispatch(addViewCount())
store.dispatch(addSubscriber())

/**
 * subscribe ==> { subscribers: 366 }
subscribe ==> { subscribers: 367 }
subscribe ==> { subscribers: 368 }
subscribe ==> { subscribers: 369 }
subscribe ==> { subscribers: 370 }
 */
 /*

1. 라이브러리 불러오기
2. 미들웨어 추가
3. action타입 
4. action object를 return 해주는 action을 작성
5. action을 핸들링해주는 reducer를 작성
6. re는 state와 action두개를 인자로 넘겨받음
7. 여러가지 reducer를 combineReducer를 통해서 combine해서 store를 생성
8. middleware를 통해서 log를 찍어봤고
9. dispatch를 통해서 action을 호출해봄.

*/