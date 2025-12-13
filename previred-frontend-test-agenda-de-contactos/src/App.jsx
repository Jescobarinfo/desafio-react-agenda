 import React from 'react';
  import { ConfigProvider } from 'antd';
  import esES from 'antd/locale/es_ES';
  import { UserProvider } from './context/UserContext';
  import UserList from './components/UserList';
  import './App.css';

  /**
   * Componente principal de la aplicación
   * Configura el Provider de Context API y el idioma español para Ant Design
   */
  function App() {
    return (
      <ConfigProvider
        locale={esES}
        theme={{
          token: {
            colorPrimary: '#1890ff',
            borderRadius: 2,
          },
        }}
      >
        <UserProvider>
          <div className="App">
            <UserList />
          </div>
        </UserProvider>
      </ConfigProvider>
    );
  }

  export default App;