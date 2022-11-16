import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Create from './pages/create'
import Demoluu from './pages/demoluu'
import Luupage2 from './pages/luupage2'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>

                    <Route path='/create'>
                        <Create />
                    </Route>
                    <Route exact path='/demoluu'>
                        <Demoluu />
                    </Route>
                    <Route exact path='/luupage2'>
                        <Luupage2 />
                    </Route>

                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>

            </BrowserRouter>
        </div>
    )

}

export default App