import React, {useState} from 'react';

const initialIteamList = [
  {id: 1, user: 'Vadim', gender: 'Male', active: true},
  {id: 2, user: 'Victor', gender: 'Male', active: true},
  {id: 3, user: 'Sasha', gender: 'Female', active: true}
]

const initialIteamList2 = [
  {id: 4, user: 'Vasy', gender: 'Male', active: true},
  {id: 5, user: 'Geny', gender: 'Female', active: true},
  {id: 6, user: 'Masha', gender: 'Female', active: true}
]

function App() {

  const [list, setList] = useState(initialIteamList);
  const [list2, setList2] = useState(initialIteamList2)

  const moveElementToAnotherList = (id) => {
    const newElem = list.find( el => el.id === id)
    setList2([...list2, newElem]);

    setList(list.filter(el => el !== newElem))
  }

  const moveElementToAnotherList2 = (id) => {
    const newElem = list2.find( el => el.id === id)
    setList([...list, newElem]);

    setList2(list2.filter(el => el !== newElem))
  }

  return (
    <div >

      {list.map(el => <li>
        {el.user} --- {el.gender}
        <button onClick={() => moveElementToAnotherList(el.id)}>Move element</button>
      </li>)}

      <hr/>

      {list2.map(el => <li>
        {el.user} --- {el.gender} <button onClick={() => moveElementToAnotherList2(el.id)}>Move element</button>
      </li>)}

    </div>
  );
}

export default App;
