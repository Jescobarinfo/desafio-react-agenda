import { useState } from 'react';

  /**
   * Hook personalizado para manejar la paginación
   * @param {number} initialPage - Página inicial
   * @param {number} initialPageSize - Tamaño de página inicial
   * @returns {Object} Estado y funciones de paginación
   */
  export const usePagination = (initialPage = 1, initialPageSize = 10) => {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [pageSize, setPageSize] = useState(initialPageSize);

    /**
     * Maneja el cambio de página
     */
    const handlePageChange = (page, newPageSize) => {
      setCurrentPage(page);
      if (newPageSize) {
        setPageSize(newPageSize);
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };



    return {
      currentPage,
      pageSize,
      handlePageChange,
      setCurrentPage
    };
  };