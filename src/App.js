import './App.css';
import { useState } from 'react';

function App(){
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }
    return(
        <div className="container parent-container">
            <div className="card counter-body shadow p-3 mb-5 bg-body rounded">
                <div className="card-body">
                    <div className="row">
                        <h5 data-testid="heading-value" className="card-title count-value mb-5 mt-5" id="display-value">{counter}</h5>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <button data-testid="increment-button-test" className='btn btn-success counter-button mb-2' onClick={increment}>Increment</button>
                        </div>
                        <div className="col-sm-6">
                            <button data-testid="decrement-button-test" className='btn btn-warning counter-button mb-2' onClick={decrement}>Decrement</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;