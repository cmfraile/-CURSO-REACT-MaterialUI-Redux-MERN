import { Routes , Route, BrowserRouter } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { AppTheme } from '../theme';

export const AppRouter = () => {
    return(
      <BrowserRouter>
        <AppTheme>
          <Routes>
            <Route path='/auth/*' element={<AuthRoutes/>} />
            <Route path='/*' element={<JournalRoutes/>} />
          </Routes>
        </AppTheme>
      </BrowserRouter>
    )
  }