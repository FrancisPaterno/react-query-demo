import { useSuperHeroesData } from "../hooks/useSuperHeroesData"
import { Link } from 'react-router-dom'

export const RQSuperHeroesPage = () => {

    const onSuccess = (data) => {
        console.log("Perform side effect after data fetching.", data)
    }

    const onError = (error) => {
        console.log("Perform side effect after encountering error.", error)
    }

    const { isLoading, isFetching, isError, data, error, refetch } = useSuperHeroesData(onSuccess, onError)

    if(isLoading || isFetching){
        return <h2>Loading...</h2>
    }

    if(isError) return <h2>{error.message}</h2>

    return (
        <>
        <h2>RQ Super Heroes Page</h2>
        <button onClick={ refetch }>Fetch heroes</button>
        {
            data?.data.map(hero => {
            return <div key={hero.name}>
                    <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
                </div>
            })
        }
        </>
    )
}
