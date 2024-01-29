import { useEffect, useRef, useReducer, createContext } from 'react'
import axios from "axios"

export const  StoreContext=createContext()
export const useApi = (url,body) => {
  const cacheData = useRef({})


  
  const initialState = {
    status: 'idle',
    error: null,
    data: [],
  }

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'FETCHING':
        return { ...initialState, status: 'fetching' }
      case 'FETCHED':
        return { ...initialState, status: 'fetched', data: action.payload }
      case 'FETCH_ERROR':
        return { ...initialState, status: 'error', error: action.payload }
      default:
        return state
    }
  }, initialState)
//   useEffect(() => {
//     let revokeRequest = false
//     if (!api || !api.trim()) return
//     const renderData = async () => {
//       dispatch({ type: 'FETCHING' })
//       if (cacheData.current[api]) {
//         const data = cacheData.current[api]
//         dispatch({ type: 'FETCHED', payload: data })
//       } else {
//         try {
//           const res = await fetch(api, {
//             method: 'POST',
//             body: JSON.stringify({
//            body
//             }),
//             headers: {
//               'Content-type': 'application/json; charset=UTF-8',
//             },
//           })









//           const data = await res.json()
//           cacheData.current[api] = data
//           if (revokeRequest) return
//           dispatch({ type: 'FETCHED', payload: data })
//         } catch (error) {
//           if (revokeRequest) return
//           dispatch({ type: 'FETCH_ERROR', payload: error.message })
//         }
//       }
//     }
//     renderData()
//     return function cleanup() {
//       revokeRequest = true
//     }
//   }, [api])

// useEffect(() => {
   
//     const renderData = async () => {
//       dispatch({ type: 'FETCHING' })
//  if(api!==""){
//         try {
            // const res = await axios({
            //     url: api,
            //     method: 'post',
            //     data: body 
            //   });
              






            //   const val = res.data.data;
          
            //     let Data = JSON.parse(val)


//         //   const data = await res.json()
//           cacheData.current[api] = Data
       
//           dispatch({ type: 'FETCHED', payload: Data })
//         } catch (error) {
       
//           dispatch({ type: 'FETCH_ERROR', payload: error.message })
//         }
      
//     }}
//     renderData()
   
  
//   }, [api])


useEffect(() => {
    let cancelRequest = false;
    if (!url) return;

    const fetchData = async () => {
        dispatch({ type: 'FETCHING' });
        if (cacheData.current[url]) {
            const data = cacheData.current[url];
            dispatch({ type: 'FETCHED', payload: data });
        } else {
            try {
                const res = await axios({
                    url: url,
                    method: 'post',
                    data: body 
                  });
                  const val = res.data.data;
                  let Data = JSON.parse(val)
                // const response = await fetch(url);
                // const data = await response.json();
                cacheData.current[url] = Data;
                if (cancelRequest) return;
                dispatch({ type: 'FETCHED', payload: Data });
            } catch (error) {
                if (cancelRequest) return;
                dispatch({ type: 'FETCH_ERROR', payload: error.message });
            }
        }
    };

    fetchData();

    return function cleanup() {
        cancelRequest = true;
    };
}, [url]);


return (
//     <StoreContext.Provider value={{state,dispatch}}>
// {children}
//     </StoreContext.Provider>
state
  
  )
}
