const ActivityList = ({activities, handleDelete}) => {

    return (
        <div>
            {activities.map((activity) => (
                <div className="activity" key={activity.uuid}>
                    <div>
                    <h2>{activity.name}, accumulative: {activity.accumulative} streak: {activity.streak}</h2>
                    <h5>last_update: {activity.last_update} uuid: {activity.uuid}</h5>
                    </div>
                    <button className="btn" onClick={() => (handleDelete(activity.uuid))}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default ActivityList;
