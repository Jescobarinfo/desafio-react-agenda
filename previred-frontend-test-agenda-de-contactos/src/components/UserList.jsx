 import React, { useState } from 'react';
  import { Input, Button, Pagination, Spin } from 'antd';
  import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
  import UserCard from './UserCard';
  import AddUserDrawer from './AddUserDrawer';
  import { useUserContext } from '../context/UserContext';
  import './UserList.css';

  const { Search } = Input;

  /**
   * Componente principal que muestra la lista de usuarios
   * Incluye búsqueda, paginación y gestión completa de usuarios
   */
  const UserList = () => {
    const {
      users,
      loading,
      total,
      fetchUsers,
      createUser,
      deleteUser,
      currentPage,
      pageSize,
      handlePageChange,
      setCurrentPage,
      handleSearch,
      debouncedQuery
    } = useUserContext();

    const [drawerVisible, setDrawerVisible] = useState(false);

    /**
     * Maneja la búsqueda de usuarios
     * Resetea a la primera página al buscar
     */
    const onSearch = (value) => {
      handleSearch(value);
      setCurrentPage(1);
    };

    /**
     * Maneja la creación de un nuevo usuario
     * Recarga la lista después de crear
     */
    // const handleCreateUser = async (userData) => {
    //   const success = await createUser(userData);
    //   if (success) {
    //     fetchUsers(currentPage, pageSize, debouncedQuery);
    //   }
    //   return success;
    // };

  /**
   * Maneja la creación de un nuevo usuario
   * Redirige a la primera página para mostrar el contacto recién creado
   */
  const handleCreateUser = async (userData) => {
    const success = await createUser(userData);
    if (success) {
      // Ir a página 1 para ver el nuevo usuario
      setCurrentPage(1);
    }
    return success;
  };


    /**
     * Maneja la eliminación de un usuario
     * Recarga la lista después de eliminar
     */
    const handleDeleteUser = async (userId) => {
      const success = await deleteUser(userId);
      if (success) {
        fetchUsers(currentPage, pageSize, debouncedQuery);
      }
    };

    return (
      <div className="user-list-container">
        {/* Header */}
        <div className="header">
          <h1 className="title">Agenda Previred - Mi agenda de contactos laboral</h1>
          <p className="subtitle">
            Aquí podrá encontrar o buscar a todos sus contactos agregados, agregar nuevos
            contactos y eliminar contactos no deseados.
          </p>
        </div>

        {/* Botón Agregar Contacto */}
        <div className="controls">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setDrawerVisible(true)}
            size="large"
          >
            Agregar Contacto
          </Button>
        </div>

        {/* Barra de búsqueda */}
        <div className="search-bar">
          <Search
            placeholder="Buscar por nombre..."  
            allowClear
            size="large"
            onSearch={onSearch}
            onChange={(e) => onSearch(e.target.value)}
            suffix={<SearchOutlined />}
          />
        </div>

        {/* Tabla de usuarios */}
        <div className="user-table">
          {/* Header de la tabla */}
          <div className="table-header">
            <div className="header-nombre">Nombre</div>
            <div className="header-descripcion">Descripción</div>
            <div className="header-acciones">Acciones</div>
          </div>

          {/* Cuerpo de la tabla con loading */}
          <Spin spinning={loading}>
            <div className="table-body">
              {users.length === 0 && !loading ? (
                <div className="empty-state">No se encontraron contactos</div>
              ) : (
                users.map(user => (
                  <UserCard
                    key={user.id}
                    user={user}
                    onDelete={handleDeleteUser}
                    loading={loading}  
                  />
                ))
              )}
            </div>
          </Spin>
        </div>

        {/* Paginación */}
        <div className="pagination-container">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={total}
            onChange={handlePageChange}
            showSizeChanger={false}
          />
        </div>

        {/* Drawer para agregar usuario */}
        <AddUserDrawer
          visible={drawerVisible}
          onClose={() => setDrawerVisible(false)}
          onSubmit={handleCreateUser}
        />
      </div>
    );
  };

  export default UserList;