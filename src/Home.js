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
        setTimeout(() => {
            fetch('http://127.0.0.1:8080/userActivities/'+ user_id)
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
        const new_activities = activities.filter((activity) => (activity.uuid != uuid));
        setActivities(new_activities);
    }

    return (
        <div className="home">
            <Navbar />
            <div className="homepage">
                <AddActivity user_id={user_id} />
                {error && <h2>Error: {error}</h2>}
                {isPending && <h2>Loading...</h2>}
                {activities && <ActivityList activities={activities} handleDelete={handleDelete}/>}
            </div>
        </div>
    );
}

export default Home;
