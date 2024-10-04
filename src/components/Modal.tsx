import React, {FC, JSXElementConstructor, useEffect, useRef} from "react"

type ModalProps = {
    children: JSX.Element;
    isFormOpen: boolean;
    onClose: () => any;
    onSelectClickHandler: () => any;
}
const Modal: FC<ModalProps> = ({children, isFormOpen, onClose, onSelectClickHandler}) => {
    const wrapperRef = useRef <any>(null);
    const handleClickOutside = (event: Event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target))
    }
    
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        console.log('in useEffect at Modal');
        return () => document.body.removeEventListener('mousedown', handleClickOutside)
    }, [isFormOpen])

    return (
        <div
            ref={wrapperRef}
            className={isFormOpen
                ? 'panel_currencies_item arrow active'
                : 'panel_currencies_item arrow'}
            onClick={onSelectClickHandler}
        >
            {isFormOpen && children}
        </div>
    );
}
export default Modal;