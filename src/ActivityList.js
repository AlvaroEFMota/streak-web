import { useState } from 'react';

const ActivityList = ({activities, handleDelete}) => {

    const [inputTimes, setInputTimes] = useState({});

    const handleSubmitTime = (uuid) => {
        const token = localStorage.getItem('token');
        const timeValue = parseInt(inputTimes[uuid], 10)
        console.log(timeValue);
        fetch('http://127.0.0.1:8080/api/activity', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify({
                id: uuid,
                duration: timeValue,
            })
        })
    }

    const handleChangeInputTime = (uuid, value) => {
        setInputTimes({...inputTimes, [uuid]: value})
    }

    return (
        <div>
            {activities.map((activity) => (
                <div className="activity" key={activity.uuid}>
                    <div>
                    <h2>{activity.name}, accumulative: {activity.accumulative} streak: {activity.streak}</h2>
                    <h5>last_update: {activity.last_update} uuid: {activity.uuid}</h5>
                    </div>
                    <div>
                        <form onSubmit={(e) => {handleSubmitTime(activity.uuid)}} >
                            <input type="text"
                                required value={inputTimes[activity.uuid] || ''}
                                onChange={(e) => handleChangeInputTime(activity.uuid, e.target.value)}/>
                        </form>
                        <button className="btn" onClick={() => (handleDelete(activity.uuid))}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ActivityList;
