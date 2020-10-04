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

const initialIteamList3 = [
  {id: 7, user: 'Lisa', gender: 'Female', active: true},
  {id: 8, user: 'Sonia', gender: 'Female', active: true},
  {id: 9, user: 'Marta', gender: 'Female', active: true}]

const initialIteamList4 = [
  {id: 10, user: 'Pety', gender: 'Male', active: true},
  {id: 11, user: 'Vova', gender: 'Male', active: true},
  {id: 12, user: 'Misha', gender: 'Male', active: true}]

function App() {

  const [list, setList] = useState(initialIteamList);
  const [list2, setList2] = useState(initialIteamList2)
  const [list3, setList3] = useState(initialIteamList3)
  const [list4, setList4] = useState(initialIteamList4)

  const moveElementToAnotherListDown = (id,value) => {
    const newElem2 = value.find( el => el.id === id)
    const newElem = {...newElem2, active: true}
    switch (value) {
      case list :
        setList2([...list2, newElem]);

        setList(list.filter(el => el.id !== id));break;
      case list2 :
        setList3([...list3, newElem]);

        setList2(list2.filter(el => el.id !== id));break;
      case list3 :
        setList4([...list4, newElem]);

        setList3(list3.filter(el => el.id !== id));break;
    }
  }

  const moveElementToAnotherListUp = (id,value) => {
    const newElem2 = value.find( el => el.id === id)
    const newElem = {...newElem2, active: true}
    switch (value) {
      case list2 :
        setList([...list, newElem]);

        setList2(list2.filter(el => el.id !== id));break;
      case list3 :
        setList2([...list2, newElem]);

        setList3(list3.filter(el => el.id !== id));break;
      case list4 :
        setList3([...list3, newElem]);

        setList4(list4.filter(el => el.id !== id));break;
    }
  }

  const showsButtonsHandler = (id,value) => {
    const arr = value.map(el => {
      if(el.id === id) return {...el, active: !el.active};
      return el;})

    switch (value) {
      case list :
        setList(arr);break;
      case list2 :
        setList2(arr);break;
      case list3 :
        setList3(arr);break;
      case list4 :
        setList4(arr);break;
    }
  }


  return (
    <div >

      {list.map(el =>
          <li>
        {el.user} --- {el.gender}
            {el.active && <button onClick={() => showsButtonsHandler(el.id,list)}>Move element</button>}
            {!el.active &&<button onClick={() => moveElementToAnotherListDown(el.id,list)}>down</button>}
      </li>)}

      <hr/>

      {list2.map(el =>
          <li>
        {el.user} --- {el.gender}
            {el.active && <button onClick={() => showsButtonsHandler(el.id,list2)}>Move element</button>}
            {!el.active && <button onClick={() => moveElementToAnotherListUp(el.id,list2)}>up</button>}
            {!el.active && <button onClick={() => moveElementToAnotherListDown(el.id,list2)}>down</button>}
      </li>)}

      <hr/>

      {list3.map(el =>
          <li>
        {el.user} --- {el.gender}
            {el.active &&  <button onClick={() => showsButtonsHandler(el.id,list3)}>Move element</button>}
            {!el.active && <button onClick={() => moveElementToAnotherListUp(el.id,list3)}>up</button>}
            {!el.active &&  <button onClick={() => moveElementToAnotherListDown(el.id,list3)}>down</button>}
      </li>)}

      <hr/>

      {list4.map(el =>
          <li>
        {el.user} --- {el.gender}
              {el.active &&  <button onClick={() => showsButtonsHandler(el.id,list4)}>Move element</button>}
              {!el.active &&  <button onClick={() => moveElementToAnotherListUp(el.id,list4)}>up</button>}

      </li>)}

    </div>
  );
}

export default App;
