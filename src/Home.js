import { useState, useEffect } from "react";
import ActivityList from './ActivityList';
import AddActivity from './AddActivity';
import { useSelector } from "react-redux";


function Home() {
    const api_url =  useSelector((state) => state.api_url);
    const [activities, setActivities] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setTimeout(() => {
            fetch(api_url + '/api/activities/', {
                method: 'GET',
                headers: {
                    'Authorization': token,
                }
            })
                .then(res => res.json()) // Converter a resposta para JSON
                .then(data => {
                    console.log(data.activities); // Exibir o corpo da resposta
                    setIsPending(false);
                    //setError(null);
                    setActivities(data.activities);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000);

    }, [api_url])

    const handleDelete = (uuid) => {
        const token = localStorage.getItem('token');
        fetch((api_url + '/api/activity/' + uuid), {
            method: 'DELETE',
            headers: {
                'Authorization': token,
            }
        })
            .then((response) => {
                if (response.ok) {
                    const new_activities = activities.filter((activity) => (activity.uuid !== uuid));
                    setActivities(new_activities);
                }
                return response.json();
            });
    }

    return (
        <div className="home">
            <div className="homepage">
                <AddActivity />
                {error && <h2>Error: {error}</h2>}
                {isPending && <h2>Loading...</h2>}
                {activities && <ActivityList activities={activities} handleDelete={handleDelete} />}
            </div>
        </div>
    );
}

export default Home;
