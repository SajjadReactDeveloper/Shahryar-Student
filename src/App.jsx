import React, {useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { dispatcLogin, fetchUser, dispatchGetUser } from './redux/actions/authAction';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from './layouts/Admin'
import Signup from 'components/Auth/Signup/Signup';
import Login from 'components/Auth/Login/Login';
import ForgotPassword from 'components/Auth/Forgot Password/ForgotPassword';
import AddFile from 'components/Add File/AddFile';
import AddVideo from 'components/Add Video/AddVideo';
import VideoDetail from 'components/Video Detail/VideoDetail';
import ViewFile from 'components/View Files/ViewFiles';
import ViewMaterialMain from 'components/View Material/ViewMaterial';
import ViewVideos from 'components/View Videos/ViewVideos';
import DiscussionDetail from 'components/Discussion detail/DiscussionDetail';
import UploadAttachments from 'components/Upload Attachments/UploadAttachments';

export default function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const auth = useSelector(state => state.authReducer);
  const {isLogged, isAdmin, user} = auth;

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin');
    if(firstLogin){
      const getToken = async () => {
        const res = await axios.post('/user/refreshToken', null)
        dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
      }
      getToken()
    }
  },[auth.isLogged, dispatch])

  useEffect(() => {
    if(token){
      const getUser = () => {
        dispatch(dispatcLogin())

        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
  },[token, dispatch])
  return (
    <BrowserRouter>
    {isLogged ?
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/addFile" render={() => <AddFile />} />
        <Route path="/addVideo" render={() => <AddVideo />} />
        <Route path="/videoDetail" render={() => <VideoDetail />} />
        <Route path="/viewFile" render={() => <ViewFile />} />
        <Route path="/viewVideo" render={() => <ViewVideos />} />
        <Route path="/viewMaterial" render={() => <ViewMaterialMain />} />
        <Route path="/discussionDetail" render={() => <DiscussionDetail />} />
        <Route path="/upload" render={() => <UploadAttachments />} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch> : 
      <Switch>
          <Route path="/signup" render={() => <Signup />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/forgot" render={() => <ForgotPassword />} />
      </Switch>
} 
  </BrowserRouter>
  )
}
