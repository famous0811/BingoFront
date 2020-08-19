import React, { useEffect } from "react"
import { Modals } from "../../store/slices/modal"
import styled, { ThemeProvider, css } from "styled-components"
import useModal from "../../hooks/useModal"
import useTheme from "../../hooks/useTheme"
import { useLocation } from "react-router-dom"

interface ModalProps {
  children?: React.ReactNode
  modalName: Modals
}
function Modal({ children, modalName }: ModalProps) {
  const { isOpen, close } = useModal(modalName)
  const theme = useTheme()
  const location = useLocation()
  // console.log("login : " + isOpen.show)

  useEffect(() => {
    close()
  }, [location, close])
  if (!isOpen.show) return null
  return (
    <ThemeProvider theme={theme}>
      <Modalbackground onClick={close}>
        <Modalbody
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </Modalbody>
      </Modalbackground>
    </ThemeProvider>
  )
}

const Modalbackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3000;
  animation: appear 0.5s;
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Modalbody = styled.div`
  position: absolute;
  background: white;
  max-width: 720px;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  box-sizing: border-box;
  padding: 1em 2em;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  transition: background 0.5s;

  &:focus {
    outline: 0;
  }
  ${({ theme }) =>
    theme.isDark &&
    css`
      background: black;
    `}
`

export default Modal
