import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('Álvaro');
    const [age, setAge] = useState(27);
 
    const handleClick = () => {
        setName("Álvaro Mota");
        setAge(28);
        setActivities([
                {activity: 'Andar', streak: 6, last_update: 'xyz', acc: 456, id: 1},
                {activity: 'Correr', streak: 20, last_update: 'xyz', acc: 456, id: 2},
                {activity: 'Nadar', streak: 69, last_update: 'xyz', acc: 456, id: 3},
                {activity: 'Estudar', streak: 35, last_update: 'xyz', acc: 456, id: 4},
        ])
    }
	const [activities, setActivities] = useState([
        {activity: 'Activity1', streak: 6, last_update: 'xyz', acc: 456, id: 1},
        {activity: 'Activity2', streak: 6, last_update: 'xyz', acc: 456, id: 2},
        {activity: 'Activity3', streak: 6, last_update: 'xyz', acc: 456, id: 3},
        {activity: 'Activity4', streak: 6, last_update: 'xyz', acc: 456, id: 4},
    ])
  

    return (
        <div className="homepage">
            <h1>Homepage</h1>
            <p>{ name }</p>
            <p>{ age }</p>
            <button onClick={handleClick}>Click me</button>
            <div>
                {activities.map((activity) => (
                    <div className="activity" key={activity.id}>
                        <h2>{activity.activity}, streak: {activity.streak}</h2>
                        <h5>last_update: {activity.last_update} acc: {activity.acc}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;
