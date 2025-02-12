import { useState, useEffect } from "react";
import Form from "./Form";
// import List from "./List";
import Table from "./Table";



function App() {
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const fetchItems = async() => {
      try{
        const API_URL = process.env.REACT_APP_API_URL;
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
          console.log(err);
      }
    }

    fetchItems();
  }, [reqType])

  return (
    <div className="App">
      <Form 
      reqType ={reqType}
      setReqType={setReqType}/>
      {/* <List items={items} /> */}
      <Table items ={items} />
    </div>
  );
}

export default App;
