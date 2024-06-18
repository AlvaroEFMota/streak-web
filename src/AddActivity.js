import { useState } from 'react';
import { useSelector } from 'react-redux';

const AddActivity = () => {
    const api_url = useSelector((state) => state.api_url);
    const [ inputActivity, setInputActivity ] = useState("");

    const handleSubmit = (e) => {
        //e.preventDefault();
        console.log(inputActivity);
        const token = localStorage.getItem('token');
        if(inputActivity) {
            fetch(api_url + '/api/activity', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': token,
                },
                body: JSON.stringify({
                    name: inputActivity,
                })
            })
        setInputActivity('');
        }
    }

	return (
		<form className="add_activity" onSubmit={handleSubmit}>
            <label>Add Activity:</label>
            <input type="text"
                required value={inputActivity}
                onChange={(e) => setInputActivity(e.target.value)}/>
            <button type="submit">Create</button>
		</form>
	);
}

export default AddActivity;
