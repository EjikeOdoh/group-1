
export default function Modal(props) {

    return (
        <dialog ref={props.reference}>
            <button style={{display: 'block'}} onClick={props.closeModal}>Close</button>
            Okiemute
            {props.children}
        </dialog>
    )
}
