
import { forwardRef, useEffect, useState } from 'react'


import { useSelector } from 'react-redux'
import axios from 'axios'
import CardQuestion from '../cards/CardQuestion';

const Answer = (props) => {

  const {authorId,authorName,question,date} = props;
  return (
    <>
    <CardQuestion 
      key={authorId}
      authorName={authorName}
      question={question}
      date={date}
      />
    </>
  )
}

export default Answer
