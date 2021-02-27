import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

interface Activity {
  id: string;
  title: string;
  venue: string;
  category: string;
  city: string;
  date: string;
  description: string;
}

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(
          'http://localhost:5000/api/Activities'
        );
        console.log(data);

        setActivities(data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetchActivities();
  }, []);

  return (
    <div className='App'>
      <Header as='h2' content='Reactivities' icon='users' />
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      <List>
        {activities.map((activity: Activity) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
