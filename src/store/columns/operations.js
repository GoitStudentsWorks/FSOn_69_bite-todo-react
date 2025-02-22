import { biteTodoInnstance } from 'store/auth/operations';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getErrorMessage } from 'utils/httpUtils';

export const getColumns = createAsyncThunk(
  'columns/get',
  async (boardId, thunkAPI) => {
    try {
      const { data } = await biteTodoInnstance.get(
        `/boards/${boardId}/columnstasks`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const addColumn = createAsyncThunk(
  'columns/add',
  async ({ boardId, title, index }, thunkAPI) => {
    try {
      const { data } = await biteTodoInnstance.post(
        `/boards/${boardId}/columns`,
        {
          title,
          index,
        }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const editColumn = createAsyncThunk(
  'columns/edit',
  async ({ boardId, id, title, index }, thunkAPI) => {
    try {
      const { data } = await biteTodoInnstance.put(
        `/boards/${boardId}/columns/${id}`,
        {
          title,
          index,
        }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'columns/delete',
  async ({ boardId, columnId }, thunkAPI) => {
    try {
      const { data } = await biteTodoInnstance.delete(
        `/boards/${boardId}/columns/${columnId}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (
    { title, description, priority, deadline, index, boardId, columnId },
    thunkAPI
  ) => {
    try {
      const { data } = await biteTodoInnstance.post(
        `/boards/${boardId}/columns/${columnId}/tasks`,
        { title, description, priority, deadline, index }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const editTask = createAsyncThunk(
  'tasks/editTask',
  async (
    {
      title,
      description,
      priority,
      deadline,
      index,
      boardId,
      columnId,
      taskId,
    },
    thunkAPI
  ) => {
    try {
      const { data } = await biteTodoInnstance.put(
        `/boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
        { title, description, priority, deadline, owner: columnId, index }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async ({ boardId, columnId, taskId }, thunkAPI) => {
    try {
      const { data } = await biteTodoInnstance.delete(
        `/boards/${boardId}/columns/${columnId}/tasks/${taskId}`
      );
      return { ...data, boardId, columnId, taskId };
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);
