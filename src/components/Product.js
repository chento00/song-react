import React,{useState,useEffect} from 'react'
import ProductCard from './utils/ProductCard';
export default function Product() {
	const [data,setData]=useState([]);
	useEffect(()=>{
		async function fetchData(){
			const res=await fetch("https://api.escuelajs.co/api/v1/products");
			const json=await res.json();
			setData(json);
		}
		fetchData();
	},[])
	return (
		<div className='container-fluid grid grid-cols-4 p-10'>
			{
				data.map((product,index)=>(
					<>
						<ProductCard 
						index={index}
						title={product.title} 
						description={product.description} 
						price={product.price}
						img={product.images[0]}
						/>
					</>
				))
			}
		</div>
	)
}
