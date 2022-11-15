import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home'
import Create from './pages/create'
import Demoluu from './pages/demoluu'
import Luupage2 from './pages/luupage2'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Route path='/'>
                    <Home />
                </Route>
                <Route path='/create'>
                    <Create />
                </Route>
                <Route path='/demoluu'>
                    <Demoluu />
                </Route>
                <Route path='/luupage2'>
                    <Luupage2 />
                </Route>
            </BrowserRouter>
        </div>
    )

}

export default App