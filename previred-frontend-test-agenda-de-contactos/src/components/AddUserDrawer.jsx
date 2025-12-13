import React, { useState } from 'react';
  import { Drawer, Form, Input, Button, message } from 'antd';

  /**
   * Componente Drawer para agregar un nuevo usuario
   * Incluye validación de campos y manejo de errores
   *
   * @param {Object} props
   * @param {boolean} props.visible - Si el drawer está visible
   * @param {Function} props.onClose - Callback para cerrar el drawer
   * @param {Function} props.onSubmit - Callback para crear el usuario
   */
  const AddUserDrawer = ({ visible, onClose, onSubmit }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    /**
     * Maneja el envío del formulario
     */
    const handleSubmit = async () => {
      try {
        // Validar todos los campos del formulario
        const values = await form.validateFields();

        setLoading(true);
        const success = await onSubmit(values);

        if (success) {
          form.resetFields();
          onClose();
        }
      } catch (error) {
        message.error('Por favor complete todos los campos');
      } finally {
        setLoading(false);
      }
    };

    /**
     * Maneja el cierre del drawer
     */
    const handleClose = () => {
      form.resetFields();
      onClose();
    };

    return (
      <Drawer
        title="Agregar nuevo Contacto"
        placement="right"
        width={500}
        onClose={handleClose}
        open={visible}
        extra={
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button onClick={handleClose} disabled={loading}>Cancelar</Button>
            <Button type="primary" onClick={handleSubmit} loading={loading}  disabled={loading}>
              Guardar
            </Button>
          </div>
        }
      >
        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
        >
          <Form.Item
            label="URL imagen de Perfil"
            name="photo"
            rules={[{ required: true, message: 'Por favor ingrese la URL de la imagen' }]}
          >
            <Input placeholder="Inserte la URL de la imagen de perfil" />
          </Form.Item>

          <Form.Item
            label="Nombre"
            name="name"
            rules={[{ required: true, message: 'Por favor ingrese el nombre' }]}
          >
            <Input placeholder="Escriba el nombre de contacto" />
          </Form.Item>

          <Form.Item
            label="Descripción"
            name="description"
            rules={[{ required: true, message: 'Por favor ingrese la descripción' }]}
          >
            <Input.TextArea
              placeholder="Agregue la descripción del contacto"
              rows={4}
            />
          </Form.Item>
        </Form>
      </Drawer>
    );
  };

  export default AddUserDrawer;
