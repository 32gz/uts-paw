export default function KartuIsi({ judul, nilai, keterangan }){
    return (
        <article>
         <h2>{judul}</h2>
         <p>
        <strong>{nilai}</strong>
         </p>
         <p> {keterangan}</p>
        </article>
    )    
    
    
}