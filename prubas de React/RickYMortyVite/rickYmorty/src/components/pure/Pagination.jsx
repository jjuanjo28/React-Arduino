import React, {useEffect} from 'react';

const Pagination = ({ totalPersonas,personPerPage,actualPage,setActualPage }) => {

    const pageNumbers = []

    for(let i = 1;i <= Math.ceil(totalPersonas/personPerPage); i++){
      pageNumbers.push(i)
      }

      const previusPage = () => {
        setActualPage(actualPage - 1)
      }
      const nexPage = () => {
        setActualPage(actualPage + 1)
      }

      const paginaEspecifica = (n) =>{
        setActualPage(n)
      }
      
     return (      
<div style={{margin:"30px"}}>


        <nav aria-label="Page navigation example">
  <ul className="pagination pagination-lg justify-content-center">
    <li className="page-item ">
      <a style={{marginRight:"10px"}} className="page-link"onClick={previusPage} > Previus Page
        </a>
      </li>
   
    { pageNumbers.map((actualPage) =>(
      <li onClick={()=>paginaEspecifica(actualPage)} key={actualPage} className="page-item"><a className="page-link" href="#">{actualPage}</a></li>
    )).slice(actualPage-2,actualPage+3)}
    <li className="page-item">
      <a style={{marginLeft:"10px"}} className="page-link" onClick={nexPage}>
        Next Page
      </a>
    </li>
  </ul>
</nav>
</div>
        
    );
}

export default Pagination;
