 import React, { createContext, useContext, useEffect } from 'react';
  import { useUsers } from '../hooks/useUsers';
  import { usePagination } from '../hooks/usePagination';
  import { useSearch } from '../hooks/useSearch';

  const UserContext = createContext(undefined);

  /**
   * Provider del contexto de usuarios
   * Centraliza todo el estado y lógica relacionada con la gestión de usuarios
   * Combina los custom hooks para gestión de estado global
   *
   * @param {Object} props
   * @param {React.ReactNode} props.children - Componentes hijos
   */
  export const UserProvider = ({ children }) => {
    const userHook = useUsers();
    const paginationHook = usePagination(1, 10);
    const searchHook = useSearch(500);

    // Cargar usuarios cuando cambien los parámetros de paginación o búsqueda
    useEffect(() => {
      userHook.fetchUsers(
        paginationHook.currentPage,
        paginationHook.pageSize,
        searchHook.debouncedQuery
      );
    }, [
      paginationHook.currentPage,
      paginationHook.pageSize,
      searchHook.debouncedQuery
    ]);

    // Combinar todos los valores de los hooks en un solo objeto
    const value = {
      // Estado de usuarios
      ...userHook,
      // Estado de paginación
      ...paginationHook,
      // Estado de búsqueda
      ...searchHook,
    };

    return (
      <UserContext.Provider value={value}>
        {children}
      </UserContext.Provider>
    );
  };

  /**
   * Hook personalizado para consumir el contexto de usuarios
   * Incluye validación para asegurar que se usa dentro del Provider
   *
   * @throws {Error} Si se usa fuera de UserProvider
   * @returns {Object} Contexto con estado y funciones de usuarios
   */
  export const useUserContext = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
      throw new Error(
        'useUserContext debe ser usado dentro de UserProvider'
      );
    }

    return context;
  };


  //  ¿Qué hace este Context?
  // - Centraliza el estado global
   //- Combina los 3 custom hooks
   //- Evita prop drilling
  // - Recarga automática cuando cambian parámetros