import {LIKE,DISLIKE}  from './actionTypes'


export const like = (country) => {
  return {
    type:LIKE,
    country
  };
};

export const dislike = (country) => {
  return {
    type:DISLIKE,
    country
  };
};
