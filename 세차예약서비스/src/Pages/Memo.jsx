function Memo(){
    const modalstyle ={
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)"
        },
        content:{
            width : "80%",
            height : "20%",
            margin : "auto",
            borderRadius : "7px",
            boxShadow : "0 2px 4px rgba(0,0,0,0.2)"
        }
    }
    return(
        <Modal isOpen={isOpen} onRequestClose={closeModal} style = {modalstyle}>
            <h2>입력한 메모</h2>
            <p>메모 내용임 대충</p>
            <button onClick={closeModal}>닫기</button>
        </Modal>
    )
}