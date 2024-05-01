import { useState } from 'react';

const AddActivity = ({user_id}) => {
    const [ inputActivity, setInputActivity ] = useState("");

    const handleSubmit = (e) => {
        //e.preventDefault();
        console.log(inputActivity);
        if(inputActivity) {
            fetch('http://127.0.0.1:8080/activity', {
                method: 'POST',
                headers: {
                    //'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: user_id,
                    name: inputActivity,
                })
            })
        setInputActivity('');
        }
    }

	return (
		<form className="add_activity" onSubmit={handleSubmit}>
			<label>
				Add Activity:
			</label>
            <input type="text"
                required value={inputActivity}
                onChange={(e) => setInputActivity(e.target.value)}/>
            <button type="submit">Create</button>
		</form>
	);
}

export default AddActivity;
