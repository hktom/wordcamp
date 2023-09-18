/* eslint-disable react/no-deprecated */
import React from 'react';
import ReactDOM from 'react-dom';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CalendarPage from './pages/calendar';
import MapPage from './pages/map';

const router = createBrowserRouter([
    {
        path: '/',
        element: <CalendarPage />,
    },
    {
        path: '/map',
        element: <MapPage />,
    },
]);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById('root'),
);
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <RouterProvider router={router} />
//     </React.StrictMode>,
// );
