import { useState, useEffect } from "react";
import Navbar from './Navbar';
import ActivityList from './ActivityList';
import AddActivity from './AddActivity';


function Home() {
    const [activities, setActivities] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const user_id = "c68fd157-edae-4076-ac3c-3206dcde4e47"

    useEffect(() => {
        const token = localStorage.getItem('token');
        setTimeout(() => {
            fetch('http://127.0.0.1:8080/api/activities/', {
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

    }, [])

    const handleDelete = (uuid) => {
        const token = localStorage.getItem('token');
        fetch(('http://127.0.0.1:8080/api/activity/'+uuid), {
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
