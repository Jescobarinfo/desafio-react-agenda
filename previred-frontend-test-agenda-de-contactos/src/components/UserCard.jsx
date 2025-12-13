 import React from 'react';
  import { Avatar, Popconfirm } from 'antd';
  import { UserOutlined, DeleteOutlined } from '@ant-design/icons';
  import './UserCard.css';

  /**
   * Componente que renderiza una tarjeta de usuario individual
   * Muestra avatar, nombre, descripción y acción de eliminar
   *
   * @param {Object} props
   * @param {Object} props.user - Datos del usuario
   * @param {Function} props.onDelete - Callback para eliminar usuario
   */
  const UserCard = ({ user, onDelete,loading }) => {
    return (
      <div className="user-card">
        {/* Columna 1: Nombre con avatar */}
        <div className="user-info">
          <Avatar
            size={48}
            src={user.photo}
            icon={<UserOutlined />}
            className="user-avatar"
          />
          <div className="user-details">
            <div className="user-name">{user.name}</div>
          </div>
        </div>

        {/* Columna 2: Descripción */}
        <div className="user-description">
          {user.description}
        </div>

        {/* Columna 3: Acciones */}
        <div className="user-actions">
          <Popconfirm
            title="¿Está seguro de eliminar este contacto?"
            onConfirm={() => onDelete(user.id)}
            okText="Sí"
            cancelText="No"
            okType="danger"
          >
            <DeleteOutlined className="delete-icon" style={{ pointerEvents: loading ? 'none' : 'auto', opacity: loading ? 0.5 : 1 }}/>
          </Popconfirm>
        </div>
      </div>
    );
  };

  export default UserCard;