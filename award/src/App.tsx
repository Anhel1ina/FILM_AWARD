import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layouts/Layout';
import { PageContent } from './components/PageContent/PageContent';
import { SearchPage } from './pages/SearchPage/SearchPage';
import { OpenFilmCardPage } from './pages/OpenFilmCardPage/OpenFilmCardPage';
import { SignInPage } from './pages/SignPages/SignInPage';
import { SignUpPage } from './pages/SignPages/SignUpPage';
import { ActivationPage } from './pages/SignPages/ActivationPage';
import { SuccessPage } from './pages/SignPages/SuccessPage';
import { RegistrationConfirmationPage } from './pages/SignPages/RegistrationConfirmationPage';
import { ResetPasswordPage } from './pages/SignPages/ResetPasswordPage';
import { NewPasswordPage } from './pages/SignPages/NewPasswordPage';
import { SignLayout } from './components/Layouts/SignLayout';
import { SettingsPage } from './pages/SettingsPage/SettingsPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<PageContent />} />
        <Route path='search'>
          <Route index element={<SearchPage />} />
          <Route path='openfilmcard/:id' element={<OpenFilmCardPage />} />
        </Route>
        <Route path='openfilmcard/:id' element={<OpenFilmCardPage />} />
        <Route path='settings' element={<SettingsPage />} />
      </Route>
      <Route path='/' element={<SignLayout />}>
        <Route path='auth'>
          <Route index element={<SignInPage />} />
          <Route path='forgotpassword' element={<ResetPasswordPage />} />
          <Route path='newpassword' element={<NewPasswordPage />} />

          <Route path='signup'>
            <Route index element={<SignUpPage />} />
            <Route path='registrationconfirm' element={<RegistrationConfirmationPage />} />
            <Route path='activate' element={<ActivationPage />} />
            <Route path='success' element={<SuccessPage />} />
          </Route>
        </Route>
      </Route>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  );
}

export default App;


{/* <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<PageContent />} />
        <Route path='search'>
          <Route index element={<SearchPage />} />
          <Route path='openfilmcard/:id' element={<OpenFilmCardPage />} />
        </Route>
        <Route path='auth'>
          <Route index element={<SignInPage />} />
          <Route path='forgotpassword' element={<ResetPasswordPage/>}/>
          <Route path='newpassword' element={<NewPasswordPage/>}/>

          <Route path='signup'>
            <Route index element={<SignUpPage />} />
            <Route path='registrationconfirm' element={<RegistrationConfirmationPage/>}/>
            <Route path='activate' element={<ActivationPage/>}/>
            <Route path='success' element={<SuccessPage/>}/>
          </Route>
        </Route>

        <Route path='openfilmcard/:id' element={<OpenFilmCardPage />} />
      </Route>
    </Routes> */}