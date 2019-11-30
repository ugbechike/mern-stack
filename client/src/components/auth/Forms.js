import React, {useState} from 'react';
import TextInput from '../inputs/TextInput';
import PasswordInput from '../inputs/PasswordInput';
import CheckBox from '../inputs/CheckBox';
import BaseForm from '../forms/BaseForm';

const  Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(true);

  const handleSubmit = () => {
    console.log(firstName, lastName, password, checked);
  }

  return (
    <BaseForm onSubmit={handleSubmit}>
      <TextInput 
      type='text' 
      name='firstName'
      value={firstName}
      onChange={e => setFirstName(e.target.value) }
      />
      <TextInput
       type='text'
       name='firstName'
       value={lastName}
       onChange={e => setLastName(e.target.value) }
        />
      <PasswordInput
       type='password'
       name='password'
       value={password}
       onChange={e => setPassword(e.target.value) }
        />
      <CheckBox
       type='checked'
       checked={checked}
       checked={checked}
       onChange={e => setChecked(e.target.checked) }
        />
        <button onClick={handleSubmit}>submit</button>
    </BaseForm>
  );
}

export default Form;
