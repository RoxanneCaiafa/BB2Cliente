import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import { blue } from '@material-ui/core/colors';
import InputAdornment from '@material-ui/core/InputAdornment';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";


const CreateItem = () => {
  const [values, setValues] = useState({// useForm({
    code: '',
    description: '',
    state: '',
    price: '',
    suppliers: [],
    reductions: [],
    creator: '',

  });
  const theme = createMuiTheme({
    palette: {
      primary: blue,
    },
  });
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));
  const states = [
    {
      value: 'ACTIVE',
      label: 'Active',
    },
    {
      value: 'DISCONTINUED',
      label: 'Discontinued',
    },
  ];

  const [suppliersList, setSupplierData] = useState([]);
  const getSuppliers = async () => {
    return axios.get('http://localhost:8080/item/suppliers')
      .then((response) => {
        var data = response.data;
        setSupplierData(data.map((e) => ({
          id: e.idSupplier,
          name: e.name,
          country: e.country,
        })))
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getSuppliers();
  }, []);

  const classes = useStyles();
  const [itemState, setItemState] = React.useState('ACTIVE');
  const [supplierSelect, setSupplierSelect] = React.useState([""]);

  const handleStateChange = (event) => {
    setItemState(event.target.value);
    handleChange('state');
  };
  const handleSupplierChange = (event) => {
    setSupplierSelect(event.target.name);
    handleChange('suppliers');
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    //console.log(values);
    if(isFormValid()){
      console.log("formulario correcto");
    }
  };

  const isFormValid =()=>{
    if (values.code.trim().length === 0){
      console.log('code is required');
      return false;
    }
    if (values.description.trrim() === 0){
      console.log('description is required');
      return false;
    }
    return true;
  }
  return (

    <div className='createItem'>
      <FormControl className="createItem" onSubmit={handleRegister}  >
        <div className= "createItem_alert_error">

        </div>
        <ThemeProvider theme={theme}>
          <TextField
            className={classes.margin}
            name="code"
            label="Code"
            variant="outlined"
            id="itemCode"
            onChange={handleChange('code')}
            required={true}
          />        <FormHelperText id="helperCode">Code item is required to create a new item.</FormHelperText>
          <TextField
            className={classes.margin}
            name="description"
            label="Description"
            id="description"
            onChange={handleChange('description')}
            required={true}
          /> <FormHelperText id="code">Description is required to create a new item.</FormHelperText>

        </ThemeProvider>

        <TextField
          id="stateSelect"
          name="state"
          select
          label="State"
          onChange={handleStateChange}
          SelectProps={{
            native: true,
          }}
        >
          {states.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          id="supplierSelect"
          name="supplier"
          select
          label="Supplier"
          onChange={handleSupplierChange}
          SelectProps={{
            native: true,
          }}
        >
          {suppliersList.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </TextField>


        <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
          <Input
            id="standard-adornment-price"
            onChange={handleChange('price')}
            endAdornment={<InputAdornment position="end">€</InputAdornment>}
            aria-describedby="standard-price-helper-text"
            inputProps={{
              'aria-label': 'price',
            }}
          />
          <FormHelperText id="standard-price-helper-text">Price</FormHelperText>
        </FormControl>
        <ThemeProvider>
          <TextField
            className={classes.margin}
            name="creator"
            label="Creator"
            id="creator"
            onChange={handleChange('creator')}
          /> </ThemeProvider>

        <Button variant="contained" color="primary" onClick={handleRegister} >
          Create
      </Button>
      </FormControl>
    </div>

  )

}
export default CreateItem;