import React, { ChangeEvent, FC, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  submitting: boolean;
}

const ActivityForm: FC<Props> = ({
  activity: selectedActivity,
  closeForm,
  createOrEdit,
  submitting,
}) => {
  const initialState = selectedActivity ?? {
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: '',
  };
  const [activity, setActivity] = useState(initialState);

  const handleSubmit = () => {
    createOrEdit(activity);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setActivity({ ...activity, [name]: value });
    console.log(activity);
  };
  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input
          onChange={handleInputChange}
          placeholder='Title'
          value={activity.title}
          name='title'
        />
        <Form.TextArea
          onChange={handleInputChange}
          placeholder='Description'
          value={activity.description}
          name='description'
        />
        <Form.Input
          onChange={handleInputChange}
          placeholder='Category'
          value={activity.category}
          name='category'
        />
        <Form.Input
          type='date'
          onChange={handleInputChange}
          placeholder='Date'
          value={activity.date}
          name='date'
        />
        <Form.Input
          onChange={handleInputChange}
          placeholder='City'
          value={activity.city}
          name='city'
        />
        <Form.Input
          onChange={handleInputChange}
          placeholder='Venue'
          value={activity.venue}
          name='venue'
        />
        <Button
          loading={submitting}
          floated='right'
          positive
          type='submit'
          content='Submit'
        />
        <Button
          onClick={closeForm}
          floated='right'
          type='button'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
};

export default ActivityForm;
