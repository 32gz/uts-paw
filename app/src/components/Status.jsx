export default function Status({ pesan, jenis = 'info'}){
    return(
        <p role={jenis === 'error' ? 'alert' : 'status'}>{pesan}</p>
    )
}