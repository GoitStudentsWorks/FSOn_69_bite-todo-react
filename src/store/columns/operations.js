import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getColumns = createAsyncThunk(
  'columns/get',
  async (boardId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/boards/${boardId}/columnstasks`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addColumn = createAsyncThunk(
  'columns/add',
  async ({ boardId, title }, thunkAPI) => {
    try {
      const { data } = await axios.post(`/boards/${boardId}/columns`, {
        title,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editColumn = createAsyncThunk(
  'columns/edit',
  async ({ boardId, id, title }, thunkAPI) => {
    try {
      const { data } = await axios.put(`/boards/${boardId}/columns/${id}`, {
        title,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (
    { title, description, priority, deadline, boardId, columnId },
    thunkAPI
  ) => {
    try {
      const { data } = await axios.post(
        `/boards/${boardId}/columns/${columnId}/tasks`,
        { title, description, priority, deadline }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
