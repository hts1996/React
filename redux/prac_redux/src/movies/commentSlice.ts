import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MComment } from './../model/mmovie';
import { RootState, AppThunk } from '../app/store';

export interface CommentState {
  value: MComment[];
}

const initialState: CommentState = {
  value: [],
};

export const selectComment = (state: RootState) => state.comments.value;
const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    defaultComment: (state, action: PayloadAction<MComment[]>) => {
      state.value = action.payload;
    },
    addComment: (state, action: PayloadAction<MComment>) => {
      state.value.push(action.payload);
    },
    deleteComment: (state, action: PayloadAction<number>) => {
      const indexToDelete = state.value.findIndex(comment => comment.id === action.payload);
      if (indexToDelete !== -1) {
        state.value.splice(indexToDelete, 1);
      }
    },
    updateComment: (state, action: PayloadAction<MComment>) => {
      const indexToUpdate = state.value.findIndex(comment => comment.id === action.payload.id);
      if (indexToUpdate !== -1) {
        state.value[indexToUpdate] = action.payload;
      }
    },
  },
});

export const { defaultComment, addComment, deleteComment, updateComment } = commentsSlice.actions;

export default commentsSlice.reducer;
