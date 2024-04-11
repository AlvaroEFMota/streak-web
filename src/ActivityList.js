const ActivityList = ({activities, handleDelete}) => {

    return (
        <div>
            {activities.map((activity) => (
                <div className="activity" key={activity.id}>
                    <h2>{activity.activity}, streak: {activity.streak}</h2>
                    <h5>last_update: {activity.last_update} acc: {activity.acc}</h5>
                    <button onClick={() => (handleDelete(activity.id))}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default ActivityList;
