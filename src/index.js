import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'
import {ThemeProvider} from '@mui/material/styles'
import {theme} from "./theme";
import {QueryClientProvider, QueryClient} from 'react-query'
import AppContextProvider from "./context/context";

const client = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={client}>
        <AppContextProvider>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </AppContextProvider>
    </QueryClientProvider>
);
