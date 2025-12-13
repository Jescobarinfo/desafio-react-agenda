import { useState, useEffect } from 'react';

  /**
   * Hook personalizado para manejar búsqueda con debounce
   * Optimiza las peticiones a la API evitando llamadas excesivas
   *
   * @param {number} delay - Tiempo en ms para el debounce (default: 500)
   * @returns {Object} Estado y funciones para la búsqueda
   */
  export const useSearch = (delay = 500) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');

    // Efecto para implementar debounce
    useEffect(() => {
      // Timer para retrasar la búsqueda mientras el usuario escribe
      const timer = setTimeout(() => {
        setDebouncedQuery(searchQuery);
      }, delay);

      // Cleanup: cancelar timer si el usuario sigue escribiendo
      return () => clearTimeout(timer);
    }, [searchQuery, delay]);

    /**
     * Actualiza el query de búsqueda
     * El debounce se maneja automáticamente
     */
    const handleSearch = (value) => {
      setSearchQuery(value);
    };

    return {
      searchQuery,
      debouncedQuery,
      handleSearch
    };
  };