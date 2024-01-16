import {useState} from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const pizzas =[
    {
        'id' : 1,
        'sabor' : 'Portuguesa',
        'valor' :  40
    },
    {
        'id' : 2,
        'sabor' : 'Paulista',
        'valor' :  30
    }
]

function Map(){
  const [count,SetCount]= useState(0)
return(
    <div>
        {pizzas.map((pizzas) =>
        <div key={pizzas.id}>
          
        <div className='card'>
            <h4>{pizzas.sabor}</h4>
            <br />
            <p>Valor:{pizzas.valor}</p>
        </div>
        </div>
        
        
        )}
    </div>
  )
}
    
export default Map
    
