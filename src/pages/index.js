import Grid from '@mui/material/Grid'

import FormLayoutsSeparator from 'src/views/question_form/index'
import Answer from 'src/views/answer/index'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import FollowingPage from 'src/views/dashboard/FollowingPage'
import CardTwitter from 'src/views/cards/CardTwitter'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
  const [postData,setPostData] = useState([]);
  const userDetails = useSelector((state)=>state.auth);
  const token = userDetails?.loginAuth?.data?.token ?? '';
  const getPostData = async()=>{
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/getAllPosts`,
      {
        headers: {
          'x-access-token': `${token}`
        }
      }
    )
    setPostData(result.data.data);
  }
  useEffect(() => {
    getPostData();
  }, [])
  const [questionData,setQuestionData] = useState([]);
  
  const getAllQuestion = async() =>{
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/getAllQuestion`,
      {
        headers: {
          'x-access-token': `${token}`
        }
      }
    )
    console.log(result.data.data)
    setQuestionData(result.data.data)
  }

  useEffect(() => {
    getAllQuestion();
    console.log(questionData);
  }, [])
  return (
    <>
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={7}>
          <FormLayoutsSeparator/>
          {Array.isArray(questionData) && questionData.map(question=>(
          <Answer 
          key={question.authorId}
          authorName={question.authorName}
          question={question.question}
          date={question.date}
          />
          ))}
          {Array.isArray(postData) && postData.map(post=>(
          <CardTwitter key={post._id} authorName={post.authorName} image={post.image} title={post.title} category={post.category} discription={post.discription} />
          ))}
        </Grid>
        <Grid item sx={{right:'2em'}}>
          <Grid >
            <Grid >
              <FollowingPage/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  </>
  )
}

export default Dashboard
