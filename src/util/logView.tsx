

const logView = ()=>{


    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/views?populate=anime&filters[anime][id][$eq]=44`,{
        method:"POST",
        headers:{'Authorization': `Bearer ${process.env.TOKEN_API}  `}

    })



}