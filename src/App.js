import { useState } from "react";
import Navbar from './Navbar';
import Home from './Home';
import ActivityList from './ActivityList';


function App() {

	const [activities, setActivities] = useState([
        {activity: 'Activity1', streak: 6, last_update: 'xyz', acc: 456, id: 1},
        {activity: 'Activity2', streak: 6, last_update: 'xyz', acc: 456, id: 2},
        {activity: 'Activity3', streak: 6, last_update: 'xyz', acc: 456, id: 3},
        {activity: 'Activity4', streak: 6, last_update: 'xyz', acc: 456, id: 4},
    ])
    
    const handleDelete = (id) => {
        const new_activities = activities.filter((activity) => (activity.id !== id));
        setActivities(new_activities);
    }

  return (
      <div className="App">
          <Navbar />
          <ActivityList activities={activities} handleDelete={handleDelete}/>
      </div>
  );
}

export default App;
