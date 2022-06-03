// import logo from './logo.svg';
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider, QueryClient} from 'react-query'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { HomePage } from './components/Home.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import './App.css'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/super-heroes' element={<SuperHeroesPage />}/>
            <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />}/>
            {/* <Route path='/rq-super-heroes'>
              <RQSuperHeroesPage />
            </Route>
            <Route path='/rq-parallel'>
              <ParallelQueriesPage />
            </Route>
            <Route path='/rq-dynamic-parallel'>
              <DynamicParallelPage heroIds={[1, 3]} />
            </Route>
            <Route path='/rq-dependent'>
              <DependentQueriesPage email='vishwas@example.com' />
            </Route>
            <Route path='/rq-paginated'>
              <PaginatedQueriesPage />
            </Route>
            <Route path='/rq-infinite'>
              <InfiniteQueriesPage />
            </Route> */}
            <Route path='/' element={<HomePage />}/>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;
