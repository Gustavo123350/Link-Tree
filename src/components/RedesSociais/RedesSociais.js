import './RedesSociais.css'
const RedesSociais =()=>{
     const Lista=[
        {id: 1 , urlNome:"Instagran", url:"https://www.instagram.com/gustavofava.13/"},
        {id: 2 , urlNome:"Facebook", url:"https://www.facebook.com/gustavofava.13"},
        {id: 3 , urlNome:"Youtube", url:"https://www.youtube.com/channel/UCsSN_q5gjSXm5Z3hEMSZFKw"}
     ] 
     

const link =Lista.map((props)=>
   <div Key={props.id} className ='Conteudo_link'>
     <a href={props.url}>{props.urlNome}</a>
   </div>
)
    
return(
        <>
           {link}
        </>
    )
}
export default RedesSociais;