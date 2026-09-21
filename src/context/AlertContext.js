import { createContext, useContext, useState } from 'react'

const AlertContext = createContext({
  isOpen: false,
  type: 'success',
  message: "",
  onOpen: () => {},
  onClose: () => {},
})

export const AlertProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('success');
  const [message, setMessage] = useState('');

  const onOpen = (type, message) => {
    setType(type);
    setMessage(message);
    setIsOpen(true);
  }

  const onClose = () => {
    setIsOpen(false);
  }

  return (
    <AlertContext.Provider
      value={{ isOpen, type, message, onOpen, onClose }}
    >
      {children}
    </AlertContext.Provider>
  )
}

export const useAlertContext = () => useContext(AlertContext);

export default AlertContext;
