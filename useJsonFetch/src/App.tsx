import './App.css'
import useJsonFetch from "./hooks/useJsonFetch";

function App() {
    // http://localhost:7070/data
    // http://localhost:7070/loading
    // http://localhost:7070/error


    const API_URL = 'http://localhost:7070/data'
    const[response, loading, error] = useJsonFetch(API_URL, [])


    return (
    <>
        {loading ? <p>loading...</p> : ''}
        <p>Status: {error ? error : response.status}</p>
    </>
  )
}

export default App
