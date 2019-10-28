import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function Switches(props) {
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    props.theme(event.target.checked)
  };

  return (
    <div style={{textAlign: "center"}}>

      <FormControlLabel
      control={ <Switch
        checked={state.checked}
        onChange={handleChange('checked')}
        value="checked"
        color="primary"
        />
      }
      />

    </div>
  );
}