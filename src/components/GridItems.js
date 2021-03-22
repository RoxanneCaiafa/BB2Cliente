import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import itemList from '../actions/findItems';
import detail from '../actions/detailAction';
import InfoIcon from '@material-ui/icons/Info';
import { IconButton } from '@material-ui/core';
import Details from './Details';


const GridItems = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.itemsReducer);
  const [open, setOpen] = useState(false);
  const getDataRows = async () => {
    return axios.get('http://localhost:8080/item/list')
      .then((response) => {
        var data = response.data;

        dispatch(itemList(data.map((e) => ({
          id: e.code,
          description: e.description,
          state: e.state,
          price: e.price,
          creationDate: e.creationDate,
          creator: e.creator,
          providers: e.suppliers,
          reducePrice: e.reductions,
        }))))
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDataRows();
  }, []);

  const getId = (id) => {
    var a = state.items.find((e) => e.id == id)
    dispatch(detail(a))
  }
  const handleInfoIconClick = () => {
    setOpen(true);
  }

  const columns = [
    { field: 'id', headerName: 'Item code', width: 70 },
    { field: 'description', headerName: 'Description', width: 130 },
    { field: 'state', headerName: 'State', width: 90 },
    { field: 'price', headerName: 'Price', type: 'number', width: 90 },
    { field: 'creationDate', headerName: 'Creation date', width: 150 },
    { field: 'creator', headerName: 'Creator', width: 130 },
    {
      field: 'info', headerName: 'Details', width: 130,
      renderCell: (params) => {
        return (
          <IconButton aria-label="Info" size="small" onClick={handleInfoIconClick} >
            <InfoIcon />
          </IconButton>
        );
      }
    }

  ];

  return (
    <div className="gridList" style={{ height: 500, width: '90%' }}>
      <h1>Item's list</h1>
      <DataGrid rows={state.items} columns={columns} onRowClick={(id) => (getId(id.row.id))}
      />
      <Details open={open} setOpen={setOpen} />
    </div>
  );
}
export default GridItems;
