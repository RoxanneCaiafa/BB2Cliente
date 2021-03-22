import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import LoginPage from './LoginPage'
import About from './About'
import CreateItem from './CreateItem'
import GridItems from './GridItems'
import Details from './Details'
import store from '../store/store'
export const AppRouter = () => {

    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Switch>
                        <Route path="/items" component={GridItems} />
                        <Route path="/details" component={Details} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/about" component={About} />
                        <Route path="/save" component={CreateItem} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    )

}
