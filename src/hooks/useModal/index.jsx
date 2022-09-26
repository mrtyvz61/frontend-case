import { useCallback, useRef, useState, createElement } from 'react';
import { createPortal } from 'react-dom';

const wrapperStyle = {
	position: 'fixed',
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	zIndex: 1040,
};

const overlayStyle = {
	position: 'fixed',
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
	backgroundColor: 'rgba(0, 0, 0, 0.5)',
	zIndex: 1030,
};

const containerStyle = {
	position: 'relative',
	zIndex: 100001,
};

const Modal = ({
	children,
	isOpen = false,
	onOverlayClick,
	elementId = 'root',
	zIndex,
	bgColor,
}) => {
	const overlayRef = useRef(null);
	const modalRef = useRef(null);

	const _overlayStyle = {
		...overlayStyle,
		zIndex: zIndex,
		backgroundColor: bgColor,
	};

	if (isOpen === false) {
		return null;
	}

	return createPortal(
		createElement(
			'div',
			{ role: 'dialog', 'aria-modal': true, style: wrapperStyle },
			createElement('div', {
				ref: overlayRef,
				style: _overlayStyle,
				onClick: onOverlayClick,
			}),
			createElement('div', { ref: modalRef, style: containerStyle }, children),
		),
		document.querySelector(elementId),
	);
};

export const useModal = (elementId = 'root', options = {}) => {
	const { closeOnOverlayClick = true, zIndex, bgColor } = options;
	const [isOpen, setOpen] = useState(false);

	const open = useCallback(() => {
		setOpen((prevState) => !prevState);
	}, [setOpen]);

	const close = useCallback(() => {
		setOpen((prevState) => !prevState);
	}, [setOpen]);

	const onOverlayClick = useCallback(
		(event) => {
			event.stopPropagation();
			if (closeOnOverlayClick) {
				close();
			}
		},
		[closeOnOverlayClick, close],
	);

	const ModalWrapper = useCallback(
		({ children }) => {
			return createElement(
				Modal,
				{
					isOpen: isOpen,
					onOverlayClick: onOverlayClick,
					elementId: elementId,
					zIndex: zIndex,
					bgColor: bgColor,
				},
				children,
			);
		},
		[isOpen, close, elementId],
	);

	return [ModalWrapper, open, close, isOpen];
};
