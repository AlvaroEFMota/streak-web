import { useState } from 'react';
import { useSelector } from 'react-redux';

const ActivityList = ({activities, handleDelete}) => {

    const api_url = useSelector((state) => state.api_url);
    const [inputTimes, setInputTimes] = useState({});

    const handleSubmitTime = (uuid) => {
        const token = localStorage.getItem('token');
        const timeValue = parseInt(inputTimes[uuid], 10)
        console.log(timeValue);
        fetch(api_url + '/api/activity', {
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
                <div className="activity_item" key={activity.uuid}>
                    <div className="activity_info">
                    <h2>{activity.name}, accumulative: {activity.accumulative} streak: {activity.streak}</h2>
                    <h5>last_update: {activity.last_update} uuid: {activity.uuid}</h5>
                    </div>
                    <div className="activity_item_options">
                        <form onSubmit={(e) => {handleSubmitTime(activity.uuid)}} >
                            <input className="activity_subitem" type="text"
                                required value={inputTimes[activity.uuid] || ''}
                                onChange={(e) => handleChangeInputTime(activity.uuid, e.target.value)}/>
                        </form>
                        <button className="btn activity_subitem" onClick={() => (handleDelete(activity.uuid))}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ActivityList;
